'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'tr' | 'en' | 'de';
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void }>({ language: 'tr', setLanguage: () => undefined });

const translations: Record<'en' | 'de', Record<string, string>> = {
  en: {
    'Ana Sayfa':'Home','Hakkımda':'About','Yeteneklerim':'Skills','Projelerim':'Projects','Eğitim':'Education','İletişim':'Contact','E-posta gönder':'Send email','Tüm hakları saklıdır.':'All rights reserved.','Merhaba, ben':'Hello, I am','Web Tasarımcı & Frontend Geliştirici':'Web Designer & Frontend Developer','Modern, sade ve kullanıcı odaklı web arayüzleri tasarlıyor; frontend geliştirme alanında kendimi sürekli geliştiriyorum.':'I design modern, minimal and user-focused web interfaces while continuously improving my frontend development skills.','Projelerimi keşfet':'Explore my projects','Benimle iletişime geç':'Contact me','Öne çıkan projeler':'Featured projects','Tüm projeleri gör':'View all projects','02 / Seçili çalışmalar':'02 / Selected work','Kullanıcı odaklı':'User focused','Temiz kod':'Clean code','Duyarlı tasarım':'Responsive design','Sürekli öğrenme':'Continuous learning','Planlanıyor':'Planned','Geliştiriliyor':'In progress','Yayında':'Live','Proje görseli daha sonra eklenecek':'Project image will be added later','Projeyi incele':'View project','Teknolojiler proje geliştirilirken eklenecek.':'Technologies will be added during development.','Merakla öğreniyor, özenle üretiyorum.':'Learning with curiosity, creating with care.','Dijital deneyimlerin hem güzel hem anlaşılır hem de herkes için kullanılabilir olması gerektiğine inanıyorum.':'I believe digital experiences should be beautiful, clear and accessible to everyone.','Sade tasarım':'Minimal design','Gereksiz kalabalıktan uzak, amacı net arayüzler.':'Clear interfaces without unnecessary clutter.','Kullanıcı odağı':'User focus','Her kararın merkezinde erişilebilirlik ve deneyim.':'Accessibility and experience at the center of every decision.','Yeni araçları keşfederken temelleri sağlam tutmak.':'Keeping strong foundations while exploring new tools.','Öğrenme yaklaşımım':'My learning approach','Küçük adımlar.':'Small steps.','Tutarlı ilerleme.':'Consistent progress.','Araçlardan önce, doğru yaklaşım.':'The right approach before the tools.','Öğrenme yolculuğumda kullandığım teknolojiler ve üretim sürecimi destekleyen beceriler.':'Technologies I use while learning and skills that support my creative process.','öğreniyor / uyguluyor':'learning / practicing','Fikirden çalışan ürüne.':'From idea to working product.','Öğrenirken ürettiğim web, arayüz ve JavaScript çalışmalarını keşfedin.':'Explore the web, interface and JavaScript projects I create while learning.','Öğrenme yolculuğum.':'My learning journey.','Birlikte bir şeyler üretelim.':'Let’s create something together.','Mesaj gönder':'Send a message','İletişim durumu':'Contact status','Adınız':'Your name','Konu':'Subject','Mesaj':'Message','E-posta gönder':'Send email','Derece':'Degree','Durum':'Status','Onur bilgisi':'Honors','Mezuniyet':'Graduation','Mezun':'Graduate','Onur Öğrencisi':'Honor Student','Önlisans':'Associate Degree'
  },
  de: {
    'Ana Sayfa':'Startseite','Hakkımda':'Über mich','Yeteneklerim':'Kenntnisse','Projelerim':'Projekte','Eğitim':'Ausbildung','İletişim':'Kontakt','E-posta gönder':'E-Mail senden','Tüm hakları saklıdır.':'Alle Rechte vorbehalten.','Merhaba, ben':'Hallo, ich bin','Web Tasarımcı & Frontend Geliştirici':'Webdesignerin & Frontend-Entwicklerin','Modern, sade ve kullanıcı odaklı web arayüzleri tasarlıyor; frontend geliştirme alanında kendimi sürekli geliştiriyorum.':'Ich gestalte moderne, klare und nutzerorientierte Weboberflächen und entwickle meine Frontend-Kenntnisse kontinuierlich weiter.','Projelerimi keşfet':'Meine Projekte entdecken','Benimle iletişime geç':'Kontakt aufnehmen','Öne çıkan projeler':'Ausgewählte Projekte','Tüm projeleri gör':'Alle Projekte ansehen','02 / Seçili çalışmalar':'02 / Ausgewählte Arbeiten','Kullanıcı odaklı':'Nutzerorientiert','Temiz kod':'Sauberer Code','Duyarlı tasarım':'Responsives Design','Sürekli öğrenme':'Kontinuierliches Lernen','Planlanıyor':'Geplant','Geliştiriliyor':'In Entwicklung','Yayında':'Online','Proje görseli daha sonra eklenecek':'Projektbild wird später ergänzt','Projeyi incele':'Projekt ansehen','Teknolojiler proje geliştirilirken eklenecek.':'Technologien werden während der Entwicklung ergänzt.','Merakla öğreniyor, özenle üretiyorum.':'Mit Neugier lernen, mit Sorgfalt gestalten.','Dijital deneyimlerin hem güzel hem anlaşılır hem de herkes için kullanılabilir olması gerektiğine inanıyorum.':'Ich glaube, dass digitale Erlebnisse schön, verständlich und für alle zugänglich sein sollten.','Sade tasarım':'Klares Design','Gereksiz kalabalıktan uzak, amacı net arayüzler.':'Klare Oberflächen ohne unnötige Ablenkung.','Kullanıcı odağı':'Nutzerfokus','Her kararın merkezinde erişilebilirlik ve deneyim.':'Barrierefreiheit und Nutzererlebnis stehen im Mittelpunkt.','Yeni araçları keşfederken temelleri sağlam tutmak.':'Starke Grundlagen beim Entdecken neuer Werkzeuge.','Öğrenme yaklaşımım':'Mein Lernansatz','Küçük adımlar.':'Kleine Schritte.','Tutarlı ilerleme.':'Beständiger Fortschritt.','Araçlardan önce, doğru yaklaşım.':'Der richtige Ansatz vor den Werkzeugen.','Öğrenme yolculuğumda kullandığım teknolojiler ve üretim sürecimi destekleyen beceriler.':'Technologien und Fähigkeiten, die meinen Lern- und Gestaltungsprozess unterstützen.','öğreniyor / uyguluyor':'lernen / anwenden','Fikirden çalışan ürüne.':'Von der Idee zum funktionierenden Produkt.','Öğrenirken ürettiğim web, arayüz ve JavaScript çalışmalarını keşfedin.':'Entdecken Sie meine Web-, Interface- und JavaScript-Projekte.','Öğrenme yolculuğum.':'Meine Lernreise.','Birlikte bir şeyler üretelim.':'Lassen Sie uns gemeinsam etwas gestalten.','Mesaj gönder':'Nachricht senden','İletişim durumu':'Kontaktstatus','Adınız':'Ihr Name','Konu':'Betreff','Mesaj':'Nachricht','Derece':'Abschluss','Durum':'Status','Onur bilgisi':'Auszeichnung','Mezuniyet':'Abschlussjahr','Mezun':'Absolventin','Onur Öğrencisi':'Ehrenstudentin','Önlisans':'Associate Degree'
  }
};

