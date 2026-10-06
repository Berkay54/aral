# Mimarlık portföyü — araştırma ve creative direction

Durum: üç alternatif değerlendirmeye açık. Hiçbiri onaylanmış tasarım sistemi değildir. Tam site veya interaktif prototype kodlanmadı.

Güncel karar: kullanıcı A yönünü seçmek istemediğini belirtti; A yalnızca karşılaştırma referansı olarak korunuyor. Sıcak ışık, taş, ahşap, zeytin ve sakin lüks art direction korunacak. B/C üzerinden yeni D yönü üretildi; ayrıntılar [DIRECTION-D.md](DIRECTION-D.md) dosyasında. Aşağıdaki A/B/C önerisi ilk araştırma turuna aittir; güncel seçim veya onay değildir.

## Tasarım okuması

Mimarlık müşterileri ve tasarım meraklıları için, eserlerin ilk ekrandan itibaren öne çıktığı editorial bir portföy. Ana sayfa Experience; proje bilgileri ve stüdyo metinleri okuma ve değerlendirmeyi destekler. İletişim görünürdür, fakat satış söylemi deneyimin merkezine yerleşmez.

Başarı: ziyaretçi stüdyonun mimari yaklaşımını hisseder, hangi projenin ilgisini çektiğini anlar, proje detayına ulaşır ve iletişim yolunu bulur. Tasarımın değeri fotoğrafın okunmasını ve keşif davranışını güçlendirmesinden gelir.

## Referans analizi

### David Chipperfield Architects

Kaynak: https://davidchipperfield.com/ ve https://davidchipperfield.com/projects

Ana sayfa gerçek tarayıcıda incelendi; araştırma ekran görüntüsü: `chipperfield-desktop.png`. İncelenen ilk ekran beyaz zeminde açık metin navigasyonu, geniş boşluk ve merkezde tek mimari fotoğraf kullanıyor. Projeler sayfasında Grid/List seçenekleri ve typology/country/status filtreleri mevcut.

Alınacak ilke: fotoğrafın okunmasına ayrılan sakin alan, açık navigasyon, portföy büyüdüğünde görsel keşiften listeye geçebilme. Alınmayacak düzen: ana sayfayı bir haber akışıyla başlatmak. Bu konsept projelerle başlamalı.

### Studio MK27

Kaynak: https://mk27.com/

Ana sayfa gerçek tarayıcıda incelendi; araştırma ekran görüntüsü: `mk27-desktop.png`. İncelenen ekran siyah üst bölge ve geniş fotoğraf bantları kullanıyor. Menüde proje türleri, Films ve Studio MK27 bulunuyor.

Alınacak ilke: fotoğrafın navigasyon yüzeyi olabilmesi ve projelerin yalnızca kart içinde sunulmaması. Alınmayacak öğeler: mevcut markanın maskotu veya aynı bant diziliminin kopyası. Siyah-beyaz fotoğrafın taş/ahşap rengini kaybettirmesi ayrıca değerlendirilir.

### Norm Architects

Kaynak: https://normcph.com/

Sayfa içeriği okundu: Architecture, Design, Creative ve Studio ayrımı; proje açıklamalarında ışık, malzeme ve gündelik kullanım üzerinden anlatım. Tarayıcı navigasyonu/screenshot zaman aşımına uğradı; bu kaynağın görsel kompozisyonu veya motion davranışı doğrulanmış kabul edilmedi.

Alınacak ilke: soyut premium söylemini somut malzeme ve kullanım anlatımıyla değiştirmek. Bu bir içerik çıkarımıdır, gözlenmiş animasyon iddiası değildir.

## Taste / reference analysis

`design-taste-frontend` brief okuması, tekrar eden section düzenlerini reddetme, hero görsel-tipografi ilişkisinin birlikte kurulması ve amaçlı motion ilkeleri için kullanıldı. Marka bağlamı bütün genel kurallardan önce gelir. Bu portföye SaaS CTA dizisi, logo duvarı veya yapay kanıt eklenmez.

