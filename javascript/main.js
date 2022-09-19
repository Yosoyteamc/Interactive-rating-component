let previous_id = "option-1";
let option = 0;

/**
 * It removes the class 'rating__option--selected' from the previous element and adds it to the current
 * element.
 * @param id - the id of the element you want to select
 * @param number_option - The number of the option that was selected.
 */
function selectOption(id,number_option){
    document.getElementById(previous_id).classList.remove('rating__option--selected');
    document.getElementById(id).classList.add('rating__option--selected');
    
    previous_id = id;
    option = number_option;
}


/**
 * If the option is not equal to 0, then hide the start card and show the end card, and set the text of
 * the selected option to the option variable.
 * 
 * If the option is equal to 0, then show an alert.
 */
function getOption(){
    if(option!=0){
        document.querySelector(".card-state-start").style.display = "none";
        document.querySelector(".card-state-end").style.display = "block";
        
        document.querySelector(".content-selection__value-selected").textContent = option;
    }
    else{
        alert("Select an option please");
    }
}
