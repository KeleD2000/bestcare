// =====================================================================
//  BESTCARE – MINDEN SZÖVEG EGY HELYEN
//  Itt tudsz mindent átírni: szövegek, árak, elérhetőségek, menü.
//  A sortörést a \n jelöli (pl. 'első sor\nmásodik sor').
// =====================================================================

// ---------- Általános adatok ----------
export const site = {
    name: 'BestCare',
    title: 'BestCare | Gyerekcsősz és animátor rendezvényekre',
    description:
        'Képzett gyerekfelügyelők és animátorok esküvőkre, rendezvényekre és családi eseményekre, hogy a vendégek felhőtlenül ünnepelhessenek.',
    logo: '/logo.png',
    logoAlt: 'BestCare logó',
    phone: '+36 00 000 0000', // így jelenik meg az oldalon
    phoneLink: '+36000000000', // a kattintható hívásnál használt formátum
    email: 'info@bestcare.hu',
};

// ---------- Menü ----------
export const nav = [
    { href: '/', label: 'Főoldal' },
    { href: '/bemutatkozas', label: 'Bemutatkozás' },
    { href: '/szolgaltatasok', label: 'Szolgáltatások' },
    { href: '/arlista', label: 'Árlista' },
    { href: '/urlap', label: 'Tájékoztatás kérése' },
];

// ---------- Lábléc ----------
export const footer = {
    about: 'Gyerekfelügyelet és animáció\nrendezvényekre, esküvőkre, családi eseményekre.',
    contactTitle: 'Elérhetőség',
    phoneLabel: 'Tel.:',
    emailLabel: 'E-mail:',
    pagesTitle: 'Oldalak',
    links: [
        { href: '/szolgaltatasok', label: 'Szolgáltatások' },
        { href: '/arlista', label: 'Árlista' },
        { href: '/urlap', label: 'Tájékoztatás kérése' },
    ],
};

// ---------- Főoldal ----------
export const home = {
    title: 'BestCare | Gyerekcsősz és animátor rendezvényekre',
    hero: {
        eyebrow: 'Gyerekfelügyelet · Animáció · Rendezvények',
        title: 'Ti ünnepeltek,\nmi vigyázunk a kicsikre.',
        text: 'A BestCare gondoskodó felügyeletet és játékos programokat biztosít esküvőkön, rendezvényeken és családi eseményeken, hogy minden vendég felhőtlenül szórakozhasson.',
        primaryButton: 'Tájékoztatást kérek',
        secondaryButton: 'Árlista megtekintése',
    },
    why: {
        eyebrow: 'Miért a BestCare?',
        title: 'Biztonság, figyelem, jókedv',
        items: [
            { title: 'Képzett felügyelők', text: 'Tapasztalt, referenciával rendelkező gyerekcsőszök és animátorok.' },
            { title: 'Egyedi programok', text: 'Kreatív foglalkozások, játékok és kézműveskedés az esemény hangulatához igazítva.' },
            { title: 'Hangulatos játszósarok', text: 'Kényelmes, esztétikus gyerekkuckó, ahol a kicsik is jól érzik magukat.' },
        ],
    },
    services: {
        photoText: 'Ide kerülhet egy fotó',
        eyebrow: 'Szolgáltatásaink',
        title: 'Minden eseményhez a megfelelő csomag',
        text: 'Rövidebb családi összejövetelektől a teljes napos esküvőig: rugalmasan igazodunk az Ön igényeihez.',
        button: 'Tovább a szolgáltatásokhoz',
    },
    cta: {
        title: 'Kérjen ajánlatot még ma',
        text: 'Töltse ki az űrlapot, és hamarosan elküldjük a részletes tájékoztatót az Ön eseményére szabva.',
        button: 'Tájékoztatás kérése',
    },
};

// ---------- Bemutatkozás ----------
export const about = {
    title: 'Bemutatkozás | BestCare',
    hero: {
        eyebrow: 'Bemutatkozás',
        title: 'Ismerjen meg minket',
        text: 'A BestCare célja, hogy a szülők nyugodtan ünnepelhessenek, a gyerekek pedig felejthetetlen élményekkel térjenek haza.',
    },
    story: {
        photoText: 'Ide kerülhet a csapat fotója',
        title: 'Rólunk',
        paragraphs: [
            'Gyerekcsősz és animátor csapatunk évek óta dolgozik rendezvényeken. Hisszük, hogy a jó gyerekfelügyelet nem csak vigyázás: közös játék, figyelem és biztonságérzet.',
            'Minden eseményre egyedi programot állítunk össze, a gyerekek korosztályához és az alkalom hangulatához igazítva.',
        ],
    },
    values: {
        title: 'Értékeink',
        items: [
            { title: 'Biztonság', text: 'A gyerekek épsége mindennél fontosabb. Mindig megfelelő létszámban és felkészülten érkezünk.' },
            { title: 'Kreativitás', text: 'Játékok, kézműves foglalkozások és mesés programok, amelyek lekötik a kicsik figyelmét.' },
            { title: 'Megbízhatóság', text: 'Pontos szervezés, átlátható kommunikáció és egyértelmű árak.' },
        ],
    },
};