İncelenen referanslardan çıkarım: çağdaş bir mimarlık portföyünün kalitesi, farklı efekt sayısından çok görüntü seçimi, ölçek ilişkisi, sakin navigasyon ve projeler arasında ritimle kurulabilir. Referansların arayüzü veya marka kimliği kopyalanmayacak.

## UI/UX Pro Max araştırması

Yerel veri tabanında `architecture studio editorial portfolio photography premium` design-system araması ve `animation accessibility reduced motion` UX araması çalıştırıldı.

İlk çıktı Portfolio Grid, siyah-beyaz palet, Cinzel/Josefin Sans ve Motion-Driven önerdi. Bunlar seçilmiş tasarım kararları değildir. Eşit/masonry grid ana deneyim olarak brief'e uygun değil; Cinzel eşleşmesi çağdaş stüdyo yerine emlak/lüks klişesine yaklaşabilir; yoğun parallax yaklaşımı motion kısıtını aşar.

Korunan ilkeler: işlerin öne çıkması, hızlı görsel yükleme, klavye odağı, okunabilir kontrast, reduced-motion ve görüntü açıklamaları. Motion araştırması, bir görünümde bir veya iki ana hareket odağı ve zorunlu scroll-jacking'den kaçınmayı destekliyor. Nihai erişilebilirlik ve performans ancak implementasyon üzerinde doğrulanabilir.

## 21st.dev mekanik araştırması

Bileşen kodu indirilmedi, kurulmadı veya kopyalanmadı. İnceleme katalog açıklamaları ve iki statik preview üzerinden yapıldı; çalışma zamanı motion davranışı test edilmedi.

