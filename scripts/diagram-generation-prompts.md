# Diagram Generation Prompts for Localized Sleep-Weight Cycle Images

Use these prompts with Gemini Image Generation to create localized versions of the vicious/virtuous cycle diagrams.

## Style Guidelines (consistent across all images)
- **Layout**: Circular/wheel diagram with 5 connected steps
- **Colors**:
  - Vicious cycle: Red/orange tones (warning colors)
  - Virtuous cycle: Green/blue tones (positive colors)
- **Include LOWIS logo**: Small logo in corner for branding
- **Resolution**: 1200x800px minimum
- **Style**: Clean, modern, infographic style

---

## FRENCH (FR) - Cercle Vicieux

**Prompt:**
```
Create a modern infographic circular diagram showing "LE CERCLE VICIEUX" (The Vicious Cycle) with 5 connected steps in a clockwise wheel. Use red and orange warning colors. Steps should be:

1. "Mauvais sommeil" (with moon/sleep icon)
2. "Fatigue" (with tired face icon)
3. "Hormones perturbées" (with unbalanced scale icon)
4. "Mauvais choix alimentaires" (with junk food icon)
5. "Prise de poids" (with weight scale up icon)

Arrows connecting each step in a cycle. Clean modern style with white background. Add small LOWIS logo in bottom right corner. French text only.
```

**Filename:** `vicious-cycle-fr.png`

---

## FRENCH (FR) - Cercle Vertueux

**Prompt:**
```
Create a modern infographic circular diagram showing "LE CERCLE VERTUEUX" (The Virtuous Cycle) with 5 connected steps in a clockwise wheel. Use green and blue positive colors. Steps should be:

1. "Meilleur sommeil" (with peaceful moon/sleep icon)
2. "Plus d'énergie" (with energy/lightning icon)
3. "Hormones équilibrées" (with balanced scale icon)
4. "Meilleurs choix" (with healthy food icon)
5. "Perte de poids" (with weight scale down icon)

Arrows connecting each step in a cycle. Clean modern style with white background. Add small LOWIS logo in bottom right corner. French text only.
```

**Filename:** `virtuous-cycle-fr.png`

---

## ENGLISH (EN) - Vicious Cycle

**Prompt:**
```
Create a modern infographic circular diagram showing "THE VICIOUS CYCLE" with 5 connected steps in a clockwise wheel. Use red and orange warning colors. Steps should be:

1. "Poor sleep" (with moon/sleep icon)
2. "Fatigue" (with tired face icon)
3. "Disrupted hormones" (with unbalanced scale icon)
4. "Poor food choices" (with junk food icon)
5. "Weight gain" (with weight scale up icon)

Arrows connecting each step in a cycle. Clean modern style with white background. Add small LOWIS logo in bottom right corner. English text only.
```

**Filename:** `vicious-cycle-en.png`

---

## ENGLISH (EN) - Virtuous Cycle

**Prompt:**
```
Create a modern infographic circular diagram showing "THE VIRTUOUS CYCLE" with 5 connected steps in a clockwise wheel. Use green and blue positive colors. Steps should be:

1. "Better sleep" (with peaceful moon/sleep icon)
2. "More energy" (with energy/lightning icon)
3. "Balanced hormones" (with balanced scale icon)
4. "Better choices" (with healthy food icon)
5. "Weight loss" (with weight scale down icon)

Arrows connecting each step in a cycle. Clean modern style with white background. Add small LOWIS logo in bottom right corner. English text only.
```

**Filename:** `virtuous-cycle-en.png`

---

## SPANISH (ES) - Círculo Vicioso

**Prompt:**
```
Create a modern infographic circular diagram showing "EL CÍRCULO VICIOSO" (The Vicious Cycle) with 5 connected steps in a clockwise wheel. Use red and orange warning colors. Steps should be:

1. "Mal sueño" (with moon/sleep icon)
2. "Fatiga" (with tired face icon)
3. "Hormonas alteradas" (with unbalanced scale icon)
4. "Malas elecciones alimentarias" (with junk food icon)
5. "Aumento de peso" (with weight scale up icon)

Arrows connecting each step in a cycle. Clean modern style with white background. Add small LOWIS logo in bottom right corner. Spanish text only.
```

**Filename:** `vicious-cycle-es.png`

---

## SPANISH (ES) - Círculo Virtuoso

**Prompt:**
```
Create a modern infographic circular diagram showing "EL CÍRCULO VIRTUOSO" (The Virtuous Cycle) with 5 connected steps in a clockwise wheel. Use green and blue positive colors. Steps should be:

1. "Mejor sueño" (with peaceful moon/sleep icon)
2. "Más energía" (with energy/lightning icon)
3. "Hormonas equilibradas" (with balanced scale icon)
4. "Mejores elecciones" (with healthy food icon)
5. "Pérdida de peso" (with weight scale down icon)

Arrows connecting each step in a cycle. Clean modern style with white background. Add small LOWIS logo in bottom right corner. Spanish text only.
```

**Filename:** `virtuous-cycle-es.png`

---

## Upload Instructions

After generating all 6 images, upload them to Supabase Storage:

**Path:** `Landing/blog/sommeil-perte-poids/`

Files:
- vicious-cycle-fr.png
- virtuous-cycle-fr.png
- vicious-cycle-en.png
- virtuous-cycle-en.png
- vicious-cycle-es.png
- virtuous-cycle-es.png

---

## Markdown Updates Required

After uploading, update these files with the localized image URLs:

### FR: `src/content/blog/fr/sommeil-perte-poids.md`
- Change `vicious-cycle.png` → `vicious-cycle-fr.png`
- Change `virtuous-cycle.png` → `virtuous-cycle-fr.png`

### EN: `src/content/blog/en/sleep-weight-loss.md`
- Change `vicious-cycle.png` → `vicious-cycle-en.png`
- Change `virtuous-cycle.png` → `virtuous-cycle-en.png`

### ES: `src/content/blog/es/sueno-perdida-peso.md`
- Change `vicious-cycle.png` → `vicious-cycle-es.png`
- Change `virtuous-cycle.png` → `virtuous-cycle-es.png`
