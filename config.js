/**
 * MikroTik Hotspot Configuration
 * Customize your hotspot portal settings here
 * Template by Haris DevLab
 */

// ============================================
// BUYER CONFIGURATION - Edit sesuai kebutuhan
// ============================================
var BUYER_CONFIG = {
    // License Key - Gunakan 'DEMO-VALID-KEY' untuk mode demo
    // License key valid harus 28 karakter: A-Z, 0-9, @#$%&*-_+=!?
    licenseKey: "DEMO-VALID-KEY",

    // Business Information
    businessName: "AshrafHotspot",

    // Contact Information
    adminPhone: "6287784477751",
    adminEmail: "harisdevlab@gmail.com",

    // Login Mode: 1 = Username/Password, 2 = Voucher Only, 3 = Dual Mode (tabs)
    loginMode: 2,

    // Input Case: 1 = lowercase (huruf kecil), 2 = UPPERCASE (huruf kapital), 3 = Normal
    inputCase: 1,

    // Theme Mode: 1 = Light only, 2 = Dark only, 3 = Toggle (user can switch)
    themeMode: 3,

    // Footer
    footerText: "Powered by Haris DevLab",
    designerText: "All rights reserved."
};

// ============================================
// HOTSPOT CONFIGURATION - Settings utama
// ============================================
const HOTSPOT_CONFIG = {
    // Business Information (dari BUYER_CONFIG)
    get businessName() { return BUYER_CONFIG.businessName; },

    // Contact Information
    get adminPhone() { return BUYER_CONFIG.adminPhone; },
    get adminEmail() { return BUYER_CONFIG.adminEmail; },

    // Login Mode
    get loginMode() { return BUYER_CONFIG.loginMode; },

    // Input Case: 1=lowercase, 2=UPPERCASE, 3=normal
    get inputCase() { return BUYER_CONFIG.inputCase || 3; },

    // Theme Settings
    // themeMode: 1=light only, 2=dark only, 3=toggle
    get themeMode() { return BUYER_CONFIG.themeMode || 3; },
    primaryColor: "#6C63FF",
    accentColor: "#FF6584",

    // Banner Settings
    enableBanner: true,
    bannerAutoSlide: true,
    bannerInterval: 4000, // milliseconds
    bannerImages: [],

    // Smart Banner Settings
    enableSmartBanner: true,
    enableTimeGreeting: true,
    enableHolidayBanner: true,
    enableGamingMode: true,
    enableStreamingMode: true,
    enableQuoteMode: true,

    // Free Trial Settings
    enableFreeTrial: true,
    freeTrialDuration: "15 Menit",

    // Packages / Voucher Plans (dari JSON template)
    packages: [
        {
            name: "Paket 12 Jam",
            price: 2000,
            duration: "12 Jam",
            description: "Internet Kilat 12 Jam Nonstop",
            popular: false,
            color: "grad-1"
        },
        {
            name: "Paket Harian",
            price: 3000,
            duration: "24 Jam",
            description: "Internet Puas 24 Jam Unlimited",
            popular: true,
            color: "grad-2"
        },
        {
            name: "Paket 2 Hari",
            price: 5000,
            duration: "48 Jam",
            description: "Masa aktif 48 Jam Lebih Lama",
            popular: false,
            color: "grad-4"
        },
        {
            name: "Hemat Mingguan",
            price: 15000,
            duration: "7 Hari",
            description: "Aktif 7 Hari Anti Repot",
            popular: false,
            color: "grad-3"
        },
        {
            name: "Bulanan Hemat",
            price: 50000,
            duration: "30 Hari",
            description: "Full 30 Hari Internet Jalan Terus",
            popular: false,
            color: "grad-1"
        },
        {
            name: "Paket Sharing",
            price: 65000,
            duration: "30 Hari",
            description: "Bisa untuk 3 Device Sekaligus",
            popular: false,
            color: "grad-2"
        },
        {
            name: "Sharing Keluarga",
            price: 100000,
            duration: "30 Hari",
            description: "Max 5 Device Lebih Murah",
            popular: false,
            color: "grad-4"
        }
    ],

    // Social Media Links
    socialMedia: {
        whatsapp: "6287784477751",
        instagram: "",
        facebook: "",
        telegram: ""
    },

    // Random Notifications / Tips
    notifications: [
        { icon: "⚡", title: "Tips Cuaca", message: "Jika hujan disertai petir, matikan modem untuk keamanan perangkat." },
        { icon: "🔌", title: "Hemat Listrik", message: "Matikan router saat tidak digunakan untuk menghemat listrik." },
        { icon: "📶", title: "Sinyal Lemah?", message: "Coba restart modem jika koneksi terasa lambat." },
        { icon: "🔒", title: "Keamanan", message: "Jangan bagikan password WiFi ke orang yang tidak dikenal." },
        { icon: "💡", title: "Info", message: "Hubungi admin jika ada kendala atau pertanyaan." },
        { icon: "🎮", title: "Gaming Tips", message: "Gunakan kabel LAN untuk ping lebih stabil saat bermain game." },
        { icon: "📺", title: "Streaming", message: "Kurangi kualitas video jika buffering untuk pengalaman lebih lancar." },
        { icon: "🌙", title: "Malam Hari", message: "Gunakan mode malam di HP untuk kesehatan mata Anda." },
        { icon: "📱", title: "Multi Device", message: "Terlalu banyak device terhubung dapat memperlambat koneksi." },
        { icon: "🔄", title: "Update", message: "Pastikan browser Anda selalu update untuk performa terbaik." },
        { icon: "🛒", title: "Promo!", message: "Kunjungi harisdevlab.online untuk katalog produk digital lainnya!" }
    ],

    // Footer
    get footerText() { return BUYER_CONFIG.footerText; },
    get designerText() { return BUYER_CONFIG.designerText; }
};