Object.assign(translations.en, {
  'Geliştirme Aşamasında':'In Development','Güzellik Merkezi':'Beauty Center','Güzellik Merkezi Web Sitesi':'Beauty Center Website','Bu proje şu anda geliştiriliyor. Çok yakında canlı olarak incelenebilecek.':'This project is currently in development. It will be available to view live very soon.','Projelere Dön':'Back to Projects',
  'Canlı İncele':'View live','Canlı demo':'Live demo',
  'Fikirleri sade ve etkili dijital deneyimlere dönüştürüyorum.':'I turn ideas into simple and effective digital experiences.',
  'Web tasarımı ve frontend geliştirme alanında kendimi geliştirmeye odaklanıyorum. Tasarımda sadelik, kullanılabilirlik ve düzen benim için önemli.':'I focus on improving my web design and frontend development skills. Simplicity, usability and order are important to me.',
  'Anadolu Üniversitesi Web Tasarımı ve Kodlama Önlisans programından mezun oldum ve aynı üniversitenin Yönetim Bilişim Sistemleri lisans programında öğrenimime devam ediyorum. Eğitim sürecimde tasarım ile kodun birlikte nasıl daha anlaşılır dijital deneyimlere dönüşebileceğine odaklandım.':'I graduated from Anadolu University’s Web Design and Coding associate program and am continuing my studies in the university’s Management Information Systems bachelor’s program. During my education, I focused on how design and code can create clearer digital experiences together.',
  'HTML, CSS ve JavaScript temellerimi geliştirirken responsive tasarım, UI / UX, Figma, Git ve GitHub gibi araçlarla düzenli olarak pratik yapıyorum.':'While strengthening my HTML, CSS and JavaScript foundations, I regularly practice responsive design, UI/UX, Figma, Git and GitHub.',
  'Yeni teknolojiler öğrenerek hem görsel açıdan güçlü hem de kullanıcı dostu web deneyimleri oluşturmayı hedefliyorum. Her projeyi araştırma, deneme ve geri bildirimlerle ilerlettiğim bir öğrenme fırsatı olarak görüyorum.':'I aim to create visually strong and user-friendly web experiences by learning new technologies. I see every project as an opportunity to learn through research, experimentation and feedback.',
  'Bir proje fikriniz, iş birliği öneriniz ya da yalnızca merhaba demek istediğiniz bir konu varsa mesajınızı bekliyorum.':'If you have a project idea, collaboration proposal or simply want to say hello, I would be happy to hear from you.',
  'E-posta ve sosyal medya hesapları üzerinden iletişime geçebilirsiniz.':'You can contact me by email or through my social media accounts.',
  'Buton, mesajınızı varsayılan e-posta uygulamanızda hazırlar. Göndermeden önce içeriği kontrol edebilirsiniz.':'The button prepares your message in your default email app. You can review it before sending.',
  'Adınızı yazın':'Enter your name','Mesajınızın konusu':'Message subject','Projenizden veya fikrinizden bahsedin':'Tell me about your project or idea',
  'E-Ticaret':'E-commerce','Restoran':'Restaurant','Kahve Dükkânı':'Coffee Shop','Web Uygulaması':'Web Application','Portfolio':'Portfolio'
});
Object.assign(translations.de, {
  'Geliştirme Aşamasında':'In Entwicklung','Güzellik Merkezi':'Beautycenter','Güzellik Merkezi Web Sitesi':'Beautycenter-Website','Bu proje şu anda geliştiriliyor. Çok yakında canlı olarak incelenebilecek.':'Dieses Projekt wird derzeit entwickelt und kann schon bald live angesehen werden.','Projelere Dön':'Zurück zu den Projekten',
  'Canlı İncele':'Live ansehen','Canlı demo':'Live-Demo',
  'Fikirleri sade ve etkili dijital deneyimlere dönüştürüyorum.':'Ich verwandle Ideen in klare und wirkungsvolle digitale Erlebnisse.',
  'Web tasarımı ve frontend geliştirme alanında kendimi geliştirmeye odaklanıyorum. Tasarımda sadelik, kullanılabilirlik ve düzen benim için önemli.':'Ich konzentriere mich darauf, meine Fähigkeiten in Webdesign und Frontend-Entwicklung weiterzuentwickeln. Klarheit, Benutzerfreundlichkeit und Ordnung sind mir wichtig.',
  'Anadolu Üniversitesi Web Tasarımı ve Kodlama Önlisans programından mezun oldum ve aynı üniversitenin Yönetim Bilişim Sistemleri lisans programında öğrenimime devam ediyorum. Eğitim sürecimde tasarım ile kodun birlikte nasıl daha anlaşılır dijital deneyimlere dönüşebileceğine odaklandım.':'Ich habe den Associate-Studiengang Webdesign und Coding an der Anadolu Universität abgeschlossen und studiere derzeit im Bachelorstudiengang Wirtschaftsinformatik (Management Information Systems) derselben Universität. Dabei habe ich mich darauf konzentriert, wie Design und Code gemeinsam verständliche digitale Erlebnisse schaffen.',
  'HTML, CSS ve JavaScript temellerimi geliştirirken responsive tasarım, UI / UX, Figma, Git ve GitHub gibi araçlarla düzenli olarak pratik yapıyorum.':'Während ich meine Grundlagen in HTML, CSS und JavaScript vertiefe, übe ich regelmäßig Responsive Design, UI/UX, Figma, Git und GitHub.',
  'Yeni teknolojiler öğrenerek hem görsel açıdan güçlü hem de kullanıcı dostu web deneyimleri oluşturmayı hedefliyorum. Her projeyi araştırma, deneme ve geri bildirimlerle ilerlettiğim bir öğrenme fırsatı olarak görüyorum.':'Durch das Lernen neuer Technologien möchte ich visuell starke und benutzerfreundliche Web-Erlebnisse schaffen. Jedes Projekt ist für mich eine Lernchance durch Recherche, Experimente und Feedback.',
  'Bir proje fikriniz, iş birliği öneriniz ya da yalnızca merhaba demek istediğiniz bir konu varsa mesajınızı bekliyorum.':'Wenn Sie eine Projektidee oder einen Vorschlag zur Zusammenarbeit haben oder einfach Hallo sagen möchten, freue ich mich über Ihre Nachricht.',
  'E-posta ve sosyal medya hesapları üzerinden iletişime geçebilirsiniz.':'Sie können mich per E-Mail oder über meine sozialen Netzwerke kontaktieren.',
  'Buton, mesajınızı varsayılan e-posta uygulamanızda hazırlar. Göndermeden önce içeriği kontrol edebilirsiniz.':'Die Schaltfläche bereitet Ihre Nachricht in Ihrer Standard-E-Mail-App vor. Sie können sie vor dem Senden prüfen.',
  'Adınızı yazın':'Namen eingeben','Mesajınızın konusu':'Betreff Ihrer Nachricht','Projenizden veya fikrinizden bahsedin':'Erzählen Sie von Ihrem Projekt oder Ihrer Idee',
  'E-Ticaret':'E-Commerce','Restoran':'Restaurant','Kahve Dükkânı':'Café','Web Uygulaması':'Webanwendung','Portfolio':'Portfolio'
});

