var znak = ["!", "?", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var znakemail = ["!", "?", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function datacheck(){
  var imie = document.forms["rejestr"].name.value;
  var nazwisko = document.forms["rejestr"].lastname.value;
  var data = document.forms["rejestr"].date.value;
  var email = document.forms["rejestr"].email.value;
  var haslo = document.forms["rejestr"].password.value;
  var zgoda = document.forms["rejestr"].agreement.value;
  let sprawdzImie = 0;

  for (let i = 0; i < imie.length; i++){
      for (let j = 0; j < znak.length; j++){
         if(imie.charAt(i) == znak[j]){
            sprawdzImie = 1;
         }
      }
  }   
  if (imie.length>= 3 && sprawdzImie==1){
    document.getElementById("name").style.color = "red";
    alert("Kolego wypełniłeś błędnie nasz super formularz");
    console.log(sprawdzImie);
  }else{
    document.getElementById("name").style.color = "green";
  }
}
      // http://kursjs.pl/kurs/formularze/formularze-walidacja      
function openNav(){
  document.getElementById("myNav").style.height = "100%";
}
function closeNav(){
   document.getElementById("myNav").style.height = "0%";
}
function closerodo(){
   document.getElementById("rodo").style.display = "none";
}