import Image from 'next/image';
import { LOCALES, type Locale } from '@/lib/locales';
import { SiteFooter, SiteHeader } from './SiteChrome';

const content = {
  en: {
    kicker: 'Top-down survival crafting · iPhone, iPad & Mac',
    summary: 'Mine and cut timber by day. Build a power grid, automate production, and defend the obelisk when night brings the horde.',
    watch: 'Explore the game',
    actual: 'Actual gameplay',
    heroCaption: 'Blood moon · Night 20',
    status: 'Coming to the App Store',
    platform: 'iPhone / iPad / Mac',
    languages: 'Game and site · EN / RU / DE / FR / ES / TR',
    introIndex: '01 / The game',
    introTitle: 'One map. Two shifts.',
    dayTitle: 'Day',
    dayText: 'Scout the world, mine mineral veins, fell trees, craft equipment, and lay out a base you can actually run.',
    nightTitle: 'Night',
    nightText: 'Nests send growing waves toward the obelisk. Break the nests to thin the horde, or build enough firepower to hold.',
    dayCaption: 'Daylight · Build and prepare',
    nightCaption: 'Blood moon · Hold the perimeter',
    systemIndex: '02 / The systems',
    systemTitle: 'The base is a machine.',
    features: [
      { number: '47', unit: 'building types', title: 'Build a working base', text: 'Connect generators, batteries, lamps, production machines, and six kinds of turrets through an energy network.' },
      { number: '59', unit: 'technologies across five eras', title: 'Advance through five eras', text: 'Start with hand tools and timber. Reach electricity, powered equipment, and nanotech without skipping the work between.' },
      { number: '08', unit: 'every eighth night, the Queen arrives', title: 'Adapt to the world', text: 'Rain, storms, fog, meteors, and auroras affect the simulation. Special nights change the fight.' },
    ],
    powerCaption: 'Power network · Machines share generation and storage',
    friendsIndex: '03 / Play together',
    friendsTitle: 'One world. Up to three players.',
    friendsText: 'Through Game Center, two or three players defend the same world and base on iPhone, iPad, and Mac. Buildings and storage are shared; inventory and equipment stay personal. Every player needs the Full Version.',
    friendsCaption: 'Game Center · Two or three players · One shared base',
    progressIndex: '04 / Progression',
    progressTitle: 'From hand tools to a powered settlement.',
    progressText: 'Research opens new ways to gather, build, defend, and automate. The technology tree spans five distinct eras, and the workshop turns raw materials into weapons, armor, and suit modules.',
    techCaption: 'Technology tree · Electricity era',
    craftCaption: 'Workbench · Equipment crafting',
    releaseIndex: '05 / Release',
    releaseTitle: 'Play the first day and night free.',
    releaseText: 'A single purchase unlocks the complete game: every night, era, technology, building, weapon, and armor set. At release, the App Store will show the price for your region.',
    releaseStatus: 'App Store release · Coming soon',
  },
  ru: {
    kicker: 'Выживание и крафт с видом сверху · iPhone, iPad и Mac',
    summary: 'Днём добывай ресурсы и строй энергосеть. Ночью автоматизируй оборону и защищай обелиск от нарастающих волн тварей.',
    watch: 'Посмотреть игру',
    actual: 'Настоящий кадр игры',
    heroCaption: 'Кровавая луна · Ночь 20',
    status: 'Готовится к выпуску в App Store',
    platform: 'iPhone / iPad / Mac',
    languages: 'Игра и сайт · RU / EN / DE / FR / ES / TR',
    introIndex: '01 / Игра',
    introTitle: 'Одна карта. Две смены.',
    dayTitle: 'День',
    dayText: 'Разведывай мир, разрабатывай жилы, вали лес, собирай снаряжение и строй базу, которая действительно работает.',
    nightTitle: 'Ночь',
    nightText: 'Гнёзда посылают к обелиску всё более сильные волны. Уничтожай гнёзда или готовь оборону, способную выдержать натиск.',
    dayCaption: 'День · Стройка и подготовка',
    nightCaption: 'Кровавая луна · Оборона периметра',
    systemIndex: '02 / Системы',
    systemTitle: 'База работает как машина.',
    features: [
      { number: '47', unit: 'типов построек', title: 'Построй рабочую базу', text: 'Соединяй генераторы, аккумуляторы, свет, станки и шесть видов турелей в единую энергосеть.' },
      { number: '59', unit: 'технологий в пяти эпохах', title: 'Пройди пять эпох', text: 'Начни с ручных инструментов и дерева. Доберись до электричества, техники и нанотехнологий без пустых перескоков.' },
      { number: '08', unit: 'каждую восьмую ночь приходит матка', title: 'Подстраивайся под мир', text: 'Дождь, грозы, туман, метеоры и сияние влияют на симуляцию. Особые ночи меняют правила боя.' },
    ],
    powerCaption: 'Энергосеть · Машины делят генерацию и запас',
    friendsIndex: '03 / Игра вместе',
    friendsTitle: 'Один мир. До трёх игроков.',
    friendsText: 'Через Game Center два или три игрока защищают один общий мир и базу на iPhone, iPad и Mac. Постройки и склад общие, инвентарь и экипировка у каждого свои. Полная версия нужна каждому игроку.',
    friendsCaption: 'Game Center · Два или три игрока · Одна общая база',
    progressIndex: '04 / Развитие',
    progressTitle: 'От ручного труда до механизированного поселения.',
    progressText: 'Исследования открывают новые способы добывать, строить, обороняться и автоматизировать производство. Пять эпох ведут от простых орудий к электричеству, а верстак превращает сырьё в оружие, броню и модули костюма.',
    techCaption: 'Дерево технологий · Эпоха электричества',
    craftCaption: 'Верстак · Создание снаряжения',
    releaseIndex: '05 / Выпуск',
    releaseTitle: 'Первый день и первая ночь — бесплатно.',
    releaseText: 'Одна покупка открывает полную игру: все ночи, эпохи, технологии, постройки, оружие и броню. После выпуска App Store покажет цену для вашего региона.',
    releaseStatus: 'Выпуск в App Store · Скоро',
  },
  de: {
    kicker: 'Survival-Crafting aus der Vogelperspektive · iPhone, iPad & Mac',
    summary: 'Baue tagsüber Erz ab und fälle Bäume. Errichte ein Stromnetz, automatisiere die Produktion und verteidige den Obelisken, wenn nachts die Horde kommt.',
    watch: 'Das Spiel entdecken',
    actual: 'Echtes Gameplay',
    heroCaption: 'Blutmond · Nacht 20',
    status: 'Bald im App Store',
    platform: 'iPhone / iPad / Mac',
    languages: 'Spiel und Website · DE / EN / RU / FR / ES / TR',
    introIndex: '01 / Das Spiel',
    introTitle: 'Eine Karte. Zwei Rhythmen.',
    dayTitle: 'Tag',
    dayText: 'Erkunde die Welt, baue Vorkommen ab, fälle Bäume, fertige Ausrüstung und errichte eine Basis, deren Systeme wirklich ineinandergreifen.',
    nightTitle: 'Nacht',
    nightText: 'Die Nester schicken immer stärkere Wellen zum Obelisken. Zerstöre die Nester, um die Horde auszudünnen, oder baue genug Feuerkraft auf, um standzuhalten.',
    dayCaption: 'Tageslicht · Bauen und vorbereiten',
    nightCaption: 'Blutmond · Den Perimeter halten',
    systemIndex: '02 / Die Systeme',
    systemTitle: 'Die Basis ist eine Maschine.',
    features: [
      { number: '47', unit: 'Gebäudetypen', title: 'Baue eine funktionierende Basis', text: 'Verbinde Generatoren, Batterien, Lampen, Produktionsmaschinen und sechs Geschütztypen zu einem Energienetz.' },
      { number: '59', unit: 'Technologien in fünf Epochen', title: 'Führe deine Basis durch fünf Epochen', text: 'Beginne mit Handwerkzeugen und Holz. Arbeite dich über Elektrizität und Maschinen bis zur Nanotechnologie vor, ohne die Schritte dazwischen zu überspringen.' },
      { number: '08', unit: 'In jeder achten Nacht erscheint die Königin', title: 'Passe dich der Welt an', text: 'Regen, Stürme, Nebel, Meteore und Polarlichter beeinflussen die Simulation. Besondere Nächte verändern den Kampf.' },
    ],
    powerCaption: 'Energienetz · Maschinen teilen Stromerzeugung und Speicher',
    friendsIndex: '03 / Gemeinsam spielen',
    friendsTitle: 'Eine Welt. Bis zu drei Spieler.',
    friendsText: 'Über Game Center verteidigen zwei oder drei Spieler auf iPhone, iPad und Mac dieselbe Welt und dieselbe Basis. Gebäude und Lager werden geteilt, Inventar und Ausrüstung bleiben persönlich. Jeder Spieler braucht die Vollversion.',
    friendsCaption: 'Game Center · Zwei oder drei Spieler · Eine gemeinsame Basis',
    progressIndex: '04 / Fortschritt',
    progressTitle: 'Von Handwerkzeugen zur elektrifizierten Siedlung.',
    progressText: 'Forschung eröffnet neue Wege zum Sammeln, Bauen, Verteidigen und Automatisieren. Der Technologiebaum umfasst fünf klar getrennte Epochen, und an der Werkbank werden aus Rohstoffen Waffen, Rüstungen und Anzugmodule.',
    techCaption: 'Technologiebaum · Epoche der Elektrizität',
    craftCaption: 'Werkbank · Ausrüstung fertigen',
    releaseIndex: '05 / Veröffentlichung',
    releaseTitle: 'Spiele den ersten Tag und die erste Nacht kostenlos.',
    releaseText: 'Ein einmaliger Kauf schaltet das vollständige Spiel frei: alle Nächte, Epochen, Technologien, Gebäude, Waffen und Rüstungssets. Zur Veröffentlichung zeigt der App Store den Preis für deine Region an.',
    releaseStatus: 'Veröffentlichung im App Store · Demnächst',
  },
  fr: {
    kicker: 'Survie et artisanat en vue du dessus · iPhone, iPad et Mac',
    summary: 'Le jour, extrayez du minerai et abattez des arbres. Bâtissez un réseau électrique, automatisez la production et défendez l’obélisque quand la horde arrive à la nuit tombée.',
    watch: 'Découvrir le jeu',
    actual: 'Capture du jeu',
    heroCaption: 'Lune de sang · Nuit 20',
    status: 'Bientôt sur l’App Store',
    platform: 'iPhone / iPad / Mac',
    languages: 'Jeu et site · FR / EN / RU / DE / ES / TR',
    introIndex: '01 / Le jeu',
    introTitle: 'Une carte. Deux rythmes.',
    dayTitle: 'Jour',
    dayText: 'Explorez le monde, exploitez les filons, abattez des arbres, fabriquez votre équipement et aménagez une base réellement fonctionnelle.',
    nightTitle: 'Nuit',
    nightText: 'Les nids envoient des vagues toujours plus puissantes vers l’obélisque. Détruisez-les pour affaiblir la horde ou déployez assez de puissance de feu pour tenir.',
    dayCaption: 'Plein jour · Construire et se préparer',
    nightCaption: 'Lune de sang · Tenir le périmètre',
    systemIndex: '02 / Les systèmes',
    systemTitle: 'La base est une machine.',
    features: [
      { number: '47', unit: 'types de bâtiments', title: 'Construisez une base fonctionnelle', text: 'Reliez générateurs, accumulateurs, lampes, machines de production et six types de tourelles dans un même réseau électrique.' },
      { number: '59', unit: 'technologies réparties sur cinq ères', title: 'Progressez à travers cinq ères', text: 'Commencez avec des outils manuels et du bois, puis atteignez l’électricité, les machines et les nanotechnologies sans brûler les étapes.' },
      { number: '08', unit: 'toutes les huit nuits, la reine arrive', title: 'Adaptez-vous au monde', text: 'La pluie, les orages, le brouillard, les météores et les aurores modifient les conditions de jeu. Les nuits spéciales transforment le combat.' },
    ],
    powerCaption: 'Réseau électrique · Production et stockage partagés entre les machines',
    friendsIndex: '03 / Jouer ensemble',
    friendsTitle: 'Un monde. Jusqu’à trois joueurs.',
    friendsText: 'Via Game Center, deux ou trois joueurs défendent le même monde et la même base sur iPhone, iPad et Mac. Les bâtiments et le stockage sont partagés, chacun garde son inventaire et son équipement. Chaque joueur doit posséder la Version complète.',
    friendsCaption: 'Game Center · Deux ou trois joueurs · Une base commune',
    progressIndex: '04 / Progression',
    progressTitle: 'Des outils manuels à une base électrifiée.',
    progressText: 'La recherche ouvre de nouvelles façons de récolter, construire, vous défendre et automatiser la production. L’arbre technologique couvre cinq ères distinctes, tandis que l’établi transforme les matières premières en armes, armures et modules de combinaison.',
    techCaption: 'Arbre technologique · Ère de l’électricité',
    craftCaption: 'Établi · Fabrication d’équipement',
    releaseIndex: '05 / Sortie',
    releaseTitle: 'Le premier jour et la première nuit sont gratuits.',
    releaseText: 'Un achat intégré unique et non consommable débloque le jeu complet : toutes les nuits, les ères, les technologies, les bâtiments, les armes et les armures. Lors de la sortie, l’App Store affichera le prix dans votre région.',
    releaseStatus: 'Sortie sur l’App Store · Prochainement',
  },
  es: {
    kicker: 'Supervivencia y fabricación con vista cenital · iPhone, iPad y Mac',
    summary: 'Extrae minerales y tala árboles durante el día. Construye una red eléctrica, automatiza la producción y defiende el obelisco cuando la noche trae la horda.',
    watch: 'Descubre el juego',
    actual: 'Imagen real del juego',
    heroCaption: 'Luna de sangre · Noche 20',
    status: 'Próximamente en el App Store',
    platform: 'iPhone / iPad / Mac',
    languages: 'Juego y sitio web · ES / EN / RU / DE / FR / TR',
    introIndex: '01 / El juego',
    introTitle: 'Un mapa. Dos ritmos.',
    dayTitle: 'Día',
    dayText: 'Explora el mundo, extrae vetas de mineral, tala árboles, fabrica equipo y organiza una base que funcione de verdad.',
    nightTitle: 'Noche',
    nightText: 'Los nidos envían oleadas cada vez mayores hacia el obelisco. Destruye los nidos para reducir la horda o reúne suficiente potencia de fuego para resistir.',
    dayCaption: 'Luz del día · Construye y prepárate',
    nightCaption: 'Luna de sangre · Defiende el perímetro',
    systemIndex: '02 / Los sistemas',
    systemTitle: 'La base es una máquina.',
    features: [
      { number: '47', unit: 'tipos de edificios', title: 'Construye una base funcional', text: 'Conecta generadores, baterías, lámparas, máquinas de producción y seis tipos de torretas mediante una red eléctrica.' },
      { number: '59', unit: 'tecnologías repartidas en cinco eras', title: 'Avanza por cinco eras', text: 'Empieza con herramientas manuales y madera. Llega a la electricidad, los equipos motorizados y la nanotecnología sin saltarte el trabajo necesario.' },
      { number: '08', unit: 'cada ocho noches llega la reina', title: 'Adáptate al mundo', text: 'La lluvia, las tormentas, la niebla, los meteoritos y las auroras afectan a la simulación. Las noches especiales cambian el combate.' },
    ],
    powerCaption: 'Red eléctrica · Las máquinas comparten generación y almacenamiento',
    friendsIndex: '03 / Juega en equipo',
    friendsTitle: 'Un mundo. Hasta tres jugadores.',
    friendsText: 'A través de Game Center, dos o tres jugadores defienden el mismo mundo y la misma base en iPhone, iPad y Mac. Los edificios y el almacén se comparten; el inventario y el equipamiento son de cada jugador. Todos necesitan la Versión Completa.',
    friendsCaption: 'Game Center · Dos o tres jugadores · Una base compartida',
    progressIndex: '04 / Progresión',
    progressTitle: 'De las herramientas manuales a un asentamiento electrificado.',
    progressText: 'La investigación abre nuevas formas de recolectar recursos, construir, defender la base y automatizar la producción. El árbol tecnológico abarca cinco eras distintas y el banco de trabajo transforma materias primas en armas, armaduras y módulos para el traje.',
    techCaption: 'Árbol tecnológico · Era de la electricidad',
    craftCaption: 'Banco de trabajo · Fabricación de equipo',
    releaseIndex: '05 / Lanzamiento',
    releaseTitle: 'Juega gratis el primer día y la primera noche.',
    releaseText: 'Una única compra integrada no consumible desbloquea el juego completo: todas las noches, eras, tecnologías, edificios, armas y conjuntos de armadura. En el lanzamiento, el App Store mostrará el precio para tu región.',
    releaseStatus: 'Lanzamiento en el App Store · Próximamente',
  },
  tr: {
    kicker: 'Kuş bakışı hayatta kalma ve üretim · iPhone, iPad ve Mac',
    summary: 'Gündüz cevher çıkar ve ağaç kes. Bir enerji şebekesi kur, üretimi otomatikleştir ve gece yaratık sürüsü geldiğinde obeliski savun.',
    watch: 'Oyunu keşfet',
    actual: 'Gerçek oyun görüntüsü',
    heroCaption: 'Kanlı ay · 20. gece',
    status: 'Yakında App Store’da',
    platform: 'iPhone / iPad / Mac',
    languages: 'Oyun ve site · TR / EN / RU / DE / FR / ES',
    introIndex: '01 / Oyun',
    introTitle: 'Tek harita. İki vardiya.',
    dayTitle: 'Gündüz',
    dayText: 'Dünyayı keşfet, cevher damarlarını işlet, ağaçları kes, ekipman üret ve gerçekten işleyen bir üs kur.',
    nightTitle: 'Gece',
    nightText: 'Yuvalardan obeliske doğru giderek büyüyen dalgalar çıkar. Sürüyü zayıflatmak için yuvaları yok et veya saldırıya dayanacak kadar ateş gücü topla.',
    dayCaption: 'Gün ışığı · İnşa et ve hazırlan',
    nightCaption: 'Kanlı ay · Çevreyi savun',
    systemIndex: '02 / Sistemler',
    systemTitle: 'Üs bir makinedir.',
    features: [
      { number: '47', unit: 'yapı türü', title: 'İşleyen bir üs kur', text: 'Jeneratörleri, aküleri, lambaları, üretim makinelerini ve altı tür tareti bir enerji şebekesinde birbirine bağla.' },
      { number: '59', unit: 'beş çağa yayılan teknoloji', title: 'Beş çağ boyunca ilerle', text: 'El aletleri ve keresteyle başla. Aradaki emeği atlamadan elektriğe, motorlu ekipmana ve nanoteknolojiye ulaş.' },
      { number: '08', unit: 'her sekizinci gece kraliçe gelir', title: 'Dünyaya uyum sağla', text: 'Yağmur, fırtına, sis, meteorlar ve kutup ışıkları simülasyonu etkiler. Özel geceler savaşı değiştirir.' },
    ],
    powerCaption: 'Enerji şebekesi · Makineler üretim ve depolama kapasitesini paylaşır',
    friendsIndex: '03 / Birlikte oyna',
    friendsTitle: 'Tek dünya. Üç oyuncuya kadar.',
    friendsText: 'Game Center üzerinden iki ya da üç oyuncu iPhone, iPad ve Mac’te aynı dünyayı ve aynı üssü savunur. Yapılar ve depo ortaktır, envanter ve ekipman kişiseldir. Tam Sürüm her oyuncuda olmalıdır.',
    friendsCaption: 'Game Center · İki veya üç oyuncu · Tek ortak üs',
    progressIndex: '04 / İlerleme',
    progressTitle: 'El aletlerinden enerjiyle çalışan bir yerleşime.',
    progressText: 'Araştırma; toplamak, inşa etmek, savunmak ve otomatikleştirmek için yeni yollar açar. Teknoloji ağacı beş farklı çağa yayılır; tezgâh ise ham maddeleri silahlara, zırhlara ve giysi modüllerine dönüştürür.',
    techCaption: 'Teknoloji ağacı · Elektrik çağı',
    craftCaption: 'Tezgâh · Ekipman üretimi',
    releaseIndex: '05 / Çıkış',
    releaseTitle: 'İlk gündüzü ve ilk geceyi ücretsiz oyna.',
    releaseText: 'Tek seferlik, tüketilemeyen bir uygulama içi satın alım eksiksiz oyunun kilidini açar: tüm geceler, çağlar, teknolojiler, yapılar, silahlar ve zırh setleri. Çıkışta App Store bölgenize ait fiyatı gösterecek.',
    releaseStatus: 'App Store çıkışı · Yakında',
  },
};