- [Scroll Gallery](https://21st.dev/@soralabs/components/scroll-gallery): katalog, sticky tam ekran fotoğraf geçişi ve başlık değişimi tarif ediyor. Preview incelendi: fotoğraf tek yüzeyi kaplıyor ve metin aynı yatay eksene yerleşiyor. Işık Eşiği için tek bir kısa geçiş sekansı düşünülebilir; pin süreleri ve mobile davranışı yeniden tasarlanmalı.
- [Immersive Scroll Gallery](https://21st.dev/@ishamsu/components/immersive-scroll-gallery): farklı fotoğraf ölçekleriyle derinlik oluşturma fikri. Sergi Duvarı'nda projeden detaya büyüme ilişkisi kullanılabilir; sürekli zoom ve üst üste metin kullanılmaz.
- [Hover Image Gallery](https://21st.dev/@isaiahbjork/components/hover-image-gallery): pointer konumundan görüntü seçme fikri. İsteğe bağlı desktop preview olarak değerlendirilebilir; hover hiçbir bilgiye ulaşmanın tek yolu olamaz. Glass tooltip alınmaz.
- [Editorial Hero](https://21st.dev/@felipemenezes098/components/hero-05): preview incelendi. Metin ile fotoğraf arasında güçlü ölçek farkı var; fakat büyük başlık/küçük açıklama split'i bu projede kopyalanmayacak. Monograf yönünde bağımsız ritim ve baseline ilişkisi kurulacak.
- [Portfolio Gallery](https://21st.dev/@isaiahbjork/components/portfolio-gallery): katalogdaki 3D örtüşme fikri değerlendirildi; marquee mobile davranışı ziyaretçinin inceleme kontrolünü azaltabileceğinden tercih edilmedi.

## Ortak çerçeve

Görsellerde **ARAL** geçici bir çalışma adı. Mekânlar arasındaki aralık/boşluk fikrine dayanıyor. Kullanım hakkı, alan adı veya marka uygunluğu kontrol edilmiş değildir; kesin marka olarak kaydedilmedi. Türkçe taslak metinler yalnızca okunabilir örnek içeriktir; site dili henüz seçilmedi.

Avlu Evi, Taş Pavyon ve Işık Avlusu görsel araştırma için kurgusal konsept proje adlarıdır. Gerçek tamamlanmış eser, müşteri, tarih veya şehir iddiası taşımaz. Görsel taslaklardaki mimarlık, yapay zekâyla üretilmiş konsept içeriğidir.

## A — Sergi Duvarı

**Tez:** Ana sayfa, üç mimari eserin farklı ölçeklerde asıldığı bir sergi alanıdır. Ziyaretçi projeleri baştan görür ve kendi keşif sırasını seçer.

**İlk ekran:** 64–72px sakin üst navigasyon; fotoğraf koleksiyonu ekranın ana alanıdır. Solda büyük yatay avlu fotoğrafı, sağ üstte daha küçük dikey pavyon, sağ altta farklı oranlı detay. Tekrarlanan kart zemini yok. Proje adları görüntü dışında kendi baseline'ında; tipografi fotoğrafla yarışmaz. Büyük slogan hero'su kullanılmaz.

**Görsel dünya:** galerinin saf beyaz zemini `#F8F9F8`, kömür mürekkep `#171B1D`, soğuk taş grisi `#B9C0BF`. Fotoğraflar kendi doğal renginde. Tipografi için aday: geniş ve keskin bir grotesk, örneğin Space Grotesk; okuma için sade sans. Font seçimi kesinleşmedi. 12 kolon, 48px dış margin ve 24px gutter başlangıç hipotezi; fotoğraflar 7/3/4 kolonluk farklı ritimler kurar.

**Ziyaretçi yolu:** sergide proje seçimi → proje detayındaki geniş galeri → yaklaşım/stüdyo → iletişim. Tüm projeler ayrı, sade bir indeksle de erişilebilir.

**İmza etkileşim:** bir fotoğraf seçildiğinde aynı görselin proje detayındaki başlangıç görseline dönüşmesi. Görüntünün kökenini koruyarak yön bulmayı destekler. Yaklaşık 450–600ms geçiş bir tasarım hipotezi; kullanıcı kontrolü ve reduced-motion ile anında navigasyon korunur. Scroll üzerinde bütün eserleri hareket ettirmek yerine sayfa değişimi ana motion anıdır.

**Mobile:** sergi duvarı 1 kolona yeniden asılır. İlk eser dikey crop ile başlar; sonrakiler daha kısa yatay görüntülerdir. Proje adı ve bağlantısı daima görünür. Desktop'taki örtüşme yok, hover'a bağımlılık yok. Menü ve proje seçimi yeterli dokunma alanıyla çalışır.

**Sistemin devamı:** stüdyo sayfasında portre/çalışma görseli büyük eser, metin sakin açıklama alanı olur; iletişim sayfası aynı beyaz zemin ve açık tipografiyi korur.

**Risk:** az sayıda güçlü fotoğrafla iyi çalışır; zayıf veya birbirinden kopuk görüntü seti sergi fikrini dağıtır. Asimetri rastgele thumbnail kolajına dönüşmemeli.

**En uygun:** DAB portföyü için ayırt edici bir giriş ve hızlı proje keşfi birlikte istendiğinde. Önerilen yön.

## B — Yaşayan Monograf

**Tez:** Site bir stüdyonun sürekli genişleyen mimarlık yayını gibi okunur. Eser, metin ve detay fotoğrafı tek editorial sistemin parçalarıdır.

**İlk ekran:** büyük ARAL masthead üstte, kısa navigasyon aynı yayın ekseninde. Altta tek büyük peyzaj/avlu fotoğrafı ve dışındaki başlık; sağ kenarda farklı ölçekli malzeme detayı. Basılı kitap illüstrasyonu değil, çalışan bir web sayfası. Bir sonraki içerik, fotoğrafın altında kısa bir mimari düşünce paragrafıyla görünür.

**Görsel dünya:** açık yayın kâğıdı `#EEEAE2`, koyu kahverengi mürekkep `#292720`, kontrollü pas rengi `#984B35`. Tipografi için aday: mimarlık yayın geleneğine bağlı Fraunces'in sade, düşük kontrastlı kesimi + nötr grotesk gövde; serif yalnızca masthead/proje başlıklarında, yapay italik lüks dili yok. Fotoğraflar warm ama aynı preset'le düzleştirilmez. 12 kolon içinde belirgin fakat görüntüyü kesmeyen sanal gutter.

**Ziyaretçi yolu:** seçili proje açılımı → mimari düşünce / malzeme notu → başka proje → stüdyo yaklaşımı → iletişim. Project detail, ana sayfanın yayını daha uzun okutan devamıdır; ayrı bir galeri kabuğuna dönüşmez.

**İmza etkileşim:** bir proje açılımındaki büyük fotoğraf ve detay fotoğrafının kısa, birlikte yapılan kadraj değişimi; ölçülü maskeleme yeni bölümü açar. 400–550ms geçiş hipotezi. Flipbook, yapay sayfa kıvrılması veya scroll hijack yok. Metin baştan görünürdür.

**Mobile:** masthead üst genişlikte kalır; ana fotoğraf, proje başlığı, açıklama ve detay görüntüsü tek okuma sırasında yeniden düzenlenir. Yan kolon metni görüntü üzerine binmez. Uzun proje metninde paragraf genişliği/line-height korunur.

**Sistemin devamı:** proje detayları gerçek bir editorial aile oluşturur; stüdyo yaklaşımı bu yayının giriş yazısıdır; hizmetler ikonlu kartlar yerine kapsamı açıklayan kısa metin bölümleridir.

**Risk:** premium editorial mimarlıkta tanıdık bir alandır. Cesaret yalnızca büyük serif başlıkta kalırsa sıradan bir dergi teması olur. Karakter, ana/detay fotoğrafı ilişkisi ve okuma ritmiyle taşınmalıdır.

**En uygun:** stüdyo düşüncesini ve projeleri aynı ağırlıkla anlatmak istendiğinde.

## C — Işık Eşiği

**Tez:** Ziyaretçi bir projeyi dışarıdan içeriye üç bakışta keşfeder. Mekânın eşiği, yönün navigasyon ve anlatı sistemi olur.

**İlk ekran:** doğal ışık/gölge kontrastıyla büyük tek mimari fotoğraf; açık navigasyon sakin, koyu güvenli şeritte. Fotoğrafta gerçek perspektif korunur. Büyük bir slogan yerine proje adı ve açık proje bağlantısı. Alt sınırdan sonra aynı projenin ikinci görünümü başlayarak devamın ne olduğunu anlatır.

**Görsel dünya:** gölge kömürü `#20231F`, açık sıva `#EEECE5`, ışık taşı `#C5AC7A`. Fotoğrafın sıcak ışığı görsel rengi taşır; dekoratif altın gradient yok. Geniş sakin sans başlıklar, az ve okunabilir metadata. Geometrik çerçeve değişimi bir kapı metaforunu literal kapı grafiğine çevirmeden yapar.

**Ziyaretçi yolu:** dış cephe → eşik → iç avlu → seçili diğer projeler → yaklaşım → iletişim. Kullanıcı doğrudan projelere gitmek için görünür bağlantıyı da kullanabilir.

**İmza etkileşim:** desktop'ta yalnızca tek kısa, pinlenmiş sekans; en fazla üç görüntü. Dışarıdan içeri geçiş, fotoğraf düzlemleri arasında tek yönlü wipe ile gösterilir. Görüntüde yapay 3D bina dönüşümü yapılmaz. Süre ve pin mesafesi implementasyonda okuma/touch testiyle belirlenir; sonsuz zoom veya her section'da pin yok.

**Mobile:** pinlenmiş sekans kaldırılır; dış/iç fotoğraflar doğal dikey akışa döner. Reduced-motion için desktop da aynı içerik-tam doğal akış kullanır. Ekranda metin okumak için hareketin bitmesini beklemek gerekmez.

**Sistemin devamı:** proje detaylarında aynı dış/iç bakış sırası; stüdyo metinleri aynı koyu/ışık dünyasında okunabilir düz zeminde. Farklı proje için kendi fotoğraf anlatısı kullanılmalıdır.

**Risk:** en iyi fotoğraf setini ve en yüksek motion/performance disiplinini gerektirir. Yalnızca bir tam ekran fotoğraf + logo olarak kalırsa ayırt edicilik kaybolur. Uzun scroll tiyatrosu proje keşfini geciktirebilir.

**En uygun:** DAB portföyünde bir güçlü, hatırlanabilir motion anı önceliklendirildiğinde.

## Impeccable / DAB değerlendirmesi

Bu değerlendirme tasarım sözleşmelerine ilişkindir; çalışan UI, contrast, keyboard ve performans denetimi yapılmış değildir.

| Ölçüt | Sergi Duvarı | Yaşayan Monograf | Işık Eşiği |
|---|---|---|---|
| İlk anda projeye ulaşma | Üç görünür proje, seçim serbest | Tek proje ve okuma ekseni | Bir proje, yönlendirilmiş keşif |
| Baskın yapı | Çok ölçekli sergi yerleşimi | Yayın/masthead/açılım | Tek fotoğraf sahnesi ve sekans |
| Marka sesi | Küratöryel, çağdaş | Düşünceli, editorial | Mekânsal, sinematik |
| Motion'ın işi | Seçimden detaya süreklilik | Açılımlar arasında ritim | Dış/iç mekân ilişkisi |
| Mobile stratejisi | Yeniden asılan dikey eserler | Yeniden sıralanan yayın | Pinsiz doğal fotoğraf akışı |
| Temel tehlike | Rastgele kolaj | Tanıdık dergi estetiği | Aşırı scroll tiyatrosu |

İmpeccable kaynaklarıyla karşılaştırmada her yön ilk ekranda gerçek konusunu gösteriyor, tek baskın hareket fikri taşıyor ve quiet/dense sayfalara yayılabilecek bir sistem sunuyor. Eşit kart grid'i, görseli gölgeleyen hero sloganı, tüm section'lara stagger, özel cursor, autoplay ve zorunlu preloader önerilmedi.

**Öneri:** Sergi Duvarı. Kullanıcı kendi projelerini keşfeder; fotoğrafla başlayan güçlü art direction, tam siteyi bir sinematik sekansa bağımlı kılmadan elde edilebilir. Monograf editorial derinlik, Işık Eşiği motion hikâyesi açısından gerçek alternatiflerdir. Seçim kullanıcıya aittir; bu öneri onay değildir.

## Araştırmada elenen alternatifler

İlk kültürel aday havuzu: mimarlık monografı, mekânsal eşik, proje arşivi, malzeme atlası, sergi asımı, yarışma paftası ve fotoğraf contact sheet'i. Aileler yayın, sergi, mekân ve arşiv ritüellerine yayılır. Proje arşivi değerlendirmeyi kolaylaştırır ama girişte yeterli proje kanıtı yoktur; malzeme atlası mimarlığın bütününü daraltabilir; yarışma paftası ve contact sheet yoğunluğu müşteri keşfini zorlaştırabilir.

Impeccable direction araştırmasındaki yabancı sistemler ürün netliği ve kullanıcı aidiyeti üzerinden değerlendirildi:

- Parametrik kimlik: proje yerine değişen marka sistemi başrole çıkar; elendi. Alınan disiplin: aynı kimlik tüm yüzeylerde tutarlı kalmalı.
- Botanik folio: bir mimari öğenin sabit ölçekli aşamaları olarak çevrilebilir, fakat tüm portföyü süreç sırasına bağlar; ana yön olarak elendi. Alınan disiplin: detay/ana fotoğraf ilişkilerinde anlamlı ölçü karşılaştırması.
- Miura katlama: proje yüzeylerini açma sistemi olarak çevrildiğinde thumbnail geometrisi fotoğraf okumayı zorlaştırır; elendi. Alınan disiplin: tüm geçişler tek bir yapısal mantıkta kalmalı.
- Daylight section: ışık/mekân ilişkisi mimarlık aidiyetini güçlendiriyor; Işık Eşiği'ne rakip/alternatif olarak katkı sağlıyor. Simülasyon, lux/glare ve sahte güneş hesapları bu ürünün doğrulanmış yetenekleri olmadığından aktarılmadı. Araştırma board ve hero incelendi; eğik teknik yazı, altın butonlar, analiz dashboard'u ve hazır split hero kopyalanmadı.
- Darkroom: mimari fotoğrafın geliştirilmesi olarak çevrildiğinde ziyaretçi eser yerine fotoğraf üretim ritüeline girer; elendi. Alınan disiplin: görüntünün ortaya çıkışında tek, kontrollü bir tempo.
- ANSI BBS: proje arşivi olarak çevrilebilir, fakat terminal görüntüsü premium mimarlık marka bağlamını zayıflatır; elendi. Alınan disiplin: navigasyonun klavyeyle de eksiksiz kullanılabilmesi.

Bu disiplinler Sergi Duvarı'nda tutarlı kimlik, anlamlı fotoğraf ölçekleri, tek seçim→detay geçişi ve açık navigasyon şeklinde karşılanır; yabancı sistemlerin dekoratif öğeleri taşınmaz.

## Sonraki karar

### Üretilen görsellerin değerlendirmesi

Üç statik taslak native `image_gen.imagegen` ile üretildi ve `.impeccable/mocks/decision/` altında ayrı PNG dosyaları olarak kaydedildi. Her görselin tam prompt'u yanındaki `*-prompt.txt` ve `.png.json` dosyasında, ayrıca görsel metadata'sında bulunur. Üçü de onaysızdır.

- `gallery.png`: mimari görseller tutarlı, navigasyon ve proje adları okunabilir. Taslak, sergi fikrini daha sıkı 2 kolonlu bir yerleşime yaklaştırdı; önerilen boşluk/asım ritmi render'da daha az cesur. Bu fark, yön seçilirse geliştirilmelidir. Konsept etiketlerinin açık gri tonu nihai erişilebilirlik ölçümü yapılmış bir token değildir.
- `monograph.png`: yayın hiyerarşisi ve ana/detay fotoğraf ilişkisi belirgin. Model, önerilen düşük kontrastlı çağdaş serif yerine daha klasik yüksek kontrastlı serif çizdi ve navigasyona da yaydı. Bu görsel kesin font kararı değildir; kullanıcı bu klasikleşmeyi istemiyorsa masthead/başlık sistemi revize edilmelidir.
- `threshold.png`: eşik perspektifi, açık proje bağlantısı ve devam eden iç avlu görünümü belirgin. İki fotoğraf aynı malzeme/ağaç dilini taşıyor, fakat kesin aynı geometrinin farklı kamerası olarak doğrulanmış değildir. Gelecek motion için bağımsız rastgele görseller yerine aynı konseptin tutarlı çekim seti gerekir.

Statik görseller motion'ı, responsive davranışı, keyboard kullanımını veya performansı kanıtlamaz. Mobile yeniden kompozisyonları yukarıda tasarım sözleşmesi olarak tarif edildi; mobile UI henüz üretilmedi. Site QA ancak seçilen yönün implementasyonundan sonra yapılacaktır.

Kullanıcı A/B/C yönlerinden birini seçebilir, bir yönü revize edebilir veya yeni bir araştırma yönü isteyebilir. Seçim öncesi DESIGN.md, framework scaffold'u veya site kodu oluşturulmaz. İleride comp-first/code-first workflow tercihi ayrıca doğrulanır; bu araştırmada kalıcı buildPath tercihi kaydedilmedi.
