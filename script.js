const translations = {
    uz: {
        brandSub: "Milliy Sertifikat Tizimi",
        selectSubject: "Imtihon Fanini Tanlang",
        selectSubjectDesc: "O'z darajangizni aniqlash uchun fanni bosing:",
        subOnaTili: "Ona tili va adabiyot",
        subMath: "Matematika",
        subHistory: "O'zbekiston tarixi",
        subEnglish: "Ingliz tili",
        subRussian: "Rus tili",
        myResults: "Mening natijalarim",
        heroBadge: "🚀 2026 Milliy Sertifikat Simulyatori",
        heroTitle: "Haqiqiy imtihonga kirmasdan turib, o'z darajangizni aniq bilib oling!",
        heroSubtitle: "O'zbekistonda minglab yoshlar OTMga kirishda imtiyoz beruvchi Milliy Sertifikat imtihonlariga tayyorlanishmoqda.",
        stat1: "Fanlar",
        exitExam: "Chiqish"
    },
    ru: {
        brandSub: "Система Национального Сертификата",
        selectSubject: "Выберите предмет экзамена",
        selectSubjectDesc: "Нажмите на предмет:",
        subOnaTili: "Родной язык и литература",
        subMath: "Математика",
        subHistory: "История Узбекистана",
        subEnglish: "Английский язык",
        subRussian: "Русский язык",
        myResults: "Мои результаты",
        heroBadge: "🚀 Симулятор 2026",
        heroTitle: "Узнайте свой уровень знаний!",
        exitExam: "Выйти"
    },
    en: {
        brandSub: "National Certificate System",
        selectSubject: "Choose Subject",
        selectSubjectDesc: "Click a subject:",
        subOnaTili: "Native Language & Literature",
        subMath: "Mathematics",
        subHistory: "History of Uzbekistan",
        subEnglish: "English Language",
        subRussian: "Russian Language",
        myResults: "My Results",
        heroBadge: "🚀 2026 Simulator",
        heroTitle: "Discover your exact level!",
        exitExam: "Exit"
    }
};

