console.log("contactform");
function showOrHide() {
    var v = document.getElementById("sidebar");
    if (v.style.display === "none") {
       v.style.display = "block";
    } else {
       v.style.display = "none";
    }
 }

 function formValidation() {
    var uName = document.forms["contactform"]["Name"];
    var uPhone = document.forms["contactform"]["Phone"];
    var uEmail = document.forms["contactform"]["Email"];
    var UMsg = document.forms["contactform"]["Message"];

    var name_len = uName.value.length;
    var phone_len = uPhone.value.length;
    if (name_len > 1){
        allLetter(uName);
        if(phone_len < 10){
            alert("Phone number should be 10 digits");
            uName.focus();
            return false;
        }
    }
    else{
        alert("Name should not be blank");
        uName.focus();
        return false;
    }
    
    var entry = {
        name: uName.value,
        phone: uPhone.value,
        email: uEmail.value,
        message: UMsg.value
    }
    console.log(entry);

    console.log("formvalidation");
    alert("form submitted")

}

function allLetter(uName) {
    var letters = /^[A-Za-z]+$/;
    if (uName.value.match(letters)) {
        return true;
    }
    else {
        // alert('Name cannot be blank must have characters only');
        uName.focus();
        return false;
    }
}

function fetchData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.response);
            console.log("Data fetched succesfully!",this.response);
            
            document.getElementById("title1").innerHTML = data.skills[0].title;
            document.getElementById("title2").innerHTML = data.skills[1].title;
            document.getElementById("title3").innerHTML = data.skills[2].title;
            document.getElementById("subtitle1").innerHTML = data.skills[0].subtitle;
            document.getElementById("subtitle2").innerHTML = data.skills[1].subtitle;
            document.getElementById("subtitle3").innerHTML = data.skills[2].subtitle;


        }
    };
    xhttp.open('GET','./cards_data.json',true);
    xhttp.send();

}