Object.assign(translations.en, {
  'Sertifikalar':'Certificates','05 / Sertifikalar':'05 / Certificates','Öğrenmeye devam ediyorum.':'Continuing to learn.','Tamamladığım eğitimler ve gelişim yolculuğumu destekleyen sertifikalar.':'Completed courses and certificates that support my development journey.','Tasarım, iletişim, sosyal medya ve yabancı dil alanlarında tamamladığım doğrulanmış eğitimler.':'Verified courses I completed in design, communication, social media and foreign languages.','Eğitim ve sertifika arşivi':'Course and certificate archive','Belgeler özgün PDF biçiminde, site arayüzünden bağımsız yeni bir sekmede açılır.':'Documents open as original PDFs in a new tab, independently from the site interface.','Sertifikayı görüntüle':'View certificate','Doğrulanmış eğitim':'Verified course','Öğrenme arşivi':'Learning archive','Sertifikalar ve tamamlanan eğitimler':'Certificates and completed courses','Web, tasarım, iletişim ve dil alanlarında tamamladığım eğitimleri ayrı bir bölümde inceleyebilirsiniz.':'Explore the courses I completed in web, design, communication and language.','Sertifikaları gör':'View certificates',
  '✦ Kullanıcı odaklı ⌁ Temiz kod ✦ Duyarlı tasarım ⌁ Sürekli öğrenme':'✦ User focused ⌁ Clean code ✦ Responsive design ⌁ Continuous learning','tasarım + kod':'design + code','Fikirleri':'Ideas into','arayüzlere':'interfaces','dönüştür.':'transform.','DETAY':'DETAIL','Özenli':'Thoughtful','YAKLAŞIM':'APPROACH','⌁ öğren / tasarla / geliştir':'⌁ learn / design / develop','tasarım ↗ kod ↗ deneyim':'design ↗ code ↗ experience','Deneyerek, araştırarak ve geri bildirimleri değerlendirerek her projede bir öncekinin üzerine koyuyorum.':'Through experimentation, research and feedback, I build on what I learned with every project.',
  'Responsive Tasarım':'Responsive Design','Web Standartları':'Web Standards','Problem Çözme':'Problem Solving','01 / Hakkımda':'01 / About','02 / Yeteneklerim':'02 / Skills','03 / Projelerim':'03 / Projects','04 / Eğitim':'04 / Education','05 / İletişim':'05 / Contact','Eğitim geçmişim ve web alanındaki gelişim sürecimin akademik temeli.':'My education is the academic foundation of my development in the web field.','Mezuniyet ·':'Graduation ·','Web Tasarımı ve Kodlama':'Web Design and Coding','Bu program, görsel tasarım yaklaşımımı web teknolojileriyle bir araya getirdiğim akademik temelimi oluşturdu. Öğrenme sürecimi düzenli pratik ve kişisel projelerle sürdürüyorum.':'This program formed the academic foundation where I combine visual design with web technologies. I continue learning through regular practice and personal projects.',
  'Bitki satışı için planlanan modern ve pastel tasarımlı bir e-ticaret sitesi.':'A modern, pastel e-commerce website planned for plant sales.','Menü, masa rezervasyonu ve yemeklerin sergilendiği modern bir restoran sitesi.':'A modern restaurant website featuring a menu, table reservations and dishes.','Gezi yazıları ve rota önerileri için planlanan sade bir seyahat blogu.':'A clean travel blog planned for stories and route recommendations.','Kahve menüsü ve mekân atmosferini öne çıkaran bir kahve dükkânı sitesi.':'A coffee shop website highlighting the menu and atmosphere.','Günlük görevleri düzenlemek için planlanan sade bir web uygulaması.':'A simple web app planned for organizing daily tasks.','Açelya’nın kişisel çalışmalarını ve öğrenme sürecini sunduğu portfolio sitesi.':'A portfolio presenting Açelya’s personal work and learning journey.'
});
Object.assign(translations.de, {
  'Sertifikalar':'Zertifikate','05 / Sertifikalar':'05 / Zertifikate','Öğrenmeye devam ediyorum.':'Ich lerne kontinuierlich weiter.','Tamamladığım eğitimler ve gelişim yolculuğumu destekleyen sertifikalar.':'Abgeschlossene Kurse und Zertifikate, die meine Entwicklung unterstützen.','Tasarım, iletişim, sosyal medya ve yabancı dil alanlarında tamamladığım doğrulanmış eğitimler.':'Verifizierte Kurse in Design, Kommunikation, Social Media und Fremdsprachen.','Eğitim ve sertifika arşivi':'Kurs- und Zertifikatsarchiv','Belgeler özgün PDF biçiminde, site arayüzünden bağımsız yeni bir sekmede açılır.':'Die Dokumente öffnen sich als Original-PDF in einem neuen Tab, unabhängig von der Website.','Sertifikayı görüntüle':'Zertifikat ansehen','Doğrulanmış eğitim':'Verifizierter Kurs','Öğrenme arşivi':'Lernarchiv','Sertifikalar ve tamamlanan eğitimler':'Zertifikate und abgeschlossene Kurse','Web, tasarım, iletişim ve dil alanlarında tamamladığım eğitimleri ayrı bir bölümde inceleyebilirsiniz.':'Entdecken Sie meine Kurse in Web, Design, Kommunikation und Sprache.','Sertifikaları gör':'Zertifikate ansehen',
  '✦ Kullanıcı odaklı ⌁ Temiz kod ✦ Duyarlı tasarım ⌁ Sürekli öğrenme':'✦ Nutzerorientiert ⌁ Sauberer Code ✦ Responsives Design ⌁ Kontinuierliches Lernen','tasarım + kod':'Design + Code','Fikirleri':'Ideen in','arayüzlere':'Interfaces','dönüştür.':'verwandeln.','DETAY':'DETAIL','Özenli':'Sorgfältig','YAKLAŞIM':'ANSATZ','⌁ öğren / tasarla / geliştir':'⌁ lernen / gestalten / entwickeln','tasarım ↗ kod ↗ deneyim':'Design ↗ Code ↗ Erlebnis','Deneyerek, araştırarak ve geri bildirimleri değerlendirerek her projede bir öncekinin üzerine koyuyorum.':'Durch Ausprobieren, Recherche und Feedback baue ich mit jedem Projekt auf dem Gelernten auf.',
  'Responsive Tasarım':'Responsives Design','Web Standartları':'Webstandards','Problem Çözme':'Problemlösung','01 / Hakkımda':'01 / Über mich','02 / Yeteneklerim':'02 / Kenntnisse','03 / Projelerim':'03 / Projekte','04 / Eğitim':'04 / Ausbildung','05 / İletişim':'05 / Kontakt','Eğitim geçmişim ve web alanındaki gelişim sürecimin akademik temeli.':'Meine Ausbildung bildet die akademische Grundlage meiner Entwicklung im Webbereich.','Mezuniyet ·':'Abschluss ·','Web Tasarımı ve Kodlama':'Webdesign und Coding','Bu program, görsel tasarım yaklaşımımı web teknolojileriyle bir araya getirdiğim akademik temelimi oluşturdu. Öğrenme sürecimi düzenli pratik ve kişisel projelerle sürdürüyorum.':'Dieses Programm bildet meine akademische Grundlage, auf der ich visuelles Design mit Webtechnologien verbinde. Ich lerne durch regelmäßige Praxis und eigene Projekte weiter.',
  'Bitki satışı için planlanan modern ve pastel tasarımlı bir e-ticaret sitesi.':'Eine moderne E-Commerce-Website in Pastellfarben für den Pflanzenverkauf.','Menü, masa rezervasyonu ve yemeklerin sergilendiği modern bir restoran sitesi.':'Eine moderne Restaurant-Website mit Menü, Tischreservierung und Speisen.','Gezi yazıları ve rota önerileri için planlanan sade bir seyahat blogu.':'Ein klarer Reiseblog für Reiseberichte und Routenvorschläge.','Kahve menüsü ve mekân atmosferini öne çıkaran bir kahve dükkânı sitesi.':'Eine Café-Website, die Menü und Atmosphäre hervorhebt.','Günlük görevleri düzenlemek için planlanan sade bir web uygulaması.':'Eine einfache Webanwendung zur Organisation täglicher Aufgaben.','Açelya’nın kişisel çalışmalarını ve öğrenme sürecini sunduğu portfolio sitesi.':'Ein Portfolio über Açelyas persönliche Arbeiten und Lernprozess.'
});

