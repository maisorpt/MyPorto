alert("HII");
function displayForm() {
  alert("HII");
    // Mendapatkan nilai dari elemen form
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const alamat = document.getElementById("alamat").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    // const food = document.getElementById("food").value;
    // const drink = document.getElementById("drink").value;
    // const snack = document.getElementById("snack").value;
  
    // Menampilkan nilai dari elemen form di dalam elemen demo
    const demo = document.getElementById("demo");
    demo.innerHTML = `Nama: ${nama} <br>
                      Email: ${email} <br>
                       Alamat: ${alamat} <br>
                       Gender: ${gender} <br>
                      //  Makanan: ${food} <br>
                      //  Minuman: ${drink} <br>
                      //  Snack: ${snack}`;
}
  
    // Mengubah isi dari pilihan sesuai dengan pilihan pengguna
  //   const options = document.getElementById("food");
  //   const selectedIndex = options.selectedIndex;
  //   const selectedOption = options.options[selectedIndex].value;
  
  //   const drinks = document.getElementById("drink");
  //   const snacks = document.getElementById("snack");
  
  //   if (selectedOption === "nasi-goreng") {
  //     drinks.innerHTML = `<option value="jus">Jus</option>
  //                         <option value="es-teh">Es Teh</option>`;
  //     snacks.innerHTML = `<option value="keripik-tempe">Keripik Tempe</option>
  //                         <option value="kerupuk">Kerupuk</option>`;
  //   } else if (selectedOption === "mie-goreng") {
  //     drinks.innerHTML = `<option value="teh-manis">Teh Manis</option>
  //                         <option value="es-jeruk">Es Jeruk</option>`;
  //     snacks.innerHTML = `<option value="keripik-singkong">Keripik Singkong</option>
  //                         <option value="tahu-krispi">Tahu Krispi</option>`;
  //   } else if (selectedOption === "sate") {
  //     drinks.innerHTML = `<option value="air-mineral">Air Mineral</option>
  //                         <option value="soda-gembira">Soda Gembira</option>`;
  //     snacks.innerHTML = `<option value="bakwan-jagung">Bakwan Jagung</option>
  //                         <option value="tempe-mendoan">Tempe Mendoan</option>`;
  //   }
  // }
  
  // Menambahkan event listener pada button submit
  const submitBtn = document.getElementById("button");
  submitBtn.addEventListener("click", displayForm);
  