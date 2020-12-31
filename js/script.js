var year = document.getElementById("myYear");



function yourAge() {
    var y=Number(year.value) ;

    if (isEmpty()== false) {
        window.alert("please enter your Birth Year");
    }
    else {
        // var age = 2020 - year;
        var d = new Date();
        var age = d.getFullYear() - y;
        document.getElementById("myAge").innerHTML = "Your Age is <span>" + age + "</span>";
    }
    if (age >= 20) {
        document.getElementById("kidsOrYoung").innerHTML = "You are Young";
    }
    else if(age>1 && age<20) {
        document.getElementById("kidsOrYoung").innerHTML = "You are kids"
    }
    // else{
    //     window.alert("please enter your correct birth");
    // }

    var star = "";
    for (var i = 0; i < age; i++) {
        star += "*";
    }
    document.getElementById("stars").innerHTML = star;
}

function isEmpty() {
    if( year.value=="")
    {
        return false;
    }
    else{
        return true;
    }

}