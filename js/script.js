/// Initial welcome message prompt
welcomeMessage();

/// Function to display welcome message
function showPersonalizedWelcome() {
  // 1. Tampilkan Pop-up dan Minta Input Nama
  // Pop-up Anda: "Welcome to Our Website! Input your name:"
  let userName = prompt("Welcome to Our Website! Input your name:");
  // prompt("apakah berfungsi?");
  // 2. Tentukan nama yang akan ditampilkan
  // Jika user menekan Batal (null) atau mengosongkan input (trim() === "")
  if (userName === null || userName.trim() === "") {
    userName = "Mate"; // Kembali ke nama default
  }

  /// Display personalized welcome message on the webpage
  const nameDisplayElement = document.getElementById("user-name-display");

  if (nameDisplayElement) {
    nameDisplayElement.textContent = userName;
  }
}

// Panggil fungsi saat halaman siap
window.onload = showPersonalizedWelcome;
