var hari ="selasa"
if (hari === "senin") {
   console.log("hari upacara")
} else{
    console.log("bukan hari upacara")
}


const sudahMakan = "belum"
if (sudahMakan === "sudah"){
   console.log("perut sudah kenyang")
} else if (sudahMakan === "bentar lagi") {
    console.log("nanti habis sekarang saja")
} else {
    console.log("perut masih kosong")
}


var username = 22.3
if(typeof username === "string"){
    console.log("username string")
}
else if (typeof username === "number"){
    console.log("usename angka")
}
else {
    console.log("Username bukan strirng dan angka")
}


var beli = 10

if (beli >= 20) {
    if (beli >= 50) {
    if(beli >= 100) {
    console.log("free ongkir")
} else {
    console.log("diskon 50%")
 }
}

else {
    console.log("Diskon 20%")
}
} else{
    console.log("TerimaKasih Sudah Beli")
}


var hari = "senin"
switch (hari) {
  case "senin":
  console.log('baju merah putih')
  break 
  case 'selasa':
    console.log("baju putih biru")
    break
  case "rabu":
  console.log("baju batik")
  break
  case "kamis":
    console.log("olahraga")
    break
}


var jumlahBarang = 501
var total

total= jumlahBarang > 500 ? jumlahBarang * 100 : jumlahBarang * 150
console.log (total)


var jumlahBarang = 501
var total

if(jumlahBarang > 501)
{
    total = jumlahBarang * 100
}
else {
    total= jumlahBarang *150
}
console.log(total)


for(var i= 1; i <=4;i++) {
    for(var j=1;j<=2; j++){
        console.log("variabel i bernilai :" +i+ ",variabel j bernilai :" +j);

    }
}
for(var i =1; i <= 10; i++){
    if(i === 5){
        break;
    }
    console.log("hallo indonesia" +i);
}

//Latihan soal

var i = 1;
while (i <=100) {
  console.log("Nyxx ke" +i);
  i+=2; 
}

var i =99
while (i > 1) {
    console.log("saya ke" +i);
    i-=2;
}

var i = 0
while (i <= 30){
    console.log("kamu ke" +i);
    i+=3;
}

var i =1;
do{
    console.log(`hello js ${i}`);
    i++;
}  while (i <= 10);

var i = 1;
do{
    console.log(i + "kuadrat =" +i*i);
    i=i +1;
} while (i <= 100);

var siswa = ["izzan", "rehan", "yahya", "syafiq"]
for (var i =0;i <= 4; i++);{
console.log(siswa[i]);
}

var siswa = ["izzan", "rehan", "yahya", "syafiq"]
for (var i =0; siswalength; i++);{
console.log(siswa[i]);
}

var siswa = ["izzan", "rehan", "yahya", "syafiq"]
for(var i of siswa) {
    console.log(i);
}