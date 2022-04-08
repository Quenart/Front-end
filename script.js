function openNav() {
  document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
function closerodo() {
    document.getElementById("rodo").style.display = "none";
}
function datacheck(){
  var imie = document.forms["rejestr"].name.value;
  var nazwisko = document.forms["rejestr"].lastname.value;
  var data = document.forms["rejestr"].date.value;
  var email = document.forms["rejestr"].email.value;
  var haslo = document.forms["rejestr"].password.value;
  var zgoda = document.forms["rejestr"].agreement.value;
  console.log(zgoda);

  if(imie.length>6 ){

  }else{
    alert('Źle napisałeś imie');
  }
}


var znak = ["!", "?", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
function sprawdzImie() {
    for (i = 0; i < imie.length; i++) {
        for (j = 0; j < znak.length; j++) {
            if (imie.charAt(i) == znak[j])
                alert("To nie jest prawidłowy znak w polu imie");
        }
    }
}
function sprawdzNazwisko() {
    for (i = 0; i < nazwisko.length; i++) {
        for (j = 0; j < znak.length; j++) {
            if (nazwisko.charAt(i) == znak[i])
                alert("To nie jest prawidłowy znak w polu nazwisko");
        }
    }
}

// http://kursjs.pl/kurs/formularze/formularze-walidacja