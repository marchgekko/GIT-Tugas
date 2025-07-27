// rumus.js
function kalkulator(angka1, angka2, operator) {
  switch (operator) {
    case "+":
      return angka1 + angka2;
    case "-": // kasus untuk pengurangan
      return angka1 - angka2;
    case "*": // kasus untuk perkalian
      return angka1 * angka2;
    case "/": // kasus untuk pembagian
      // Cek pembagian dengan nol
      if (angka2 === 0) {
        return "Error! Tidak bisa membagi dengan nol";
      }
      return angka1 / angka2;
    default:
      return "Operator tidak valid!";
  }
}
module.exports = { kalkulator };
