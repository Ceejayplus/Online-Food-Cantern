
var allStudent = [];
if(localStorage.studentDetails){
    allStudent = JSON.parse(localStorage.getItem('studentDetails'))
}

function signUp(){
    var newStudent = {
        firstName : firstname.value,
        lastName : lastname.value,
        Email : email.value,
        phoneNumber : phonenumber.value,
        password : Password.value
    }
    
    
    if((firstName = firstname.value) && (lastName = lastname.value) && (Email = email.value) && (phoneNumber = phonenumber.value) && (password = Password.value)){
        allStudent.push (newStudent)
        firstname.value = ""
        lastname.value = ""
        email.value = ""
        phonenumber.value = ""
        Password.value = ""
        window.location.href = "index  .html"
    }
    else{
        alert("PLEASE FILL THE REQUIRED SPACES")
    }
    localStorage.setItem('studentDetails', JSON.stringify(allStudent))
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