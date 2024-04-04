//Primitivni tipovi podataka
//number
let godine:number=25;

//string

let ime:string="Danica";

//boolean

let studira:boolean=true;

//Kompleksni tipovi podataka

//1.niz
//niz stringova
let predmeti:string[]=["EPOS","Cloud","Programiranje1"];

//niz number-a

let ocene:number[]=[10,9,8];

//2.Tuples
//uredjena entorka

let entorka:[string,number]=["Danica",24];

//3.Enumi

enum Modul{
    TenhologijeElektronskogPoslovanja, //0
    InformacioniSistemi,//1
    SoftverskoInz //2

}

let konkrtniModul:Modul=Modul.TenhologijeElektronskogPoslovanja;

//4.Objekti


let student:{ime:string,godine:number,studira:boolean}={
    ime:"Danica",
    godine:24,
    studira:true
};


//5.Unija tipova

let brojIliString:number|string=10;

//6.Any tip

let biloSta:any="Ovo moze biti bilo sta";


//7.void
//najcesce kod funkcija
function sayHello():void{
    console.log("Hello");
}

//8.null i undefined

let n:null=null;
let u:undefined=undefined;


//9.Type Assertions

let nekaVrednost:any="Ovo je string";
let duzinaStringa:number=(nekaVrednost as String).length;


console.log(godine,ime,studira); //priitivni
console.log(predmeti,ocene); //nizove
console.log(entorka); //tuples
console.log(konkrtniModul); //enum
console.log(student); //objekat
console.log(brojIliString); //unija tipova
console.log(biloSta); //any
console.log(n,u); //null,undefined
console.log(duzinaStringa); //type assertions













