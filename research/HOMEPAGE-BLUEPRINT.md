# Direction D — Homepage design system & interaction blueprint

Durum: onay bekleyen tasarım önerisi. Direction D creative direction seçildi; mockup piksel sözleşmesi değildir. Homepage implementasyonu, motion ve yeni mobile render bu aşamada yapılmadı. Görsel/tipografik değerlerin kaynağı öneri olan `../DESIGN.md`; burası ana sayfa akışı ve davranış sözleşmesidir. Surface mode: Experience.

## 1. Homepage experience akışı

**Açılış / proje keşfi → stüdyo yaklaşımı → iki seçili proje pasajı → mimari düşünce → hizmetler → iletişim.** Hero kendi başına ilk seçili projedir; sonraki projeler tekrar değildir. İlk kapsam üç konsept proje: Avlu Evi (hero), Taş Pavyon ve Işık Avlusu. Bunlar kurgusal çalışma adlarıdır.

### Eşik — Hero ve proje keşfi aynı deneyim

Büyük ARAL, fotoğraf ön planı, ana avlu ve yükselen dikey detay Direction D kompozisyonunu korur. Proje adı ve Projeyi keşfet bağlantısı ilk ekranda görünür. Projeler nav bağlantısı sonraki seçili eserlere doğrudan götürür. Kullanıcı tüm motion sekansını tamamlamak zorunda değildir.

İlk scroll ana fotoğrafın kadrajını açar ve büyük marka header'a yerleşir. Hero'nun alt caption ekseni devam eden pasajın yatay referansı olur; ayrı bir “özellikler” section'ına ani kesme olmaz.

### Stüdyo yaklaşımı — Çalışma açılımı

Hero yoğunluğundan sonra sakin boşluk. Soldan başlayan, 2–3 satırlık editorial yaklaşım cümlesi; hemen altındaki kısa gövde metni aynı okuma ekseninde. Çalışma/eskiz/malzeme fotoğrafı sağda daha aşağıdan başlar; header gibi aynı baseline'da başlık+küçük paragraf split'i değildir. Görsel bir proje render'ı değil, stüdyonun düşünme sürecini temsil eden açıkça konsept içeriktir.

Bu pasaj insanı ve süreci tanıtır, hero'daki taş/ahşap/ışık ailesini çalışma malzemelerine taşır. Ekip büyüklüğü veya kurucu geçmişi uydurulmaz. “Stüdyoyu tanıyın” bağlantısı gelecekte stüdyo route'una gider; desktop fotoğrafı hafif yüksekliğe taşınabilir fakat scroll animasyonu yok.

### Seçili işler — İki farklı proje pasajı

**Taş Pavyon:** geniş, düşük yatay dış cephe fotoğrafı; caption alt solda. Bir sonraki görsel onun kopyası değil, sağda daha küçük dikey iç/dış eşik. Boş alan tipografinin genişliğiyle ölçülür; fotoğrafların farklı başlangıçları mekân/bütün ilişkisini kurar. Tek proje route'una iki bakış sunar.

**Işık Avlusu:** daha uzun dikey iç mekân fotoğrafı sol 5 kolonda; sağda aynı yapının yatay ışık detayı daha aşağıda ve kısa bir proje notu onun altında. Önceki geniş panoramanın tersine, bu pasaj duvar yüksekliğini ve ışık ölçüsünü hissettirir. Tamamen aynı image-left/text-right section dönüşümlü tekrarlanmaz.

Her proje sahnesinin aynı caption fontu, açık konsept etiketi ve bağlantı dili var. Görseller doğrudan eser girişi. “Tüm projeler” tek sade arşiv bağlantısı olarak pasaj sonunda; filtre pill'leri, üç kartlı grid veya oto carousel yok. Arşiv route'u ileride erişilebilir listesiyle hızlı değerlendirme sağlar.

### Mimari düşünce — Işığın izi

Aynı mekânın yakın malzeme detayı ve geniş hacim görünümü, biri dar biri geniş iki pencere olarak başlar. Altında kısa editorial düşünce; metin ortalanmaz, ana fotoğrafın sol ekseninden başlar. Buradaki içerik soyut “zamansız tasarım” iddiası yerine fotoğrafta görülen ışık, eşik ve malzeme kararını anlatır; örnek metin onaylı marka felsefesi değildir.

