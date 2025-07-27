// Membuat Fungsi untuk mencetak segitiga
function printSegitiga(rows) {
    if (typeof rows !== 'number' || rows <= 0) {
        console.error('Input harus berupa angka positif.');
        return;
    }
    for (let i = 1; i <= rows; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            // Menambahkan bintang
            stars += '*'; 
        }
        // Mencetak bintang
        console.log(stars);
    }
}
// Memanggil fungsi dengan jumlah baris yang diinginkan
printSegitiga(10); // Ganti 10 dengan jumlah baris yang diinginkan