const examDatabase = {
    onatili: {
        title: "Ona tili va adabiyot",
        bgClass: "bg-onatili",
        icon: "fa-feather-pointed",
        durationMinutes: 35,
        desc: "DTM va Milliy sertifikat standartidagi imlo, punktuatsiya va grammatika savollari.",
        tests: [
            { q: "Qaysi qatordagi barcha so'zlar imlo qoidalariga ko'ra to'g'ri yozilgan?", opts: ["taassurot, mutolaa, ma'suliyat", "taassurot, mutolaa, mas'uliyat", "tasurot, mutola, mas'uliyat", "taassurot, mutolа, masuliyat"], ans: 1 },
            { q: "«O'tkan kunlar» romanida Otabekning onasi kim?", opts: ["O'zbek oyim", "Oftob oyim", "To'ybeka", "Zaynab"], ans: 0 },
            { q: "Qaysi gapda tire (—) tinish belgisi noto'g'ri qo'llangan?", opts: ["Bilim — baxt kaliti.", "Men — talabaman.", "U keldi — va hamma jim bo'ldi.", "Vatan — muqaddas dargoh."], ans: 2 },
            { q: "Fe'lning orttirma nisbati qo'shimchalari qaysi qatorda berilgan?", opts: ["-il, -in, -ish", "-dir, -tir, -giz, -t", "-la, -lan, -lash", "-gan, -yotgan, -ajak"], ans: 1 },
            { q: "Alisher Navoiyning «Xamsa» asari necha dostondan iborat?", opts: ["4 ta", "5 ta", "6 ta", "7 ta"], ans: 1 },
            { q: "Qaysi so'zda tutuq belgisi (') unlini cho'zish vazifasini bajargan?", opts: ["sur'at", "qal'a", "ma'no", "mas'ul"], ans: 2 },
            { q: "Ega va kesim moslashuvi buzilgan gapni toping.", opts: ["Biz ertaga musobaqaga boramiz.", "Ular maktab hovlisida yig'ildilar.", "Men kitobni o'qib chiqding.", "Sen o'z vazifangni a'lo bajarding."], ans: 2 },
            { q: "«Kecha va kunduz» romanining muallifi kim?", opts: ["Abdulla Qodiriy", "Abdulhamid Cho'lpon", "Abdurauf Fitrat", "Oybek"], ans: 1 },
            { q: "Qaysi qatorda omonim (shakldosh) so'z berilgan?", opts: ["yoz (fasl) — yoz (fe'l)", "kitob — daftar", "baland — past", "yuz — chehra"], ans: 0 },
            { q: "Ergashgan qo'shma gap tarkibidagi ergash gap bosh gapga nima yordamida bog'lanadi?", opts: ["Faqat ohang yordamida", "Bog'lovchi va bog'lovchi vositalar yordamida", "Teng bog'lovchilar yordamida", "Undov so'zlar yordamida"], ans: 1 },
            { q: "Qaysi so'z ko'chma ma'noda qo'llangan: «Tosh yurak odamga gap ta'sir qilmaydi»?", opts: ["odamga", "gap", "tosh yurak", "ta'sir"], ans: 2 },
            { q: "O'zbek tiliga davlat tili maqomi qachon berilgan?", opts: ["1991-yil 1-sentabr", "1989-yil 21-oktabr", "1992-yil 8-dekabr", "1990-yil 20-iyun"], ans: 1 },
            { q: "Qaysi qatordagi so'zda tovush tushishi hodisasi yuz bergan?", opts: ["shahri", "kitobi", "maktabim", "daftarlar"], ans: 0 },
            { q: "Sifat darajalari nechta?", opts: ["2 ta", "3 ta", "4 ta", "5 ta"], ans: 2 },
            { q: "«Mehrobdan chayon» asarining bosh qahramoni kim?", opts: ["Anvar", "Otabek", "Yo'lchi", "Sultonali"], ans: 0 }
        ],
        written: [
            { q: "1-yozma savol: «Ona tilim — jonu dilim» mavzusida qisqa xulosa yozing.", keywords: ["til", "millat", "meros", "qadriyat", "kelajak"], minWords: 5 },
            { q: "2-yozma savol: «Kitob — bilim bulog'i» maqolini izohlang.", keywords: ["kitob", "bilim", "o'qish", "tafakkur"], minWords: 4 },
            { q: "3-yozma savol: Abdulla Qodiriyning adabiyotdagi xizmati.", keywords: ["roman", "o'tkan kunlar", "asoschi"], minWords: 3 },
            { q: "4-yozma savol: Sifat so'z turkumiga ta'rif yozing.", keywords: ["belgi", "predmet", "qanday"], minWords: 3 },
            { q: "5-yozma savol: Imlo xatosini to'g'rilang: «Bugun maktabda tadbr bolib otdi».", keywords: ["tadbir", "bo'lib", "o'tdi"], minWords: 2 }
        ]
    },
    math: {
        title: "Matematika",
        bgClass: "bg-math",
        icon: "fa-square-root-variable",
        durationMinutes: 35,
        desc: "Algebra, geometriya va tenglamalar.",
        tests: [
            { q: "Agar 3x - 7 = 14 bo'lsa, 2x + 5 ni toping.", opts: ["14", "19", "21", "17"], ans: 1 },
            { q: "Katetlari 6 sm va 8 sm bo'lgan to'g'ri burchakli uchburchak gipotenuzasi.", opts: ["10 sm", "12 sm", "14 sm", "9 sm"], ans: 0 },
            { q: "log₂(32) + log₃(9) ning qiymati.", opts: ["6", "7", "8", "5"], ans: 1 },
            { q: "Aylana uzunligi 12π bo'lsa, yuzini toping.", opts: ["24π", "36π", "144π", "18π"], ans: 1 },
            { q: "x² - 5x + 6 = 0 ildizlar ko'paytmasi.", opts: ["5", "-5", "6", "-6"], ans: 2 },
            { q: "sin(30°) + cos(60°) nimaga teng?", opts: ["0.5", "1", "√3", "0"], ans: 1 },
            { q: "Arifmetik progressiyada a₁ = 4, d = 3 bo'lsa, a₅ ni toping.", opts: ["16", "19", "15", "13"], ans: 0 },
            { q: "25% i 40 ga teng son.", opts: ["100", "120", "160", "200"], ans: 2 },
            { q: "Qirrasi 4 sm bo'lgan kub hajmi.", opts: ["16", "32", "64", "48"], ans: 2 },
            { q: "f(x) = x³ - 4x da x = 2 dagi hosila.", opts: ["8", "12", "4", "6"], ans: 0 },
            { q: "2⁴ · 2³ : 2⁵ hisoblang.", opts: ["2", "4", "8", "16"], ans: 1 },
            { q: "Muntazam oltiburchak ichki burchagi.", opts: ["108°", "120°", "135°", "150°"], ans: 1 },
            { q: "a + b = 10, a - b = 4 bo'lsa, a · b ni toping.", opts: ["21", "24", "16", "28"], ans: 0 },
            { q: "√144 + √81 - √25 ni hisoblang.", opts: ["16", "18", "20", "14"], ans: 0 },
            { q: "Teng yonli uchburchak uchidagi burchak 80°, asosidagini toping.", opts: ["40°", "50°", "60°", "80°"], ans: 1 }
        ],
        written: [
            { q: "1-yozma: 2x + 3y = 12 va x - y = 1 sistemasini yeching.", keywords: ["3", "2", "x=3", "y=2"], minWords: 1 },
            { q: "2-yozma: 5 va 12 sm to'g'ri to'rtburchak perimetri.", keywords: ["34"], minWords: 1 },
            { q: "3-yozma: Pifagor teoremasi.", keywords: ["a²+b²=c²", "katet", "gipotenuza"], minWords: 2 },
            { q: "4-yozma: 240 km ni 3 soatda o'tdi, 5 soatda qancha?", keywords: ["400"], minWords: 1 },
            { q: "5-yozma: x² - 9 = 0 ildizlari.", keywords: ["3", "-3"], minWords: 1 }
        ]
    },
    history: {
        title: "O'zbekiston tarixi",
        bgClass: "bg-history",
        icon: "fa-landmark-dome",
        durationMinutes: 35,
        desc: "Tarixiy voqealar va shaxslar.",
        tests: [
            { q: "Amir Temur Movarounnahr taxtiga o'tirgan yil.", opts: ["1336", "1370", "1405", "1395"], ans: 1 },
            { q: "Konstitutsiya qabul qilingan sana.", opts: ["1991", "1992-yil 8-dekabr", "1992-yil 2-iyul", "1993"], ans: 1 },
            { q: "Mirzo Ulug'bek rasadxonasi qurilgan yillar.", opts: ["1424–1428", "1409", "1447", "1380"], ans: 0 },
            { q: "«Avesto» 2700 yilligi.", opts: ["1999", "2001", "2005", "1996"], ans: 1 },
            { q: "Xiva xonligi sulolasi.", opts: ["Mang'it", "Qo'ng'irot", "Ming", "Shayboniy"], ans: 1 },
            { q: "Jaloliddin Manguberdi g'alabasi (Parvon).", opts: ["Parvon", "Anqara", "Loy", "Qatvon"], ans: 0 },
            { q: "BMTga a'zo bo'lgan yil.", opts: ["1991", "1992-yil 2-mart", "1993", "1991"], ans: 1 },
            { q: "Buxoro amirligi sulolasi.", opts: ["Ashtarxoniylar", "Mang'it", "Temuriylar", "Qoraxoniy"], ans: 1 },
            { q: "Al-Xorazmiy fan asoschisi.", opts: ["Algebra", "Tibbiyot", "Botanika", "Geologiya"], ans: 0 },
            { q: "Bobur Hindistonda asos solgan sulola.", opts: ["Boburiylar", "G'aznaviylar", "Saljuqiy", "Somoniylar"], ans: 0 },
            { q: "Qo'qon xonligi asoschisi.", opts: ["Shohruxbiy", "Rahimxon", "Nasrullo", "Xudoyorxon"], ans: 0 },
            { q: "Toshkent 2200 yilligi.", opts: ["2007", "2009", "2011", "2005"], ans: 1 },
            { q: "«Tib qonunlari» muallifi.", opts: ["Beruniy", "Ibn Sino", "Farg'oniy", "Buxoriy"], ans: 1 },
            { q: "So'm muomalaga kiritilgan sana.", opts: ["1992", "1994-yil 1-iyul", "1993", "1991"], ans: 1 },
            { q: "Jadidchilik namoyandasi.", opts: ["Behbudiy", "To'maris", "Spitamen", "Muqunna"], ans: 0 }
        ],
        written: [
            { q: "1-yozma: Amir Temur davlat boshqaruvi.", keywords: ["adolat", "kuch", "qonun", "tuzuk"], minWords: 4 },
            { q: "2-yozma: Jadidlar maqsadi.", keywords: ["ma'rifat", "maktab", "ozodlik"], minWords: 3 },
            { q: "3-yozma: Ulug'bek hissasi.", keywords: ["rasadxona", "ziji", "astronomiya"], minWords: 3 },
            { q: "4-yozma: Ipak yo'li.", keywords: ["savdo", "samarqand", "buxoro"], minWords: 3 },
            { q: "5-yozma: 1991-yil 31-avgust.", keywords: ["mustaqillik", "e'lon"], minWords: 2 }
        ]
    },
    english: {
        title: "Ingliz tili",
        bgClass: "bg-english",
        icon: "fa-earth-americas",
        durationMinutes: 35,
        desc: "Grammar & Vocabulary assessment.",
        tests: [
            { q: "If I _____ more time yesterday, I would have helped you.", opts: ["have", "had", "had had", "would have"], ans: 2 },
            { q: "She is looking forward _____ her grandparents.", opts: ["to see", "to seeing", "seeing", "see"], ans: 1 },
            { q: "Synonym of 'INEVITABLE':", opts: ["Avoidable", "Unavoidable", "Uncertain", "Temporary"], ans: 1 },
            { q: "By the time we arrived, the train _____.", opts: ["already left", "has left", "had already left", "was leaving"], ans: 2 },
            { q: "Neither the teacher nor the students _____ satisfied.", opts: ["was", "were", "is", "has been"], ans: 1 },
            { q: "This book, _____ was written in 1925, is popular.", opts: ["who", "which", "where", "whom"], ans: 1 },
            { q: "He insisted _____ paying for dinner.", opts: ["in", "on", "at", "for"], ans: 1 },
            { q: "The new bridge _____ by next year.", opts: ["will complete", "will be completed", "completes", "is completing"], ans: 1 },
            { q: "Idiom for 'study very hard':", opts: ["Hit the books", "Break a leg", "Bite the bullet", "Under the weather"], ans: 0 },
            { q: "Hardly _____ entered when phone rang.", opts: ["he had", "had he", "he has", "did he"], ans: 1 },
            { q: "You had better _____ a coat.", opts: ["to wear", "wearing", "wear", "wore"], ans: 2 },
            { q: "Despite _____ tired, she continued.", opts: ["she was", "of being", "being", "to be"], ans: 2 },
            { q: "Antonym of 'SCARCE':", opts: ["Rare", "Abundant", "Limited", "Tiny"], ans: 1 },
            { q: "I wish I _____ speak three languages.", opts: ["can", "could", "will", "may"], ans: 1 },
            { q: "The manager asked me where _____.", opts: ["I had been", "had I been", "was I", "I have been"], ans: 0 }
        ],
        written: [
            { q: "Task 1: Why learning English is important.", keywords: ["global", "career", "opportunity", "future"], minWords: 4 },
            { q: "Task 2: Passive voice: 'Scientists discovered a new planet.'", keywords: ["new planet", "was discovered"], minWords: 3 },
            { q: "Task 3: Difference between affect and effect.", keywords: ["verb", "noun", "influence"], minWords: 3 },
            { q: "Task 4: Dream university.", keywords: ["university", "study", "goal"], minWords: 3 },
            { q: "Task 5: Correct: 'She don't like cinema.'", keywords: ["doesn't like"], minWords: 2 }
        ]
    },
    russian: {
        title: "Rus tili",
        bgClass: "bg-russian",
        icon: "fa-book-atlas",
        durationMinutes: 35,
        desc: "Орфография и грамматика.",
        tests: [
            { q: "Буква И в слове:", opts: ["ц..ган", "ц..фра", "ц..плёнок", "на ц..почках"], ans: 1 },
            { q: "Правильное ударение:", opts: ["звонИт", "звОнит", "тОрты", "бантЫ"], ans: 0 },
            { q: "Женский род:", opts: ["кофе", "шампунь", "молодёжь", "рояль"], ans: 2 },
            { q: "Мы гордимся _____ успехами.", opts: ["своими", "своих", "своим", "о своих"], ans: 0 },
            { q: "Где пишется НН?", opts: ["деревя..ый", "ветре..ый", "серебря..ый", "румя..ый"], ans: 0 },
            { q: "Автор «Евгений Онегин»:", opts: ["Лермонтов", "Пушкин", "Толстой", "Достоевский"], ans: 1 },
            { q: "Фразеологизм «быстро бежать»:", opts: ["сломя голову", "бить баклуши", "водить за нос", "держать язык"], ans: 0 },
            { q: "Сколько падежей в рус. языке?", opts: ["5", "6", "7", "8"], ans: 1 },
            { q: "Окончание: «В течение всего лект..»", opts: ["лекции", "лекцию", "лекцией", "лекция"], ans: 0 },
            { q: "Антоним к «ЩЕДРЫЙ»:", opts: ["Добрый", "Скупой", "Богатый", "Смелый"], ans: 1 },
            { q: "Речевая ошибка:", opts: ["Он одел пальто", "Он надел пальто", "Мама одела ребенка", "Девушка надела платье"], ans: 0 },
            { q: "Глагол совершенного вида:", opts: ["читать", "решить", "писать", "строить"], ans: 1 },
            { q: "Знак перед «А»:", opts: ["Точка", "Запятая", "Двоеточие", "Тире"], ans: 1 },
            { q: "Числительное: «Более _____ студентов».", opts: ["пятисот", "пятьсот", "пятиста", "пятьюстами"], ans: 0 },
            { q: "Слово «ПАЛЬТО»:", opts: ["Склоняемое", "Несклоняемое", "Разноспрягаемое", "Краткое"], ans: 1 }
        ],
        written: [
            { q: "Задание 1: Почему важны языки.", keywords: ["язык", "знание", "общение"], minWords: 3 },
            { q: "Задание 2: Исправьте ошибку: «Ложить книгу».", keywords: ["класть", "положить"], minWords: 1 },
            { q: "Задание 3: Фразеологизм «работать засучив рукава».", keywords: ["усердно", "старательно"], minWords: 2 },
            { q: "Задание 4: Слово «время» в род. падеже.", keywords: ["времени"], minWords: 1 },
            { q: "Задание 5: Любимый писатель.", keywords: ["пушкин", "толстой", "чехов"], minWords: 1 }
        ]
    },
    biology: {
        title: "Biologiya",
        bgClass: "bg-biology",
        icon: "fa-dna",
        durationMinutes: 35,
        desc: "Anatomiya va genetika.",
        tests: [
            { q: "Hujayra energetik stansiyasi.", opts: ["Mitoxondriya", "Ribosoma", "Lizosoma", "Golji"], ans: 0 },
            { q: "Qon aylanish doiralari.", opts: ["1", "2", "3", "4"], ans: 1 },
            { q: "DNK zanjirlari bog'i.", opts: ["Kovalent", "Vodorod", "Ion", "Disulfid"], ans: 1 },
            { q: "Fotosintez organoidi.", opts: ["Vakuola", "Markaz", "Xloroplast", "Ribosoma"], ans: 2 },
            { q: "Oqsil biosintezi joyi.", opts: ["Ribosoma", "Mitoxondriya", "Yadro", "Lizosoma"], ans: 0 },
            { q: "Miya nervlari jufti.", opts: ["10", "12", "31", "24"], ans: 1 },
            { q: "Mendel 1-qonuni.", opts: ["Ajralish", "Mutatsiya", "Dominantlik", "Irsiylanish"], ans: 2 },
            { q: "Qon guruhlari.", opts: ["2", "3", "4", "6"], ans: 1 },
            { q: "Tovuq ko'rligi vitamini.", opts: ["A", "B", "C", "D"], ans: 0 },
            { q: "Gormon ishlab chiqaruvchi bezlar.", opts: ["Tashqi", "Ichki", "Aralash", "Ovqat"], ans: 1 },
            { q: "Suv o'tkazuvchi to'qima.", opts: ["Floema", "Ksilema", "Kollenxima", "Parenxima"], ans: 1 },
            { q: "Genetika asoschisi.", opts: ["Darvin", "Mendel", "Paster", "Pavlov"], ans: 1 },
            { q: "Tanadagi asosiy birikma.", opts: ["Yog'", "Oqsil", "Suv", "Uglevod"], ans: 2 },
            { q: "Bakteriyalar olami.", opts: ["Eukariot", "Prokariot", "Virus", "Zamburug'"], ans: 1 },
            { q: "Yurak mushagi turi.", opts: ["Silliq", "Skelet", "Yurak", "Birlashtiruvchi"], ans: 2 }
        ],
        written: [
            { q: "1-yozma: Fotosintez.", keywords: ["kislorod", "uglerod", "quyosh", "nur"], minWords: 3 },
            { q: "2-yozma: DNK va RNK.", keywords: ["nuklein", "kislota"], minWords: 2 },
            { q: "3-yozma: Vitamin yetishmasligi.", keywords: ["avitaminoz", "kasallik"], minWords: 2 },
            { q: "4-yozma: Mitoz va meyoz.", keywords: ["xromosoma", "hujayra"], minWords: 2 },
            { q: "5-yozma: Ekosistema.", keywords: ["tirik", "muhit"], minWords: 2 }
        ]
    },
    chemistry: {
        title: "Kimyo",
        bgClass: "bg-chemistry",
        icon: "fa-flask",
        durationMinutes: 35,
        desc: "Anorganik va organik kimyo.",
        tests: [
            { q: "Eng kuchli metall.", opts: ["Natriy", "Kaliy", "Fransiy", "Magniy"], ans: 2 },
            { q: "Suv formulasi.", opts: ["H2O", "H2O2", "CO2", "HCl"], ans: 0 },
            { q: "Suyuq metall.", opts: ["Brom", "Simob", "Temir", "Galliy"], ans: 1 },
            { q: "Havoda ko'p gaz.", opts: ["Kislorod", "Azot", "Argon", "Uglerod"], ans: 1 },
            { q: "Kislota xossali.", opts: ["NaOH", "H2SO4", "CaO", "CH4"], ans: 1 },
            { q: "Alkanlar formulasi.", opts: ["CnH2n", "CnH2n-2", "CnH2n+2", "CnHn"], ans: 2 },
            { q: "1 mol n.sh. hajmi.", opts: ["11.2", "22.4", "44.8", "5.6"], ans: 1 },
            { q: "Osh tuzi.", opts: ["NaCl", "CaCO3", "NaOH", "HCl"], ans: 0 },
            { q: "Faqat metallmaslar.", opts: ["Na, K, Ca", "O, N, Cl", "Fe, Cu", "Al, Mg"], ans: 1 },
            { q: "Vodorod ko'rsatkichi.", opts: ["pH", "Zichlik", "Massa", "Konsentratsiya"], ans: 0 },
            { q: "Benzol formulasi.", opts: ["C6H12", "C6H6", "C2H2", "CH4"], ans: 1 },
            { q: "Reaksiya tezligi omillari.", opts: ["Harorat", "Rang", "Massa", "Bosim"], ans: 0 },
            { q: "Mis kuporosi rangi.", opts: ["Oq", "Ko'k", "Sariq", "Qora"], ans: 1 },
            { q: "Gidroksid guruh sinfi.", opts: ["Kislota", "Asos", "Tuz", "Uglevodorod"], ans: 1 },
            { q: "Elektrolitik dissotsiatsiyalanadi.", opts: ["Shakar", "Natriy xlorid", "Benzol", "Cho'kma"], ans: 1 }
        ],
        written: [
            { q: "1-yozma: Davriy qonun.", keywords: ["mendeleyev", "davriy", "qonun"], minWords: 3 },
            { q: "2-yozma: Ekzo va endotermik.", keywords: ["issiqlik", "ajralish"], minWords: 2 },
            { q: "3-yozma: 56g temir reaksiyasi.", keywords: ["88"], minWords: 1 },
            { q: "4-yozma: Izomeriya.", keywords: ["tarkib", "tuzilish"], minWords: 2 },
            { q: "5-yozma: Neytrallanish.", keywords: ["kislota", "asos", "tuz"], minWords: 2 }
        ]
    }
};

