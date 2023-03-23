/*  Deklarasi Variabel */
const pria = document.getElementById("pria");
const wanita = document.getElementById("wanita");
const usia = document.getElementById("usia");
const beratBadan = document.getElementById("berat-badan");
const tinggiBadan = document.getElementById("tinggi-badan");
const formSubmit = document.getElementById("form-submit");
const formReset = document.getElementById("form-reset");
const hasilbmi = document.getElementById("hasilbmi");
const keterangan = document.getElementById("keterangan");

/* Function perhitungan kalkulator BMI */
formSubmit.addEventListener("click", ()=>{
    /* Mengubah satuan tinggi badan (cm) to (m) */
    const tinggiBadanmeter = tinggiBadan.value/100;
    /* Proses perhitungan BMI*/ 
    const bmi = beratBadan.value / (tinggiBadanmeter**2);
    const fixednum = bmi.toFixed(2);
    hasilbmi.innerText = fixednum;
    if (bmi < 18.5) {
        keterangan.innerText = "Kekurangan Berat Badan";
    }
    else if ((bmi > 18.5) && (bmi < 24.9)) {
        keterangan.innerText = "Normal (Ideal)";
    }
    else if ((bmi > 25) && (bmi < 29.9 )) {
        keterangan.innerText = "Kelebihan Berat Badan";
    }
    else if(bmi > 30.0){
        keterangan.innerText = "Kegemukan (Obesitas)";
    }
    else{
        hasilbmi.innerText = "0.0";
        keterangan.innerText = "Masukan data terlebih dulu";
    }
});

/* Function Reset Kalkulator BMI */
formReset.addEventListener("click", ()=>{
    usia.value = "",
    beratBadan.value = "",
    tinggiBadan.value = "",
    pria.checked = false, 
    wanita.checked =false
});