İkinci güçlü scroll anında dar pencerenin sınırı açılır, geniş hacim baskın hale gelir. Bir eşik çizgisi bu iki bakış arasındaki ilişkiyi tek an için belirtir, sonra durur. Plan kullanılacaksa bu aynı projenin bakış açısını açıklayan küçük tutarlı konsept planı olmalı; plan olmadan da pasaj eksiksiz çalışır.

### Hizmetler — Kapsam dizini

Büyük fakat sakin bir “Bir projeyi birlikte düşünmek” çalışma başlığı. Altında bir ortak görüntü alanı ve hizmet girişleri: Mimari Tasarım, İç Mekân, Peyzaj İlişkisi (son kapsam onay bekler). Başlıkların farklı uzunluğu ve kısa açıklamaları editorial ritmi kurar; ikonlu kutular yok. Satırların tamamını çift çizgiyle kapatmak yerine yalnızca grup sınırında hairline.

Bir hizmete tıklayınca o hizmetin kısa kapsamı görünür ve ortak fotoğraf alanı ilgili malzeme/çalışma karesine geçer. Desktop hover ek preview; asıl erişim click, keyboard ve touch. Kullanıcı görüşme öncesinde hangi işlerin kapsandığını anlayabilir. Factual hizmet iddiaları ve “anahtar teslim” gibi kapsam sözleri kullanıcı onayı olmadan eklenmez.

### İletişim / final CTA — Son eşik

Sıcak zemin üzerinde büyük, sol hizalı editorial davet. Örnek: “Bir sonraki mekânı birlikte düşünelim.” Onun altında tek eylem “Projenizi konuşalım”. Bir dar malzeme fotoğrafı, hero'nun bütün/detay ilişkisini sakin biçimde hatırlatır; hero tekrar edilmez. Nav/konsept bilgisi footer'da daha küçük ölçekte kapanır.

Form kartı, gradient satış bandı veya her yerde tekrarlanan contact button yok. Homepage'de nav İletişim bu bölüme götürür; ana contact eylemi ayrı contact route'u veya doğrulanmış adres üzerinden çalışır. Gerçek adres/endpoint henüz yok; bu karar implementasyonda çözülmeli. Mesaj formu seçilirse açık label, hata/başarı state ve gerçek delivery bilgisi zorunlu; taslakta gönderilmiş gibi davranan sahte form kurulmaz.

## 2. Typography ve spacing

`DESIGN.md` önerilen tek görsel otoritedir: Bodoni Moda editorial display + Manrope okunur UI/body. Hero'da ARAL 220–320px, statement 56–88px, proje isimleri 32–44px sans, body 18px. Mobile ARAL 88–120px, statement 36–48px, başlıklar 26–32px, body 16–18px. Display sayısal hedefleri fontun gerçek harf ölçüsüne göre ayarlanır; wordmark 9 kolon/viewport sınırı dışına zorlanmaz.

Spacing ailesi 4/8/12/16/24/32/48/64/96/128/160px. Caption 12–16px mesafe, ilgili metin/görüntü 24–48px, büyük pasaj arası desktop 96–160px/mobile 56–80px. Başlık/gövde/fotoğraf gruplanır; boşluk içerikle ilişkisi olmayan sabit section padding'i değildir.

Hero'daki maskeli tipografi yalnızca orada güçlüdür. Sonraki büyük ifadeler açık okunur düz zeminde; büyük font + fotoğraf örtüşmesi her bölümde tekrar edilmez. Türkçe çalışma metinleri 2–3 satırlık kısa statement ve 45–60ch gövde ölçüsüyle hazırlanır; site dili halen nihai olarak belirlenmedi.

## 3. Image composition sözleşmesi