Object.assign(translations.en, {
  "Çiçek, bitki ve hediye ürünleri için hazırlanmış, pastel tasarımlı örnek bir çevrim içi mağaza.":"A demo online shop for flowers, plants and gifts, designed with a soft pastel look.",
  "Bitki keşfetme ve satın alma sürecini sade, keyifli ve farklı ekranlarda rahat kullanılan bir deneyime dönüştürmek.":"To turn discovering and buying plants into a simple, pleasant experience that works comfortably on different screens.",
  "Geniş bir ürün kataloğunu kategori, ürün detayı, sepet ve favoriler akışıyla düzenlemeyi ve farklı ekranlara uyumlu bir mağaza arayüzü kurmayı öğrendim.":"I learned how to organise a large product catalogue with categories, product pages, a cart and favourites, and how to build a shop interface that adapts to different screens.",
  "Çok sayıda ürünü ve bakım bilgisini kalabalık göstermeden sunmak, sepet ve ödeme adımlarını sade tutmak.":"Presenting many products and care details without clutter, and keeping the cart and checkout steps simple.",
  "Ürün bilgileri ayrı bir veri yapısında toplandı; listeleme, detay ve sepet ortak bileşenlerle kuruldu. Ödeme adımı gerçek işlem yapmayan örnek bir akış olarak hazırlandı.":"Product information was collected in a separate data structure, and the list, detail and cart pages share common components. The checkout is a demo flow that does not process real payments.",
  "Kategorilere ayrılmış ürün kataloğu":"Product catalogue with categories",
  "Bakım bilgili ürün detay sayfaları":"Product pages with care information",
  "Sepet":"Shopping cart",
  "Favoriler":"Favourites",
  "Sipariş ve ödeme akışı (örnek)":"Order and checkout flow (demo)",
  "Responsive tasarım":"Responsive design",
  "Aramalı menü, sepet, rezervasyon formu ve karanlık mod sunan, düz HTML, CSS ve JavaScript ile hazırlanmış restoran sitesi.":"A restaurant website built with plain HTML, CSS and JavaScript, with a searchable menu, cart, reservation form and dark mode.",
  "Restoranı ve menüsünü güçlü bir görsel düzenle tanıtmak, ziyaretçilerin yemekleri kolayca bulup rezervasyon yapabilmesini sağlamak.":"To present the restaurant and its menu with a strong visual layout, helping visitors find dishes easily and make a reservation.",
  "Framework kullanmadan çok bölümlü bir siteyi düzenli kurmayı, menü araması ve sepet gibi etkileşimleri JavaScript ile yazmayı öğrendim.":"I learned how to structure a multi-section site without a framework and how to write interactions such as menu search and a cart in JavaScript.",
  "Çok sayıda yemek fotoğrafını ve menü kartını hızlı ve düzenli göstermek; karanlık modda da okunaklı kalmak.":"Showing many dish photos and menu cards quickly and neatly, while staying readable in dark mode.",
  "Menü kartları tek bir düzenle hazırlandı, görseller boyutlandırıldı ve renkler ortak değişkenlerle yönetilerek iki tema için tutarlı bir görünüm sağlandı.":"The menu cards share one layout, images were resized, and colours are managed with shared variables so both themes look consistent.",
  "Aramalı menü sayfası":"Menu page with search",
  "Seçilen yemekler için sepet":"Cart for selected dishes",
  "Karanlık mod":"Dark mode",
  "Görsel kaydırıcı, galeri ve video bölümü":"Image slider, gallery and video section",
  "Rezervasyon ve iletişim formları":"Reservation and contact forms",
  "Hizmetleri, ekibi, kampanyaları ve randevu formunu 13 sayfada buluşturan, kurgusal bir güzellik salonu sitesi.":"A fictional beauty salon website that brings services, team, campaigns and an appointment form together in 13 pages.",
  "Güzellik salonu hizmetlerini zarif ve anlaşılır bir arayüzle tanıtmak, randevu sürecine kolay erişim sağlamak.":"To present beauty salon services with an elegant, clear interface and make booking an appointment easy.",
  "Çok sayfalı bir sitenin içeriğini sayfalardan ayırıp veri dosyalarında toplamayı ve form doğrulamayı öğrendim.":"I learned how to separate the content of a multi-page site from the pages, keep it in data files, and validate forms.",
  "13 sayfada tutarlı bir görünüm sağlamak ve metinleri değiştirirken her sayfayı tek tek düzenlememek.":"Keeping a consistent look across 13 pages without editing every page whenever the text changes.",
  "Hizmet, ekip ve kampanya metinleri JSON dosyalarında toplandı; sayfalar bu verileri okuyarak oluşuyor. Ortak stil dosyası tüm sayfalarda aynı tasarımı sağlıyor.":"Service, team and campaign texts live in JSON files that the pages read from, and a shared stylesheet keeps the design identical on every page.",
  "13 sayfa: hizmetler, ekip, kampanyalar, galeri, blog, randevu, iletişim ve daha fazlası":"13 pages: services, team, campaigns, gallery, blog, appointment, contact and more",
  "Doğrulamalı randevu formu":"Appointment form with validation",
  "JSON dosyalarından yüklenen içerik":"Content loaded from JSON files",
  "Kaydırma animasyonları ve hero videosu":"Scroll animations and a hero video",
  "53 ülkeyi tanıtan; ülke rehberleri, hero videoları, fotoğraf galerileri ve Türkçe, İngilizce, Almanca arayüzü olan seyahat sitesi.":"A travel website introducing 53 countries, with country guides, hero videos, photo galleries and a Turkish, English and German interface.",
  "Seyahat içeriklerini kolay keşfedilen, okunaklı ve ilham veren bir deneyimde bir araya getirmek.":"To bring travel content together in an experience that is easy to explore, readable and inspiring.",
  "Çok dilli bir sitede içeriği koddan ayırmayı, video ve görselleri hızlı yüklenecek şekilde hazırlamayı öğrendim.":"I learned how to separate content from code on a multilingual site and how to prepare videos and images so they load quickly.",
  "Büyük video ve görsel dosyalarının siteyi yavaşlatması; 53 ülkenin içeriğini düzenli ve dengeli tutmak.":"Large video and image files slowing the site down, and keeping the content of 53 countries organised and balanced.",
  "Videolar ve görseller küçültüldü; ülke yazıları ayrı metin dosyalarında ortak bir düzenle tutuldu, böylece sayfalar aynı yapıda oluşuyor.":"Videos and images were compressed, and the country texts are kept in separate text files with one shared structure, so every page is built the same way.",
  "Ülke bazlı rehber sayfaları":"Country guide pages",
  "Hero videoları ve fotoğraf galerileri":"Hero videos and photo galleries",
  "Kıtalara göre keşfetme ve arama":"Browse by continent and search",
  "Türkçe, İngilizce ve Almanca arayüz":"Turkish, English and German interface",
  "Three.js ile açılış animasyonu":"Intro animation with Three.js",
  "Tansiyon ve şeker ölçümlerini elle kaydetmek için hazırlanmış, hesap gerektirmeyen sade bir Android uygulaması.":"A simple Android app for noting blood pressure and blood sugar measurements by hand, with no account required.",
  "Ölçümleri düzenli takip etmek isteyenlere, sade ve anlaşılır bir kayıt defteri sunmak. Uygulama tıbbi yorum yapmaz.":"To give people who want to track their measurements a simple, clear logbook. The app does not give medical advice.",
  "Flutter ile mobil uygulama geliştirmeyi, verileri cihazda saklamayı ve ortalama hesaplamayı öğrendim.":"I learned how to build a mobile app with Flutter, store data on the device and calculate averages.",
  "Sağlıkla ilgili bir uygulamada yorum yapmadan, yalnızca kayıt tutan sade ve güvenilir bir deneyim sunmak.":"Offering a simple, trustworthy experience in a health-related app that only records values and never interprets them.",
  "Arayüz az sayıda ekranla sade tutuldu; veriler cihazda saklanıyor ve silme işlemi onay istiyor.":"The interface was kept simple with few screens; data is stored on the device and deleting asks for confirmation.",
  "Tansiyon (isteğe bağlı nabız) ve şeker (aç / tok) kaydı":"Blood pressure (optional pulse) and blood sugar (fasting / after meal) entries",
  "Son 7 ve 30 günün ortalamaları":"Averages for the last 7 and 30 days",
  "Düzenleme ve onaylı silme içeren geçmiş listesi":"History list with edit and confirmed delete",
  "Kayıtlar cihazda kalır, internet gerekmez":"Records stay on the device, no internet needed",
  "Otomatik reklam yok, yalnızca isteğe bağlı destek butonu":"No automatic ads, only an optional support button",
  "Görevleri, alışkanlıkları, su ve spor takibini tek yerde toplayan; App Store'da yayında olan çevrimdışı günlük planlayıcı.":"An offline daily planner on the App Store that brings tasks, habits, water and exercise tracking together in one place.",
  "Günlük planı ve alışkanlıkları hesap açmadan, internet gerektirmeden sade bir uygulamada takip edilebilir hâle getirmek.":"To make daily plans and habits easy to follow in a simple app, without an account or an internet connection.",
  "Bir mobil uygulamayı fikirden App Store yayınına kadar götürmeyi; yerel bildirimleri, grafikleri ve cihazda veri saklamayı öğrendim.":"I learned how to take a mobile app from idea to App Store release, including local notifications, charts and on-device data storage.",
  "Hatırlatmaların farklı cihazlarda doğru zamanda çalışması ve çok sayıda özelliğin tek bir sade arayüzde toplanması.":"Making reminders fire at the right time on different devices and fitting many features into one simple interface.",
  "Özellikler ayrı sekmelerde toplandı, kayıtlar cihazda tutuldu ve hatırlatmalar yerel bildirimlerle kuruldu. Uygulama kullanıcıdan hesap istemiyor.":"Features were grouped into separate tabs, records are kept on the device and reminders use local notifications. The app does not ask for an account.",
  "Kategori, saat ve not içeren günlük görevler":"Daily tasks with category, time and notes",
  "Seri ve haftalık görünümle alışkanlık takibi":"Habit tracking with streaks and a weekly overview",
  "Su ve spor takibi":"Water and exercise tracking",
  "Günlük ve haftalık ilerleme grafikleri":"Daily and weekly progress charts",
  "Yerel hatırlatmalar":"Local reminders",
  "Açık ve koyu tema":"Light and dark theme",
  "Tamamlandı":"Completed",
  "Seyahat":"Travel",
  "Mobil Uygulama":"Mobile App",
  "Tüm projeler":"All projects",
  "Proje özeti":"Project overview",
  "Projenin amacı":"Project purpose",
  "Özellikler":"Features",
  "Kullanılan teknolojiler":"Technologies used",
  "Öğrendiğim şeyler":"What I learned",
  "Karşılaşılan problemler":"Challenges",
  "Çözüm yaklaşımı":"Solution approach",
  "Önceki proje":"Previous project",
  "Sonraki proje":"Next project",
  "Yerel bildirimler":"Local notifications",
  "Tümü":"All",
  "Projeleri filtrele":"Filter projects",
  "Proje görselleri":"Project images",
  "Kaynak kodu":"Source code"
});
Object.assign(translations.de, {
  "Çiçek, bitki ve hediye ürünleri için hazırlanmış, pastel tasarımlı örnek bir çevrim içi mağaza.":"Ein Demo-Onlineshop für Blumen, Pflanzen und Geschenke im sanften Pastelldesign.",
  "Bitki keşfetme ve satın alma sürecini sade, keyifli ve farklı ekranlarda rahat kullanılan bir deneyime dönüştürmek.":"Das Entdecken und Kaufen von Pflanzen zu einem einfachen, angenehmen Erlebnis zu machen, das auf allen Bildschirmen gut funktioniert.",
  "Geniş bir ürün kataloğunu kategori, ürün detayı, sepet ve favoriler akışıyla düzenlemeyi ve farklı ekranlara uyumlu bir mağaza arayüzü kurmayı öğrendim.":"Ich habe gelernt, einen großen Produktkatalog mit Kategorien, Produktseiten, Warenkorb und Favoriten zu strukturieren und eine Shop-Oberfläche für verschiedene Bildschirme zu gestalten.",
  "Çok sayıda ürünü ve bakım bilgisini kalabalık göstermeden sunmak, sepet ve ödeme adımlarını sade tutmak.":"Viele Produkte und Pflegehinweise übersichtlich darzustellen und Warenkorb sowie Checkout einfach zu halten.",
  "Ürün bilgileri ayrı bir veri yapısında toplandı; listeleme, detay ve sepet ortak bileşenlerle kuruldu. Ödeme adımı gerçek işlem yapmayan örnek bir akış olarak hazırlandı.":"Die Produktdaten wurden in einer eigenen Datenstruktur gesammelt; Liste, Detailseite und Warenkorb nutzen gemeinsame Komponenten. Der Checkout ist ein Demo-Ablauf ohne echte Zahlung.",
  "Kategorilere ayrılmış ürün kataloğu":"Produktkatalog mit Kategorien",
  "Bakım bilgili ürün detay sayfaları":"Produktseiten mit Pflegehinweisen",
  "Sepet":"Warenkorb",
  "Favoriler":"Favoriten",
  "Sipariş ve ödeme akışı (örnek)":"Bestell- und Checkout-Ablauf (Demo)",
  "Responsive tasarım":"Responsives Design",
  "Aramalı menü, sepet, rezervasyon formu ve karanlık mod sunan, düz HTML, CSS ve JavaScript ile hazırlanmış restoran sitesi.":"Eine Restaurant-Website in reinem HTML, CSS und JavaScript mit durchsuchbarer Speisekarte, Warenkorb, Reservierungsformular und Dunkelmodus.",
  "Restoranı ve menüsünü güçlü bir görsel düzenle tanıtmak, ziyaretçilerin yemekleri kolayca bulup rezervasyon yapabilmesini sağlamak.":"Das Restaurant und seine Speisekarte mit starker visueller Gestaltung vorzustellen und Besuchern das einfache Finden von Gerichten und Reservieren zu ermöglichen.",
  "Framework kullanmadan çok bölümlü bir siteyi düzenli kurmayı, menü araması ve sepet gibi etkileşimleri JavaScript ile yazmayı öğrendim.":"Ich habe gelernt, eine mehrteilige Website ohne Framework sauber aufzubauen und Interaktionen wie Menüsuche und Warenkorb mit JavaScript umzusetzen.",
  "Çok sayıda yemek fotoğrafını ve menü kartını hızlı ve düzenli göstermek; karanlık modda da okunaklı kalmak.":"Viele Gerichtefotos und Menükarten schnell und übersichtlich darzustellen und auch im Dunkelmodus gut lesbar zu bleiben.",
  "Menü kartları tek bir düzenle hazırlandı, görseller boyutlandırıldı ve renkler ortak değişkenlerle yönetilerek iki tema için tutarlı bir görünüm sağlandı.":"Die Menükarten nutzen ein gemeinsames Layout, die Bilder wurden skaliert und die Farben über gemeinsame Variablen gesteuert, damit beide Designs einheitlich wirken.",
  "Aramalı menü sayfası":"Speisekarte mit Suche",
  "Seçilen yemekler için sepet":"Warenkorb für ausgewählte Gerichte",
  "Karanlık mod":"Dunkelmodus",
  "Görsel kaydırıcı, galeri ve video bölümü":"Bild-Slider, Galerie und Videobereich",
  "Rezervasyon ve iletişim formları":"Reservierungs- und Kontaktformulare",
  "Hizmetleri, ekibi, kampanyaları ve randevu formunu 13 sayfada buluşturan, kurgusal bir güzellik salonu sitesi.":"Eine fiktive Website für ein Kosmetikstudio, die Leistungen, Team, Aktionen und ein Terminformular auf 13 Seiten vereint.",
  "Güzellik salonu hizmetlerini zarif ve anlaşılır bir arayüzle tanıtmak, randevu sürecine kolay erişim sağlamak.":"Die Leistungen eines Kosmetikstudios elegant und verständlich zu präsentieren und die Terminbuchung zu erleichtern.",
  "Çok sayfalı bir sitenin içeriğini sayfalardan ayırıp veri dosyalarında toplamayı ve form doğrulamayı öğrendim.":"Ich habe gelernt, die Inhalte einer mehrseitigen Website von den Seiten zu trennen, in Datendateien zu sammeln und Formulare zu validieren.",
  "13 sayfada tutarlı bir görünüm sağlamak ve metinleri değiştirirken her sayfayı tek tek düzenlememek.":"Ein einheitliches Erscheinungsbild über 13 Seiten zu wahren, ohne bei Textänderungen jede Seite einzeln zu bearbeiten.",
  "Hizmet, ekip ve kampanya metinleri JSON dosyalarında toplandı; sayfalar bu verileri okuyarak oluşuyor. Ortak stil dosyası tüm sayfalarda aynı tasarımı sağlıyor.":"Texte zu Leistungen, Team und Aktionen liegen in JSON-Dateien, aus denen die Seiten ihre Inhalte lesen; ein gemeinsames Stylesheet sorgt für ein einheitliches Design.",
  "13 sayfa: hizmetler, ekip, kampanyalar, galeri, blog, randevu, iletişim ve daha fazlası":"13 Seiten: Leistungen, Team, Aktionen, Galerie, Blog, Termin, Kontakt und mehr",
  "Doğrulamalı randevu formu":"Terminformular mit Validierung",
  "JSON dosyalarından yüklenen içerik":"Inhalte aus JSON-Dateien",
  "Kaydırma animasyonları ve hero videosu":"Scroll-Animationen und Hero-Video",
  "53 ülkeyi tanıtan; ülke rehberleri, hero videoları, fotoğraf galerileri ve Türkçe, İngilizce, Almanca arayüzü olan seyahat sitesi.":"Eine Reise-Website mit 53 Ländern, Länderführern, Hero-Videos, Fotogalerien und einer türkischen, englischen und deutschen Oberfläche.",
  "Seyahat içeriklerini kolay keşfedilen, okunaklı ve ilham veren bir deneyimde bir araya getirmek.":"Reiseinhalte in einem Erlebnis zu bündeln, das leicht zu entdecken, gut lesbar und inspirierend ist.",
  "Çok dilli bir sitede içeriği koddan ayırmayı, video ve görselleri hızlı yüklenecek şekilde hazırlamayı öğrendim.":"Ich habe gelernt, auf einer mehrsprachigen Website Inhalte vom Code zu trennen und Videos und Bilder für schnelles Laden aufzubereiten.",
  "Büyük video ve görsel dosyalarının siteyi yavaşlatması; 53 ülkenin içeriğini düzenli ve dengeli tutmak.":"Große Video- und Bilddateien bremsten die Seite aus, und die Inhalte von 53 Ländern mussten übersichtlich und ausgewogen bleiben.",
  "Videolar ve görseller küçültüldü; ülke yazıları ayrı metin dosyalarında ortak bir düzenle tutuldu, böylece sayfalar aynı yapıda oluşuyor.":"Videos und Bilder wurden verkleinert, und die Ländertexte liegen in eigenen Textdateien mit gemeinsamer Struktur, sodass alle Seiten gleich aufgebaut sind.",
  "Ülke bazlı rehber sayfaları":"Länderführer-Seiten",
  "Hero videoları ve fotoğraf galerileri":"Hero-Videos und Fotogalerien",
  "Kıtalara göre keşfetme ve arama":"Entdecken nach Kontinent und Suche",
  "Türkçe, İngilizce ve Almanca arayüz":"Oberfläche auf Türkisch, Englisch und Deutsch",
  "Three.js ile açılış animasyonu":"Intro-Animation mit Three.js",
  "Tansiyon ve şeker ölçümlerini elle kaydetmek için hazırlanmış, hesap gerektirmeyen sade bir Android uygulaması.":"Eine einfache Android-App zum manuellen Notieren von Blutdruck- und Blutzuckerwerten, ganz ohne Konto.",
  "Ölçümleri düzenli takip etmek isteyenlere, sade ve anlaşılır bir kayıt defteri sunmak. Uygulama tıbbi yorum yapmaz.":"Menschen, die ihre Messwerte regelmäßig festhalten möchten, ein einfaches, klares Heft zu bieten. Die App gibt keine medizinischen Ratschläge.",
  "Flutter ile mobil uygulama geliştirmeyi, verileri cihazda saklamayı ve ortalama hesaplamayı öğrendim.":"Ich habe gelernt, mit Flutter eine mobile App zu entwickeln, Daten auf dem Gerät zu speichern und Durchschnittswerte zu berechnen.",
  "Sağlıkla ilgili bir uygulamada yorum yapmadan, yalnızca kayıt tutan sade ve güvenilir bir deneyim sunmak.":"In einer gesundheitsbezogenen App eine einfache, vertrauenswürdige Erfahrung zu bieten, die Werte nur erfasst und nie bewertet.",
  "Arayüz az sayıda ekranla sade tutuldu; veriler cihazda saklanıyor ve silme işlemi onay istiyor.":"Die Oberfläche blieb mit wenigen Bildschirmen schlicht; Daten werden auf dem Gerät gespeichert und das Löschen verlangt eine Bestätigung.",
  "Tansiyon (isteğe bağlı nabız) ve şeker (aç / tok) kaydı":"Blutdruck (optional mit Puls) und Blutzucker (nüchtern / nach dem Essen) eintragen",
  "Son 7 ve 30 günün ortalamaları":"Durchschnittswerte der letzten 7 und 30 Tage",
  "Düzenleme ve onaylı silme içeren geçmiş listesi":"Verlauf mit Bearbeiten und Löschen nach Bestätigung",
  "Kayıtlar cihazda kalır, internet gerekmez":"Daten bleiben auf dem Gerät, kein Internet nötig",
  "Otomatik reklam yok, yalnızca isteğe bağlı destek butonu":"Keine automatische Werbung, nur ein optionaler Unterstützer-Button",
  "Görevleri, alışkanlıkları, su ve spor takibini tek yerde toplayan; App Store'da yayında olan çevrimdışı günlük planlayıcı.":"Ein Offline-Tagesplaner im App Store, der Aufgaben, Gewohnheiten sowie Wasser- und Sport-Tracking an einem Ort vereint.",
  "Günlük planı ve alışkanlıkları hesap açmadan, internet gerektirmeden sade bir uygulamada takip edilebilir hâle getirmek.":"Tagesplanung und Gewohnheiten in einer einfachen App ohne Konto und ohne Internetverbindung nachvollziehbar zu machen.",
  "Bir mobil uygulamayı fikirden App Store yayınına kadar götürmeyi; yerel bildirimleri, grafikleri ve cihazda veri saklamayı öğrendim.":"Ich habe gelernt, eine mobile App von der Idee bis zur Veröffentlichung im App Store zu bringen, einschließlich lokaler Benachrichtigungen, Diagrammen und Datenspeicherung auf dem Gerät.",
  "Hatırlatmaların farklı cihazlarda doğru zamanda çalışması ve çok sayıda özelliğin tek bir sade arayüzde toplanması.":"Erinnerungen auf verschiedenen Geräten zur richtigen Zeit auszulösen und viele Funktionen in einer einfachen Oberfläche unterzubringen.",
  "Özellikler ayrı sekmelerde toplandı, kayıtlar cihazda tutuldu ve hatırlatmalar yerel bildirimlerle kuruldu. Uygulama kullanıcıdan hesap istemiyor.":"Die Funktionen wurden in eigene Tabs gegliedert, Daten liegen auf dem Gerät und Erinnerungen nutzen lokale Benachrichtigungen. Die App verlangt kein Konto.",
  "Kategori, saat ve not içeren günlük görevler":"Tägliche Aufgaben mit Kategorie, Uhrzeit und Notizen",
  "Seri ve haftalık görünümle alışkanlık takibi":"Gewohnheiten mit Serien und Wochenübersicht",
  "Su ve spor takibi":"Wasser- und Sport-Tracking",
  "Günlük ve haftalık ilerleme grafikleri":"Tages- und Wochenfortschritt als Diagramm",
  "Yerel hatırlatmalar":"Lokale Erinnerungen",
  "Açık ve koyu tema":"Helles und dunkles Design",
  "Tamamlandı":"Abgeschlossen",
  "Seyahat":"Reisen",
  "Mobil Uygulama":"Mobile App",
  "Tüm projeler":"Alle Projekte",
  "Proje özeti":"Projektübersicht",
  "Projenin amacı":"Ziel des Projekts",
  "Özellikler":"Funktionen",
  "Kullanılan teknolojiler":"Verwendete Technologien",
  "Öğrendiğim şeyler":"Was ich gelernt habe",
  "Karşılaşılan problemler":"Herausforderungen",
  "Çözüm yaklaşımı":"Lösungsansatz",
  "Önceki proje":"Vorheriges Projekt",
  "Sonraki proje":"Nächstes Projekt",
  "Yerel bildirimler":"Lokale Benachrichtigungen",
  "Tümü":"Alle",
  "Projeleri filtrele":"Projekte filtern",
  "Proje görselleri":"Projektbilder",
  "Kaynak kodu":"Quellcode"
});

