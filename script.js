const toggleButton = document.querySelector(".toggle-btn");
const navMenu = document.querySelector("#nav-menu ");

// Fungsi untuk toggle menu
toggleButton.addEventListener("click", () => {
  navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});

// Fungsi untuk menambahkan efek aktif dan bayangan pada menu
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // Hapus kelas 'active' dari semua link
    navLinks.forEach(nav => nav.classList.remove("active"));

    // Tambahkan kelas 'active' ke link yang diklik
    link.classList.add("active");
  });
});
// Ambil URL saat ini
const currentUrl = window.location.pathname;

navLinks.forEach(link => {
  // Jika href dari link cocok dengan URL saat ini
  if (link.getAttribute("href").includes(currentUrl.split("/").pop())) {
    link.classList.add("active"); // Tambahkan kelas 'active'
  } else {
    link.classList.remove("active"); // Pastikan elemen lain tidak aktif
  }
});

document.getElementById("kirimJawaban").addEventListener("click", function() {
  const jawaban = document.getElementById("jawabanInput").value;
  if (jawaban.trim() === "") {
    alert("Silakan tulis jawaban sebelum mengirim!");
  } else {
    alert("Jawaban Anda telah dikirim: " + jawaban);
  }
});

document.getElementById('kontakForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Mencegah halaman reload

  // Ambil data dari form
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('pesan').value;

  // Validasi sederhana
  if (nama && email && pesan) {
    // Tampilkan notifikasi sukses
    showNotification(`Terima kasih, ${nama}. Pesan Anda telah terkirim.`);
    // Reset form
    document.getElementById('kontakForm').reset();
  } else {
    // Tampilkan pesan error di bawah form
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerText = "Harap lengkapi semua kolom!";
    responseMessage.style.color = 'red';
  }
});

// Fungsi untuk menampilkan notifikasi popup
function showNotification(message) {
  const notifPopup = document.getElementById('notifPopup');
  const notifMessage = document.getElementById('notifMessage');

  notifMessage.innerText = message; // Set pesan
  notifPopup.classList.remove('hidden');
  notifPopup.classList.add('visible');
}

// Fungsi untuk menutup notifikasi popup
function closeNotification() {
  const notifPopup = document.getElementById('notifPopup');
  notifPopup.classList.remove('visible');
  notifPopup.classList.add('hidden');
}

const video = document.getElementById('videoPembelajaran');
document.getElementById('playVideo').addEventListener('click', () => video.play());
document.getElementById('pauseVideo').addEventListener('click', () => video.pause());
document.getElementById('restartVideo').addEventListener('click', () => {
  video.currentTime = 0;
  video.play();
});
