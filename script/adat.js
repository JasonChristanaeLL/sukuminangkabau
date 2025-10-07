document.addEventListener('DOMContentLoaded', () => {
  const historyImageEl = document.getElementById('historyImage');
  const historyTitleEl = document.getElementById('historyTitle');
  const historyDescEl = document.getElementById('historyDesc');
  const imageDescEl = document.getElementById('imageDesc');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const images = [
    'assets/adat1.png',
    'assets/adat2.jpg',
    'assets/adat3.jpeg',
    'assets/adat4.jpg',
    'assets/image1.jpg',
    'assets/adat5.jpeg',
  ];

  const titles = [
    'Sistem Matrilineal',
    'Rumah Gadang',
    'Adat Istiadat dan Hukum Adat',
    'Seni dan Kesenian Tradisional',
    'Bahasa dan Sastra Lisan',
    'Upacara dan Tradisi Sosial',
  ];

  const descriptions = [
    'Suku Minangkabau terkenal dengan sistem matrilineal, yaitu garis keturunan dan warisan mengikuti pihak ibu. Harta pusaka, seperti rumah gadang dan sawah, diwariskan kepada anak perempuan. Sistem ini mencerminkan posisi penting perempuan dalam kehidupan sosial Minangkabau, sementara laki-laki berperan menjaga kehormatan dan menjadi pemimpin di luar rumah tangga.',
    'Rumah Gadang merupakan rumah adat Minangkabau yang memiliki atap melengkung menyerupai tanduk kerbau. Rumah ini bukan hanya tempat tinggal, tetapi juga simbol identitas dan kebersamaan keluarga besar. Setiap bagian rumah memiliki makna filosofis dan digunakan untuk kegiatan adat, seperti musyawarah, upacara, dan pertemuan keluarga.',
    'Masyarakat Minangkabau memegang teguh prinsip “Adat basandi syarak, syarak basandi Kitabullah”, yang berarti adat didasarkan pada ajaran Islam. Adat mengatur hampir semua aspek kehidupan, mulai dari perkawinan, warisan, hingga tata cara bermasyarakat. Hukum adat dijaga oleh ninik mamak (tetua adat) yang bertugas menjaga keseimbangan antara adat dan ajaran agama.',
    'Suku Minangkabau memiliki berbagai bentuk seni tradisional seperti tari Piring. Musik tradisionalnya menggunakan alat seperti talempong dan saluang, yang sering dimainkan dalam acara adat dan perayaan. Seni Minangkabau tidak hanya berfungsi sebagai hiburan, tetapi juga sarana penyampaian pesan moral dan sejarah.',
    'Bahasa Minangkabau digunakan dalam komunikasi sehari-hari dan memiliki banyak dialek di setiap daerah. Sastra lisannya berupa pantun, pepatah, dan gurindam, yang mengandung nilai-nilai kehidupan, nasihat, serta kebijaksanaan lokal. Bentuk sastra ini diajarkan turun-temurun sebagai cara menjaga warisan budaya.',
    'Beragam upacara adat dilakukan untuk menandai peristiwa penting, seperti batagak penghulu (pelantikan kepala suku), baralek (pernikahan), dan turun mandi (penyambutan bayi). Tradisi ini memperkuat rasa kebersamaan, menghormati leluhur, dan menjaga keseimbangan antara adat, agama, dan kehidupan sosial masyarakat Minangkabau.',
  ];

  const shortDescriptions = [
    'Sistem matrilineal Minangkabau',
    'Rumah gadang Minangkabau',
    'Adat basandi syarak syarak basandi Kitabullah',
    'Tari piring',
    'Bahasa Suku Minangkabau',
    'Upacara batagak penghulu',
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
