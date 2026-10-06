# Direction D — Mekânın Sınırında

Durum: Direction D kullanıcı tarafından ana creative direction olarak seçildi. Mockup birebir kodlama talimatı değildir. Onay bekleyen tasarım sistemi `../DESIGN.md`, homepage ve interaction blueprint `HOMEPAGE-BLUEPRINT.md` dosyasında. Gerçek site veya motion kodu yazılmadı. A/B/C görselleri karşılaştırma için korundu; A artık önerilen yön değil.

## Yönün özü

ARAL masthead, geniş avlu fotoğrafı ve yukarı taşan dikey detay tek bir mekânsal sistem kurar. Tipografinin alt sınırı fotoğrafın ön planıyla kesişir. Fotoğraf yalnızca aşağıda duran bir içerik kutusu olmaktan çıkar; marka, kadraj ve navigasyonun yerleşimini belirler.

Sıcak doğal ışık, taş, ahşap, zeytin ağaçları ve sakin lüks atmosfer kullanıcı tarafından korunması istenen art direction'dır. ARAL henüz geçici marka adıdır. Avlu Evi kurgusal konsept projedir.

## İlk viewport

- Üst sağda küçük, açık ve başlangıçtan erişilebilir Projeler / Stüdyo / İletişim navigasyonu.
- Soldaki alanın yaklaşık dörtte üçünü kullanan büyük ARAL; editorial serif, yüksek tipografik karakter. Büyük marka ölçeği bu brief'in açık kararıdır; genel display-size sınırlarına küçültülmez.
- Büyük yatay fotoğraf masthead'in altına hafifçe girer. Zeytin dalları tipografinin çok küçük kısmının önüne geçer; marka okunur kalır.
- Dikey malzeme/eşik fotoğrafı sağda masthead seviyesine yükselir ve ana fotoğrafın tabanına oturur. Ana/detay görüntüler aynı projenin görsel dili olarak ele alınır.
- Fotoğrafın altında görünür proje adı, konsept etiketi ve Projeyi keşfet bağlantısı. Kart çerçevesi, filtre hapı veya eşit project grid yok.
- Bir sonraki fotoğraf pasajının başlangıcı altta görünür; bir poster veya bağımsız kapak değildir.

Mockup: `../.impeccable/mocks/decision/direction-d.png`. Native image_gen.imagegen ile üretildi. B/C görselleri yalnızca fotoğraf, ışık ve malzeme referansı olarak verildi; yeni kompozisyon istendi. Prompt ve onaysız durum yanındaki `.png.json` ve `direction-d-prompt.txt` dosyalarında; tam prompt PNG metadata'sına da gömüldü.

## Scroll dramaturjisi — araştırılmış öneri

Bu bölüm motion implementation'ı veya test edilmiş değerleri değil, ileride doğrulanacak davranış sözleşmesini tarif eder.

| Durum | Marka / navigasyon | Fotoğraf / mekân | İşlev |
|---|---|---|---|
| İlk ekran | Büyük ARAL; navigasyon zaten görünür | Geniş avlu + yükselen dikey malzeme detayı | Marka ve mimari ölçek tek bakışta okunur |
| İlk kısa scroll aralığı | Aynı masthead küçülüp üst soldaki kompakt marka konumuna yerleşir | Ana kadrajın dikdörtgen maskesi açılır; fotoğraf yakın crop'tan daha geniş bakışa geçer | Dikkati markadan mekâna aktarır; küçük header keşif alanını serbest bırakır |
| Mekânı keşfetme | Kompakt header okunur ve kullanılabilir kalır | Dikey detayın sınırı ana görüntünün kapı/lintel ekseniyle hizalanır; bir sonraki fotoğraf doğal akışta gelir | Detay ile bütünü ilişkilendirir |
| Proje seçimi | Header kimliği aynı kalır | Seçilen fotoğraf, proje detayındaki başlangıç görseline aynı kökenden açılır | Kullanıcı nereden geldiğini kaybetmez |

Scroll hareketi ilk yaklaşık 0.6–0.9 viewport mesafesinde tamamlanabilecek başlangıç hipotezidir; zaman bazlı zorunlu giriş veya uzun pin kullanılmaz. Native scroll korunur, aşağı/yukarı yönde aynı ilerleme geri çevrilir. Kadrajın sabit mimari ankrajı, fotoğraftaki kapı eşiği/kolon olacak; rastgele zoom merkezi olmayacak. Ana fotoğrafın 1.06→1.00 ölçek değişimi bir başlangıç hipotezidir; daha büyük zoom fotoğrafı ve algılanan mekânı bozabilir.