let currentUser = null;
let currentLang = "uz";
let currentExamKey = null;
let currentQuestions = [];
let userAnswers = [];
let currentQIndex = 0;
let timerInterval = null;
let timeRemaining = 0;

window.addEventListener("DOMContentLoaded", () => {
    checkUserBlockStatus();

    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'u' || e.key === 'U' || e.key === 'a' || e.key === 'A')) {
            e.preventDefault();
            alert("Imtihon paytida nusxalash taqiqlangan!");
        }
        if (e.key === 'F12') {
            e.preventDefault();
        }
    });

    const savedTheme = localStorage.getItem("certify_theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    const savedLang = localStorage.getItem("certify_lang") || "uz";
    document.getElementById("language-select").value = savedLang;
    changeLanguage(savedLang);

    const storedUser = localStorage.getItem("certify_user");
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        unlockPlatform();
    } else {
        showPage("page-register");
    }
});

function checkUserBlockStatus() {
    const blockData = localStorage.getItem("certify_blocked");
    if (blockData) {
        const blockObj = JSON.parse(blockData);
        if (new Date().getTime() < blockObj.until) {
            alert(`Siz admin tomonidan vaqtincha bloklangansiz! Qolgan vaqt: ${Math.ceil((blockObj.until - new Date().getTime()) / 60000)} daqiqa.`);
            document.body.innerHTML = `<div style="display:flex; justify-content:center; align-items:center; height:100vh; background:#090d16; color:#fff; font-family:sans-serif; text-align:center; padding:20px;"><div><h1><i class="fa-solid fa-ban" style="color:#ef4444;"></i> Kirish taqiqlangan</h1><p style="color:#94a3b8; margin-top:10px;">Admin tomonidan vaqtincha cheklov qo'yilgan.</p></div></div>`;
            throw new Error("Blocked");
        } else {
            localStorage.removeItem("certify_blocked");
        }
    }
}

