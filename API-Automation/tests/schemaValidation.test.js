const { expect } = require("chai");
const Ajv = require("ajv");

// Inisialisasi Ajv dengan opsi allErrors agar semua error ditampilkan
const ajv = new Ajv({ allErrors: true });

describe("Validasi JSON Schema", () => {
  it("should validate response against defined schema", () => {
    // Simulasi response API (data yang ingin divalidasi)
    const responseData = {
      name: "Gajah Lucu",
      age: 60,
      isActive: true,
    };

    // Skema JSON yang digunakan untuk validasi
    const schema = {
      type: "object",
      properties: {
        name: { type: "string" },
        age: { type: "number" },
        isActive: { type: "boolean" },
      },
      required: ["name", "age", "isActive"],
      additionalProperties: false // opsional: tolak field yang tidak dikenali
    };

    // Kompilasi schema dan validasi data
    const validate = ajv.compile(schema);
    const isValid = validate(responseData);

    // Jika tidak valid, cetak pesan error ke konsol
    if (!isValid) {
      console.error("Schema validation errors:", validate.errors);
    }

    // Assertion agar test gagal jika schema tidak valid
    expect(isValid, JSON.stringify(validate.errors, null, 2)).to.be.true;
  });
});
