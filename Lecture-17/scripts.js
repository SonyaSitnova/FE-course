//  ------- Edit Button ------- 
 
var wrapper = document.querySelector('.EditPeopleWrapper'),
    btnEdit = document.querySelector('.EditPageButton');

function onClickEditToggle(){
    wrapper.classList.toggle('expanded');
    btnEdit.classList.toggle('active') 

    if(btnEdit.innerText === "Stop"){
        btnEdit.textContent = "Edit";
    } else {
        btnEdit.textContent = "Stop";
    }
}     

//  ----- Input data --- 

var btnAddPerson = document.getElementById('AddOnePerson');
btnAddPerson.addEventListener('click', AddPerson);

var peopleContainer = document.querySelector('.PeopleCardsContainer'),
    peopleWrapper = document.querySelector('.PeopleCardWrapper');

function AddPerson(){
    var person = {
            namePerson: document.getElementById('name').value ,
            jobTitle: document.getElementById('jobTitle').value,
            mail: document.getElementById('mail').value,
            phone: document.getElementById('phone').value
        };

    peopleContainer.remove();

// ----- Person Card Visible ------

    var personCard = document.createElement('div');
    personCard.classList.add('PersonCard');
    peopleWrapper.appendChild(personCard);

    personCard.innerHTML = 
        '<div class="PersonImage"></div>' +
        '<div class="PersonName">' + person.namePerson + '</div>' + 
        '<div class="personJobTitle">' + person.jobTitle + '</div>' + 
        '<div class="eMail">' + person.mail + '</div>'  + 
        '<div class="PersonPhoneNumber">' + person.phone + '</div>'    
}

// ------ Clear input fields -----

btnAddPerson.addEventListener('click', clearInputFields);

function clearInputFields(){
   document.getElementById('name').value = '';
   document.getElementById('jobTitle').value = '';
   document.getElementById('mail').value = '';
   document.getElementById('phone').value = '';
} 

// ----- Person Card edit ----

personCard.addEventListener('click', editPersonCard);

function editPersonCard() {

}


        










