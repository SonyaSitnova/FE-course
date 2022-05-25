var menuButton = $('.EditPageButton');
var addPersonButton = $('AddOnePerson');

var allPeople = [];

menuButton.click(function(){
    $('.EditPeopleWrapper')
        .toggleClass('EditPeopleWrapper--expanded');
    menuButton
        .toggleClass('EditPageButton--active');
});