const mediaCopy: Record<Locale, {
  schemaDescription: string;
  heroAlt: string;
  dayAlt: string;
  nightAlt: string;
  powerAlt: string;
  friendsAlt: string;
  techAlt: string;
  craftAlt: string;
}> = {
  en: {
    schemaDescription: 'A pixel-art survival crafting and base-defense game for iPhone, iPad, and Mac, with Game Center co-op for two or three players.',
    heroAlt: 'A fortified Wardflame base defending against a blood moon wave',
    dayAlt: 'A Wardflame base in daylight',
    nightAlt: 'Defending the base during a special night',
    powerAlt: 'Wardflame power network connecting the base machinery',
    friendsAlt: 'Three players defending one shared Wardflame world and base',
    techAlt: 'Wardflame technology tree',
    craftAlt: 'Crafting a weapon at the workbench',
  },
  ru: {
    schemaDescription: 'Пиксельная выживалка с крафтом и обороной базы для iPhone, iPad и Mac с совместной игрой через Game Center на двух или трёх игроков.',
    heroAlt: 'Укреплённая база Wardflame отражает волну кровавой луны',
    dayAlt: 'База Wardflame днём',
    nightAlt: 'Оборона базы в особую ночь',
    powerAlt: 'Энергосеть Wardflame соединяет базовые машины',
    friendsAlt: 'Три игрока защищают один общий мир и базу Wardflame',
    techAlt: 'Дерево технологий Wardflame',
    craftAlt: 'Создание оружия на верстаке',
  },
  de: {
    schemaDescription: 'Ein Pixel-Art-Spiel für iPhone, iPad und Mac rund um Überleben, Crafting und Basisverteidigung, mit Game-Center-Koop für zwei oder drei Spieler.',
    heroAlt: 'Eine befestigte Wardflame-Basis wehrt eine Welle während des Blutmonds ab',
    dayAlt: 'Eine Wardflame-Basis bei Tageslicht',
    nightAlt: 'Verteidigung der Basis in einer besonderen Nacht',
    powerAlt: 'Das Energienetz von Wardflame verbindet die Maschinen der Basis',
    friendsAlt: 'Drei Spieler verteidigen eine gemeinsame Welt und Basis in Wardflame',
    techAlt: 'Der Technologiebaum von Wardflame',
    craftAlt: 'Eine Waffe wird an der Werkbank gefertigt',
  },
  fr: {
    schemaDescription: 'Un jeu de survie, d’artisanat et de défense de base en pixel art pour iPhone, iPad et Mac, jouable à deux ou trois via Game Center.',
    heroAlt: 'Une base fortifiée de Wardflame repousse une vague pendant la lune de sang',
    dayAlt: 'Une base de Wardflame en plein jour',
    nightAlt: 'Défense de la base pendant une nuit spéciale',
    powerAlt: 'Le réseau électrique de Wardflame relie les machines de la base',
    friendsAlt: 'Trois joueurs défendent un monde et une base partagés dans Wardflame',
    techAlt: 'L’arbre technologique de Wardflame',
    craftAlt: 'Fabrication d’une arme à l’établi',
  },
  es: {
    schemaDescription: 'Un juego de supervivencia, fabricación y defensa de bases con gráficos pixel art para iPhone, iPad y Mac, con cooperativo para dos o tres jugadores mediante Game Center.',
    heroAlt: 'Una base fortificada de Wardflame resiste una oleada durante una luna de sangre',
    dayAlt: 'Una base de Wardflame a la luz del día',
    nightAlt: 'Defensa de la base durante una noche especial',
    powerAlt: 'La red eléctrica de Wardflame conecta las máquinas de la base',
    friendsAlt: 'Tres jugadores defienden un mundo y una base compartidos en Wardflame',
    techAlt: 'Árbol tecnológico de Wardflame',
    craftAlt: 'Fabricación de un arma en el banco de trabajo',
  },
  tr: {
    schemaDescription: 'iPhone, iPad ve Mac için piksel grafikli bir hayatta kalma, üretim ve üs savunma oyunu; Game Center üzerinden iki veya üç oyunculu ortak oyun sunar.',
    heroAlt: 'Wardflame’de tahkim edilmiş bir üs kanlı ay dalgasına karşı savunuluyor',
    dayAlt: 'Gün ışığında bir Wardflame üssü',
    nightAlt: 'Özel bir gecede üssü savunma',
    powerAlt: 'Wardflame enerji şebekesi üs makinelerini birbirine bağlıyor',
    friendsAlt: 'Üç oyuncu Wardflame’de aynı dünyayı ve üssü savunuyor',
    techAlt: 'Wardflame teknoloji ağacı',
    craftAlt: 'Tezgâhta silah üretimi',
  },
};

