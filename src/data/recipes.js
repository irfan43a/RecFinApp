export const INITIAL_RECIPES = [
  {
    id: "flambe-wagyu-steak",
    title: "Wagyu Ribeye Flambé with Herb Garlic Butter",
    subtitle: "Daging Wagyu Melt-in-the-Mouth dengan Atraksi Api Flambé Dramatis",
    category: "flambe",
    categoryName: "Flambé & Torch",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 5,
    flameType: "Flambé Cognac / Jus Panas",
    timeMinutes: 25,
    difficulty: "Menengah",
    servings: 2,
    calories: 680,
    tags: ["Daging", "Mewah", "Flambé", "Steak", "Herb Butter"],
    description: "Potongan daging Wagyu A5 atau Ribeye premium yang dipanggang dengan teknik sear api sangat panas untuk mengunci sari daging, kemudian disiram cairan aromatik untuk menciptakan kobaran api flambé spektakuler yang mengkaramelisasi permukaan luar dengan sempurna.",
    fireTip: "Saat melakukan flambé, matikan exhaust fan terlebih dahulu dan tuang cairan dengan sendok panjang, jangan langsung dari botol kaca. Miringkan wajan sedikit hingga uap menyambar api.",
    ingredients: [
      { name: "Wagyu Ribeye / Sirloin Steak (tebal 2.5cm)", amount: 400, unit: "gram" },
      { name: "Unsalted Butter berkualitas tinggi", amount: 50, unit: "gram" },
      { name: "Bawang putih utuh digeprek", amount: 4, unit: "siung" },
      { name: "Rosemary segar & Thyme segar", amount: 3, unit: "tangkai" },
      { name: "Sea salt kasar & Black pepper tumbuk", amount: 1, unit: "sdm" },
      { name: "Cooking cognac / beef broth pekat untuk flambé", amount: 45, unit: "ml" },
      { name: "Minyak canola / minyak dengan smoke point tinggi", amount: 2, unit: "sdm" }
    ],
    steps: [
      {
        step: 1,
        title: "Tempering & Bumbu Awal",
        desc: "Keluarkan daging dari kulkas 30 menit sebelum dimasak agar suhu ruang. Keringkan permukaan daging dengan tisu dapur, lalu taburi sea salt dan black pepper secara merata di semua sisi.",
        duration: "5 menit",
        hasFlame: false
      },
      {
        step: 2,
        title: "Pemanasan Wajan Cast Iron",
        desc: "Panaskan wajan besi cor (cast iron) dengan api besar sampai benar-benar berasap tipis. Tuangkan minyak canola dan ratakan ke seluruh permukaan wajan.",
        duration: "3 menit",
        hasFlame: true
      },
      {
        step: 3,
        title: "Searing Api Ekstrem",
        desc: "Letakkan daging di atas wajan. Anda akan mendengar desisan keras yang membara. Masak tanpa digeser selama 2 menit hingga terbentuk kerak karamel cokelat keemasan (Maillard reaction), lalu balik daging.",
        duration: "3 menit",
        hasFlame: true
      },
      {
        step: 4,
        title: "Basting Butter & Aromatik",
        desc: "Kecilkan api sedikit. Masukkan mentega, bawang putih, dan rempah rosemary. Saat mentega meleleh dan berbusa keemasan, sendokkan lelehan mentega panas berulang kali ke atas permukaan daging.",
        duration: "2 menit",
        hasFlame: false
      },
      {
        step: 5,
        title: "Atraksi Flambé (Kobaran Api)",
        desc: "Tuangkan cairan flambé ke tepi wajan panas. Miringkan sedikit wajan ke arah api kompor gas (atau gunakan pemantik panjang) hingga uap menyala membakar alkohol! Api akan berkobar selama 10-15 detik menciptakan aroma karamel smoky luar biasa.",
        duration: "1 menit",
        hasFlame: true
      },
      {
        step: 6,
        title: "Resting Sempurna",
        desc: "Angkat daging dan istirahatkan di atas talenan selama 5-7 menit agar sari daging terkunci merata sebelum dipotong tipis berlawanan serat.",
        duration: "6 menit",
        hasFlame: false
      }
    ],
    nutrition: {
      protein: "52g",
      fat: "48g",
      carbs: "2g"
    }
  },
  {
    id: "ayam-bakar-taliwang-membara",
    title: "Ayam Bakar Taliwang Membara Khas Lombok",
    subtitle: "Ayam Kampung Pedas Menggelegar dengan Asap Arang Kayu",
    category: "grill",
    categoryName: "Grill & BBQ Arang",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 5,
    flameType: "Bara Arang Tempurung Kelapa",
    timeMinutes: 45,
    difficulty: "Menengah",
    servings: 4,
    calories: 520,
    tags: ["Ayam", "Pedas", "Bakar", "Nusantara", "Arang"],
    description: "Kuliner legendaris pulau Lombok dengan paduan cabai rawit merah, terasi bakar, kencur segar, dan santan yang dibakar langsung di atas arang batok kelapa menyala hingga bumbu meresap sampai ke tulang.",
    fireTip: "Gunakan arang batok kelapa berkualitas dan biarkan menjadi bara abu putih sebelum memanggang agar api tidak menjilat gosong berlebihan.",
    ingredients: [
      { name: "Ayam kampung muda utuh (dibelah bekakak)", amount: 1, unit: "ekor" },
      { name: "Cabai merah keriting", amount: 15, unit: "buah" },
      { name: "Cabai rawit merah setan", amount: 12, unit: "buah" },
      { name: "Bawang merah & Bawang putih", amount: 8, unit: "siung" },
      { name: "Kencur segar kupas", amount: 3, unit: "cm" },
      { name: "Terasi Lombok bakar harum", amount: 1.5, unit: "sdt" },
      { name: "Gula merah sisir & Garam", amount: 2, unit: "sdm" },
      { name: "Jeruk limau", amount: 2, unit: "buah" },
      { name: "Santan kental", amount: 100, unit: "ml" }
    ],
    steps: [
      {
        step: 1,
        title: "Pembuatan Bumbu Taliwang",
        desc: "Haluskan cabai keriting, cabai rawit, bawang, kencur, dan terasi bakar. Tumis dengan sedikit minyak hingga harum dan matang sempurna.",
        duration: "8 menit",
        hasFlame: false
      },
      {
        step: 2,
        title: "Ungkep Ayam",
        desc: "Masukkan santan dan bumbu gula garam ke dalam wajan. Masukkan ayam bekakak, ungkep dengan api sedang hingga daging empuk dan bumbu mengental menyusut.",
        duration: "20 menit",
        hasFlame: false
      },
      {
        step: 3,
        title: "Nyalakan Bara Arang",
        desc: "Siapkan panggangan arang batok kelapa. Kipas hingga bara menyala merah menyala tanpa api jelaga hitam.",
        duration: "5 menit",
        hasFlame: true
      },
      {
        step: 4,
        title: "Pembakaran & Olesan Bertubi",
        desc: "Letakkan ayam di atas panggangan kawat. Bakar sambil diolesi sisa kuah bumbu kental berkali-kali. Biarkan tetesan bumbu menyentuh bara menciptakan aroma asap smoky khas Taliwang.",
        duration: "10 menit",
        hasFlame: true
      },
      {
        step: 5,
        title: "Sentuhan Limau & Penyajian",
        desc: "Angkat saat kulit ayam berkaramel sedikit garing kehitaman eksotis. Kucuri air jeruk limau segar dan sajikan bersama plecing kangkung.",
        duration: "2 menit",
        hasFlame: false
      }
    ],
    nutrition: {
      protein: "44g",
      fat: "32g",
      carbs: "14g"
    }
  },
  {
    id: "dragon-wok-hei-fried-rice",
    title: "Nasi Goreng Naga Wok-Hei Spesial",
    subtitle: "Aroma Asap Jet Flame Khas Restoran Chinese dengan Cabai Meletup",
    category: "wok",
    categoryName: "Wok-Hei & Tumis",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 4,
    flameType: "Wok Hei (Api Jet Wajan Baja)",
    timeMinutes: 15,
    difficulty: "Mudah",
    servings: 2,
    calories: 590,
    tags: ["Nasi", "Wok Hei", "Cepat", "Seafood", "Telur"],
    description: "Nasi goreng bertekstur butiran terpisah sempurna yang dimasak dengan wajan wajan baja panas membara. Rahasianya terletak pada 'Wok Hei'—karamelisasi butiran nasi di tepian wajan baja bersuhu tinggi.",
    fireTip: "Gunakan nasi sisa semalam yang dingin dari kulkas. Pastikan wajan sangat panas sebelum menuang telur agar telur mengembang berbusa seketika.",
    ingredients: [
      { name: "Nasi putih pera dingin", amount: 400, unit: "gram" },
      { name: "Telur bebek / telur ayam segar", amount: 2, unit: "butir" },
      { name: "Udang kupas segar / potongan daging sapi", amount: 100, unit: "gram" },
      { name: "Bawang putih cincang halus", amount: 4, unit: "siung" },
      { name: "Daun bawang iris banyak", amount: 3, unit: "batang" },
      { name: "Kecap asin premium (Light soy sauce)", amount: 2, unit: "sdm" },
      { name: "Minyak wijen & Minyak bawang", amount: 1.5, unit: "sdm" },
      { name: "Saus tiram & Bubuk lada putih", amount: 1, unit: "sdm" }
    ],
    steps: [
      {
        step: 1,
        title: "Persiapan Wajan Api Maksimal",
        desc: "Panaskan wajan wok baja karbon dengan api kompor terbesar sampai dasar wajan mulai berasap.",
        duration: "2 menit",
        hasFlame: true
      },
      {
        step: 2,
        title: "Orak-Arik Telur Ledakan Panas",
        desc: "Tuangkan 2 sdm minyak di tepian wajan, tuang telur kocok. Telur akan langsung berbuih mekar dalam 5 detik! Orak-arik cepat lalu sisihkan sedikit.",
        duration: "1 menit",
        hasFlame: true
      },
      {
        step: 3,
        title: "Tumis Seafood & Bawang",
        desc: "Masukkan udang dan bawang putih cincang, tumis cepat dengan gerakan mengocok wajan (wok toss) selama 1 menit hingga harum gurih.",
        duration: "2 menit",
        hasFlame: true
      },
      {
        step: 4,
        title: "Masukkan Nasi & Teknik Lempar Wok",
        desc: "Masukkan nasi dingin. Hancurkan gumpalan nasi dengan spatula sambil menggerakkan wajan ke depan-belakang. Biarkan butiran nasi melayang melewati jilatan api gas.",
        duration: "3 menit",
        hasFlame: true
      },
      {
        step: 5,
        title: "Karamelisasi Kecap di Pinggiran Wok",
        desc: "Tuangkan kecap asin bukan ke nasi, melainkan ke dinding besi wajan yang membara! Kecap akan seketika berasap dan menciptakan aroma smoky Wok Hei. Aduk kilat bersama daun bawang.",
        duration: "2 menit",
        hasFlame: true
      }
    ],
    nutrition: {
      protein: "26g",
      fat: "22g",
      carbs: "72g"
    }
  },
  {
    id: "salmon-volcano-aburi",
    title: "Torched Aburi Salmon Volcano Roll",
    subtitle: "Salmon Sashimi Segar Disiram Spicy Mentai & Dibakar Kitchen Torch",
    category: "flambe",
    categoryName: "Flambé & Torch",
    image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 3,
    flameType: "Blowtorch Butane Direct Flame",
    timeMinutes: 20,
    difficulty: "Menengah",
    servings: 2,
    calories: 460,
    tags: ["Jepang", "Salmon", "Torch", "Mentai", "Sushi"],
    description: "Perpaduan sushi roll lembut berisi timun renyah dan alpukat, dilapisi irisan salmon Norwegia berlemak, lalu disiram saus spicy mentai tobi-ko dan dibakar langsung dengan kitchen torch hingga keju & mayones meleleh berkaramel keemasan.",
    fireTip: "Ayunkan moncong torch secara perlahan dari kiri ke kanan dengan jarak sekitar 8-10 cm. Jangan diam di satu titik agar saus meleleh cantik dan tidak gosong hangus.",
    ingredients: [
      { name: "Norwegian Salmon fillet (grade sashimi)", amount: 200, unit: "gram" },
      { name: "Nasi sushi berbumbu cuka beras", amount: 250, unit: "gram" },
      { name: "Japanese mayonnaise (Kewpie)", amount: 4, unit: "sdm" },
      { name: "Tobiko (telur ikan terbang)", amount: 2, unit: "sdm" },
      { name: "Saus sambal / Sriracha & Saus Unagi", amount: 1.5, unit: "sdm" },
      { name: "Keju mozzarella parut halus", amount: 40, unit: "gram" },
      { name: "Nori lembaran & Wijen hitam sangrai", amount: 2, unit: "lembar" }
    ],
    steps: [
      {
        step: 1,
        title: "Racik Saus Lava Mentai",
        desc: "Campurkan mayones Kewpie, tobiko, saus sriracha, dan sedikit minyak wijen dalam mangkuk hingga berwarna oranye kemerahan berkilau.",
        duration: "3 menit",
        hasFlame: false
      },
      {
        step: 2,
        title: "Gulung Sushi Roll",
        desc: "Bentangkan nori di atas makisu (tikar bambu). Ratakan nasi sushi, balik, beri isian alpukat & timun, lalu gulung rapat dan padat.",
        duration: "7 menit",
        hasFlame: false
      },
      {
        step: 3,
        title: "Layering Salmon & Topping",
        desc: "Tata irisan tipis salmon segar di atas gulungan sushi roll. Potong menjadi 8 bagian sama tebal. Lumuri dengan lelehan saus mentai tebal dan taburan keju mozzarella.",
        duration: "4 menit",
        hasFlame: false
      },
      {
        step: 4,
        title: "Atraksi Api Torch Aburi",
        desc: "Nyalakan kitchen blowtorch dengan api biru runcing. Sorotkan api menyapu seluruh permukaan salmon dan mentai. Nikmati desisan mentega ikan yang meleleh dan letupan saus mentai yang menggelembung karamel!",
        duration: "3 menit",
        hasFlame: true
      },
      {
        step: 5,
        title: "Finishing & Saus Unagi",
        desc: "Teteskan saus unagi manis kental di atasnya dan taburi wijen sangrai serta irisan daun bawang tipis.",
        duration: "1 menit",
        hasFlame: false
      }
    ],
    nutrition: {
      protein: "32g",
      fat: "24g",
      carbs: "38g"
    }
  },
  {
    id: "korean-buldak-fire-chicken",
    title: "Korean Buldak Cheesy Fire Chicken",
    subtitle: "Ayam Pedas Api Korea dengan Lelehan Keju Mozzarella Molor",
    category: "spicy",
    categoryName: "Pedas Berapi",
    image: "https://images.unsplash.com/photo-1527477378377-f8e1215b1368?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 5,
    flameType: "Skillet Sizzle & Oven Broil Flame",
    timeMinutes: 30,
    difficulty: "Mudah",
    servings: 3,
    calories: 640,
    tags: ["Ayam", "Korea", "Pedas Ekstrem", "Keju", "Buldak"],
    description: "Potongan paha ayam tanpa tulang yang dimarinasi dalam pasta gochujang, gochugaru gilingan kasar, sirup jagung, dan bawang putih, dimasak dalam wajan besi mendesis lalu diselimuti selimut keju mozzarella leleh melimpah.",
    fireTip: "Jika ingin sensasi api ekstra, gunakan torch api di atas lapisan keju mozzarella sampai muncul bercak cokelat panggang harum.",
    ingredients: [
      { name: "Paha ayam fillet (potong dadu 3cm)", amount: 500, unit: "gram" },
      { name: "Keju Mozzarella parut tebal", amount: 150, unit: "gram" },
      { name: "Pasta Gochujang Korea", amount: 3, unit: "sdm" },
      { name: "Bubuk cabai Korea (Gochugaru)", amount: 3, unit: "sdm" },
      { name: "Madu / Sirup Jagung", amount: 2, unit: "sdm" },
      { name: "Kecap asin & Minyak wijen", amount: 2, unit: "sdm" },
      { name: "Bawang putih parut & Jahe parut", amount: 5, unit: "siung" },
      { name: "Kue beras tteokbokki (opsional)", amount: 100, unit: "gram" }
    ],
    steps: [
      {
        step: 1,
        title: "Marinasi Lava Merah",
        desc: "Campurkan gochujang, gochugaru, madu, kecap asin, minyak wijen, bawang putih, dan jahe. Balurkan ke potongan ayam dan diamkan minimal 15 menit.",
        duration: "15 menit",
        hasFlame: false
      },
      {
        step: 2,
        title: "Tumis Wajan Membara",
        desc: "Panaskan wajan anti-lengket atau cast iron dengan 1 sdm minyak. Tumis ayam yang sudah berbumbu dengan api sedang-tinggi hingga matang dan saus mengental menyelimuti ayam.",
        duration: "10 menit",
        hasFlame: true
      },
      {
        step: 3,
        title: "Selimut Keju Mozzarella",
        desc: "Kecilkan api kompor. Taburkan keju mozzarella melimpah menutupi seluruh permukaan ayam pedas.",
        duration: "2 menit",
        hasFlame: false
      },
      {
        step: 4,
        title: "Melting & Torching",
        desc: "Tutup wajan selama 3 menit hingga keju meleleh, atau gunakan kitchen torch langsung di atas keju hingga bergelembung dan kecokelatan sedap.",
        duration: "3 menit",
        hasFlame: true
      }
    ],
    nutrition: {
      protein: "48g",
      fat: "36g",
      carbs: "28g"
    }
  },
  {
    id: "sate-maranggi-arang-menyala",
    title: "Sate Maranggi Sapi Arang Menyala Purwakarta",
    subtitle: "Daging Sapi Empuk Legit Berbumbu Ketumbar dengan Cocolan Sambal Tomat",
    category: "grill",
    categoryName: "Grill & BBQ Arang",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 4,
    flameType: "Bara Arang Kayu Keras Menyala",
    timeMinutes: 40,
    difficulty: "Menengah",
    servings: 4,
    calories: 490,
    tags: ["Daging Sapi", "Sate", "Nusantara", "Arang", "Sambal"],
    description: "Sate khas Purwakarta legendaris dari potongan daging has dalam yang dimarinasi bumbu ketumbar, lengkuas, asam jawa, dan kecap manis pekat. Dibakar di atas panggangan bara arang hingga meneteskan lemak harum menggoda.",
    fireTip: "Kipas arang secara ritmis. Saat lemak daging menetes dan memicu lidah api kecil, balik sate dengan cepat agar daging terselimuti asap karamel tanpa hangus pahit.",
    ingredients: [
      { name: "Daging sapi has dalam / lulur", amount: 500, unit: "gram" },
      { name: "Kecap manis kental gurih", amount: 6, unit: "sdm" },
      { name: "Bawang merah & Bawang putih", amount: 8, unit: "siung" },
      { name: "Ketumbar sangrai halus", amount: 1.5, unit: "sdm" },
      { name: "Lengkuas muda parut", amount: 3, unit: "cm" },
      { name: "Air asam jawa kental", amount: 2, unit: "sdm" },
      { name: "Tomat merah segar & Cabai rawit hijau untuk sambal", amount: 10, unit: "buah" }
    ],
    steps: [
      {
        step: 1,
        title: "Pemotongan & Marinasi Rempah",
        desc: "Potong daging sapi berlawanan serat ukuran dadu 2 cm. Haluskan bawang, ketumbar, lengkuas, dan asam jawa. Baluri daging bersama kecap manis, remas-remas dan diamkan 30 menit.",
        duration: "30 menit",
        hasFlame: false
      },
      {
        step: 2,
        title: "Menusuk Sate",
        desc: "Tusukkan 4-5 potong daging pada tusuk sate bambu yang sudah direndam air (agar tusukan tidak mudah terbakar di bara api).",
        duration: "5 menit",
        hasFlame: false
      },
      {
        step: 3,
        title: "Pembakaran di Atas Bara",
        desc: "Susun sate di atas panggangan arang yang menyala merah membara. Bakar sambil sesekali dikipasi dan diolesi sisa bumbu marinasi kecap ketumbar.",
        duration: "8 menit",
        hasFlame: true
      },
      {
        step: 4,
        title: "Sentuhan Akhir Sambal Tomat",
        desc: "Angkat sate saat daging empuk berkaramel kecokelatan kilap. Sajikan hangat bersama ulekan kasar tomat segar, cabai rawit pedas, dan perasan jeruk limau.",
        duration: "3 menit",
        hasFlame: false
      }
    ],
    nutrition: {
      protein: "42g",
      fat: "22g",
      carbs: "18g"
    }
  },
  {
    id: "sizzling-pepper-beef-hotplate",
    title: "Sizzling Pepper Beef Rice Hotplate",
    subtitle: "Daging Slice Tipis Lada Hitam di Atas Piring Besi Berdesis Membara",
    category: "wok",
    categoryName: "Wok-Hei & Tumis",
    image: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 3,
    flameType: "Hotplate Cast Iron Panas 250°C",
    timeMinutes: 15,
    difficulty: "Mudah",
    servings: 1,
    calories: 620,
    tags: ["Daging Sapi", "Hotplate", "Sizzling", "Lada Hitam", "Mentega"],
    description: "Sajian ala resto Jepang modern di mana piring besi cor dipanaskan hingga 250°C. Nasi putih pulen diletakkan di tengah bersama jagung manis, dikelilingi irisan daging sapi shortplate tipis, lalu disiram saus madu lada hitam yang mendesis hebat di depan mata!",
    fireTip: "Aduk cepat daging di atas piring besi saat masih mendesis membara agar daging matang merata dalam 1 menit tanpa kehilangan kelembutannya.",
    ingredients: [
      { name: "Daging sapi US Shortplate slice tipis", amount: 150, unit: "gram" },
      { name: "Nasi putih hangat pulen", amount: 200, unit: "gram" },
      { name: "Jagung manis pipil manis", amount: 3, unit: "sdm" },
      { name: "Unsalted Butter (mentega wangi)", amount: 20, unit: "gram" },
      { name: "Daun bawang iris halus", amount: 2, unit: "batang" },
      { name: "Lada hitam freshly ground (tumbuk kasar)", amount: 1, unit: "sdt" },
      { name: "Saus garlic soy & Saus madu manis", amount: 3, unit: "sdm" }
    ],
    steps: [
      {
        step: 1,
        title: "Pemanasan Piring Besi (Hotplate)",
        desc: "Panaskan piring besi cor (hotplate) langsung di atas api kompor gas besar selama 5-7 menit hingga sangat panas dan mengeluarkan uap.",
        duration: "6 menit",
        hasFlame: true
      },
      {
        step: 2,
        title: "Penataan Bahan Makanan",
        desc: "Dengan sarung tangan tahan panas, letakkan piring di atas tatakan kayu. Letakkan mangkuk nasi di tengah, taburi jagung manis dan daun bawang. Letakkan potongan butter di puncak nasi.",
        duration: "2 menit",
        hasFlame: false
      },
      {
        step: 3,
        title: "Susun Daging & Desisan Hebat",
        desc: "Tata lembaran daging sapi slice di sekeliling nasi panas. Taburkan lada hitam kasar melimpah.",
        duration: "1 menit",
        hasFlame: false
      },
      {
        step: 4,
        title: "Siraman Saus & Pengadukan",
        desc: "Tuangkan saus garlic honey ke atas daging dan nasi. Dengarkan suara desisan dahsyat 'SIZZZZLE'! Aduk cepat semua bahan di atas hotplate hingga daging matang juicy sempurna.",
        duration: "2 menit",
        hasFlame: true
      }
    ],
    nutrition: {
      protein: "34g",
      fat: "38g",
      carbs: "58g"
    }
  },
  {
    id: "tom-yum-seafood-firepot",
    title: "Tom Yum Kung Seafood Hot Firepot",
    subtitle: "Sup Pedas Asam Khas Thailand dengan Nyala Api Biru di Bawah Mangkuk",
    category: "spicy",
    categoryName: "Pedas Berapi",
    image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 4,
    flameType: "Hotpot Sterno Flame",
    timeMinutes: 25,
    difficulty: "Mudah",
    servings: 3,
    calories: 340,
    tags: ["Seafood", "Thailand", "Sup", "Pedas Asam", "Firepot"],
    description: "Sup eksotis aroma serai, daun jeruk, dan lengkuas dengan kuah merah menyala yang gurih pedas asam segar. Berisi udang windu jumbo, cumi segar, dan jamur merang yang terus mendidih di atas nyala api sterno meja makan.",
    fireTip: "Masukkan udang di tahap terakhir saat kuah sudah mendidih bergolak agar udang tetap manis kenyal dan tidak overcooked.",
    ingredients: [
      { name: "Udang windu utuh segar (kepala disisakan)", amount: 300, unit: "gram" },
      { name: "Cumi segar potong cincin", amount: 200, unit: "gram" },
      { name: "Jamur kancing / jamur jerami", amount: 100, unit: "gram" },
      { name: "Batang serai memar & Lengkuas iris", amount: 3, unit: "batang" },
      { name: "Daun jeruk purut disobek", amount: 6, unit: "lembar" },
      { name: "Pasta Tom Yum autentik", amount: 3, unit: "sdm" },
      { name: "Air perasan jeruk nipis segar", amount: 4, unit: "sdm" },
      { name: "Kecap ikan Thailand (Nam Pla)", amount: 3, unit: "sdm" },
      { name: "Susu evaporasi (opsional Tom Yum creamy)", amount: 50, unit: "ml" }
    ],
    steps: [
      {
        step: 1,
        title: "Membuat Kaldu Udang Beraroma",
        desc: "Rebus kulit dan kepala udang dalam 800 ml air mendidih selama 10 menit, lalu saring untuk mendapatkan sari kaldu manis gurih.",
        duration: "10 menit",
        hasFlame: false
      },
      {
        step: 2,
        title: "Rebusan Rempah Aromatik",
        desc: "Didihkan kembali kaldu udang dengan serai, lengkuas, daun jeruk, dan cabai rawit merah. Masukkan pasta Tom Yum dan kecap ikan hingga kuah berwarna merah menyala.",
        duration: "5 menit",
        hasFlame: false
      },
      {
        step: 3,
        title: "Memasukkan Seafood Segar",
        desc: "Masukkan jamur, potongan cumi, dan udang windu. Masak dengan api besar selama 3-4 menit sampai udang berubah merah cerah.",
        duration: "4 menit",
        hasFlame: true
      },
      {
        step: 4,
        title: "Penyajian di Panci Firepot Api Menyala",
        desc: "Matikan kompor dapur, masukkan perasan jeruk nipis dan daun ketumbar. Tuang ke dalam panci saji firepot logam dan nyalakan api sterno di tengahnya agar kuah tetap mendidih mengepul saat dinikmati.",
        duration: "3 menit",
        hasFlame: true
      }
    ],
    nutrition: {
      protein: "38g",
      fat: "10g",
      carbs: "12g"
    }
  },
  {
    id: "creme-brulee-flame-torch",
    title: "Classic Vanilla Crème Brûlée Torched",
    subtitle: "Puding Custard Sutra Prancis dengan Lapisan Karamel Kaca Retak Api",
    category: "dessert",
    categoryName: "Dessert & Manis",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 2,
    flameType: "Blowtorch Sugar Crystallization",
    timeMinutes: 45,
    difficulty: "Menengah",
    servings: 4,
    calories: 380,
    tags: ["Dessert", "Prancis", "Manis", "Torch", "Karamel"],
    description: "Dessert ikonik dunia yang memadukan kelembutan custard krim kuning telur dan biji vanila Madagaskar dingin, dengan sensasi kontras memecahkan lapisan gula kaca tipis renyah yang dikaramelisasi seketika dengan api torch.",
    fireTip: "Taburkan gula pasir tipis dan merata di seluruh permukaan custard. Jika terlalu tebal, gula akan gosong sebelum meleleh merata.",
    ingredients: [
      { name: "Heavy cream cair", amount: 400, unit: "ml" },
      { name: "Kuning telur segar", amount: 4, unit: "butir" },
      { name: "Vanilla bean / ekstrak vanila murni", amount: 1, unit: "sdm" },
      { name: "Gula kastor untuk adonan custard", amount: 50, unit: "gram" },
      { name: "Gula pasir putih ekstra untuk torched caramel", amount: 4, unit: "sdm" }
    ],
    steps: [
      {
        step: 1,
        title: "Infusi Krim Vanila",
        desc: "Panaskan heavy cream dan biji vanila dalam panci kecil hingga hangat kuku (jangan sampai mendidih).",
        duration: "5 menit",
        hasFlame: false
      },
      {
        step: 2,
        title: "Aduk Kuning Telur & Panggang Bain-Marie",
        desc: "Kocok perlahan kuning telur dan gula sampai tercampur. Tuang krim hangat sambil diaduk rata. Saring adonan ke dalam mangkuk ramekin, panggang di oven dengan rendaman air (bain-marie) selama 35 menit hingga set.",
        duration: "35 menit",
        hasFlame: false
      },
      {
        step: 3,
        title: "Dinginkan di Chiller",
        desc: "Dinginkan ramekin di kulkas minimal 2 jam hingga custard kokoh dan dingin.",
        duration: "10 menit",
        hasFlame: false
      },
      {
        step: 4,
        title: "Atraksi Api Torch Karamelisasi",
        desc: "Taburkan 1 sdm gula pasir merata di atas custard dingin. Nyalakan torch dan gerakkan api melingkar. Gula akan mencair, mendidih berbuih, dan berubah menjadi lapisan kaca ambar keemasan yang mengeras dalam 1 menit!",
        duration: "3 menit",
        hasFlame: true
      }
    ],
    nutrition: {
      protein: "6g",
      fat: "28g",
      carbs: "24g"
    }
  },
  {
    id: "banana-foster-flambe",
    title: "New Orleans Bananas Foster Flambé",
    subtitle: "Pisang Karamel Mentega Brown Sugar dengan Kobaran Api Spektakuler",
    category: "flambe",
    categoryName: "Flambé & Torch",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 5,
    flameType: "Flambé Dark Rum & Banana Liqueur",
    timeMinutes: 15,
    difficulty: "Menengah",
    servings: 2,
    calories: 420,
    tags: ["Dessert", "Flambé", "Pisang", "Es Krim", "Karamel"],
    description: "Dessert legendaris asal New Orleans! Pisang raja matang yang ditumis dalam saus karamel lelehan mentega, brown sugar, dan kayu manis, lalu dikobarkan dengan api flambé rum aromatik, disajikan panas di samping satu scoop es krim vanila beku.",
    fireTip: "Pastikan wajan memiliki pegangan yang nyaman dan jauhkan rambut atau pakaian saat memiringkan wajan untuk menyulut uap api flambé.",
    ingredients: [
      { name: "Pisang raja / pisang ambon matang (belah dua)", amount: 3, unit: "buah" },
      { name: "Unsalted Butter", amount: 45, unit: "gram" },
      { name: "Brown sugar / palm sugar", amount: 4, unit: "sdm" },
      { name: "Bubuk kayu manis (cinnamon)", amount: 0.5, unit: "sdt" },
      { name: "Dark Rum atau Banana Liqueur untuk flambé", amount: 50, unit: "ml" },
      { name: "Es krim Vanilla beku premium", amount: 2, unit: "scoop" }
    ],
    steps: [
      {
        step: 1,
        title: "Membuat Saus Karamel Mentega",
        desc: "Lelehkan mentega dalam wajan tebal di atas api sedang. Masukkan brown sugar dan bubuk kayu manis. Aduk hingga gula larut dan saus mengental berbusa harum.",
        duration: "3 menit",
        hasFlame: false
      },
      {
        step: 2,
        title: "Goreng Pisang Berbumbu",
        desc: "Masukkan belahan pisang ke dalam saus karamel. Masak selama 2 menit setiap sisinya sampai pisang terbalut saus berkilau lembut.",
        duration: "4 menit",
        hasFlame: false
      },
      {
        step: 3,
        title: "Atraksi Flambé Kobaran Api",
        desc: "Tuangkan rum ke sekeliling wajan. Miringkan wajan ke api kompor gas hingga uap alkohol menyala dan api berkobar jingga kebiruan melintasi pisang! Biarkan api membakar hingga padam sendiri.",
        duration: "2 menit",
        hasFlame: true
      },
      {
        step: 4,
        title: "Penyajian Panas & Dingin",
        desc: "Pindahkan pisang karamel hangat ke piring saji, siramkan saus karamel yang masih berasap, lalu letakkan scoop es krim vanila dingin di atasnya.",
        duration: "2 menit",
        hasFlame: false
      }
    ],
    nutrition: {
      protein: "4g",
      fat: "18g",
      carbs: "62g"
    }
  },
  {
    id: "ikan-gurame-bakar-jimbaran",
    title: "Ikan Gurame Bakar Bumbu Jimbaran Membara",
    subtitle: "Ikan Segar Berlumur Sambal Tomat Terasi Bakar dengan Asap Arang Eksotis",
    category: "grill",
    categoryName: "Grill & BBQ Arang",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 4,
    flameType: "Arang Batok Kelapa Asap Harum",
    timeMinutes: 35,
    difficulty: "Menengah",
    servings: 3,
    calories: 410,
    tags: ["Ikan", "Seafood", "Bali", "Bakar", "Sambal"],
    description: "Ikan gurame atau kakap segar dibelah dua gaya kupu-kupu (butterfly), diolesi bumbu racikan saus Jimbaran Bali yang manis gurih pedas kaya rempah, lalu dipanggang di atas jilatan asap arang batok kelapa.",
    fireTip: "Olesi kawat panggangan dengan minyak sebelum meletakkan ikan agar kulit ikan tidak lengket saat dibalik.",
    ingredients: [
      { name: "Ikan Gurame segar (belah butterfly)", amount: 1, unit: "ekor (700g)" },
      { name: "Bawang merah & Bawang putih", amount: 8, unit: "siung" },
      { name: "Cabai merah besar & Cabai rawit", amount: 10, unit: "buah" },
      { name: "Saus tiram & Saus tomat", amount: 2, unit: "sdm" },
      { name: "Kecap manis & Minyak kelapa", amount: 3, unit: "sdm" },
      { name: "Margarin leleh untuk olesan bakar", amount: 2, unit: "sdm" },
      { name: "Jeruk nipis & Garam", amount: 1, unit: "buah" }
    ],
    steps: [
      {
        step: 1,
        title: "Bersihkan & Marinasi Asam Garam",
        desc: "Cuci bersih ikan, lumuri dengan air perasan jeruk nipis dan garam. Diamkan 15 menit agar bau tanah hilang.",
        duration: "15 menit",
        hasFlame: false
      },
      {
        step: 2,
        title: "Tumis Saus Oles Jimbaran",
        desc: "Haluskan bumbu cabai dan bawang, tumis bersama margarin, saus tomat, kecap manis, dan saus tiram hingga kental matang berkilau.",
        duration: "6 menit",
        hasFlame: false
      },
      {
        step: 3,
        title: "Panggang Setengah Matang",
        desc: "Jepit ikan dalam panggangan kawat, bakar di atas bara arang tanpa bumbu selama 5 menit hingga kedua sisinya kaku dan matang 50%.",
        duration: "5 menit",
        hasFlame: true
      },
      {
        step: 4,
        title: "Olesan Bumbu Jimbaran Membara",
        desc: "Olesi kedua sisi ikan dengan saus Jimbaran secara tebal. Bakar kembali di atas bara arang panas. Asap harum bumbu yang menetes ke bara akan menyelimuti daging ikan dengan rasa khas Jimbaran.",
        duration: "8 menit",
        hasFlame: true
      }
    ],
    nutrition: {
      protein: "40g",
      fat: "14g",
      carbs: "18g"
    }
  },
  {
    id: "cumi-bakar-saus-padang-berasap",
    title: "Cumi Bakar Kerat Saus Padang Berasap",
    subtitle: "Cumi Segar Kenyal Bumbu Merah Menyala Meledak di Lidah",
    category: "spicy",
    categoryName: "Pedas Berapi",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    flameLevel: 4,
    flameType: "Grill Charred High Flame",
    timeMinutes: 20,
    difficulty: "Mudah",
    servings: 2,
    calories: 390,
    tags: ["Seafood", "Cumi", "Saus Padang", "Pedas", "Bakar"],
    description: "Cumi berukuran besar dikerat rapi agar bumbu meresap, direndam saus padang pedas beraroma saus tiram, jahe, dan cabai giling, dipanggang cepat dengan api tinggi menghasilkan tekstur kenyal empuk berkaramel.",
    fireTip: "Jangan memanggang cumi terlalu lama; cukup 2-3 menit per sisi di api membara agar cumi tidak menjadi alot seperti karet.",
    ingredients: [
      { name: "Cumi sero segar ukuran sedang (dikerat)", amount: 500, unit: "gram" },
      { name: "Cabai merah keriting giling", amount: 3, unit: "sdm" },
      { name: "Saus tiram & Saus sambal", amount: 2, unit: "sdm" },
      { name: "Bawang bombay iris kasar", amount: 0.5, unit: "buah" },
      { name: "Jahe parut & Bawang putih", amount: 3, unit: "siung" },
      { name: "Daun bawang & Minyak wijen", amount: 1, unit: "sdm" }
    ],
    steps: [
      {
        step: 1,
        title: "Kerat Cumi & Marinasi Singkat",
        desc: "Kerat melintang punggung cumi jangan sampai putus. Lumuri jeruk nipis dan garam selama 5 menit.",
        duration: "5 menit",
        hasFlame: false
      },
      {
        step: 2,
        title: "Buat Saus Padang Oles",
        desc: "Campurkan cabai giling, saus tiram, saus sambal, jahe parut, dan minyak wijen menjadi pasta oles kental pedas.",
        duration: "3 menit",
        hasFlame: false
      },
      {
        step: 3,
        title: "Bakar Cepat Api Membara",
        desc: "Panggang cumi di atas panggangan berapi besar. Olesi saus padang bolak-balik selama 2-3 menit hingga cumi mengembang melingkar dan pinggirannya berkaramel kecokelatan.",
        duration: "5 menit",
        hasFlame: true
      }
    ],
    nutrition: {
      protein: "36g",
      fat: "11g",
      carbs: "14g"
    }
  }
];

export const CATEGORIES = [
  { id: "all", label: "Semua Resep", icon: "UtensilsCrossed", count: 12 },
  { id: "flambe", label: "🔥 Flambé & Torch", icon: "Flame", count: 4 },
  { id: "grill", label: "🥩 Grill & BBQ Arang", icon: "Beef", count: 3 },
  { id: "wok", label: "🥘 Wok-Hei & Tumis", icon: "CookingPot", count: 2 },
  { id: "spicy", label: "🌶️ Pedas Berapi", icon: "Sparkles", count: 3 },
  { id: "dessert", label: "🍮 Dessert & Manis", icon: "CakeSlice", count: 2 }
];

export const PANTRY_INGREDIENTS = [
  "Ayam", "Daging Sapi", "Salmon", "Udang", "Cumi", "Telur",
  "Nasi", "Bawang Putih", "Bawang Merah", "Cabai Rawit", "Keju",
  "Butter", "Kecap Manis", "Tomat", "Susu / Krim", "Pisang"
];
