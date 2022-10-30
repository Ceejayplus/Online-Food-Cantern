
customerDetails = []
if(localStorage.bankDetails){
    customerDetails =JSON.parse(localStorage.getItem('bankDetails'))
}

const createAcc = () => {
    let regexForEmail = /^(([\w]+)([@])([\w]+)([.])([a-zA-Z]{1,5})([.][\w]{1,5})?)$/
      let regexForName = /^[\w]{1,}$/
      let regexForPhonenumber = /^[\d]{11}$/
      let regexForPassword = /^[\w]{4,} [\d]{3}$/

    userDetails = {
        firstName : firstname.value,
        lastName : lastname.value,
        Email : useremail.value,
        phonenumber : userphonenumber.value,
        password : userpassword.value
    }
    
    
    if(regexForName.test(firstname.value) == false){
        validateName.innerHTML = "type a correct name!"
    }
    if(regexForName.test(lastname.value)==false){
        validateName2.innerHTML ="lastname is incorrect!"
    }
    if(regexForEmail.test(useremail.value)== false){
        validateEmail.innerHTML = "input the right email!"
    }
    if(regexForPhonenumber.test(userphonenumber.value)==false){
        validatePhonenumber.innerHTML = "phonenumber must be 11 digits"
    }
    if(regexForPassword.test(userpassword.value)==false){
        validatePassword.innerHTML = "password contain at least 4 letter and 3 digits"
    }
    
    else if(
        firstName = "",
        lastName = "",
        Email = "",
        phonenumber = "",
        password = ""
    ){
        alert("Fill the required space's")
    }
    // customerDetails.push(userDetails)
    // localStorage.setItem('bankDetails', JSON.stringify(customerDetails))
    // window.location.href = "signin.html"
}




const signIn = () => {
    window.location.href = "signin.html"
}

const signUp = () => {
    window.location.href = "signup.html"
}


const logIn = ()  => {
    var myEmail = email.value
    var userPassword = passWord.value
    var customerDetails = JSON.parse(localStorage.getItem('bankDetails'))
    var detailsChecker = false

    let filteredArray;

    for (let index = 0; index < customerDetails.length; index++){
        if(customerDetails[index].Email == myEmail && customerDetails[index].password == userPassword){
            detailsChecker = true
            filteredArray = customerDetails[index]
            alert('GOOD 👍')
            console.log(customerDetails)
        }
    }
    if(detailsChecker){
        localStorage.setItem('currentUserIndex', JSON.stringify(filteredArray))
        window.location.href = `dashboard.html`
    }else{
        alert(`INVALID EMAIL OR PASSWORD`)
    }
    
}