const a = 100;
const b = 101;
const c = 113;
const d = "101";

console.log(a > b || d == 101); // false or true -> true
console.log(c === 113 && b <= 101); // true and true -> true

var hewan = ["ayam", "kuda", "..", "bebek", "sapi"];
var buah = ["apple", "jeruk", "pir"];

var gabung = hewan.concat(buah);
console.log(gabung);

gabung.pop();
console.log(gabung);

gabung.unshift("amoeba");
console.log(gabung);

var cuaca = "baik";

if (cuaca == "baik") {
  console.log("masuk sekolah");
} else if (cuaca === "hujan") {
  console.log("libur sekolah");
} else if (cuaca === "mendung") {
  console.log("tetap sekolah");
} else "sudah lulus";

for (var i = 0; i < 100; i += 2) {
  console.log("bilangan genap " + i);
}