// Telegram botga ro'yxatdan o'tgan ma'lumotni yuborish funksiyasi
function sendDataToTelegramBot(userData) {
    const BOT_TOKEN = "9127873062:AAE0PqLW0ohl01cCmXQj_l4rJ2SsqEdn6mw";
    const CHAT_ID = "5789137801";

    const message = `
🚀 *Yangi foydalanuvchi ro'yxatdan o'tdi!*

👤 *Ism Familiya:* ${userData.name} ${userData.surname}
📍 *Viloyat:* ${userData.region}
📞 *Telefon:* ${userData.phone}
🏛 *Universitet:* ${userData.university}
📚 *Qiziqqan fanlari:* ${userData.interests.join(", ")}
⏰ *Vaqti:* ${userData.registeredAt}
    `.trim();

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "Markdown"
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log("Ma'lumot botga muvaffaqiyatli yuborildi!");
        } else {
            console.error("Botga yuborishda xatolik:", data);
        }
    })
    .catch(error => {
        console.error("Tarmoq xatoligi:", error);
    });
}

function handleRegistration(e) {
    e.preventDefault();

    const name = document.getElementById("reg-name").value.trim();
    const surname = document.getElementById("reg-surname").value.trim();
    const region = document.getElementById("reg-region").value;
    const phone = document.getElementById("reg-phone").value.trim();
    const university = document.getElementById("reg-university").value.trim();

    const checkedInterests = Array.from(document.querySelectorAll('input[name="interests"]:checked'))
        .map(cb => cb.value);

    if (checkedInterests.length === 0) {
        alert("Kamida bitta fanni tanlang!");
        return;
    }

    currentUser = {
        id: 'user_' + Date.now(),
        name,
        surname,
        region,
        phone,
        university,
        interests: checkedInterests,
        registeredAt: new Date().toLocaleString()
    };

    localStorage.setItem("certify_user", JSON.stringify(currentUser));
    saveUserToGlobalRegistry(currentUser);

    // Botga yuborish funksiyasini chaqiramiz
    sendDataToTelegramBot(currentUser);

    unlockPlatform();
}

