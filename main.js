// let number;
// let result;
// result = Math.pow(number, 9);

// alert(result);

// let numberFirst = Number (prompt("enter first number = "));
// let numberSecond = Number (prompt("enter second number = "));

// let t = 9;
// j = Math.sqrt(t);
// console.log(j);


// let a, b, c;
// sum = numberFirst + numberSecond;
// a = numberFirst - numberSecond;
// b = numberFirst / numberSecond;
// c = Math.abs(numberFirst, numberSecond );


// let Madinaxon = 0;
// let Xusniya = 0;

// if(Madinaxon > 0){
//     alert("Siz kiritgan son 0 dan katta");
// }

// if(Madinaxon == 0)
// alert("Siz kiritgan son 0 ga teng");

// else{
//     alert("Siz kiritgan son 0 dan kichik");
// }


// let a = Number(prompt("Enter a= "));

// let p;
// p = 4 * a;
// alert("P = " + P)


// let a = Number(prompt("Enter a= "));

// let S;
// S = Math.pow(a, 2);
// alert("s = " + S)

// let a = Number(prompt("Enter a, b"));

// let S;
// let P;


let random = Math.floor(Math.random() * 100 + 1)

alert('Randomda chiqqan son: ' + random)

if(random % 3 == 0 && random % 5 == 0){
    alert(random + ": fizzbuzz")
}else if(random % 3 == 0){
    alert(random + ": fizz" )
}else if(random % 5 == 0){
    alert(random + ": buzz")
}else{
    alert(random + " soni fizz ham buzz ham fizzbuzz ham emas")
}