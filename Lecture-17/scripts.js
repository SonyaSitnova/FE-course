var menuButton = document.querySelector('.EditPageButton');
var addPersonButton = document.getElementById('AddOnePerson');
var allPeople = [];

menuButton.addEventListener('click', onMenuButtonPress);
addPersonButton.addEventListener('click', onAddPersonPress);

function onMenuButtonPress(){
  var mainMenuWrapper = document.querySelector('.EditPeopleWrapper');

  mainMenuWrapper.classList.toggle('EditPeopleWrapper--expanded');
  menuButton.classList.toggle('EditPageButton--active');
}

function onAddPersonPress(){
  var person = getPersonData();
  allPeople.push(person);
  var lastPersonId = allPeople.length - 1;
  addPersonCard(person, lastPersonId);
  clearForm();
 
}

function getPersonData(){
  var allInputElements = document.querySelectorAll('.EditPeopleInput');
  var person = {};

  for(var i = 0; i < allInputElements.length; i++){
    var key = allInputElements[i].getAttribute('name');
    person[key] = allInputElements[i].value;
  }

  return person;
}

function setPersonData(person){
  var allInputElements = document.querySelectorAll('.EditPeopleInput');

  for(var i = 0; i < allInputElements.length; i++){
    var key = allInputElements[i].getAttribute('name');
    allInputElements[i].value = person[key];
  }
}

function addPersonCard(person, personId){
  var cardsWrapper = document.querySelector('.PeopleCardWrapper');
  var card = document.createElement('div');
  card.classList.add('PersonCard');
  card.dataset.id = personId;
  card.addEventListener('click', onCardClicked);

  card.innerHTML = 
    '<div class="PersonImage " ></div>' + 
    '<div class="PersonName " >' + person.name + '</div>' + 
    '<div class="personJobTitle " >' + person.job + '</div>' + 
    '<div class="eMail " >' + person.email + '</div>' + 
    '<div class="PersonPhoneNumber " >' + person.phone + '</div>';

  cardsWrapper.appendChild(card);
  cardsWrapper.classList.remove('empty');
}

function onCardClicked(event){
  var allPeopleKey = event.currentTarget.dataset.id;
  var person = allPeople[allPeopleKey];

  clearForm();
  setPersonData(person);
}

function clearForm(){
  var allInputElements = document.querySelectorAll('.EditPeopleInput');

  for(var i = 0; i < allInputElements.length; i++){
    allInputElements[i].value = '';
  }
}


