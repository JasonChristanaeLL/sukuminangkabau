document.addEventListener('DOMContentLoaded', () => {
  const historyImageEl = document.getElementById('historyImage');
  const historyTitleEl = document.getElementById('historyTitle');
  const historyDescEl = document.getElementById('historyDesc');
  const imageDescEl = document.getElementById('imageDesc');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const images = [
    'assets/sejarah1.jpg',
    'assets/sejarah2.jpg',
    'assets/sejarah3.jpg',
    'assets/sejarah4.jpg',
    'assets/sejarah5.jpg',
    'assets/sejarah6.webp',
  ];

  const titles = [
    'Asal Usul Suku Minangkabau',
    'Kerajaan dan Politik Awal',
    'Kerajaan Pagaruyung',
    'Pengaruh Islam',
    'Perang dan Penjajahan',
    'Masa Modern',
  ];

  const descriptions = [
    'Suku Minangkabau berasal dari wilayah Sumatera Barat, dan nama “Minangkabau” diyakini muncul dari legenda pertempuran kerbau. Menurut cerita, masyarakat Minangkabau berhasil mengalahkan musuh dengan menggunakan kecerdikan berupa kerbau yang diatur secara taktik, bukan kekuatan fisik semata. Legenda ini bukan hanya menjadi asal-usul nama, tapi juga simbol keberanian, kecerdikan, dan strategi yang menjadi karakter masyarakat Minangkabau. Seiring waktu, masyarakat di wilayah ini mulai membangun struktur sosial dan politik yang semakin kompleks, berlandaskan pengalaman dan nilai-nilai yang diwariskan secara turun-temurun.',
    'Sejak abad ke-7 hingga ke-14, wilayah Minangkabau berada di bawah pengaruh kerajaan Melayu dan Sriwijaya, yang menjadikan daerah ini sebagai pusat perdagangan penting di Sumatera. Kehadiran kerajaan-kerajaan ini membawa sistem pemerintahan, pembagian wilayah, serta hubungan diplomatik dengan kerajaan lain. Masyarakat Minangkabau mulai mengenal aturan politik, pembagian kelas sosial, dan sistem pengumpulan pajak, yang menjadi dasar bagi perkembangan pemerintahan lokal kemudian.',
    'Pada abad ke-14, berdirilah Kerajaan Pagaruyung, yang menjadi pusat politik, ekonomi, dan budaya Minangkabau. Kerajaan ini dipimpin oleh raja-raja yang mengatur masyarakat melalui adat istiadat dan hukum tradisional. Pagaruyung menjadi simbol kemakmuran dan kekuatan Minangkabau, sekaligus pusat penyebaran pengaruh politik ke wilayah sekitarnya. Kerajaan ini juga memainkan peran penting dalam menghubungkan Minangkabau dengan jalur perdagangan regional, sehingga memperkuat posisi ekonomi dan politik mereka di Sumatera Barat.',
    'Islam masuk ke wilayah Minangkabau sekitar abad ke-16 melalui pedagang dari Malaka, Aceh, dan pedagang Timur Tengah. Penyebaran Islam berjalan lambat namun signifikan, memengaruhi struktur pemerintahan, hukum, dan norma sosial masyarakat Minangkabau. Sejak itu, prinsip “Adat basandi syarak, syarak basandi Kitabullah” berkembang, yang menyelaraskan adat istiadat dengan ajaran Islam. Masuknya Islam juga mengubah kehidupan politik, pendidikan, dan sistem hukum, sehingga membentuk identitas sosial dan agama yang kuat di wilayah ini.',
    'Pada abad ke-19, masyarakat Minangkabau menghadapi konflik besar dengan Belanda dalam Perang Padri (1803–1837), yang merupakan gabungan konflik adat dan agama. Awalnya, perang ini dipicu oleh perbedaan interpretasi ajaran Islam dan praktik adat yang sudah lama diterapkan masyarakat Minangkabau. Konflik ini dimanfaatkan Belanda untuk memperluas pengaruh kolonial di Sumatera Barat. Setelah perang berakhir, Belanda berhasil mendirikan pemerintahan kolonial, mengubah struktur politik lokal, dan mengontrol sebagian besar wilayah Minangkabau.',
    'Setelah Indonesia merdeka pada 1945, wilayah Minangkabau menjadi bagian dari Provinsi Sumatera Barat. Tokoh-tokohnya banyak berperan dalam pemerintahan, pendidikan, dan pembangunan nasional. Meskipun berada dalam sistem negara modern, masyarakat Minangkabau tetap mempertahankan identitas historisnya melalui sejarah, garis keturunan, dan struktur sosial yang diwariskan turun-temurun. Masa modern ini juga menandai integrasi Minangkabau ke dalam bangsa Indonesia, sambil tetap menjaga warisan politik dan sosial yang telah dibentuk selama berabad-abad.',
  ];

  const shortDescriptions = [
    'Suku Minangkabau legenda kerbau',
    'Kerajaan Melayu Sumatera Barat',
    'Kerajaan Pagaruyung',
    'Sejarah Islam Minangkabau',
    'Perang Padri Minangkabau',
    'Sumatera Barat modern history',
  ];

  let index = 0;

  function updateSlider() {
    // fade out
    historyImageEl.style.opacity = 0;
    imageDescEl.style.opacity = 0;

    setTimeout(() => {
      historyImageEl.src = images[index];
      historyTitleEl.textContent = titles[index];
      historyDescEl.textContent = descriptions[index];
      imageDescEl.textContent = shortDescriptions[index];

      // fade in
      historyImageEl.style.opacity = 1;
      imageDescEl.style.opacity = 1;
    }, 200);
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlider();
  });
});
