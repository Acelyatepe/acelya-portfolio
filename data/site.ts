export type ProjectCategory = 'E-Ticaret' | 'Restoran' | 'Blog' | 'Kahve Dükkânı' | 'Web Uygulaması' | 'Portfolio';
export type Project = { slug: string; title: string; symbol: string; category: ProjectCategory; summary: string; purpose: string; features: string[]; technologies: string[]; learnings: string; challenges: string; solution: string; status: 'Planlanıyor' | 'Geliştiriliyor' | 'Yayında'; featured: boolean; accent: 'sage' | 'yellow' | 'blue' | 'lavender' | 'pink' | 'cream'; image?: string; github?: string; demo?: string; };

export const siteConfig = {
  name: 'Açelya', title: 'Web Tasarımcı & Frontend Geliştirici',
  intro: 'Modern, sade ve kullanıcı odaklı web arayüzleri tasarlıyor; frontend geliştirme alanında kendimi sürekli geliştiriyorum.',
  about: [
    'Web tasarımı ve frontend geliştirme alanında kendimi geliştirmeye odaklanıyorum. Tasarımda sadelik, kullanılabilirlik ve düzen benim için önemli.',
    'Anadolu Üniversitesi Web Tasarımı ve Kodlama Önlisans programından mezun oldum. Eğitim sürecimde tasarım ile kodun birlikte nasıl daha anlaşılır dijital deneyimlere dönüşebileceğine odaklandım.',
    'HTML, CSS ve JavaScript temellerimi geliştirirken responsive tasarım, UI / UX, Figma, Git ve GitHub gibi araçlarla düzenli olarak pratik yapıyorum.',
    'Yeni teknolojiler öğrenerek hem görsel açıdan güçlü hem de kullanıcı dostu web deneyimleri oluşturmayı hedefliyorum. Her projeyi araştırma, deneme ve geri bildirimlerle ilerlettiğim bir öğrenme fırsatı olarak görüyorum.',
  ],
  email: 'aclysde@gmail.com',
  socials: { linkedin: 'https://www.linkedin.com/in/sude-acelya-tepe/', github: 'https://github.com/Acelyatepe', instagram: null },
  availability: 'E-posta ve sosyal medya hesapları üzerinden iletişime geçebilirsiniz.',
};
export const skills = [{ name: 'HTML', icon: 'Code2' }, { name: 'CSS', icon: 'Palette' }, { name: 'JavaScript', icon: 'Braces' }, { name: 'Responsive Tasarım', icon: 'PanelsTopLeft' }, { name: 'UI / UX', icon: 'PenTool' }, { name: 'Figma', icon: 'Figma' }, { name: 'Git & GitHub', icon: 'GitBranch' }, { name: 'VS Code', icon: 'TerminalSquare' }, { name: 'Web Standartları', icon: 'BadgeCheck' }, { name: 'Problem Çözme', icon: 'Puzzle' }];
export const education = [{ year: '2026', school: 'Anadolu Üniversitesi', program: 'Web Tasarımı ve Kodlama', degree: 'Önlisans', status: 'Mezun', honor: 'Onur Öğrencisi' }];
export const certificates = [
  { title: 'Animasyon Tasarımı ve Uygulamaları', issuer: 'BTK Akademi', date: '26.07.2026', document: '/certificates/animasyon.pdf' },
  { title: 'Grafik Tasarıma Giriş', issuer: 'BTK Akademi', date: '12.08.2026', document: '/certificates/grafik-tasarim.pdf' },
  { title: 'Sosyal Medya Uzmanlığına Giriş', issuer: 'BTK Akademi', date: '02.08.2026', document: '/certificates/sosyal-medya-uzmanligi.pdf' },
  { title: 'Girişimcilikte Sunum Teknikleri ve İletişim Yönetimi', issuer: 'BTK Akademi', date: '15.12.2025', document: '/certificates/sunum-iletisim.pdf' },
  { title: 'İngilizce A1 Seviyesi', issuer: 'Millî Eğitim Bakanlığı', date: '01.10.2021', document: '/certificates/ingilizce-a1.pdf' },
  { title: 'İngilizce A2 Seviyesi', issuer: 'Millî Eğitim Bakanlığı', date: '10.11.2021', document: '/certificates/ingilizce-a2.pdf' },
  { title: 'İş Yaşamında Sosyal Medya Kullanımı', issuer: 'Millî Eğitim Bakanlığı', date: '04.02.2025', document: '/certificates/is-yasaminda-sosyal-medya.pdf' },
];