| İçerik | Ana kadraj | Detay | Kompozisyon amacı |
|---|---|---|---|
| Hero / Avlu Evi | 16:9–2:1 geniş avlu | Yaklaşık 1:2.5–1:3 kapı/taş şeridi | Mekânın bütünü ile malzeme ölçeği |
| Stüdyo | 4:5 çalışma/eskiz | Gerekli değil | Düşünce ve el/malzeme ilişkisi |
| Taş Pavyon | 2:1 dış cephe | 3:4 eşik | Yatay peyzaj ve kütle |
| Işık Avlusu | 4:5 iç hacim | 3:2 ışık detayı | Yükseklik ve ışık ilişkisi |
| Felsefe | Aynı hacmin geniş 3:2 görünümü | Yakın malzeme penceresi | Yakından bütüne geçiş |
| Hizmetler | Ortak 4:5 preview | Seçime göre crop | Hizmet kapsamını somutlaştırmak |
| Kapanış | Dar 2:3 malzeme detayı | Gerekli değil | Hero ile sessiz görsel akrabalık |

Bunlar görünür viewport oranlarıdır; kaynak fotoğraf birden fazla crop'a yetecek kenar payına sahip olmalı. Desktop ve mobile için ayrı focal point gerekir. Taş dokusu, kapı/lintel ankrajı ve zeytin/peyzaj ana crop'ta korunur. Aşırı tele/wide distortion, farklı renk grading'leri veya rastgele alakasız stock fotoğrafları aynı stüdyo ailesine sokulmaz.

Aynı sahnede en fazla iki fotoğraf düzlemi; organik foreground hero'ya özgü üçüncü dekoratif katmandır. Ana fotoğraf ve foreground aynı ölçek/konumla taşınır. Yaprak/taş crop'u yanlış bölgede koparılmaz. Büyük gerçek metin fotoğraf raster'ına gömülmez. Görsel ailesinin en azından hero dış/iç/detay seti aynı kurgusal yapı olarak yeniden ve tutarlı üretilmeli; mevcut mockup'tan tek tek görüntü kırpmak nihai asset üretimi sayılmaz.

Caption'lar dışarıda ve kalıcı; proje ismi hover'da belirmez. Konsept etiketi okunur. Gerçek lokasyon, m², yıl, müşteri veya ödül bilinmiyorsa metadata boş bırakılır; uydurma teknik değerle estetik tamamlanmaz.

## 4. Motion / interaction blueprint

**Güçlü motion anları üç adet:** hero dönüşümü, felsefede detay→hacim açılması ve kullanıcı tetiklemeli proje route geçişi. İlk ikisi scroll-driven; üçüncüsü yalnızca seçimle. Yaklaşım, hizmet açıklaması ve contact metni scroll'da topluca hareket etmez.

### M1 — ARAL'dan header'a / kadrajın açılması

- Başlangıç görünür: büyük masthead, fotoğraf ve nav zaten ekranda; preloader veya otomatik intro bekleme yok.
- Scroll mesafesi başlangıç hipotezi 0.65–0.85 viewport. İlerleme 0–25%: marka bulunduğu yerden ayrılmaya başlar, fotoğrafın üst maskesi açılır. 25–75%: marka üst sol kompakt konuma taşınır, ana görsel 1.06→1.00 crop ölçeğine iner. 75–100%: header yerinde kalır, caption ve bir sonraki pasaj doğal akışa devam eder.
- Aynı header slotuna 28–32px kimlik yerleşir. Büyük ve küçük tipografi arasında optical size/weight gerekiyorsa geçiş sırasında iki dekoratif katman kısa handoff yapabilir; yalnızca bir semantic marka/nav vardır.
- Dikey detayın y eksenindeki göreli hareketi 24–40px ile sınırlı; ana fotoğraf kadrajı açılırken detay daha az hareket eder. Yakın malzemenin ayrı derinlik düzlemi olduğu hissi amaçtır, mouse-follow dekoru değildir. Ana fotoğraf/foreground ayrışmaz.
- En fazla bir kısa yerel sticky sahne kullanılabilir; uzun pin/smooth-scroll hijack yok. Başlangıç/son normal document akışını korur. İlk hero'nun gerçek yüksekliği ve sticky ihtiyacı browser prototype sırasında doğrulanacak; yanlış boyut bu değerlerle otomatik onaylı sayılmaz.
- Geri scroll aynı state'i geri getirir; yeni timer başlatılmaz. Hızlı scroll terminal state'e doğrudan ulaşır. Deep-link'te büyük masthead yeniden oynatılmaz; header hedefte hazırdır.