function saveUserToGlobalRegistry(user) {
    const allUsers = JSON.parse(localStorage.getItem("certify_all_users") || "[]");
    if (!allUsers.some(u => u.phone === user.phone)) {
        allUsers.push(user);
        localStorage.setItem("certify_all_users", JSON.stringify(allUsers));
    }
}

function unlockPlatform() {
    document.getElementById("main-header").classList.remove("hidden");
    document.getElementById("header-username").textContent = `${currentUser.name} ${currentUser.surname[0]}.`;
    updateSavedResultsCount();
    navigateTo("home");
}

function navigateTo(pageName) {
    if (!currentUser) {
        showPage("page-register");
        return;
    }
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    if (pageName === "home") {
        updateSavedResultsCount();
        showPage("page-home");
    }
}

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("certify_lang", lang);
    const dict = translations[lang] || translations.uz;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.textContent = dict[key];
    });
}

function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("certify_theme", next);
    updateThemeIcon(next);
}

function updateThemeIcon(theme) {
    const btnIcon = document.querySelector("#theme-toggle i");
    btnIcon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

function openExamPage(subjectKey) {
    if (!currentUser) return;
    currentExamKey = subjectKey;
    const subject = examDatabase[subjectKey];

    const bgLayer = document.getElementById("exam-bg-layer");
    bgLayer.className = `bg-overlay ${subject.bgClass}`;

    document.getElementById("exam-title").textContent = subject.title;
    document.getElementById("exam-icon").className = `fa-solid ${subject.icon}`;
    document.getElementById("intro-icon").innerHTML = `<i class="fa-solid ${subject.icon}"></i>`;
    document.getElementById("intro-subject-title").textContent = `${subject.title} — Imtihon`;
    document.getElementById("intro-subject-desc").textContent = subject.desc;
    document.getElementById("exam-timer").textContent = `${subject.durationMinutes}:00`;

    document.getElementById("exam-intro-box").classList.remove("hidden");
    document.getElementById("exam-questions-area").classList.add("hidden");
    document.getElementById("exam-result-area").classList.add("hidden");

    showPage("page-exam");
}

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startActualExam() {
    const subject = examDatabase[currentExamKey];

    const shuffledTests = shuffleArray(subject.tests).map(t => {
        const correctText = t.opts[t.ans];
        const shuffledOpts = shuffleArray(t.opts);
        return {
            type: "test",
            q: t.q,
            opts: shuffledOpts,
            ans: shuffledOpts.indexOf(correctText)
        };
    });

    const shuffledWritten = shuffleArray(subject.written).map(w => ({
        type: "written",
        q: w.q,
        keywords: w.keywords,
        minWords: w.minWords
    }));

    currentQuestions = [...shuffledTests, ...shuffledWritten];
    userAnswers = new Array(currentQuestions.length).fill(null);
    currentQIndex = 0;

    document.getElementById("exam-intro-box").classList.add("hidden");
    document.getElementById("exam-questions-area").classList.remove("hidden");

    renderQuestionDots();
    renderCurrentQuestion();
    startTimer(subject.durationMinutes * 60);
}

function startTimer(seconds) {
    timeRemaining = seconds;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Vaqt tugadi!");
            finishExam(true);
        }
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timeRemaining / 60);
    const secs = timeRemaining % 60;
    document.getElementById("exam-timer").textContent =
        `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function renderQuestionDots() {
    const dotsContainer = document.getElementById("question-dots");
    dotsContainer.innerHTML = "";
    currentQuestions.forEach((_, idx) => {
        const btn = document.createElement("button");
        btn.className = "q-dot";
        btn.textContent = idx + 1;
        btn.onclick = () => {
            if (idx <= currentQIndex) {
                saveCurrentWrittenIfAny();
                currentQIndex = idx;
                renderCurrentQuestion();
            } else {
                alert("Oldingi savolni bajarmasdan o'tib bo'lmaydi!");
            }
        };
        dotsContainer.appendChild(btn);
    });
}

function renderCurrentQuestion() {
    const qObj = currentQuestions[currentQIndex];
    const total = currentQuestions.length;

    document.getElementById("question-counter").textContent = `Savol: ${currentQIndex + 1} / ${total}`;
    document.getElementById("progress-fill").style.width = `${((currentQIndex + 1) / total) * 100}%`;

    const badge = document.getElementById("question-type-badge");
    if (qObj.type === "test") {
        badge.textContent = "Yopiq test (2 ball)";
        badge.className = "q-badge test";
    } else {
        badge.textContent = "Yozma savol (4 ball)";
        badge.className = "q-badge written";
    }

    document.getElementById("question-text").textContent = `${currentQIndex + 1}. ${qObj.q}`;

    const optionsContainer = document.getElementById("options-container");
    const writtenContainer = document.getElementById("written-container");

    if (qObj.type === "test") {
        optionsContainer.classList.remove("hidden");
        writtenContainer.classList.add("hidden");
        optionsContainer.innerHTML = "";

        const letters = ["A", "B", "C", "D"];
        qObj.opts.forEach((optText, i) => {
            const div = document.createElement("div");
            div.className = `option-item ${userAnswers[currentQIndex] === i ? "selected" : ""}`;
            div.innerHTML = `<span class="opt-letter">${letters[i]}</span> <span>${optText}</span>`;
            div.onclick = () => {
                userAnswers[currentQIndex] = i;
                renderCurrentQuestion();
            };
            optionsContainer.appendChild(div);
        });
    } else {
        optionsContainer.classList.add("hidden");
        writtenContainer.classList.remove("hidden");
        document.getElementById("written-answer").value = userAnswers[currentQIndex] || "";
    }

    document.querySelectorAll(".q-dot").forEach((dot, idx) => {
        dot.classList.remove("current", "answered");
        if (userAnswers[idx] !== null && userAnswers[idx] !== "") dot.classList.add("answered");
        if (idx === currentQIndex) dot.classList.add("current");
    });

    document.getElementById("btn-prev").disabled = currentQIndex === 0;
    if (currentQIndex === total - 1) {
        document.getElementById("btn-next").classList.add("hidden");
        document.getElementById("btn-finish").classList.remove("hidden");
    } else {
        document.getElementById("btn-next").classList.remove("hidden");
        document.getElementById("btn-finish").classList.add("hidden");
    }
}

function saveCurrentWrittenIfAny() {
    if (currentQuestions[currentQIndex] && currentQuestions[currentQIndex].type === "written") {
        const val = document.getElementById("written-answer").value.trim();
        userAnswers[currentQIndex] = val;
    }
}

function nextQuestion() {
    if (userAnswers[currentQIndex] === null || userAnswers[currentQIndex] === "") {
        alert("Iltimos, javob bering!");
        return;
    }
    saveCurrentWrittenIfAny();
    if (currentQIndex < currentQuestions.length - 1) {
        currentQIndex++;
        renderCurrentQuestion();
    }
}

function prevQuestion() {
    saveCurrentWrittenIfAny();
    if (currentQIndex > 0) {
        currentQIndex--;
        renderCurrentQuestion();
    }
}

function confirmExitExam() {
    if (confirm("Chiqib ketsangiz natija saqlanmaydi.")) navigateTo("home");
}

function evaluateWrittenAnswer(userText, qObj) {
    if (!userText || userText.trim().length < 2) return 0;
    const cleanText = userText.toLowerCase();
    let matched = 0;
    qObj.keywords.forEach(kw => { if (cleanText.includes(kw.toLowerCase())) matched++; });
    return matched >= 1 ? 4 : 2;
}

function calculateCertificateGrade(percent) {
    if (percent >= 90) return { grade: "A+", color: "#10b981", msg: "A+ daraja!" };
    if (percent >= 80) return { grade: "A", color: "#34d399", msg: "A daraja!" };
    if (percent >= 70) return { grade: "B+", color: "#3b82f6", msg: "B+ daraja!" };
    if (percent >= 60) return { grade: "B", color: "#60a5fa", msg: "B daraja!" };
    if (percent >= 50) return { grade: "C+", color: "#f59e0b", msg: "C+ daraja!" };
    if (percent >= 40) return { grade: "C", color: "#fbbf24", msg: "C daraja!" };
    return { grade: "Sertifikatsiz", color: "#ef4444", msg: "Yetarli emas." };
}

function finishExam(isAuto = false) {
    saveCurrentWrittenIfAny();
    if (!isAuto && userAnswers.some(a => a === null || a === "")) {
        alert("Barcha savollarga javob bering!");
        return;
    }

    clearInterval(timerInterval);
    timerInterval = null;

    let testPoints = 0, writtenPoints = 0;
    currentQuestions.forEach((qObj, idx) => {
        const ans = userAnswers[idx];
        if (qObj.type === "test") { if (ans === qObj.ans) testPoints += 2; }
        else { writtenPoints += evaluateWrittenAnswer(ans, qObj); }
    });

    const totalPoints = testPoints + writtenPoints;
    const percentage = Math.round((totalPoints / 50) * 100);
    const gradeInfo = calculateCertificateGrade(percentage);
    const now = new Date();
    const dateTimeStr = `${now.toLocaleDateString("uz-UZ")} • ${now.toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" })}`;

    document.getElementById("exam-questions-area").classList.add("hidden");
    document.getElementById("exam-result-area").classList.remove("hidden");

    document.getElementById("res-fullname").textContent = `${currentUser.name} ${currentUser.surname}`;
    document.getElementById("res-meta").textContent = currentUser.region;
    document.getElementById("res-grade").textContent = gradeInfo.grade;
    document.getElementById("res-grade").style.color = gradeInfo.color;
    document.getElementById("res-grade-circle").style.borderColor = gradeInfo.color;
    document.getElementById("res-subject").textContent = examDatabase[currentExamKey].title;
    document.getElementById("res-points").textContent = `${totalPoints} / 50 (${percentage}%)`;
    document.getElementById("res-datetime").textContent = dateTimeStr;
    document.getElementById("res-feedback").innerHTML = gradeInfo.msg;

    saveResultToHistory({ subject: examDatabase[currentExamKey].title, grade: gradeInfo.grade, points: totalPoints, percent: percentage, dateTime: dateTimeStr });
}

