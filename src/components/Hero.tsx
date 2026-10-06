import { useEffect, useRef, useState } from 'react';
import { useHeroMotion } from '../motion/useHeroMotion';
import courtyard from '../assets/images/courtyard.webp';
import detail from '../assets/images/door-detail.webp';

export function Hero() {
  const sceneRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  useHeroMotion(sceneRef);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  function explore(event: React.MouseEvent<HTMLButtonElement>) {
    setMenuOpen(false);
    if (window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)').matches) {
      const scene = sceneRef.current;
      if (scene) window.scrollTo({ top: scene.offsetTop + scene.offsetHeight - window.innerHeight, behavior: event.detail === 0 ? 'auto' : 'smooth' });
    } else {
      document.getElementById('detail')?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }

  return (
    <>
      <a className="skip-link" href="#avlu-evi">Projeye geç</a>
      <header className="site-header">
        <a className="compact-brand" href="#hero" aria-label="ARAL — başlangıca dön">ARAL</a>
        <button ref={menuButtonRef} className="menu-toggle" aria-expanded={menuOpen} aria-controls="hero-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? 'Kapat' : 'Menü'}
        </button>
        <nav id="hero-navigation" className={`site-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Ana navigasyon">
          <a href="#hero" onClick={() => setMenuOpen(false)}>Avlu Evi</a>
          <button onClick={explore}>Malzeme ve ışık</button>
        </nav>
      </header>

      <main>
        <section ref={sceneRef} className="hero-scroll" id="hero" aria-labelledby="project-title">
          <div className="hero-stage">
            <div className="hero-wordmark" aria-hidden="true">ARAL</div>
            <figure className="hero-main" id="avlu-evi" tabIndex={-1}>
              <div className="hero-media">
                <div className="hero-photo-mask">
                  <img className="hero-photo" src={courtyard} width="1536" height="1024" fetchPriority="high" alt="Zeytin ağaçları arasında, taş ve ahşapla çevrili güneşli avlu ve yansıtma havuzu." />
                </div>
              </div>
              <figcaption className="project-caption">
                <div className="project-identity">
                  <h1 id="project-title">Avlu Evi</h1>
                  <p>Konsept proje</p>
                </div>
                <button className="text-link explore-link" onClick={explore}><span>Mekânı keşfet</span></button>
              </figcaption>
            </figure>
            <figure className="hero-detail" id="detail" tabIndex={-1}>
              <div className="detail-photo-frame">
                <img className="detail-photo" src={detail} width="1024" height="1536" alt="Gün ışığında ahşap kapı eşiği, doğal taş yüzey ve zeytin yapraklarının gölgesi." />
              </div>
              <figcaption className="detail-caption">Malzeme ve ışık</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
