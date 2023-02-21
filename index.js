// Clearing the form errors
function clearErrors(){
    errors = document.getElementsByClassName('formerror'); // All the form errors will come here
    for(let item of errors){ 
        item.innerHTML = "";
    }
}

// Setting error in input tag of id
function seterror(id, error){
    // sets error inside tag of id
    element = document.getElementById(id); // Targeting the element with its id
    element.getElementsByClassName('formerror')[0].innerHTML = error; // This will store the error
}

// This function will perform the main validation
function validateForm(){
    var returnval = true; // By default submitting the form
    clearErrors(); // Clearing the error warnings in the form before the validation

    // perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    
    if(name.length<5){
         seterror("name", "*Length of name is too short");
        returnval = false; 
    }

    var email = document.forms['myForm']["femail"].value;
    if(email.length>30){ 
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if(phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if(password.length < 6){
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if(cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
    
    if(returnval){
        alert(`Congratulations ${name}!! Your inputs are submitted successfully!`);
    } else{
        swal("Invalid Inputs!", "Please recheck your inputs!", "error");
    }

    return returnval;
    
}


//////////////////////////////////////////*********************************************//////////////////////////////////////////////

// In seterror(id, error):- Whatever error I give to it on the input, it will catch this id and put that error in this id. In short, this functions shows what is the errors in the input of the form. This function runs when we give invalid input in the form. This functions will set an error in the input element of that id and that error will be shown to us in the input of that element, if we put an invalid input then it will show what is the errors in the input.

// document.forms[] fetches all the forms from the document. 
// var name = document.forms['myForm']["fname"].value; :- Here we are saying that give me the form named 'myForm' and also give me the input tag of that form named "fname" and give its value or we can say give me the value of that input tag and store that value in name variable. In short, give me the value of the form named 'myForm' having the input tag with name "fname" & store that value in name variable.

// returnval = false; :- This will not allow the form to get submitted, untill we don't handle the error in the input. 

// If validateForm() function returns true then form will get submitted and if it not returns true then form will not get submitted. Initially, We will make its return value true with the help of "var returnval = true;" and then we  will performs some validations in this function and if the validation fails then set the value of returnval to false and then our form will not get submitted.

// if(name.length<5){seterror("name", "*Length of name is too short"); returnval = false; } :- This means that if the length of our name is less than 5, then set an error "*Length of name is too short" in the name id and make the returnVal as false. This will not allow us to submit the form.    

// element = document.getElementById(id); :- Here we are grabbing the element corresponding to the id(which is having the error). 
// element.getElementsByClassName('formerror')[0].innerHTML = error; :- Now in this element, we setting the innerHTML of the formerror class equal to the error. This will show us the error related to that element in the input field of that input element in the form. 

// for(let item of errors){item.innerHTML = "";} :- This will reset all the errors in our form inputs. When we resolve all our errors in the form inputs then this will clear all the error warnings from the inputs of form and our form will be submitted automatically with no errors warning on the input fields.

// clearErrors() function is added in the beginning of the validateForm() function because when the function is called after click on submit button then the previous error must be clear that's why it is put on the beginning to clear the error. clearErrors() function is used for clearing the error warnings in the form before the validation or when we refresh the form to again enter the valid inputs. If we dont use this function then the errors will remain set on the input fields even after we have provided the valid inpus. 

