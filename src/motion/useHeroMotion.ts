import { useLayoutEffect } from 'react';
import type { RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useHeroMotion(sceneRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const currentScene = sceneRef.current;
    if (!currentScene) return;
    const scene: HTMLElement = currentScene;
    let disposed = false;
    const media = gsap.matchMedia();

    async function initialize() {
      await document.fonts.ready;
      if (disposed) return;

      media.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        const stage = scene.querySelector<HTMLElement>('.hero-stage')!;
        const wordmark = scene.querySelector<HTMLElement>('.hero-wordmark')!;
        const mask = scene.querySelector<HTMLElement>('.hero-photo-mask')!;
        const photo = scene.querySelector<HTMLElement>('.hero-photo')!;
        const detailPhoto = scene.querySelector<HTMLElement>('.detail-photo')!;
        const header = document.querySelector<HTMLElement>('.site-header')!;
        const brand = header.querySelector<HTMLElement>('.compact-brand')!;
        let timeline: gsap.core.Timeline | undefined;

        const measure = () => {
          timeline?.kill();
          gsap.set([wordmark, photo, detailPhoto, mask, header, brand], { clearProps: 'all' });
          const initialCut = parseFloat(getComputedStyle(mask).clipPath.replace('inset(', ''));
          const wordRect = wordmark.getBoundingClientRect();
          const brandRect = brand.getBoundingClientRect();
          const compactScale = brandRect.width / wordRect.width;
          const finalX = brandRect.left - wordRect.left;
          const finalY = brandRect.top - wordRect.top;

          gsap.set(wordmark, { transformOrigin: 'left top' });
          gsap.set(photo, { scale: 1.06, transformOrigin: '62% 56%' });
          gsap.set(detailPhoto, { scale: 1.09, y: 20, transformOrigin: '50% 50%' });
          gsap.set(mask, { clipPath: `inset(${initialCut}px 0px 0px 0px)` });
          gsap.set(brand, { opacity: 0 });

          timeline = gsap.timeline({ defaults: { ease: 'none' }, paused: true });
          timeline.to(wordmark, { x: finalX, y: finalY, scale: compactScale, duration: .8 }, 0);
          timeline.to(mask, { clipPath: 'inset(0px 0px 0px 0px)', duration: 1 }, 0);
          timeline.to(photo, { scale: 1, duration: 1 }, 0);
          timeline.to(detailPhoto, { y: -16, scale: 1.04, duration: 1 }, 0);
          timeline.to(header, { backgroundColor: '#eeeae2', duration: .18 }, .64);
          timeline.to(wordmark, { opacity: 0, duration: .12 }, .78);
          timeline.to(brand, { opacity: 1, duration: .12 }, .78);
        };

        measure();
        const trigger = ScrollTrigger.create({
          trigger: scene,
          start: 'top top',
          end: () => `+=${scene.offsetHeight - stage.offsetHeight}`,
          scrub: true,
          invalidateOnRefresh: true,
          onRefreshInit: measure,
          onRefresh: self => timeline?.progress(self.progress),
          onUpdate: self => timeline?.progress(self.progress),
        });
        return () => {
          trigger.kill();
          timeline?.kill();
          gsap.set([wordmark, photo, detailPhoto, mask, header, brand], { clearProps: 'all' });
        };
      });
      ScrollTrigger.refresh();
    }

    void initialize();
    return () => { disposed = true; media.revert(); };
  }, [sceneRef]);
}
