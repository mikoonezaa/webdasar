var beli= 10
if (beli >= 20){
    if(beli >= 50){
     if(beli >= 100){
 console.log("Free Ongkir");
     } else{
        console.log("Diskon 50%");
     }
     }

     else{
        console.log("Diskon20%");
     }
    }else{
        console.log("terimakasih sudah beli");
    }

    var jumlahBarang=401
    var total

    if(jumlahBarang>400){
        total = jumlahBarang* 100
    }else{
        total = jumlahBarang* 150
    }
    console.log(total);

    for(var i=1; i<=4; i++){
        for(var k =1; k<=4; k++){
            console.log("variabel i bernilai :" +i+ "variabel k bernilai :" +k);
        }
    }

    var sudahMakan = "belum";
    if(sudahMakan = "sudah"){
        console.log("PerutSudahKenyang");
    }else if(sudahMakan === "Bentarlagi"){
        console.log("SekarangSajaNantiHabis");
    }else {
        console.log("PerutMasihKosong");
    }

    for(var a=1; a<=6;a++){
        if(a === 6){
            break;
        }
        console.log("hallo indonesia"+a);
    }

    var hari = "senin";
    switch (hari){
        case "senin":
            console.log("BajuMerahPutih");
            break
            case "selasa":
            console.log("BajuPutihBiru");
            break
            case "rabu":
                console.log("BajuBatik");
                break
                case "kamis" :
                console.log("BajuPramuka");
                break
                case "jumat" :
                    console.log("BajuMuslim");
                    break
                    case (sabtu) :
                        console.log("BajuOLahraga");
                        break
    }
    
    var hari= "sabtu"
    if (hari === "senin") {
    console.log("hari upacara"); 
    } else{
        console.log("bukanhariupacara");
    }

    var username = 22.3
    if(typeof username === "string"){
        console.log("username string");
    }
    else if (typeof username === "number"){
        console.log("username number");
    }
    