// ---------- Szolgáltatások ----------
export const services = {
    title: 'Szolgáltatások | BestCare',
    hero: { eyebrow: 'Szolgáltatások', title: 'Amiben segíteni tudunk' },
    items: [
        { title: 'Esküvői gyerekfelügyelet', text: 'Gondoskodó felügyelet az egész esküvő alatt, külön játszósarokkal és programokkal.' },
        { title: 'Rendezvény animáció', text: 'Céges családi napok, ünnepségek és fesztiválok gyerekprogramjai.' },
        { title: 'Szülinapi animáció', text: 'Játékos, tematikus programok gyereknapokra és születésnapokra.' },
        { title: 'Kézműves foglalkozások', text: 'Alkotás, festés, barkácsolás: a gyerekek haza is vihetik az alkotásaikat.' },
        { title: 'Játszósarok kialakítása', text: 'Hangulatos, az esemény stílusához illő gyerekkuckó berendezése.' },
        { title: 'Egyedi igények', text: 'Egyedi kéréssel keressen minket, közösen megtaláljuk a megoldást.' },
    ],
    cta: {
        title: 'Nem találja, amit keres?',
        text: 'Írjon nekünk, és személyre szabott tájékoztatót küldünk.',
        button: 'Tájékoztatás kérése',
    },
};

// ---------- Árlista ----------
// FIGYELEM: az árak helyőrzők, írd át a saját áraidra!
export const prices = {
    title: 'Árlista | BestCare',
    hero: {
        eyebrow: 'Árlista',
        title: 'Átlátható csomagok',
        text: 'Az árak tájékoztató jellegűek, a végleges ajánlat az esemény helyszínétől, időtartamától és a gyerekek létszámától függ.',
    },
    // featured: true -> sötét, kiemelt kártya
    packages: [
        { name: 'Alap', price: '25 000 Ft', note: 'Kisebb eseményekhez', items: ['Akár 2 óra felügyelet', '1 gyerekcsősz', 'Játékok és kézműveskedés'] },
        { name: 'Prémium', price: '50 000 Ft', note: 'A legnépszerűbb', featured: true, items: ['Akár 4 óra felügyelet', '2 gyerekcsősz / animátor', 'Egyedi programterv', 'Játszósarok kialakítása'] },
        { name: 'Teljes napos', price: '90 000 Ft', note: 'Esküvőkhöz, nagy eseményekhez', items: ['Akár 8 óra felügyelet', '2–3 gyerekcsősz / animátor', 'Tematikus játszósarok', 'Kézműves foglalkozások', 'Meglepetés ajándékcsomagok'] },
    ],
    button: 'Részletes tájékoztatást kérek',
};

// ---------- Tájékoztatás kérése (űrlap) ----------
export const form = {
    title: 'Tájékoztatás kérése | BestCare',
    hero: {
        eyebrow: 'Tájékoztatás kérése',
        title: 'Küldjük a részleteket',
        text: 'Töltse ki az űrlapot, és elküldjük a tájékoztatót az Ön eseményéhez igazítva.',
    },
    labels: {
        name: 'Név *',
        phone: 'Telefonszám',
        email: 'E-mail cím *',
        eventType: 'Esemény típusa',
        date: 'Esemény dátuma',
        kids: 'Gyerekek száma',
        place: 'Helyszín',
        message: 'Üzenet',
    },
    eventTypes: ['Esküvő', 'Céges rendezvény', 'Szülinap', 'Családi esemény', 'Egyéb'],
    submit: 'Tájékoztatás kérése',
    sending: 'Küldés...',
    success: 'Köszönjük! Hamarosan elküldjük a tájékoztatót.',
    genericError: 'Hiba történt.',
    // a szerver oldali üzenetek és az e-mail tárgya
    invalidInput: 'Kérjük, adja meg a nevét és egy érvényes e-mail címet.',
    sendFailed: 'Az üzenetet most nem sikerült elküldeni. Kérjük, próbálja újra.',
    emailSubject: 'BestCare érdeklődés:',
};