Object.assign(translations.en, {
  'Eğitimimi, yeteneklerimi ve geliştirdiğim projeleri sergileyen kişisel CV ve portfolio sitesi.':'A personal CV and portfolio website presenting my education, skills and the projects I have built.',
  'Öğrenme yolculuğunu ve üretilen projeleri sade, erişilebilir ve kolay güncellenebilir bir yapıda sunmak.':'To present my learning journey and projects in a simple, accessible and easy-to-update structure.',
  'Çok sayfalı yapı':'Multi-page structure','Merkezi içerik yönetimi':'Central content management','Proje filtreleme':'Project filtering','Dinamik proje detayları':'Dynamic project details','Erişilebilirlik ve SEO':'Accessibility and SEO',
  'Tekrarlanabilir bileşenler, merkezi veri yönetimi ve farklı ekranlara uyumlu arayüz geliştirme üzerine çalışıldı.':'I worked on reusable components, central data management and building interfaces that adapt to different screens.',
  'Farklı içerik yoğunluklarını aynı tasarım sistemi içinde dengeli ve kolay güncellenebilir biçimde sunmak.':'Presenting different amounts of content in a balanced and easily updatable way within one design system.',
  'İçerikler tek bir veri dosyasında toplandı; sayfalar yeniden kullanılabilir bileşenler ve ortak tasarım değişkenleriyle kuruldu.':'Content was gathered in a single data file; pages were built with reusable components and shared design variables.'
});
Object.assign(translations.de, {
  'Eğitimimi, yeteneklerimi ve geliştirdiğim projeleri sergileyen kişisel CV ve portfolio sitesi.':'Eine persönliche Lebenslauf- und Portfolio-Website mit meiner Ausbildung, meinen Kenntnissen und meinen Projekten.',
  'Öğrenme yolculuğunu ve üretilen projeleri sade, erişilebilir ve kolay güncellenebilir bir yapıda sunmak.':'Meinen Lernweg und meine Projekte in einer einfachen, zugänglichen und leicht aktualisierbaren Struktur zu präsentieren.',
  'Çok sayfalı yapı':'Mehrseitige Struktur','Merkezi içerik yönetimi':'Zentrale Inhaltsverwaltung','Proje filtreleme':'Projektfilter','Dinamik proje detayları':'Dynamische Projektdetails','Erişilebilirlik ve SEO':'Barrierefreiheit und SEO',
  'Tekrarlanabilir bileşenler, merkezi veri yönetimi ve farklı ekranlara uyumlu arayüz geliştirme üzerine çalışıldı.':'Ich habe an wiederverwendbaren Komponenten, zentraler Datenverwaltung und Oberflächen für verschiedene Bildschirme gearbeitet.',
  'Farklı içerik yoğunluklarını aynı tasarım sistemi içinde dengeli ve kolay güncellenebilir biçimde sunmak.':'Unterschiedlich viel Inhalt in einem Designsystem ausgewogen und leicht aktualisierbar darzustellen.',
  'İçerikler tek bir veri dosyasında toplandı; sayfalar yeniden kullanılabilir bileşenler ve ortak tasarım değişkenleriyle kuruldu.':'Die Inhalte wurden in einer Datei gesammelt; die Seiten bestehen aus wiederverwendbaren Komponenten und gemeinsamen Designvariablen.'
});