Masthead için transform/scale ve konum interpolasyonu, fotoğraf için dikdörtgen inset mask/crop değerlendirilir. Harfleri image-fill yapmak, her harfi farklı hızda dağıtmak veya fotoğrafı perspektifte eğmek önerilmez. Scroll-driven ilerlemenin kendisine ağır easing/damping uygulanmaz; el hareketinin gerisinde kalmamalı. Bağımsız UI tepkileri 150–220ms ease-out başlangıç hipoteziyle daha hızlıdır.

Tek semantic marka/header yapısı tercih edilir. Büyük görsel masthead ayrı katman olarak gerekirse dekoratif/aria-hidden olur; iki aynı odaklanabilir logo veya iki aynı nav üretilmez. Ölçümler font ve fotoğraflar hazır olduktan sonra yapılmalı; resize, geri navigasyon, derin link, hızlı scroll ve yön değiştirme senaryolarında tekrar doğrulanmalı. Header'ın kullanılabilirliği timeline'ın bitmesine bağlı olmamalı.

## Fotoğraf arayüzü

Ana görsel doğrudan proje girişi; görünür proje bağlantısı da aynı hedefe gider. Dikey detay kullanıldığında aynı projenin detay galerisini açabilir; hover bilgiye ulaşmanın tek yolu olmayacak. Görsellerin alt metni ve hedefleri birbirinden anlamlı şekilde ayrılır.

Seçili projeler sonraki akışta tek büyük sahneler, malzeme detayları ve kısa editorial notlarla devam eder. Her projeyi aynı tile ölçüsüne sokan bir indeks ana deneyim olarak kullanılmaz. Daha hızlı erişim için sade bir proje listesi sunulabilir; bu, görsel hikâyeden geçme zorunluluğunu kaldırır.

## Mimari çizgi / grid / floor-plan geometrisi

Yalnızca görüntü sınırları, eşik doğrultusu ve seçilen projenin konumuyla anlamlı ilişki taşıyan 1px çizgiler. Öneri: dikey detay kenarındaki çizgi kadraj açıldıkça header'ın içerik eksenine dönüşebilir. Tek yatay çizgi caption/content ayrımını taşır. Aynı anda çok sayıda çizgi çizilmez.

Zemini kaplayan blueprint grid, dekoratif ölçü numarası veya gerçek projeye aitmiş gibi gösterilen uydurma floor plan yok. İleride plan kullanılacaksa aynı kurgusal yapının tutarlı, açıkça konsept olarak belirtilen diyagramı hazırlanmalı ve bir fotoğrafın oda/bakış konumunu açıklamalı. Plan geometrisi markanın dekoru değil, ziyaretçinin mekânda yön bulma aracıdır.

Gerçek fotoğraf ön planı ile harf örtüşmesi için alpha matte gerekir. Yaprak konturlarını kaba clip-path polygon ile taklit etmek önerilmez. Sadece dikdörtgen fotoğraf viewport'unun açılması geometrik mask ile yapılabilir; bu iki işlem birbirinden ayrılır.

## Desktop ve mobile ayrı mantıklar

**Desktop:** masthead ve yükselen detay aynı yatay kompozisyonda. 12 kolonluk ölçü sistemi yerleşimi taşır; küçük ekran genişliklerinde detay şeridi metni sıkıştırmaya başlamadan yeniden kompozisyona geçilir. Header küçülmesi ve fotoğraf kadrajı tek kısa hareket olarak koordine edilir.

**Mobile:** ARAL ekran genişliği boyunca yaklaşık 90–120px başlangıç ölçeğinde; son değer font/viewport'a bağlı. Üstte açık menü kontrolü, altında tek 4:5 ana fotoğraf ve görünür proje adı. Dikey detay bu fotoğrafın yanında dar thumbnail'e dönüşmez; sonraki ayrı, geniş crop olarak okunur. Marka/header dönüşümü gerekiyorsa kısa ve basitleştirilmiş; fotoğraf parallax'ı, pin, hover preview ve organik örtüşme zorunlu değildir. Main crop zeytin/avlu eşiğini koruyan mobile focal point ile seçilir.

**Reduced motion:** kompakt header başlangıçtan görünür; büyük masthead normal akışın statik elemanı olabilir. Fotoğraflar tam ve doğal akışta; büyüme, scrub mask ve kamera yanılsaması kapalı. Projeler, detay ve iletişim içerikleri eksiksiz erişilebilir kalır.

## Beş perspektiften değerlendirme

