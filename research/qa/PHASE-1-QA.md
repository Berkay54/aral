# Phase 1 tarayıcı QA

Tarih: 6 Ekim 2026. Gerçek Playwright Chromium tarayıcısı, yerel Vite önizlemesi. İki toplu görsel kontrol turu; ekran görüntüleri açılıp incelendi.

## Sonuçlar

| Viewport | Yatay overflow | İlk yükleme CLS | Kompozisyon |
| --- | --- | --- | --- |
| 1920 × 1080 | 0 px | 0.01524 | Büyük katmanlı ARAL, geniş avlu, dar detay |
| 1366 × 768 | 0 px | 0.01565 | Aynı ilişki, yüksekliğe göre ölçeklenen masthead |
| 390 × 844 | 0 px | 0.00676 | Masthead, 4:5 avlu, caption, ayrı detay |
| 320 × 740 | 0 px | 0.00693 | Kırılmayan tipografi ve proje kimliği |
| 820 × 1180 | 0 px | 0.00761 | Ana fotoğraf ve uzun detayın tablet kompozisyonu |

CLS sıfır değil; yerel fontların ilk yüklenmesindeki küçük metrik değişimi ölçüldü. Scroll hareketi bu ölçümü artırmadı. Bu sonuçlar throttling uygulanmamış yerel Chromium oturumuna aittir; Safari/Firefox veya fiziksel telefon performansı ölçülmedi.

Console error ve pageerror: **0**.

## Motion doğrulaması

- Desktop başlangıç maskesi: geniş ekranda 241.2 px, laptopta 150.72 px. Orta scroll'da yarıya iner; sonda 0 px olur.
- Ana fotoğraf ölçeği 1.06 → 1.00; detay 1.09 → 1.04 ve y +20 → −16 px. Ayrı yön/ölçek hızı derinlik oluşturur.
- ARAL measured compact header genişliğine küçülür; kısa opacity devri aynı font ve optik ayarla yapılır. Son durumda compact marka opacity 1.
- Native scroll kullanılır, GSAP pin veya scroll hijack yoktur. Desktop geçiş mesafesi 0.75 viewport.
- Geri scroll başlangıç transformlarını ve maskesini geri getirir.
- Mobile scrub çalışmaz; compact header başlangıçta görünür. Menü açılır, Escape kapatır ve odağı menü düğmesine döndürür.
- Reduced motion: masthead transform none, compact marka görünür, 1366 × 768'de belge yüksekliği 768 px. Fazladan scrub mesafesi yoktur.

## Critique ve düzeltmeler

| Before | After | Why |
| --- | --- | --- |
| Ek yaprak cutout katmanı orta scroll'da bağımsız şerit oluşturuyordu | Katman ve kullanılmayan asset kaldırıldı | DAB UI / Impeccable: kadrajın sürekliliğini korumak; ARAL'ın gerçek fotoğraf üzerinde katmanlanması yeterli |
| Compact marka farklı optical sizing kullanıyordu | Masthead ve compact markada opsz 96 | Emil / DAB Motion: harf biçimi değişmeden mekânsal dönüşüm |
| Hover underline offset transition | Statik hover/focus | Emil: gereksiz küçük hareketi kaldırmak |
| Klavye ile keşfet düğmesi smooth scroll başlatıyordu | Keyboard activation anında scroll | Emil: klavye eyleminde gecikmeyi önlemek |

DAB UI Designer: Direction D'nin warm stone/oak/olive görsel dünyası ve 77:23 ana/detay ilişkisi korundu. DAB Motion: tek bağlı scroll sekansı, sınırlı spatial depth; her elemana reveal eklenmedi. Impeccable: ayrı mobile composition, görünür varsayılan içerik, gerçek çalışan kontroller, focus ve reduced-motion.

`clip-path` ve header background-color scrub için bilinçli kullanılır; ölçü değiştiren width/height/top animasyonu yoktur. Scrub timeline değerleri süre değil normalize scroll aralıklarıdır; UI duration sınırları bu sekansa uygulanmaz. Fiziksel cihazda frame bütçesi ayrıca ölçülmelidir.

Production build ve TypeScript kontrolü geçti. Asset provenance scan: 2 raster, 0 missing. Detector tek kez çalıştı; yalnızca tasarım dokümanında font alias ve type ramp eşleştirme uyarıları verdi, mekanik anti-pattern bulmadı.

Derlenmiş production preview (4173) de kontrol edildi: laptop ara scroll → mobile → geniş desktop → klavye Enter ile keşfet → geri scroll. Responsive medya değişiminden sonra computed-state assertions ile beklendi; mobile transform none/brand 1, desktop son durumda mask 0/brand 1, geri dönüşte mask 241.2 px. Console/runtime hata 0. Erken sabit bekleme ile yapılan ilk örnekleme resize refresh tamamlanmadan state okumuştu; state-based tekrar test bu kaygıyı giderdi, ek source değişikliği gerekmedi.

## Kanıt

- [Desktop ilk viewport](desktop-final.png), [orta scroll](desktop-mid-final.png), [compact header](desktop-end-final.png)
- [Laptop ilk viewport](laptop-final.png), [orta scroll](laptop-mid-final.png), [compact header](laptop-end-final.png)
- [Mobile](mobile-final.png), [320 px mobile](small-mobile-final.png), [tablet](tablet-final.png)
- [Reduced motion](reduced-motion-final.png)
- [Production responsive dönüşüm başlangıcı](resize-desktop-initial.png), [klavye keşfet sonrası](resize-desktop-end.png)

Kapsam yalnızca Phase 1 hero'dur. Sonraki homepage bölümleri implement edilmedi.