Object.assign(translations.en, {"Devam ediyor · 1. sınıf": "Ongoing · 1st year", "Yönetim Bilişim Sistemleri": "Management Information Systems", "Lisans": "Bachelor’s Degree", "Aktif öğrenci": "Current student", "Odak": "Focus", "Bilgi sistemleri ve iş süreçleri": "Information systems and business processes", "İşletme, teknoloji ve veri yönetimini bir araya getiren bu lisans programıyla web geliştirme temelimi bilgi sistemleri, veri tabanları ve iş süreçleri bilgisiyle tamamlıyorum.": "With this bachelor’s program, which combines business, technology and data management, I am complementing my web development foundation with knowledge of information systems, databases and business processes.", "HTML5 ile Web Geliştirme": "Web Development with HTML5", "Yapay Zekâ ile Web ve Mobil Uygulama Geliştirme": "Web and Mobile App Development with AI", "Yapay Zekâ Okuryazarlığı": "AI Literacy", "Millî Eğitim Bakanlığı": "Ministry of National Education", "Sertifika belgeleri talep üzerine paylaşılır.": "Certificate documents are available on request.", "Web geliştirme, yapay zekâ, tasarım, iletişim, sosyal medya ve yabancı dil alanlarında tamamladığım eğitimler.": "Courses I completed in web development, AI, design, communication, social media and foreign languages.", "Mesajı gönder": "Send message", "Gönderiliyor…": "Sending…", "Mesajınız doğrudan e-posta kutuma iletilir.": "Your message is delivered straight to my inbox.", "Mesajınız bana ulaştı, teşekkürler! En kısa sürede e-posta ile dönüş yapacağım.": "Your message has reached me, thank you! I will reply by email as soon as possible.", "Mesaj gönderilemedi. Lütfen tekrar deneyin ya da doğrudan": "The message could not be sent. Please try again or write directly to", "adresine yazın.": "."});
Object.assign(translations.de, {"Devam ediyor · 1. sınıf": "Laufend · 1. Studienjahr", "Yönetim Bilişim Sistemleri": "Wirtschaftsinformatik (Management Information Systems)", "Lisans": "Bachelor", "Aktif öğrenci": "Aktuelle Studentin", "Odak": "Schwerpunkt", "Bilgi sistemleri ve iş süreçleri": "Informationssysteme und Geschäftsprozesse", "İşletme, teknoloji ve veri yönetimini bir araya getiren bu lisans programıyla web geliştirme temelimi bilgi sistemleri, veri tabanları ve iş süreçleri bilgisiyle tamamlıyorum.": "In diesem Bachelorstudiengang, der Betriebswirtschaft, Technologie und Datenmanagement verbindet, ergänze ich meine Webentwicklungs-Grundlagen um Wissen zu Informationssystemen, Datenbanken und Geschäftsprozessen.", "HTML5 ile Web Geliştirme": "Webentwicklung mit HTML5", "Yapay Zekâ ile Web ve Mobil Uygulama Geliştirme": "Web- und Mobile-App-Entwicklung mit KI", "Yapay Zekâ Okuryazarlığı": "KI-Kompetenz", "Millî Eğitim Bakanlığı": "Türkisches Bildungsministerium", "Sertifika belgeleri talep üzerine paylaşılır.": "Zertifikate werden auf Anfrage zur Verfügung gestellt.", "Web geliştirme, yapay zekâ, tasarım, iletişim, sosyal medya ve yabancı dil alanlarında tamamladığım eğitimler.": "Kurse, die ich in Webentwicklung, KI, Design, Kommunikation, Social Media und Fremdsprachen abgeschlossen habe.", "Mesajı gönder": "Nachricht senden", "Gönderiliyor…": "Wird gesendet…", "Mesajınız doğrudan e-posta kutuma iletilir.": "Ihre Nachricht geht direkt in mein Postfach.", "Mesajınız bana ulaştı, teşekkürler! En kısa sürede e-posta ile dönüş yapacağım.": "Ihre Nachricht ist bei mir angekommen, vielen Dank! Ich antworte so bald wie möglich per E-Mail.", "Mesaj gönderilemedi. Lütfen tekrar deneyin ya da doğrudan": "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an", "adresine yazın.": "."});

