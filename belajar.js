var mobil = {
            nama : "aku",
            jurusan : "progamer",
            sekolah : function(waktu){
                return "pergi" + waktu;
            },
            nilai : {
                kelas1 : 80,
                kelas2 : 90
            }
}

mobil.nilai.kelas1;
mobil.nilai[kelas1];
mobil.sekolah("pagi");
mobil["sekolah"]("Siang");
mobil.nama = "budi";
mobil["jurusan"] = "disen";

class Mobil{
    constructor(){
        this.nama = "aku",
        this.jurusan = "progamer",
        this.nilai = {
            kelas1 : 80,
            kelas2 : 90
        }
    }
    sekolah(waktu){
        return "pergi" + waktu;
    }
}

class Mobil{
    constructor(Nama, Jurusan){
        this.nama = Nama,
        this.jurusan = Jurusan,
     
        nilai = {
            kelas1 : 80,
            kelas2 : 90
        }
    }
    sekolah(waktu){
        return "pergi" + waktu;
    }
}
var mobilHeho = new Mobil("Ahong", "Nihao");

mobilHeho.nama;

function Mobil(Nama, Jurusan){
        this.nama = Nama,
        this.jurusan = Jurusan,
        nilai = {
            kelas1 : 80,
            kelas2 : 90
        }
    this.sekolah = function(waktu){
        return "pergi" + waktu;
    };
}

var mobilJaka = new Mobil("Ahong", "Nihao");

mobilHeho.sekolah("siang");