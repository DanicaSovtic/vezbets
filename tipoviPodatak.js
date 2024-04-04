//Primitivni tipovi podataka
//number
var godine = 25;
//string
var ime = "Danica";
//boolean
var studira = true;
//Kompleksni tipovi podataka
//1.niz
//niz stringova
var predmeti = ["EPOS", "Cloud", "Programiranje1"];
//niz number-a
var ocene = [10, 9, 8];
//2.Tuples
//uredjena entorka
var entorka = ["Danica", 24];
//3.Enumi
var Modul;
(function (Modul) {
    Modul[Modul["TenhologijeElektronskogPoslovanja"] = 0] = "TenhologijeElektronskogPoslovanja";
    Modul[Modul["InformacioniSistemi"] = 1] = "InformacioniSistemi";
    Modul[Modul["SoftverskoInz"] = 2] = "SoftverskoInz"; //2
})(Modul || (Modul = {}));
var konkrtniModul = Modul.TenhologijeElektronskogPoslovanja;
//4.Objekti
var student = {
    ime: "Danica",
    godine: 24,
    studira: true
};
//5.Unija tipova
var brojIliString = 10;
//6.Any tip
var biloSta = "Ovo moze biti bilo sta";
//7.void
//najcesce kod funkcija
function sayHello() {
    console.log("Hello");
}
//8.null i undefined
var n = null;
var u = undefined;
//9.Type Assertions
var nekaVrednost = "Ovo je string";
var duzinaStringa = nekaVrednost.length;
console.log(godine, ime, studira); //priitivni
console.log(predmeti, ocene); //nizove
console.log(entorka); //tuples
console.log(konkrtniModul); //enum
console.log(student); //objekat
console.log(brojIliString); //unija tipova
console.log(biloSta); //any
console.log(n, u); //null,undefined
console.log(duzinaStringa); //type assertions
