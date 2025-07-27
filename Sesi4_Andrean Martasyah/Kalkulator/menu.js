// menu.js
const { kalkulator } = require('./rumus.js');
const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Tampilan menu kalkulator 
function showMenu() {
  console.log('--------------------------------------');
  console.log('Kalkulator Sederhana');
  console.log('--------------------------------------');
  console.log('1. Penjumlahan (+)');
  console.log('2. Pengurangan (-)');
  console.log('3. Perkalian (*)');
  console.log('4. Pembagian (/)');
  console.log('5. Keluar');
  console.log('--------------------------------------');
  
  // Pilihan operasi dari user
  rl.question('Pilih operasi (1-5): ', (choice) => {
    if (choice === '5') {
      console.log('Sampai jumpa!');
      rl.close();
      return;
    }

    if (['1', '2', '3', '4'].includes(choice)) {
      // Input angka dari user
      rl.question('Masukkan angka pertama: ', (num1) => {
        rl.question('Masukkan angka kedua: ', (num2) => {
          let operator;
          switch (choice) {
            case '1':
              operator = "+";
              break;
            case '2':
              operator = "-";
              break;
            case '3':
              operator = "*";
              break;
            case '4':
              operator = "/";
              break;
          }
          const result = kalkulator(parseFloat(num1), parseFloat(num2), operator);
          console.log(`Hasil: ${result}`);
          console.log('\n');
          showMenu(); // Tampilkan menu lagi
        });
      });
    } else {
      console.log('Pilihan tidak valid! Silakan pilih 1-5');
      showMenu(); // Tampilkan menu lagi
    }
  });
}

// Mulai kalkulator
showMenu();
