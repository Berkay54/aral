---
name: ARAL — Direction D
description: Approved editorial architecture world; Phase 1 responsive hero implemented and reviewed.
colors:
  plaster: "#eeeae2"
  paper: "#f7f4ee"
  ink: "#262820"
  secondary: "#5c5c50"
  stone: "#b59b72"
  rule: "#bab5aa"
  focus: "#526044"
typography:
  display:
    fontFamily: "'Bodoni Moda Variable', Georgia, serif"
    fontSize: "clamp(200px, min(25vw, 40svh), 440px)"
    fontWeight: 500
    lineHeight: 0.8
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 96"
  compact-brand:
    fontFamily: "'Bodoni Moda Variable', Georgia, serif"
    fontSize: "30px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "'opsz' 96"
  title:
    fontFamily: "'Manrope Variable', Arial, sans-serif"
    fontSize: "clamp(28px, 2.6vw, 44px)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'Manrope Variable', Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.5
  label:
    fontFamily: "'Manrope Variable', Arial, sans-serif"
    fontSize: "14px"
    lineHeight: 1.5
  caption:
    fontFamily: "'Manrope Variable', Arial, sans-serif"
    fontSize: "13px"
    lineHeight: 1.5
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-6: "24px"
  space-8: "32px"
  space-12: "48px"
  space-16: "64px"
  space-24: "96px"
  space-32: "128px"
  space-40: "160px"
  page-margin: "clamp(24px, 2.2vw, 48px)"
components:
  navigation:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "72px"
  project-caption:
    textColor: "{colors.ink}"
    height: "76px"
  explore-action:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "48px"
---

# Design System: ARAL

## Overview

**Creative North Star: “Mekânın Sınırında”.** Direction D and its design system are approved. Phase 1 implements the responsive hero, typography/tokens and coordinated desktop scroll transformation; its finish review disposition is **ship**. Subsequent homepage sections and project routes are future scope requiring separate authorization. The frontmatter captures actual source tokens and shipped typography, rather than the earlier preimplementation size proposals.

Monumental editorial type, warm natural light, pale stone, timber and olive landscape form one calm architectural world. Photography participates in the interface: a wide spatial view and a narrower material view make scale legible. ARAL is a working identity, and Avlu Evi is explicitly a concept project; neither establishes a real practice or built commission.

The full site's continuity should come from typography, caption language, shared alignment, natural materials and relationships between detail and whole. Vary density and image scale across passages instead of repeating the hero composition. The approved future surface strategy remains in `research/HOMEPAGE-BLUEPRINT.md`; its old approval-status language predates the user's approval and is not the implementation status.

**Key Characteristics:**
- Architecture and image scale lead; interface ornament stays restrained.
- Editorial contrast, controlled asymmetry and warm mineral surfaces.
- Visible content, native scrolling and deliberate mobile recomposition.
- One purposeful hero motion sequence rather than universal reveals.

## Colors

The palette is warm plaster and olive-toned ink, with color richness carried primarily by photography. Frontmatter values are normative and match `src/styles/tokens.css`.

### Primary

Ink carries identity, navigation and project titles. Focus is the olive keyboard indicator, not a decorative accent.

### Neutral

Plaster is the page surface and compact header background. Paper supports selection text and the focused skip link. Secondary is the subdued concept/detail caption ink; rule provides thin structural separations. Stone is a declared palette token reserved for rare future selected accents; Phase 1 does not use it as a visible component accent.

**The Warm Continuity Rule.** Keep future reading and contact surfaces in the same warm world; use photographic light and shadow to vary density rather than alternating arbitrary dark sections. Put interactive text on a reliably readable surface when imagery would compromise it.

## Typography

**Display Font:** Bodoni Moda Variable, with Georgia/serif fallback. **Body Font:** Manrope Variable, with Arial/sans-serif fallback. These exact local font aliases are normative. Latin and Latin Extended WOFF2 subsets are shipped locally with licenses; Turkish characters are supported.

High-contrast display lettering supplies editorial scale; sans-serif titles and controls keep project discovery direct. There is no shipped editorial statement/headline role yet: future statement sizes in the blueprint remain guidance, not extracted primitives.

### Hierarchy

- **Display:** the desktop masthead uses the frontmatter fluid ramp. Tablet uses `clamp(170px, 25vw, 250px)` at line-height (.9); mobile uses `clamp(88px, 31vw, 150px)` at line-height (.9).
- **Compact brand:** the fixed header identity uses the frontmatter compact role. Masthead and compact mark both use optical size (96), preserving letterform identity through the handoff.
- **Title:** the project name uses the frontmatter title ramp; mobile fixes its size at (30px).
- **Body:** the actual global default is the frontmatter body role; future long-form copy has not shipped.
- **Label:** navigation and explore action use the frontmatter label role, normal case.
- **Caption:** concept status and desktop/tablet detail caption intentionally use the smaller caption role. Mobile detail caption uses the label size. These are observed distinctions, not a universal requirement to shrink future captions.