const original = new WeakMap<Node, string>();
function translatePage(language: Language) {
  document.documentElement.lang = language;
  const reverse = new Map<string,string>();
  Object.values(translations).forEach(dictionary => Object.entries(dictionary).forEach(([tr,value]) => reverse.set(value,tr)));
  const dictionary = language === 'tr' ? {} : translations[language];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const raw = original.get(node) ?? node.textContent ?? '';
    if (!original.has(node)) original.set(node, reverse.get(raw.trim()) ?? raw);
    const base = original.get(node) ?? raw;
    if (!base.trim()) continue;
    let translated = base;
    Object.entries(dictionary).sort(([a],[b]) => b.length - a.length).forEach(([source, target]) => { translated = translated.replaceAll(source, target); });
    node.textContent = translated;
  }
  document.querySelectorAll<HTMLElement>('[placeholder]').forEach(element => {
    const base = element.dataset.originalPlaceholder || element.getAttribute('placeholder') || '';
    element.dataset.originalPlaceholder = base;
    element.setAttribute('placeholder', dictionary[base] || base);
  });
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');
  useEffect(() => { const saved = localStorage.getItem('portfolio-language') as Language | null; if (saved && ['tr','en','de'].includes(saved)) setLanguageState(saved); }, []);
  useEffect(() => { translatePage(language); localStorage.setItem('portfolio-language', language); }, [language]);
  const setLanguage = (next: Language) => setLanguageState(next);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
export function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  return <div className="language-switcher" aria-label="Dil seçimi">{(['tr','en','de'] as Language[]).map(item => <button key={item} type="button" className={language === item ? 'active' : ''} onClick={() => setLanguage(item)} aria-pressed={language === item}>{item.toUpperCase()}</button>)}</div>;
}