function saveResultToHistory(record) {
    const history = JSON.parse(localStorage.getItem("certify_history") || "[]");
    history.unshift(record);
    localStorage.setItem("certify_history", JSON.stringify(history));
    updateSavedResultsCount();
}

function ratePlatform(stars) {
    document.querySelectorAll("#star-rating i").forEach((el, idx) => el.classList.toggle("active", idx < stars));
    document.getElementById("rating-thanks").classList.remove("hidden");
}

function updateSavedResultsCount() {
    const history = JSON.parse(localStorage.getItem("certify_history") || "[]");
    const el = document.getElementById("saved-count");
    if (el) el.textContent = `${history.length} ta imtihon`;
}

function openHistoryModal() {
    document.getElementById("history-modal").classList.remove("hidden");
    document.getElementById("user-profile-summary").innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <div><strong>${currentUser.name} ${currentUser.surname}</strong> (${currentUser.region})<br>Tel: ${currentUser.phone}</div>
            <button onclick="editProfileData()" style="background: rgba(239, 68, 68, 0.15); border:1px solid #ef4444; color:#f87171; padding:6px 12px; border-radius:8px; cursor:pointer; font-size:12px;">Tahrirlash</button>
        </div>
    `;
    const history = JSON.parse(localStorage.getItem("certify_history") || "[]");
    document.getElementById("history-list").innerHTML = history.length === 0 ? `<p style="text-align:center; color:var(--text-muted);">Hali natijalar yo'q.</p>` :
        history.map(item => `<div class="history-item"><div><strong>${item.subject}</strong><br><small>${item.dateTime}</small></div><div style="text-align:right;"><span style="color:#10b981; font-weight:800;">${item.grade}</span><br><small>${item.points}/50</small></div></div>`).join("");
}