**The One Identity Rule.** Keep large and compact ARAL in the same local family and optical setting. The decorative masthead is real text, never baked into a raster. It does not hide the accessible brand or navigation.

## Layout

Phase 1 desktop starts at (1024px). Its main/detail widths are (77% / 23%) of the available width after margins and a (20px) gap. The page margin follows the frontmatter clamp; mobile below (768px) uses (20px), and below (360px) uses (16px). Header height is (72px), or (64px) on mobile. Main and detail captions share a baseline; the project caption remains visible in the first viewport.

Desktop uses a (175svh) scene containing a sticky (100svh) stage, yielding a native-scroll transformation over (.75 viewport). It is CSS sticky, not a GSAP pin. The main image initially has an inset top mask, then opens continuously while the wordmark moves into the measured header slot. Main image focal point is (62% 56%). No separate foreground layer exists: the actual ARAL-over-photo composition supplies layering. An extra alpha cutout was removed after QA because it formed a disjoint strip.

Tablet (768–1023px) uses a normal-flow (3:1) grid with a (20px) gap, a (4:5) main photo and a tall static detail. Mobile becomes masthead → (4:5) main photo → project caption → independent (4:5) detail. Main mobile focal point is (63% 57%). Neither tablet nor mobile scrubs or pins.

Reduced-motion desktop uses a static (100svh) scene, visible compact header, static masthead and untransformed images. The alternate display ramp is `clamp(170px, min(22vw, 30svh), 360px)`. No extra scrub distance remains.

The approved full-site direction calls for shared alignment and varied editorial passages, not repeated equal cards or alternating identical splits. The wider spacing family exists as source tokens; future passage grids, reading widths and spacing targets remain blueprint guidance until those surfaces are implemented.

## Elevation & Depth

There are no component shadows. Real photographic perspective, main/detail scale and restrained relative movement convey depth. The hero main photo scales (1.06 → 1.00); detail scales (1.09 → 1.04) and travels (+20 → −16px). The rectangular mask and photo form one continuous field, with no independent foreground matte. Do not add glass surfaces or artificial 3D tilt to substitute for architectural depth.

## Shapes

Photographs and interface surfaces use square edges; no reusable radius token exists in the shipped source. Rectangular inset clipping opens the main photograph. Hairline caption dividers and the concept-label separator provide structure. Avoid decorative blueprint grids or invented measurement labels. A future plan may explain a coherent concept project's geometry, rather than act as a background texture.

## Components

### Navigation

A single fixed header holds the accessible ARAL anchor and working phase-local controls: “Avlu Evi” returns to the hero, and “Malzeme ve ışık” explores the detail. Full-site Projects/Studio/Contact links have not shipped. Fine-pointer hover adds a static underline; keyboard focus immediately shows an olive (2px) outline with (5px) offset. The compact brand becomes visible during the desktop handoff and is visible initially on smaller screens/reduced motion; focusing it forces visibility.

Below (768px), a (48px) menu control toggles a warm full-width panel. Its label becomes “Kapat”; Escape closes it and restores focus to the toggle. Link selection closes the panel. This is an in-flow navigation disclosure, not a modal or animated overlay.

### Project scene and caption

Avlu Evi, its explicit “Konsept proje” status and “Mekânı keşfet” action remain separate from the image raster. There is no project detail route or clickable-photo route in Phase 1. The explore button advances the desktop scene with native smooth scroll for pointer activation; keyboard activation advances immediately. Tablet/mobile/reduced-motion activation immediately scrolls to the detail. Captions are permanently visible, not hover reveals.

### Shared states

The skip link appears on focus and targets the project figure. Explore controls use a (48px) desktop target and (44px) tablet/mobile target. Text action hover changes underline offset immediately; the earlier animated underline was removed. The declared feedback duration and ease are available tokens, but the shipped menu and hover feedback do not consume them. Reduced motion disables CSS transition duration and uses static composition.

The desktop GSAP timeline uses linear native scroll progress, measured font-ready geometry, refresh recalculation and cleanup. Timeline values are normalized scroll segments, not UI milliseconds. The handoff preserves one semantic brand and one navigation. No automatic intro, preloader or content reveal delays access.

## Do's and Don'ts

### Do:

- **Do** preserve the warm stone/timber/olive image family and coherent whole/detail relationships.
- **Do** use real text, visible captions and explicit concept status.
- **Do** carry the typography and alignment language into varied future compositions.
- **Do** preserve native scrolling, keyboard access, immediate focus feedback and static reduced-motion alternatives.
- **Do** distinguish shipped hero primitives from future blueprint surfaces.

### Don't:

- **Don't** reintroduce a separate foreground cutout merely to satisfy an obsolete seed requirement.
- **Don't** repeat masked headings or the same wide/narrow hero layout throughout the site.
- **Don't** introduce equal feature-card grids, SaaS CTA bands, persistent marquees, custom cursors or reveal animations on every element.
- **Don't** invent real clients, awards, dates, locations or contact endpoints.
- **Don't** treat approval of the full-site direction as authorization to implement later phases.