| Perspektif | Güçlü taraf | Dikkat / karar |
|---|---|---|
| DAB UI Designer | Tipografi, ana fotoğraf ve detayın birbiri içine geçen ölçekleri; mimarlık doğrudan arayüzü kuruyor | Diğer sayfalarda da aynı kimlik korunmalı; hero tek başına bir gösteri olarak kalmamalı |
| DAB Motion | Marka→header ve detay→mekân ilişkisi tek anlatı hareketine bağlı | Uzun bekleme, zorunlu pin, her section'a parallax eklenmez; kullanıcının scroll'u kontrolü elinde tutar |
| Taste / reference analysis | B'nin yayın ölçeği ve C'nin mekân derinliği yeni bir topology'de buluşuyor | Wow sadece büyük serif veya yaprak maskesi olmamalı; fotoğraf seçimi ve kadraj ritmi bütün siteyi taşımalı |
| Emil Design Engineering | Transform origin, görsel ankraj ve geri çevrilebilir hareket mekânsal süreklilik kuruyor | Hızlı scroll/reversal, font ölçümü ve header handoff sıçramaları test edilmeli; sık kullanılan nav anında tepki vermeli |
| UI/UX Pro Max | Okunur caption, görünür nav ve mobile için farklı akış | Aynı anda tek ana motion; reduced-motion, klavye odağı, hedef alanı ve gerçek görsel performansı implementasyonda doğrulanmalı |

Yerel UI/UX Pro Max'te `scroll animation reduced motion mobile` araştırıldı. Veri tabanının genel ease-in çıkış tavsiyesi Emil'in hızlı UI tepkisi ilkesiyle bu bağlamda uygulanmadı; scroll map ve bağımsız UI süreleri ayrı ele alındı. Otomatik siyah-beyaz/grid/lüks-font önerileri yeni yönün otoritesi değildir.

## 21st.dev — yalnızca mekanik araştırması

- [Sticky Header](https://21st.dev/@ddoemonn/components/sticky-header): katalog büyük başlığın scroll ile kompakt bara küçülmesini tarif ediyor; marka→header önerisinin araştırma girdisi. Kod alınmadı, çalışan davranış incelenmedi.
- [Scroll Morph Hero](https://21st.dev/@prashantsom75/components/scroll-morph-hero): scroll ilerlemesiyle çoklu layout state fikri incelendi. Circle/rainbow estetiği ve dağılan öğeler mimarlık fotoğrafını ikinci plana iteceğinden alınmadı.
- Text Morphing ve Fluid Text Morph: blur/döngü veya harf değiştirme, marka kimliğini ve okuma sürekliliğini zayıflatacağından elendi.
- Hide Header: navigasyonu kaldırdığı için ana çözüm olarak elendi. Floating Header'ın pill/glass biçimi de bu editorial dil için uygun değil.

## A/B/C/D karşılaştırması

| Yön | İlk kompozisyon | Tipografinin rolü | Önerilen dönüşüm |
|---|---|---|---|
| A — Sergi Duvarı | Çoklu eser, görsel seçim | Küçük kimlik / açıklama | Proje seçimi→detay |
| B — Yaşayan Monograf | Büyük masthead + ana/detay açılımı | Yayının başlığı | Editorial pasaj geçişi |
| C — Işık Eşiği | Tek dominant fotoğraf sahnesi | Sakin sabit header | Dış→iç fotoğraf sekansı |
| D — Mekânın Sınırında | Dev masthead + fotoğraf ön planı + yükselen detay | Fotoğrafla kesişen aktif plane; sonra header | Marka ölçeği küçülürken fotoğraf kadrajı açılır |

## Statik render kontrolü ve sınırları

Render'da sıcak ışık, taş/ahşap/zeytin dili korundu. Büyük ARAL, fotoğrafın ön planına temas ediyor; yükselen dikey detay iki ayrı yatay bölgeyi birleştiriyor. Nav, konsept etiketi ve proje bağlantısı okunur; kart grid yok. İki görüntü malzeme olarak tutarlı; aynı yapının teknik olarak doğrulanmış kamera seti değildir.

Serif yine belirgin yüksek kontrastlı; bu, kullanıcı değerlendirmesinde seçilebilir fakat nihai font ismi değildir. İlk viewport'taki çok ince letter strokes küçük ekran için aynen küçültülemez. Maskelenen tipografi gerçek kodda erişilebilir metin kalmalı. Statik fotoğrafın organik maskesi henüz üretilmiş bir ayrı shipping asset değildir.

Bu mockup ilk viewport'un görsel önerisidir. Scroll dönüşümü, motion timing, gerçek mobile render ve erişilebilirlik/performance henüz test edilmiş değildir. Kullanıcı onayı olmadan gerçek site implementasyonuna geçilmez.