### M2 — Detaydan hacme / mimari düşünce

- Bir dar detay penceresi ile geniş mekân penceresi, yaklaşık 0.4–0.55 viewport'luk kısa ilerlemede tek baskın mekân görüntüsüne açılır.
- Tek dikdörtgen inset/crop sınırı + aynı fotoğraf ailesinden güvenilir bir anchor. Scale farkı en fazla yaklaşık %6; büyük uçuş veya 3D dönüş yok.
- Bir eşik çizgisi pencere kenarından görüntünün yapısal doğrultusuna yerleşir; yalnızca bu ilişkiyi anlatırken hareket eder. Metin sabit ve baştan görünür, bir transform'un bitmesini beklemez.
- Farklı fotoğraflar aynı kamera perspektifiymiş gibi morph edilmez. Set tutarlı değilse efekt aynı fotoğrafın crop'undan geniş görünümüne indirgenir.

### M3 — Projeye giriş / route sürekliliği

- Kullanıcı fotoğraf veya açık proje linkine tıklar. Seçilen görüntünün mevcut rectangle'ı detay route'unun ana görseline 420–560ms başlangıç hedefiyle açılır. Mask ana geometriyi, küçük scale değişimi fotoğraf kökenini korur.
- Aynı görsel ve crop kökeni; keyfi ortadan zoom yok. Tüm sayfayı image slider gibi sağa kaydırmak yerine yalnızca seçilmiş fotoğrafın sürekliliği.
- Bir hareket devam ederken ikinci click veya Back tutarlı biçimde yeni hedefe yönlenir; layer geride kalmaz. Route content/başlık/mantıksal focus doğru sayfaya taşınır. Geri dönüş önceki proje ve scroll noktasını korur.
- Görüntü decode/veri hazır değilse loading gecikmesini dramatik transition'a gizleme; standart navigasyon ve görünür yükleme state'i. Keyboard/reduced-motion girişte doğrudan route değişimi; içerik navigasyona bağlı olarak geciktirilmez.

### Sakin interaction'lar

Nav/text link underline 160–180ms; menü 180–220ms ease-out; hizmet ortak preview'u kullanıcı seçimiyle yaklaşık 180–240ms kısa crop/reveal. Scroll-dramaturjisine ayrı hizmet motion sahnesi eklenmez. Focus anında görünür; hover yalnızca fine-pointer cihazda ek feedback. Sürekli hareket, stagger metin girişleri veya her görsele parallax yok.

### Easing, teknik sınır ve lifecycle

Scroll ilerlemesi doğrudan scroll'a bağlı; ağır smoothing, spring/bounce veya scroll'dan sonra takip eden uzun motion yok. Bağımsız on-screen route hareketinde yumuşak ease-in-out; küçük UI feedback'inde ease-out. Önerilen kısa UI curve `cubic-bezier(0.23,1,0.32,1)`; route curve implementasyonda gerçek kadrajla değerlendirilecek.

CSS basit feedback, Motion for React state/menu/service açıklaması için; GSAP + ScrollTrigger yalnızca koordineli M1/M2 gerektirirse. Bunlar plan kararıdır; henüz kütüphane kurulmadı. Büyük blur/backdrop-filter, sürekli font-size layout animasyonu, React state'e her scroll pikselini yazma veya her fotoğraf katmanına will-change yok. Resize/font load/route exit'te sahne ölçümü ve cleanup gerekli. Fixed/sticky katmanlar keyboard hedeflerini örtmez.

## 5. Desktop, tablet, mobile ve reduced-motion