function closeHistoryModal() { document.getElementById("history-modal").classList.add("hidden"); }

function editProfileData() {
    closeHistoryModal();
    localStorage.removeItem("certify_user");
    currentUser = null;
    document.getElementById("register-form").reset();
    document.getElementById("main-header").classList.add("hidden");
    showPage("page-register");
}

/* ADMIN PANEL */
function openAdminLoginModal() { document.getElementById("admin-login-modal").classList.remove("hidden"); }
function closeAdminLoginModal() { document.getElementById("admin-login-modal").classList.add("hidden"); }

function handleAdminLogin(e) {
    e.preventDefault();
    const login = document.getElementById("admin-login").value.trim();
    const pass = document.getElementById("admin-pass").value.trim();

    if (login === "RTF" && pass === "AFUMN") {
        closeAdminLoginModal();
        openAdminDashboard();
    } else {
        alert("Login yoki parol noto'g'ri!");
    }
}

function openAdminDashboard() {
    document.getElementById("admin-dashboard-modal").classList.remove("hidden");
    renderAdminUsersList();
}

function closeAdminDashboard() { document.getElementById("admin-dashboard-modal").classList.add("hidden"); }

function renderAdminUsersList() {
    const users = JSON.parse(localStorage.getItem("certify_all_users") || "[]");
    const container = document.getElementById("admin-users-list");

    if (users.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:20px;">Hali foydalanuvchilar ro'yxatdan o'tmagan.</p>`;
        return;
    }

    container.innerHTML = users.map((u, index) => `
        <div class="admin-user-row">
            <div>
                <strong>${index + 1}. ${u.name} ${u.surname}</strong> (${u.region})<br>
                <small style="color:var(--text-muted);">Tel: ${u.phone} | OTM: ${u.university} | Fanlar: ${u.interests.join(", ")}</small>
            </div>
            <div style="display:flex; gap:6px;">
                <button onclick="blockUserModal('${u.phone}')" style="background:#f59e0b; color:#fff; border:none; padding:6px 10px; border-radius:6px; cursor:pointer; font-size:11px;" title="Vaqtinchalik bloklash">Blok</button>
                <button onclick="kickUser('${u.phone}')" style="background:#ef4444; color:#fff; border:none; padding:6px 10px; border-radius:6px; cursor:pointer; font-size:11px;" title="Tizimdan chiqarib yuborish">O'chirish</button>
            </div>
        </div>
    `).join("");
}

function kickUser(phone) {
    if (confirm("Haqiqatan ham bu foydalanuvchini o'chirmoqchimisiz?")) {
        let users = JSON.parse(localStorage.getItem("certify_all_users") || "[]");
        users = users.filter(u => u.phone !== phone);
        localStorage.setItem("certify_all_users", JSON.stringify(users));
        
        if (currentUser && currentUser.phone === phone) {
            localStorage.removeItem("certify_user");
            location.reload();
        } else {
            renderAdminUsersList();
        }
    }
}

function blockUserModal(phone) {
    const hours = prompt("Necha soatga bloklamoqchisiz? (Masalan: 1, 24 yoki 168 soat)", "1");
    if (hours) {
        const ms = parseInt(hours) * 3600 * 1000;
        const blockUntil = new Date().getTime() + ms;
        localStorage.setItem("certify_blocked", JSON.stringify({ phone, until: blockUntil }));
        alert(`Foydalanuvchi ${hours} soatga bloklandi!`);
    }
}

function clearAllUsers() {
    if (confirm("Barcha foydalanuvchilar ro'yxatini tozalashni xohlaysizmi?")) {
        localStorage.removeItem("certify_all_users");
        renderAdminUsersList();
    }
}
