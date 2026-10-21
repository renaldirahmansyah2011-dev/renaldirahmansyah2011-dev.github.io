const data = [
    {
        nama: "Andi",
        umur: 18,
        kota: "Makassar",
        job: "Pelajar"
    },
    {
        nama: "Budi",
        umur: 21,
        kota: "Bandung",
        job: "Mahasiswa"
    },
    {
        nama: "Citra",
        umur: 24,
        kota: "Jakarta",
        job: "Programmer"
    },
    {
        nama: "Dina",
        umur: 20,
        kota: "Surabaya",
        job: "Desainer"
    },
    {
        nama: "Eko",
        umur: 27,
        kota: "Yogyakarta",
        job: "Freelancer"
    }
];

function acak(){
    const orang = data[Math.floor(Math.random() * data.length)];

    document.getElementById("nama").textContent = orang.nama;
    document.getElementById("umur").textContent = orang.umur + " tahun";
    document.getElementById("kota").textContent = orang.kota;
    document.getElementById("job").textContent = orang.job;
}

// Tampilkan satu identitas saat halaman dibuka
acak();