| Deneyim | Desktop ≥1024px | Tablet 768–1023px | Mobile <768px |
|---|---|---|---|
| Hero | Büyük 9 kolon ARAL ve ana fotoğraf; 2 kolon yükselen detay | 8 kolon; ana fotoğraf 6, detay 2; örtüşme az | Tam genişlik ARAL → 4:5 ana fotoğraf → caption → ayrı detay |
| Header | Kısa scroll'da masthead→kompakt nav | Kompakt nav baştan; büyük masthead normal akış | 64px header + Menü baştan erişilebilir; 48px hedef |
| Ana kadraj | M1 mask/crop açılması | Daha sade dikdörtgen reveal veya statik | Statik, mobile focal point; pin ve parallax yok |
| Dikey detay | Ana fotoğraftan düşük relatif hareket | Statik | Ana fotoğraf yanında ezilmez; sıradaki ayrı detay görüntüsü |
| Yaklaşım | Açık kolonlar ve daha aşağıdaki çalışma karesi | Daha sıkı 8 kolon | İfade→metin→çalışma fotoğrafı |
| Proje pasajları | Bir yatay, bir dikey dominant düzen | Oranlar korunur, boş kolonlar azalır | Tek akışta oran çeşitliliği; başlık ve link sürekli görünür |
| Felsefe | M2 kısa detay→hacim | Sade iki fotoğraf | Detay→geniş mekân statik sırası |
| Hizmetler | Ortak preview + metin dizini | Touch seçimli ortak preview | Her başlığın altında metin ve ilgili görsel disclosure |
| Proje geçişi | M3 420–560ms önerisi | Basit kısa inset veya anında | Anında navigasyon varsayılan; hareket gerekmiyor |
| Kapanış | Editorial ifade ve sağda sakin detay | Aynı sistem sıkılaştırılır | İfade→tek CTA→küçük detay→footer |

Reduced-motion tüm ölçülerde: static masthead + kompakt kullanılabilir header; M1/M2 ve organik katman hareketi kapalı; M3 doğrudan navigasyon. Görseller ve içerik eksiksiz. Okuma sırası ve bağlantı hedefleri değişmez. Browser zoom ve dar ekran metni büyütmesinde photo crop tipografinin okunurluğundan daha düşük önceliklidir.

## Tasarım değerlendirmesi

| Perspektif | Blueprint'teki karşılığı |
|---|---|
| DAB UI Designer | Her pasaj farklı ritim; aynı fotoğraf, font, caption ve boşluk ailesi. Güçlü hero bütün sayfaya yayılır. |
| DAB Motion | Hareketin her birinin mekân/ölçek amacı var; üç ana an ve sakin pasajlar. |
| Emil Design Engineering | Anchor, interruption, hızlı nav feedback, geri scroll ve route lifecycle; dekoratif motion temel işleri bekletmez. |
| Taste | Repeated card/split-section şablonları yerine yayın, mimari sahne ve kapsam dizini; fotoğraf gerçek görsel taşıyıcı. |
| UI/UX Pro Max | Okunur type, görünür focus, 44/48px hedef, touch yolu, reduced-motion. Yerel typography ve UX araştırması kullanıldı; otomatik grid önerisi benimsenmedi. |
| Impeccable | Experience ana surface; tek tutarlı world, dominant motion sınırlı, görünür içerik ve somut image proof. Mockup exact-pixel implementation'a zorlamıyor; kullanıcı blueprint istedi. |

## Onay ve implementasyon sınırı

Kullanıcıya sunulan beş karar: akış, typography/spacing, image composition, motion ve desktop/mobile davranışı. Direction D seçimi bu ayrıntıların otomatik onayı değildir. Önce bu blueprint onaylanmalı; production scaffold, component kodu ve shipping assets sonra hazırlanacak.

Implementasyon sonrası desktop ve mobile gerçek browser QA: görünür ilk viewport/nav, crop/focal point, type wrap, motion reversal, menu/services keyboard/touch, back/deep link, reduced-motion, görüntü yükleme ve layout shift. İlk screenshot turunda desktop/mobile birlikte, sorunlar tek batch; ikinci tur düzeltmeleri doğrular. Bu dosya herhangi bir QA testi geçmiş iddiası taşımaz.

Açık gerçek içerik kararları: marka adı, son site dili, hizmet kapsamı, iletişim hedefi ve final proje fotoğraf seti. Bu konular tasarım önerisini engellemiyor; uydurulmuş müşteri/ofis geçmişiyle doldurulmayacak.
