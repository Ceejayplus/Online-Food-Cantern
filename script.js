


const signIn = () => {
    window.location.href = "signin.html"
}

const signUp = () => {
    window.location.href = "signup.html"
}





var allCustomers = [];
if(localStorage.customerDetails){
    allCustomers = JSON.parse(localStorage.getItem('customerDetails'))
}

function goSignUp(){
    var newCustomer = {
        firstName : firstname.value,
        lastName : lastname.value,
        Email : email.value,
        phoneNumber : phonenumber.value,
        password : Password.value
    }
    
    
    if((firstName = firstname.value) && (lastName = lastname.value) && (Email = email.value) && (phoneNumber = phonenumber.value) && (password = Password.value)){
        allCustomers.push(newCustomer)
        firstname.value = ""
        lastname.value = ""
        email.value = ""
        phonenumber.value = ""
        Password.value = ""
        window.location.href = "signin.html"
    }
    else{
        alert("PLEASE FILL THE REQUIRED SPACES")
    }
    localStorage.setItem('customerDetails', JSON.stringify(allCustomers))
}


