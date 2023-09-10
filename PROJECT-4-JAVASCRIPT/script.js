//akan ditampilkan di depan
document.writeln("Hello World")
//akan ditampilkan dibelakang, atau di inspect --> console
console.log("Hai")
/**
 * ini komen lebih dari 1 
 * line
 */

/**
 * TIPE DATA  :
 * 
 * 1. Number
 * 2. string
 * 3. Boolean
 * 4. Object
 * 5. Function
 */

// 1. Number
console.log(2 + 2)
console.log(2.3) //Kalau desimal pake .

// 2. String
console.log("Hallo ...")

// 3. Tipe data boolean 
console.log(1 == 2) 
console.log(true)
console.log(false)

/**
 * VARIABLE --> let, const
 */
var fullname = "Amanda"
console.log(fullname)

const name1 = "Jhon Doe"
console.log(name1)
//name1 = "nama baru"
//console.log(name1)


let names = "Richard Roe"
console.log(names)
names = "baru"
console.log(names)


/**
 * OPERATOR ARITMATIKA
 */

// 1. Penjumlahan
let result = 3 + 5 
console.log(result)

// 2. Pengurangan
let resultPengurangan = 10 - 8 
console.log(resultPengurangan)

// 3. Perkalian
let resultPerkalian = 10 * 2 
console.log(resultPerkalian)

// 4. Pembagian
let resultPembagian = 10/2 
console.log(resultPembagian)

// 5. Modulus
let resultModulus = 10 % 3
console.log(resultModulus)


// const number1 = prompt('Number 1')
// const number2 = prompt('Number 2')
// const result_ = number1/number2
// alert("Hasil bagi : " + result_)


/**
 * OPERATOR PERBANDINGAN
 */
let hasil = 5 == 5 //true
console.log(hasil)

let hasil2 = 5 > 3 //true
console.log(hasil2)

let hasil3 = 5 < 3 //false
console.log(hasil3)

let hasil4 = 5 === "5"
console.log(hasil4)


/**
 * OPERATOR LOGIKA
 */
const nilaiUjian = 70
const nilaiAbsen = 80

const lulusUjian = nilaiUjian > 75
const lulusAbsen = nilaiAbsen > 75

const lulus = lulusUjian && lulusAbsen 
console.log("Hasil Ujian : ", lulus)

const lulus2 = lulusUjian || lulusAbsen
console.log("Hasil Ujian : ", lulus2)

/**
 * STRING TEMPLATE
 */
const nameBaru = "Amanda Nabila Hasya"
const value = 80
console.log("Nama : " + nameBaru  + " , Value : " + value)
console.log(`Nama : ${nameBaru} 
Value =  ${value}`)


/**
 * ARRAY
 */
const cars = [
            'Ayla' , 
            'Agya', 
            'Calya', 
            'Avanza'
        ]
const motorCycle = [
    'Vario' , 
    'Beat', 
    'Scoopy', 
    'NMax'
]
console.log(cars.length)
console.log("Data : " , cars)
console.log("Data ke-1 = ", cars[0])
console.table(cars)

//Namabhin data di array
cars.push('Kijang', 'BMW', 'Pajero')
console.log(cars)


//GABUNGIN ATAU CONCAT
const group = cars.concat(motorCycle)
console.table(group) //Jadi nanti array motorcycle ditambahin setelah array cars

