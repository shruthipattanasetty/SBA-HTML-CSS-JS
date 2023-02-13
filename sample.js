
function service() {
    window.location.href = './service.html'
}
    myList =  {
        "customers": [
           // {"name":"Food1","lastname":"hello"},
            {"firstname":"Andrew","lastname":"Kelly","username":"Andrew","email":"andrew@gmail.com","phone":1234567890,"numberofyearsofexperience":10,"location":"Detroit","instrument":"piano"},
            {"firstname":"Cali","lastname":"Chen","username":"Cali","email":"cali@gmail.com","phone":2345678901,"numberofyearsofexperience":7,"location":"Seattle","instrument":"guitar"},
            {"firstname":"Thomas","lastname":"Gruenwald","username":"Thomas","email":"thomas@gmail.com","phone":3456789012,"numberofyearsofexperience":6,"location":"Chicago","instrument":"trumpet"},
            {"firstname":"Cohen","lastname":"Juswalk","username":"Cohen","email":"cohen@gmail.com","phone":4567890123,"numberofyearsofexperience":11,"location":"San Francisco","instrument":"trumpet"},
            {"firstname":"Calvin","lastname":"Kempen","username":"Calvin","email":"calvin@gmail.com","phone":6789012345,"numberofyearsofexperience":12,"location":"Houston","instrument":"piano"},
            {"firstname":"Stella","lastname":"Sesi","username":"Stella","email":"stella@gmail.com","phone":5678901234,"numberofyearsofexperience":8,"location":"Seattle","instrument":"guitar"},
        ]
    };
    console.log("myList: ", myList)
    w3.displayObject("myList",  myList);
function favTutorial(){
    var myList = document.getElementById("myList");
}
favTutorial();
//services()
function home() {
    window.location.href = './index.html'
}
function about() {
    window.location.href = './aboutus.html'
}
function register() {
    window.location.href = './register.html'

}
function registerhello() {
    window.location.href = './register.html'
}