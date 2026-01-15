import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Blog Collection Schema
 *
 * Multi-language SEO blog with topic clusters architecture
 * - Pillar pages link to all cluster articles
 * - Cluster articles link back to pillar (min 2x)
 * - Cross-links between related clusters (max 3)
 */
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    // Basic metadata
    title: z.string(),
    description: z.string().max(155), // SEO meta description limit
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // Author (for E-E-A-T)
    author: z.string().default('Équipe LOWIS'),
    authorRole: z.string().optional(), // e.g., "Nutritionniste IA"

    // Categorization
    category: z.enum([
      'guides',       // Pillar pages, comprehensive guides
      'comparatifs',  // VS articles (LOWIS vs Cal AI, etc.)
      'astuces',      // Quick tips and tricks
      'recettes',     // Recipe-related content
      'temoignages',  // User stories (for E-E-A-T)
      'sante-femme',  // Women's health: menstrual cycle, hormones
      'bien-etre',    // Wellness: stress, sleep, mental health
      'mindset',      // Mindset: audio program, mental reprogramming
    ]),
    tags: z.array(z.string()).default([]),

    // Images
    image: z.string().optional(),      // Hero image path
    imageAlt: z.string().optional(),   // Alt text for accessibility
    ogImage: z.string().optional(),    // Open Graph image (1200x630)

    // Multi-language
    lang: z.enum(['fr', 'fr-FR', 'es', 'en']),

    // Links to translations (slug of the same article in other languages)
    translations: z.object({
      fr: z.string().optional(),       // French Morocco (default)
      'fr-FR': z.string().optional(),  // French France
      es: z.string().optional(),       // Spanish
      en: z.string().optional(),       // English
    }).optional(),

    // SEO
    canonical: z.string().optional(),  // Canonical URL if different
    noindex: z.boolean().default(false),

    // Topic Cluster structure
    isPillar: z.boolean().default(false),      // Is this a pillar page?
    pillarSlug: z.string().optional(),          // If cluster, which pillar does it belong to?
    clusterArticles: z.array(z.string()).optional(), // If pillar, list of cluster slugs

    // Internal linking
    relatedPosts: z.array(z.string()).optional(), // Cross-links to related articles

    // Reading experience
    readingTime: z.number().optional(), // Minutes, calculated or manual

    // CTA customization
    ctaType: z.enum(['plan', 'trial', 'compare', 'custom']).default('plan'),
    ctaText: z.string().optional(),     // Custom CTA text
    ctaUrl: z.string().optional(),      // Custom CTA URL (default: /#pricing)

    // Draft status
    draft: z.boolean().default(false),

    // FAQ Schema for Google Rich Results
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),

    // Comparison article specific
    comparisonLogos: z.object({
      lowis: z.string().optional(),
      competitor: z.string().optional(),
      competitorName: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