const pending = { technologies: [] as string[], learnings: 'Proje geliştirildikçe öğrenilenler bu alana eklenecek.', challenges: 'Proje geliştirme süreci başladığında karşılaşılan problemler burada paylaşılacak.', solution: 'Uygulanan çözüm yaklaşımı proje ilerledikçe burada anlatılacak.', status: 'Planlanıyor' as const };

export const projects: Project[] = [
  { ...pending, slug: 'plantiva', title: 'Plantiva', symbol: '🌿', category: 'E-Ticaret', accent: 'sage', featured: true, demo: 'https://acelya-plantiva.vercel.app/', summary: 'Bitki satışı için planlanan modern ve pastel tasarımlı bir e-ticaret sitesi.', purpose: 'Bitki keşfetme ve satın alma sürecini sade, keyifli ve farklı ekranlarda erişilebilir bir deneyime dönüştürmek.', features: ['Ürün listeleme', 'Ürün detay sayfası', 'Kategori filtreleme', 'Sepet', 'Favoriler', 'Responsive tasarım'] },
  { ...pending, slug: 'yummy', title: 'Yummy', symbol: '🍽️', category: 'Restoran', accent: 'yellow', featured: true, summary: 'Menü, masa rezervasyonu ve yemeklerin sergilendiği modern bir restoran sitesi.', purpose: 'Restoranı ve menüyü güçlü bir görsel hiyerarşiyle tanıtmak, rezervasyon sürecini kolaylaştırmak.', features: ['Menü', 'Yemek detayları', 'Masa rezervasyonu', 'Restoran hakkında', 'İletişim', 'Responsive tasarım'] },
  { ...pending, slug: 'travelista', title: 'Travelista', symbol: '✈️', category: 'Blog', accent: 'blue', featured: false, demo: 'https://acelya-travelista.vercel.app/', summary: 'Şehir rehberleri, gezi yazıları ve seyahat önerileri içeren modern bir seyahat blogu.', purpose: 'Seyahat içeriklerini kolay keşfedilen, okunaklı ve ilham veren bir yayın deneyiminde bir araya getirmek.', features: ['Şehir rehberleri', 'Blog yazıları', 'Kategoriler', 'Arama', 'Yazı detay sayfası', 'Responsive tasarım'] },
  { ...pending, slug: 'coffee-corner', title: 'Coffee Corner', symbol: '☕', category: 'Kahve Dükkânı', accent: 'cream', featured: false, summary: 'Menü, şubeler, kampanyalar ve çevrim içi sipariş bölümleri bulunan şık bir kahve dükkânı sitesi.', purpose: 'Marka atmosferini dijital ortama taşımak ve kullanıcıların menü, şube ve sipariş bilgilerine hızla ulaşmasını sağlamak.', features: ['Kahve menüsü', 'Şubeler', 'Kampanyalar', 'Çevrim içi sipariş', 'İletişim', 'Responsive tasarım'] },
  { ...pending, slug: 'taskly', title: 'Taskly', symbol: '✓', category: 'Web Uygulaması', accent: 'lavender', featured: true, summary: 'Görev ekleme, düzenleme, silme ve tamamlama özelliklerine sahip modern bir görev takip uygulaması.', purpose: 'Günlük görevleri hızlı ve dikkat dağıtmayan bir arayüzle düzenlemeyi kolaylaştırmak.', features: ['Görev ekleme', 'Görev düzenleme', 'Görev silme', 'Tamamlandı işaretleme', 'Filtreleme', 'Uygun veri saklama yöntemi', 'Responsive arayüz'] },
  { slug: 'acelya-portfolio', title: 'Açelya Portfolio', symbol: '⌘', category: 'Portfolio', accent: 'pink', featured: false, summary: 'Eğitimimi, yeteneklerimi ve geliştirdiğim projeleri sergileyen kişisel CV ve portfolio sitesi.', purpose: 'Öğrenme yolculuğunu ve üretilen projeleri sade, erişilebilir ve kolay güncellenebilir bir yapıda sunmak.', features: ['Çok sayfalı yapı', 'Merkezi içerik yönetimi', 'Proje filtreleme', 'Dinamik proje detayları', 'Responsive tasarım', 'Erişilebilirlik ve SEO'], technologies: ['React', 'TypeScript', 'Vinext', 'CSS'], learnings: 'Tekrarlanabilir bileşenler, merkezi veri yönetimi ve farklı ekranlara uyumlu arayüz geliştirme üzerine çalışıldı.', challenges: 'Farklı içerik yoğunluklarını aynı tasarım sistemi içinde dengeli ve kolay güncellenebilir biçimde sunmak.', solution: 'İçerikler tek bir veri dosyasında toplandı; sayfalar yeniden kullanılabilir bileşenler ve ortak tasarım değişkenleriyle kuruldu.', status: 'Geliştiriliyor' },
];