export function Landing({ locale }: { locale: Locale }) {
  const t = content[locale];
  const media = mediaCopy[locale];
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://wardflame.com/#website',
        url: 'https://wardflame.com/',
        name: 'Wardflame',
        alternateName: 'wardflame.com',
        inLanguage: [...LOCALES],
      },
      {
        '@type': ['VideoGame', 'SoftwareApplication'],
        '@id': 'https://wardflame.com/#game',
        name: 'Wardflame',
        url: 'https://wardflame.com/',
        description: media.schemaDescription,
        image: 'https://wardflame.com/media/night.png',
        applicationCategory: 'GameApplication',
        operatingSystem: ['iOS 17 or later', 'iPadOS 17 or later', 'macOS'],
        gamePlatform: ['iPhone', 'iPad', 'Mac'],
        genre: ['Survival', 'Crafting', 'Base defense'],
        inLanguage: ['en', 'ru', 'de', 'fr', 'es', 'tr'],
      },
    ],
  };

  return (
    <div lang={locale}>
      <SiteHeader locale={locale} />
      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="kicker">{t.kicker}</p>
            <h1 id="hero-title">Wardflame</h1>
            <p className="summary">{t.summary}</p>
            <a className="text-link" href="#game">{t.watch}<span aria-hidden="true">↘</span></a>
          </div>

          <figure className="game-frame hero-frame">
            <Image
              src="/media/night.png"
              width={2144}
              height={1206}
              preload
              fetchPriority="high"
              sizes="(max-width: 900px) 100vw, 64vw"
              alt={media.heroAlt}
            />
            <figcaption><span>{t.actual}</span><span>{t.heroCaption}</span></figcaption>
          </figure>
        </section>

        <div className="status-strip" aria-label={t.status}>
          <span><i aria-hidden="true" />{t.status}</span>
          <span>{t.platform}</span>
          <span>{t.languages}</span>
        </div>

        <section className="section intro" id="game" aria-labelledby="game-title">
          <div className="section-heading">
            <p className="section-index">{t.introIndex}</p>
            <h2 id="game-title">{t.introTitle}</h2>
          </div>
          <div className="day-night-copy">
            <article><h3>{t.dayTitle}</h3><p>{t.dayText}</p></article>
            <article><h3>{t.nightTitle}</h3><p>{t.nightText}</p></article>
          </div>
          <div className="image-pair">
            <figure>
              <Image src="/media/day.png" width={2144} height={1206} sizes="(max-width: 760px) 100vw, 50vw" alt={media.dayAlt} />
              <figcaption>{t.dayCaption}</figcaption>
            </figure>
            <figure>
              <Image src="/media/night.png" width={2144} height={1206} sizes="(max-width: 760px) 100vw, 50vw" alt={media.nightAlt} />
              <figcaption>{t.nightCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="section systems" aria-labelledby="systems-title">
          <div className="section-heading">
            <p className="section-index">{t.systemIndex}</p>
            <h2 id="systems-title">{t.systemTitle}</h2>
          </div>
          <div className="feature-list">
            {t.features.map((feature, index) => (
              <article className="feature-row" key={feature.title}>
                <p className="feature-order">0{index + 1}</p>
                <div><h3>{feature.title}</h3><p>{feature.text}</p></div>
                <div className="feature-stat"><strong>{feature.number}</strong><span>{feature.unit}</span></div>
              </article>
            ))}
          </div>
          <figure className="wide-frame">
            <Image src="/media/power.png" width={2144} height={1206} sizes="100vw" alt={media.powerAlt} />
            <figcaption>{t.powerCaption}</figcaption>
          </figure>
        </section>

        <section className="section multiplayer" aria-labelledby="friends-title">
          <div className="multiplayer-copy">
            <p className="section-index">{t.friendsIndex}</p>
            <h2 id="friends-title">{t.friendsTitle}</h2>
            <p>{t.friendsText}</p>
          </div>
          <figure className="multiplayer-frame">
            <Image
              src={`/media/friends-${locale}.png`}
              width={2560}
              height={1600}
              sizes="100vw"
              alt={media.friendsAlt}
            />
            <figcaption>{t.friendsCaption}</figcaption>
          </figure>
        </section>

        <section className="section progression" aria-labelledby="progress-title">
          <div className="progress-copy">
            <p className="section-index">{t.progressIndex}</p>
            <h2 id="progress-title">{t.progressTitle}</h2>
            <p>{t.progressText}</p>
          </div>
          <div className="progress-media">
            <figure>
              <Image src={`/media/tech-${locale}.png`} width={2622} height={1206} sizes="(max-width: 900px) 100vw, 68vw" alt={media.techAlt} />
              <figcaption>{t.techCaption}</figcaption>
            </figure>
            <figure className="craft-frame">
              <Image src={`/media/craft-${locale}.png`} width={2622} height={1206} sizes="(max-width: 900px) 100vw, 42vw" alt={media.craftAlt} />
              <figcaption>{t.craftCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="release" aria-labelledby="release-title">
          <p className="section-index">{t.releaseIndex}</p>
          <h2 id="release-title">{t.releaseTitle}</h2>
          <p>{t.releaseText}</p>
          <span className="release-status"><i aria-hidden="true" />{t.releaseStatus}</span>
        </section>
      </main>
      <SiteFooter locale={locale} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    </div>
  );
}
