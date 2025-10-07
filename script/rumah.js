document.addEventListener('DOMContentLoaded', () => {
  const historyImageEl = document.getElementById('historyImage');
  const historyTitleEl = document.getElementById('historyTitle');
  const historyDescEl = document.getElementById('historyDesc');
  const imageDescEl = document.getElementById('imageDesc');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const images = [
    'assets/rumah1.jpg',
    'assets/rumah2.jpg',
    'assets/rumah3.webp',
    'assets/rumah4.jpg',
    'assets/rumah5.jpg',
  ];

  const titles = [
    'Nama dan Bentuk Umum',
    'Fungsi dan Makna',
    'Struktur dan Arsitektur',
    'Ragam dan Jenis Rumah Gadang',
    'Hiasan dan Ukiran',
  ];

  const descriptions = [
    'Rumah adat suku Minangkabau disebut Rumah Gadang, yang berarti “rumah besar.” Rumah ini menjadi simbol kebanggaan dan identitas masyarakat Minangkabau. Ciri khasnya adalah atap melengkung tajam ke atas menyerupai tanduk kerbau, terbuat dari ijuk atau seng. Bentuk ini melambangkan semangat, kekuatan, dan kebijaksanaan, serta terinspirasi dari legenda asal-usul Minangkabau tentang kemenangan kerbau.',
    'Rumah Gadang bukan hanya tempat tinggal, tapi juga pusat kehidupan keluarga dan adat. Di rumah ini biasanya tinggal satu keluarga besar dari garis keturunan ibu, sesuai sistem matrilineal. Rumah ini juga digunakan untuk musyawarah keluarga, upacara adat, serta penyimpanan benda pusaka. Setiap bagian rumah memiliki makna filosofis yang mencerminkan nilai-nilai kehidupan dan kebersamaan masyarakat Minangkabau.',
    'Struktur Rumah Gadang terbuat dari kayu pilihan seperti kayu surian atau meranti, yang kuat dan tahan lama. Tiangnya tinggi agar rumah tidak mudah terkena banjir dan binatang liar. Dindingnya biasanya miring ke dalam, dan lantainya terbuat dari papan. Jumlah ruangan di Rumah Gadang menyesuaikan jumlah perempuan yang tinggal di dalamnya, karena tiap perempuan yang sudah menikah mendapat kamar sendiri.',
    'Rumah Gadang memiliki beberapa bentuk tergantung daerahnya. Misalnya Rumah Gadang Gonjong Ampek Baanjuang di Luhak Nan Tigo, dan Rumah Gadang Gonjong Limo yang atapnya memiliki lima lengkungan. Perbedaan ini melambangkan status sosial, jumlah penghuni, dan daerah asal keluarga. Meskipun berbeda bentuk, semua tetap mengandung filosofi persatuan dan keseimbangan.',
    'Dinding dan tiang Rumah Gadang biasanya dihiasi ukiran warna-warni yang menggambarkan flora dan fauna. Motifnya memiliki makna simbolik, seperti keberanian, kesetiaan, dan kesejahteraan. Ukiran ini tidak hanya memperindah rumah, tetapi juga menunjukkan status dan keindahan budaya Minangkabau yang kaya akan seni dan filosofi.',
  ];

  const shortDescriptions = [
    'Rumah Gadang Minangkabau',
    'Fungsi Rumah Gadang Minangkabau',
    'Interior Rumah Gadang Minangkabau',
    'Rumah Gadang Gonjong Limo',
    'Ukiran Rumah Gadang Minangkabau',
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
