# ARAL — Direction D / Phase 1

Premium mimarlık portföyü konsepti. Bu sürüm yalnızca hero deneyimini içerir.

## Çalıştırma

```sh
npm ci
npm run dev
```

Yerel önizleme: http://127.0.0.1:5173/

```sh
npm run build
npm run preview
```

Windows PowerShell yürütme politikası npm.ps1 dosyasını engellerse `npm.cmd` kullanın.

## Kapsam

React + Vite + TypeScript; yerel Bodoni Moda ve Manrope değişken fontları; Direction D renk ve boşluk tokenları; responsive hero; GSAP/ScrollTrigger ile ARAL'ın header'a geçişi, ana kadrajın açılması ve detay fotoğrafının bağımsız derinlik hareketi.

Desktop hareketi native scroll'a bağlıdır. Mobile ayrı, doğal belge akışı kullanır. Reduced motion etkin olduğunda hero sabit kompozisyona geçer. Navigasyon yalnızca bu aşamada mevcut olan hero içeriğine gider.

Sonraki homepage bölümleri, proje detay sayfası ve iletişim akışı bu aşamanın kapsamı dışındadır.

## Kaynaklar

- [Ürün bağlamı](PRODUCT.md)
- [Tasarım sistemi](DESIGN.md)
- [Homepage blueprint](research/HOMEPAGE-BLUEPRINT.md)
- [Phase 1 sözleşmesi](research/PHASE-1-CONTRACT.md)
- [Tarayıcı QA](research/qa/PHASE-1-QA.md)

Mimari görseller bu proje için üretilmiş konsept varlıklardır. Üretim promptları `research/asset-prompts` ve asset JSON sidecar dosyalarında saklanır. Font lisansları `src/assets/fonts` içindedir.
