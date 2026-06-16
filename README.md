🐛 Smart Maggot Web Group 2
👥 Kelompok 2

Smart Maggot Web Group 2
Sistem Monitoring Budidaya Maggot Berbasis IoT & Web Dashboard

📌 Deskripsi Proyek

Smart Maggot Web Group 2 merupakan sebuah sistem berbasis web yang digunakan untuk melakukan monitoring dan pengelolaan budidaya maggot secara digital dan real-time.

Sistem ini mengintegrasikan perangkat Internet of Things (IoT) seperti ESP32 dan sensor DHT22 untuk membaca kondisi lingkungan (suhu dan kelembaban), kemudian menampilkannya pada dashboard web yang interaktif dan mudah dipahami.

Proyek ini dirancang untuk membantu proses budidaya agar lebih efisien, terukur, dan berbasis data.

🎯 Tujuan Proyek
Membangun sistem monitoring budidaya maggot berbasis IoT
Menampilkan data lingkungan secara real-time melalui web dashboard
Membantu peternak dalam menjaga kondisi optimal budidaya
Mengimplementasikan konsep smart farming berbasis teknologi
Menjadi media pembelajaran sistem IoT terintegrasi
⚙️ Fitur Sistem
📊 Dashboard monitoring suhu dan kelembaban
🌡️ Pemantauan kondisi lingkungan secara real-time
📈 Visualisasi data dalam bentuk grafik
🤖 Sistem kontrol otomatis (kipas & lampu)
📚 Menu edukasi budidaya maggot
📑 Laporan data monitoring
📱 Tampilan responsif (desktop & mobile)
🧠 Teknologi yang Digunakan
HTML5
CSS3
JavaScript
ESP32 (IoT Device)
Sensor DHT22
Web-based Dashboard System
🏗️ Struktur Folder Project
smart_maggot_web_v2/
│
├── dashboard.html
├── monitoring.html
├── edukasi.html
├── laporan.html
│
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   └── img/
│
└── README.md
⚙️ Cara Menjalankan Sistem
Download atau clone repository ini
Buka folder project

Jalankan file:

dashboard.html
Jika menggunakan IoT:
Pastikan ESP32 aktif
Sensor DHT22 terhubung dengan benar
Sistem koneksi data berjalan (API/local server)
🔄 Alur Sistem
Sensor DHT22 membaca suhu & kelembaban kandang
ESP32 mengirimkan data ke sistem
Web dashboard mengambil data secara berkala
Data ditampilkan dalam bentuk angka & grafik
Sistem otomatis mengatur perangkat:
Suhu > 33°C → Kipas ON
Suhu < 31°C → Lampu ON
31–33°C → Sistem idle
📊 Manfaat Proyek
Meningkatkan efisiensi budidaya maggot
Mempermudah monitoring kondisi lingkungan
Menjadi sistem pembelajaran IoT terintegrasi
Mendukung konsep smart farming modern
Dapat digunakan sebagai prototype penelitian akademik
👨‍💻 Pengembang

Kelompok 2 – Smart Maggot Web System
Proyek: IoT-Based Smart Farming Monitoring System

📄 Catatan

Proyek ini dikembangkan untuk kebutuhan pembelajaran, penelitian, dan presentasi akademik dalam bidang sistem berbasis IoT dan web development.
