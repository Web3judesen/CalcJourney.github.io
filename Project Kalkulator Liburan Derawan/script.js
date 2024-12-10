// Ambil elemen form dan tombol
const calculateBtn = document.getElementById("calculate-btn");
const resultElement = document.getElementById("total-cost");

// Tambahkan event listener untuk tombol "Hitung Total"
calculateBtn.addEventListener("click", () => {
  // Ambil nilai dari input
  const transport = parseFloat(document.getElementById("transport").value) || 0;
  const accommodation = parseFloat(document.getElementById("accommodation").value) || 0;
  const nights = parseInt(document.getElementById("nights").value) || 0;
  const food = parseFloat(document.getElementById("food").value) || 0;
  const activities = parseFloat(document.getElementById("activities").value) || 0;
  const snacking = parseFloat (document.getElementById("snacking").value) || 0

  // Hitung total biaya
  const totalCost = transport + (accommodation * nights) + (food * nights) + activities + snacking;

  // Tampilkan hasil
  resultElement.textContent = `Rp ${totalCost.toLocaleString()}`;
});