// ============================================
// LICENSE VALIDATION SYSTEM
// ============================================
const LICENSE_CONFIG = {
    demoKey: "DEMO-VALID-KEY",
    keyFormat: /^[A-Z0-9@#$%&*\-_+=!?]{28}$/,
    demoMode: {
        enabled: true,
        activeTime: 15,
        cooldownTime: 60,
        messages: {
            activated: "DEMO MODE ACTIVATED",
            timer: "DEMO MODE",
            recovering: "RECOVERING",
            cooldown: "Mode Demo: Sedang cooling down...",
            ready: "DEMO READY"
        }
    }
};

function validateLicense(key) {
    if (!key) return { valid: false, type: 'empty' };
    const trimmedKey = key.trim();
    if (trimmedKey === LICENSE_CONFIG.demoKey) return { valid: true, type: 'demo' };
    if (LICENSE_CONFIG.keyFormat.test(trimmedKey)) return { valid: true, type: 'full' };
    return { valid: false, type: 'invalid' };
}

// ============================================
// SMART BANNER SYSTEM
// ============================================
const SMART_BANNER = {
    rotationInterval: 15000,
    packageRotationInterval: 12000,

    holidays: {
        "1-1": { title: "HAPPY NEW YEAR", desc: "Semoga tahun ini lebih baik & koneksi makin ngebut!", class: "grad-holiday", badge: "Tahun Baru" },
        "14-2": { title: "HAPPY VALENTINE", desc: "Sebarkan kasih sayang ke orang tersayang.", class: "grad-quote", badge: "Valentine" },
        "21-4": { title: "SELAMAT HARI KARTINI", desc: "Habis Gelap Terbitlah Terang.", class: "grad-national", badge: "Ibu Kartini" },
        "1-5": { title: "SELAMAT HARI BURUH", desc: "Istirahatlah sejenak, nikmati hasil kerjamu.", class: "grad-holiday", badge: "May Day" },
        "2-5": { title: "HARDIKNAS", desc: "Ing Ngarsa Sung Tuladha.", class: "grad-national", badge: "Pendidikan" },
        "20-5": { title: "KEBANGKITAN NASIONAL", desc: "Bangkit! Kejar mimpimu.", class: "grad-national", badge: "Harkitnas" },
        "1-6": { title: "HARI LAHIR PANCASILA", desc: "Berbeda-beda tetapi tetap satu.", class: "grad-national", badge: "Pancasila" },
        "17-8": { title: "DIRGAHAYU RI", desc: "Merdeka Internetnya, Merdeka Belajarnya!", class: "grad-national", badge: "HUT RI" },
        "2-10": { title: "SELAMAT HARI BATIK", desc: "Bangga buatan Indonesia.", class: "grad-holiday", badge: "Hari Batik" },
        "5-10": { title: "HUT TNI", desc: "Bersama Rakyat TNI Kuat.", class: "grad-national", badge: "Dirgahayu TNI" },
        "28-10": { title: "SUMPAH PEMUDA", desc: "Satu Nusa, Satu Bangsa, Satu Kuota.", class: "grad-national", badge: "Semangat Pemuda" },
        "10-11": { title: "HARI PAHLAWAN", desc: "Jadilah pahlawan bagi keluargamu.", class: "grad-national", badge: "10 November" },
        "25-11": { title: "SELAMAT HARI GURU", desc: "Terima kasih Guruku.", class: "grad-quote", badge: "Hari Guru" },
        "22-12": { title: "SELAMAT HARI IBU", desc: "Terima kasih untuk kasih sayang.", class: "grad-quote", badge: "Hari Ibu" },
        "25-12": { title: "MERRY CHRISTMAS", desc: "Damai di bumi, damai di hati.", class: "grad-holiday", badge: "Natal" }
    },

    timeGreetings: {
        morning: { hours: [5, 11], class: "grad-morning", title: "Selamat Pagi", desc: "Awali hari dengan Semangat & Koneksi Lancar", badge: "Good Morning" },
        noon: { hours: [11, 15], class: "grad-noon", title: "Selamat Siang", desc: "Jangan lupa Istirahat & Makan Siang", badge: "Good Afternoon" },
        afternoon: { hours: [15, 18], class: "grad-afternoon", title: "Selamat Sore", desc: "Santai sejenak menikmati Senja & Kopi", badge: "Good Evening" },
        night: { hours: [18, 5], class: "grad-night", title: "Selamat Malam", desc: "Istirahatlah, tapi Internet Jalan Terus 24 Jam", badge: "Good Night" }
    },

    modes: {
        gaming: { class: "grad-gaming", title: "GAMER MODE", desc: "Ping Stabil Anti Lag - Auto Headshot", badge: "Gas Mabar!" },
        streaming: { class: "grad-streaming", title: "NO BUFFER", desc: "Nonton Drakor & YouTube Resolusi 4K", badge: "Enjoy Movie" },
        quote: {
            class: "grad-quote",
            title: "DAILY QUOTE",
            badge: "Semangat!",
            quotes: [
                "Rejeki gak akan tertukar, tapi kuota bisa habis.",
                "Kerja keras itu perlu, wifi kencang itu harus.",
                "Tetap tenang dan hubungkan ke Hotspot.",
                "Dunia maya lebih indah kalau koneksinya lancar."
            ]
        }
    },

    gradientClasses: {
        "grad-1": "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
        "grad-2": "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
        "grad-3": "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
        "grad-4": "linear-gradient(135deg, #10b981 0%, #059669 100%)",
        "grad-netflix": "linear-gradient(135deg, #E50914 0%, #87070d 100%)",
        "grad-morning": "linear-gradient(135deg, #fce38a 0%, #f38181 100%)",
        "grad-noon": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        "grad-afternoon": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "grad-night": "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
        "grad-gaming": "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
        "grad-streaming": "linear-gradient(135deg, #8EC5FC 0%, #E0C3FC 100%)",
        "grad-quote": "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        "grad-holiday": "linear-gradient(135deg, #FFD700 0%, #FDB931 100%)",
        "grad-national": "linear-gradient(135deg, #ff0000 0%, #ffffff 100%)"
    }
};

// Get current time greeting
function getTimeGreeting() {
    const hour = new Date().getHours();
    const greetings = SMART_BANNER.timeGreetings;

    if (hour >= greetings.morning.hours[0] && hour < greetings.morning.hours[1]) {
        return greetings.morning;
    } else if (hour >= greetings.noon.hours[0] && hour < greetings.noon.hours[1]) {
        return greetings.noon;
    } else if (hour >= greetings.afternoon.hours[0] && hour < greetings.afternoon.hours[1]) {
        return greetings.afternoon;
    } else {
        return greetings.night;
    }
}

// Get holiday greeting if today is a holiday
function getHolidayGreeting() {
    const today = new Date();
    const key = today.getDate() + "-" + (today.getMonth() + 1);
    return SMART_BANNER.holidays[key] || null;
}

// Get random mode (gaming, streaming, quote)
function getRandomMode() {
    const modes = ['gaming', 'streaming', 'quote'];
    const randomMode = modes[Math.floor(Math.random() * modes.length)];
    const mode = SMART_BANNER.modes[randomMode];

    if (randomMode === 'quote') {
        const randomQuote = mode.quotes[Math.floor(Math.random() * mode.quotes.length)];
        return { ...mode, desc: randomQuote };
    }
    return mode;
}

// ============================================
// HELPER FUNCTIONS
// ============================================
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount).replace('IDR', 'Rp');
}

function getWhatsAppLink(message = "") {
    const phone = HOTSPOT_CONFIG.adminPhone;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}?text=${encodedMessage}`;
}

// Apply theme on load
document.addEventListener('DOMContentLoaded', function () {
    if (HOTSPOT_CONFIG.enableDarkMode) {
        document.body.classList.add('dark-mode');
    }

    // Set CSS variables
    document.documentElement.style.setProperty('--primary-color', HOTSPOT_CONFIG.primaryColor);
    document.documentElement.style.setProperty('--accent-color', HOTSPOT_CONFIG.accentColor);
});
