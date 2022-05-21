var menuButton = document.querySelector('.EditPageButton');
var addPersonButton = document.getElementById('AddOnePerson');

menuButton.addEventListener('click', onMenuButtonPress);
addPersonButton.addEventListener('click', onAddPersonPress);

function onMenuButtonPress(){
  var mainMenuWrapper = document.querySelector('.EditPeopleWrapper');

  mainMenuWrapper.classList.toggle('EditPeopleWrapper--expanded');
  menuButton.classList.toggle('EditPageButton--active');
}

function onAddPersonPress(){
  var person = getPersonData();
  addPersonCard(person);
  clearForm();

  var personCard = document.querySelector('.PersonCard');  
  personCard.addEventListener('click', onEditPersonPress);
 
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

function addPersonCard(person){
  var cardsWrapper = document.querySelector('.PeopleCardWrapper');
  var card = document.createElement('div');
  card.classList.add('PersonCard');

  card.innerHTML = 
    '<div class="PersonImage "></div>' + 
    '<div class="PersonName edit" name="name"">' + person.name + '</div>' + 
    '<div class="personJobTitle edit" name="job" >' + person.job + '</div>' + 
    '<div class="eMail edit"  name="email">' + person.email + '</div>' + 
    '<div class="PersonPhoneNumber edit" name="phone">' + person.phone + '</div>';

  cardsWrapper.appendChild(card);
  cardsWrapper.classList.remove('empty');
}

function clearForm(){
  var allInputElements = document.querySelectorAll('.EditPeopleInput');

  for(var i = 0; i < allInputElements.length; i++){
    allInputElements[i].value = '';
  }
}


function onEditPersonPress(){
    var personEdit = getPersonFromCard();    
    onPersonCardPress(personEdit);
}

function getPersonFromCard(){  
    var cardDataElements = document.querySelectorAll('.edit');    
    var personEdit = {};

    for(var i =0; i < cardDataElements.length; i++){

        var key = cardDataElements[i].getAttribute('name');       
        personEdit[key] = cardDataElements[i].innerHTML;
    }   
   
    return personEdit;
}

function onPersonCardPress(personEdit){

   s
    
}
