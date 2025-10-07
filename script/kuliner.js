document.addEventListener('DOMContentLoaded', () => {
  const historyImageEl = document.getElementById('historyImage');
  const historyTitleEl = document.getElementById('historyTitle');
  const historyDescEl = document.getElementById('historyDesc');
  const imageDescEl = document.getElementById('imageDesc');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  const images = [
    'assets/kuliner1.jpg',
    'assets/kuliner2.jpg',
    'assets/kuliner3.jpg',
    'assets/kuliner4.jpg',
    'assets/kuliner5.jpg',
    'assets/kuliner6.jpg',
  ];

  const titles = [
    'Rendang',
    'Dendeng Balado',
    'Gulai Itiak Lado Mudo',
    'Sate Padang',
    'Nasi Kapau',
    'Gulai Tambusu',
  ];

  const descriptions = [
    'Rendang adalah makanan khas Minangkabau yang paling terkenal, bahkan diakui sebagai salah satu makanan terenak di dunia. Hidangan ini terbuat dari daging sapi yang dimasak lama dengan santan dan campuran rempah-rempah seperti serai, lengkuas, cabai, bawang, dan kunyit. Proses memasaknya bisa memakan waktu berjam-jam hingga santan mengering dan bumbunya meresap sempurna, menjadikan rendang tahan lama dan kaya cita rasa.',
    'Dendeng Balado adalah irisan tipis daging sapi yang digoreng kering kemudian diberi sambal balado merah pedas. Cita rasanya gurih dan pedas khas Minangkabau. Makanan ini sering dijadikan lauk dalam nasi padang dan melambangkan selera masyarakat Minangkabau yang kuat terhadap bumbu dan cabai.',
    'Gulai Itiak Lado Mudo berasal dari daerah Koto Gadang, Bukittinggi. Terbuat dari daging itik yang dimasak dengan cabai hijau muda, rempah, dan santan. Warnanya hijau kekuningan dan rasanya pedas menyegarkan. Hidangan ini sering disajikan pada acara adat dan perayaan besar.',
    'Gulai Itiak Lado Mudo berasal dari daerah Koto Gadang, Bukittinggi. Terbuat dari daging itik yang dimasak dengan cabai hijau muda, rempah, dan santan. Warnanya hijau kekuningan dan rasanya pedas menyegarkan. Hidangan ini sering disajikan pada acara adat dan perayaan besar.',
    'Nasi Kapau berasal dari daerah Kapau, Bukittinggi. Sekilas mirip nasi padang, tapi lauknya disajikan di wadah besar dengan posisi tinggi. Lauknya beragam seperti gulai nangka, rendang, ayam pop, dan sambal lado hijau. Biasanya dijual oleh pedagang perempuan yang disebut uni Kapau.',
    'Gulai Tambusu merupakan makanan khas berbahan dasar usus sapi yang diisi campuran tahu, telur, dan bumbu, lalu dimasak dengan kuah santan kental. Rasanya gurih dan kaya rempah, sering disajikan dalam acara keluarga atau pesta adat Minangkabau.',
  ];

  const shortDescriptions = [
    'Rendang',
    'Dendeng Balado',
    'Gulai Itiak Lado Mudo',
    'Sate Padang',
    'Nasi Kapau',
    'Gulai Tambusu',
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
