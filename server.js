const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Halaman utama
app.get("/", (req, res) => {
    res.render("index");
});

// Halaman form
app.get("/form", (req, res) => {
    res.render("form", { message: null });
});

// Proses form
app.post("/submit", (req, res) => {
    const { nama, email } = req.body;
    const message = `Berhasil! Terima kasih, ${nama}! Data Anda telah diterima.`;
    res.render("form", { message });
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
