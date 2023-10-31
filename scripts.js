document.getElementById("formularz").addEventListener("submit", function(event) {
    event.preventDefault();

    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var wiadomosc = document.getElementById("wiadomosc").value;

    console.log("Imię: " + imie);
    console.log("Nazwisko: " + nazwisko);
    console.log("E-mail: " + email);
    console.log("Telefon: " + phone);
    console.log("Wiadomość: " + wiadomosc);

    if(validateName(imie) && validateName(nazwisko) && validateEmail(email) && validatePhone(phone)){
        alert("Skontaktujemy się z tobą jak najszybciej");
    } else{
        alert("Wprowadzono niepoprawne dane");
    }
});

function validateName(name){
    var firstLetter=name.charAt(0);
    return /[A-ZĄĆĘŁŃÓŚŹŻ]/.test(firstLetter);
}

function validateEmail(email){
    var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return regex.test(email);
}

function validatePhone(phone){
    var regex = /^[0-9\s+\-\(\)]{9,}$/;
    return regex.test(phone);
}