/**
 * Category SEO Content Configuration
 *
 * Contains extended descriptions and FAQs for each category page
 * Used for SEO silo optimization (hub pages)
 *
 * Each category includes:
 * - extendedDescription: 300-600 words of valuable content
 * - faqs: 4-6 frequently asked questions with answers
 */

export interface CategoryFAQ {
  question: string;
  answer: string;
}

export interface CategorySEOContent {
  extendedDescription: string;
  faqs: CategoryFAQ[];
}

export type CategoryContentMap = Record<string, CategorySEOContent>;

// French (Morocco/France) - Default
export const categoryContentFR: CategoryContentMap = {
  guides: {
    extendedDescription: `
      Nos guides de nutrition et de perte de poids sont conçus pour vous accompagner à chaque étape de votre parcours santé. Que vous débutiez votre transformation ou que vous cherchiez à optimiser vos résultats, nos experts ont créé des ressources complètes et accessibles.

      Chaque guide combine les dernières recherches scientifiques avec des conseils pratiques adaptés à votre quotidien. Nous abordons des sujets essentiels comme la compréhension des macronutriments, la gestion des portions, la création de menus équilibrés, et les stratégies pour maintenir votre motivation sur le long terme.

      L'approche LOWIS se distingue par son utilisation de l'intelligence artificielle pour personnaliser chaque recommandation. Nos guides vous expliquent comment tirer le meilleur parti de cette technologie tout en développant votre autonomie nutritionnelle.

      Que vous souhaitiez perdre du poids, gagner en énergie, améliorer votre digestion ou simplement manger plus sainement, vous trouverez ici les ressources nécessaires pour atteindre vos objectifs de manière durable et sans frustration.
    `.trim(),
    faqs: [
      {
        question: "Par où commencer quand on veut perdre du poids ?",
        answer: "Commencez par évaluer vos habitudes actuelles et définir des objectifs réalistes. LOWIS vous aide avec une évaluation personnalisée qui prend en compte votre mode de vie, vos préférences alimentaires et vos contraintes. Notre guide 'Perdre du poids intelligemment' est le point de départ idéal."
      },
      {
        question: "Combien de temps faut-il pour voir des résultats ?",
        answer: "Les premiers résultats sont généralement visibles après 2 à 3 semaines d'alimentation équilibrée. Cependant, une perte de poids saine et durable se situe entre 0,5 et 1 kg par semaine. L'important est de construire des habitudes qui durent, pas de chercher des résultats rapides."
      },
      {
        question: "Dois-je compter les calories pour perdre du poids ?",
        answer: "Le comptage des calories peut être un outil utile, mais ce n'est pas obligatoire. LOWIS simplifie ce processus en vous guidant vers des choix alimentaires naturellement équilibrés. Notre IA analyse vos repas et vous donne des retours personnalisés sans que vous ayez à tout calculer manuellement."
      },
      {
        question: "Comment éviter l'effet yo-yo après un régime ?",
        answer: "L'effet yo-yo survient souvent après des régimes trop restrictifs. La clé est d'adopter des changements progressifs et durables plutôt que des restrictions drastiques. Nos guides vous apprennent à manger intuitivement et à maintenir un équilibre qui s'adapte à votre vie."
      },
      {
        question: "Les guides LOWIS sont-ils adaptés aux débutants ?",
        answer: "Absolument ! Nos guides sont rédigés pour être accessibles à tous, quel que soit votre niveau de connaissance en nutrition. Nous expliquons les concepts de base tout en offrant des informations approfondies pour ceux qui souhaitent aller plus loin."
      }
    ]
  },
  comparatifs: {
    extendedDescription: `
      Choisir la bonne application de nutrition peut transformer votre parcours santé. Dans un marché saturé d'options, nos comparatifs détaillés vous aident à identifier la solution qui correspond vraiment à vos besoins spécifiques.

      Nous analysons objectivement les principales applications de suivi nutritionnel : MyFitnessPal, Yazio, Lose It!, Noom, et bien d'autres. Pour chaque comparaison, nous évaluons des critères essentiels comme la précision de la base de données alimentaires, la qualité du coaching, l'interface utilisateur, le rapport qualité-prix, et surtout l'efficacité pour atteindre vos objectifs.

      Ce qui distingue LOWIS des autres applications, c'est notre approche hybride combinant intelligence artificielle avancée et accompagnement humain. Nos comparatifs vous montrent concrètement comment cette différence se traduit dans votre expérience quotidienne et vos résultats.

      Chaque article inclut des tableaux comparatifs clairs, des retours d'utilisateurs réels, et des recommandations adaptées à différents profils : débutants, sportifs, personnes avec des restrictions alimentaires, etc.
    `.trim(),
    faqs: [
      {
        question: "Quelle est la meilleure application pour perdre du poids ?",
        answer: "La meilleure application dépend de vos besoins spécifiques. Pour un accompagnement personnalisé avec IA et support humain, LOWIS est idéal. MyFitnessPal convient pour le simple comptage de calories, tandis que Noom propose une approche psychologique. Nos comparatifs détaillés vous aident à choisir selon vos priorités."
      },
      {
        question: "LOWIS est-il vraiment différent de MyFitnessPal ?",
        answer: "Oui, fondamentalement. MyFitnessPal se concentre sur le comptage de calories, tandis que LOWIS offre un coaching IA personnalisé, des plans adaptés à vos préférences, un programme audio pour le mindset, et un suivi par de vrais nutritionnistes. C'est la différence entre un outil et un véritable accompagnement."
      },
      {
        question: "Les applications gratuites sont-elles efficaces ?",
        answer: "Les versions gratuites peuvent être utiles pour débuter, mais elles offrent généralement des fonctionnalités limitées. Pour un accompagnement complet et des résultats durables, un investissement dans une solution premium comme LOWIS peut faire toute la différence dans votre réussite."
      },
      {
        question: "Puis-je utiliser plusieurs applications en même temps ?",
        answer: "C'est possible mais souvent contre-productif. Suivre plusieurs applications crée de la confusion et peut mener à l'obsession. Mieux vaut choisir une solution complète qui répond à tous vos besoins. LOWIS intègre nutrition, mindset et suivi dans une seule plateforme."
      }
    ]
  },
  astuces: {
    extendedDescription: `
      Les petits changements créent les grandes transformations. Nos astuces nutrition vous offrent des conseils pratiques et faciles à mettre en œuvre pour améliorer votre alimentation au quotidien, sans bouleverser votre vie.

      Chaque astuce est sélectionnée pour son impact réel et sa facilité d'application. Nous couvrons tous les aspects de la nutrition pratique : comment gérer les fringales, optimiser vos courses, préparer des repas rapides et sains, manger équilibré au restaurant, et bien plus encore.

      Nos conseils sont basés sur la science comportementale et les retours de milliers d'utilisateurs LOWIS. Nous savons que la théorie ne suffit pas : c'est l'application concrète qui fait la différence. C'est pourquoi chaque astuce inclut des exemples précis et des étapes d'action claires.

      Que vous manquiez de temps, de motivation ou simplement d'idées, vous trouverez ici l'inspiration pour faire de meilleurs choix alimentaires, un petit pas à la fois.
    `.trim(),
    faqs: [
      {
        question: "Comment résister aux fringales sucrées ?",
        answer: "Les fringales sucrées sont souvent liées à des carences, au stress ou à l'habitude. Nos astuces incluent : manger suffisamment de protéines, rester hydraté, avoir des alternatives saines à portée de main, et identifier les déclencheurs émotionnels. LOWIS vous aide à comprendre vos patterns personnels."
      },
      {
        question: "Comment manger sainement quand on a peu de temps ?",
        answer: "La préparation est la clé ! Nos astuces incluent le batch cooking du dimanche, les repas en 15 minutes, les combinaisons express équilibrées, et les choix intelligents en cas de repas improvisé. Avoir un plan simple fait toute la différence."
      },
      {
        question: "Quelles sont les erreurs les plus courantes en nutrition ?",
        answer: "Les erreurs fréquentes incluent : sauter des repas, éliminer des groupes alimentaires entiers, ne pas manger assez de protéines, ignorer l'hydratation, et chercher des résultats trop rapides. Nos astuces vous aident à éviter ces pièges courants."
      },
      {
        question: "Comment maintenir de bonnes habitudes sur le long terme ?",
        answer: "La constance bat l'intensité. Commencez par une seule habitude, ancrez-la pendant 3 semaines minimum, puis ajoutez la suivante. Célébrez les petites victoires et ne visez pas la perfection. LOWIS vous accompagne avec des rappels et du soutien adapté."
      }
    ]
  },
  recettes: {
    extendedDescription: `
      Manger sainement ne signifie pas renoncer au plaisir gustatif. Notre collection de recettes healthy prouve qu'équilibre nutritionnel et saveurs peuvent parfaitement coexister, même avec les plats traditionnels que vous aimez.

      Chaque recette est développée et validée par notre équipe de nutritionnistes pour garantir un équilibre optimal entre protéines, glucides et lipides. Nous indiquons systématiquement les valeurs nutritionnelles, le temps de préparation, et des alternatives pour adapter chaque plat à vos préférences ou restrictions alimentaires.

      Nos recettes s'inspirent des cuisines du monde tout en respectant les principes d'une alimentation équilibrée. Vous trouverez des versions allégées de vos plats favoris, des idées de meal prep pour la semaine, des options végétariennes et véganes, ainsi que des recettes adaptées à différents objectifs (perte de poids, prise de masse, énergie).

      L'application LOWIS vous permet de scanner ces recettes pour les intégrer directement à votre plan alimentaire, avec un calcul automatique des portions selon vos besoins caloriques personnels.
    `.trim(),
    faqs: [
      {
        question: "Comment rendre un plat traditionnel plus healthy ?",
        answer: "Plusieurs techniques fonctionnent : réduire les matières grasses en cuisinant au four plutôt qu'en friture, augmenter les légumes, utiliser des alternatives plus légères (yaourt grec au lieu de crème), et contrôler les portions. Nos recettes montrent comment adapter vos plats préférés."
      },
      {
        question: "Combien de calories par repas pour perdre du poids ?",
        answer: "Cela dépend de votre métabolisme et objectifs. En général, pour une perte de poids, visez 400-600 calories par repas principal avec des collations de 100-200 calories. LOWIS calcule vos besoins personnels et adapte les portions de chaque recette automatiquement."
      },
      {
        question: "Comment cuisiner healthy avec un petit budget ?",
        answer: "Privilégiez les légumineuses, les œufs, les légumes de saison, et les féculents complets qui sont nutritifs et économiques. Le batch cooking réduit aussi les coûts. Nos recettes incluent souvent des alternatives budget-friendly."
      },
      {
        question: "Peut-on manger des desserts en perdant du poids ?",
        answer: "Absolument ! La privation totale mène souvent aux excès. Nos recettes de desserts healthy utilisent des édulcorants naturels, des fruits, et des techniques pour réduire les calories sans sacrifier le goût. Manger un dessert raisonnable fait partie d'une alimentation équilibrée."
      }
    ]
  },
  temoignages: {
    extendedDescription: `
      Rien n'est plus motivant que de découvrir les histoires de personnes qui ont réussi leur transformation. Nos témoignages LOWIS vous montrent des parcours authentiques, avec leurs hauts et leurs bas, pour vous inspirer et vous prouver que le changement est possible.

      Chaque témoignage présente le contexte initial, les défis rencontrés, les stratégies qui ont fonctionné, et les résultats obtenus. Nous partageons des histoires diverses : jeunes mamans, professionnels débordés, personnes ayant essayé de nombreux régimes sans succès, sportifs souhaitant optimiser leur nutrition.

      Ce qui rend ces témoignages uniques, c'est leur honnêteté. Nous ne promettons pas de miracles mais montrons des transformations réalistes et durables. Nos utilisateurs partagent aussi comment l'accompagnement IA de LOWIS les a aidés à rester motivés et à surmonter les moments difficiles.

      Ces histoires ne sont pas seulement inspirantes, elles sont instructives. Vous y trouverez des conseils pratiques testés sur le terrain et des leçons apprises qui pourront vous éviter des erreurs courantes.
    `.trim(),
    faqs: [
      {
        question: "Les résultats présentés sont-ils réels ?",
        answer: "Oui, tous nos témoignages proviennent de vrais utilisateurs LOWIS qui ont accepté de partager leur parcours. Nous vérifions chaque histoire et ne publions que des transformations authentiques et documentées. Les résultats varient selon les individus."
      },
      {
        question: "Combien de poids peut-on perdre avec LOWIS ?",
        answer: "Les résultats dépendent de votre situation de départ et de votre engagement. Nos utilisateurs perdent en moyenne 0,5 à 1 kg par semaine de manière saine. Certains témoignages montrent des pertes de 10, 20 ou même 30 kg sur plusieurs mois, toujours de façon progressive."
      },
      {
        question: "Puis-je partager mon propre témoignage ?",
        answer: "Bien sûr ! Nous adorons entendre les histoires de notre communauté. Si vous avez vécu une transformation avec LOWIS, contactez-nous via l'application. Votre parcours pourrait inspirer d'autres personnes dans la même situation."
      },
      {
        question: "Les témoignages incluent-ils des photos avant/après ?",
        answer: "Certains témoignages incluent des photos, toujours avec le consentement explicite de nos utilisateurs. Nous croyons que les transformations vont au-delà du physique, c'est pourquoi nous mettons aussi en avant les changements d'énergie, de confiance et de relation avec la nourriture."
      }
    ]
  },
  'bien-etre': {
    extendedDescription: `
      La perte de poids durable ne concerne pas uniquement ce que vous mangez, mais aussi comment vous vous sentez. Notre section bien-être explore la connexion profonde entre votre santé mentale, votre gestion du stress, votre sommeil, et vos objectifs nutritionnels.

      Le stress chronique, le manque de sommeil et les émotions négatives sont souvent des obstacles invisibles à la perte de poids. Ils influencent vos hormones, vos envies alimentaires, et votre capacité à faire de bons choix. Comprendre ces mécanismes est essentiel pour une transformation réussie.

      Nos articles bien-être vous offrent des stratégies concrètes pour améliorer votre qualité de vie globale : techniques de gestion du stress, rituels pour un meilleur sommeil, exercices de pleine conscience, et méthodes pour cultiver une relation saine avec votre corps.

      L'approche LOWIS intègre le bien-être au cœur de son programme avec notamment un Audio Program quotidien de 10 minutes pour travailler sur votre mindset et votre relation avec la nourriture. Car prendre soin de son corps commence par prendre soin de son esprit.
    `.trim(),
    faqs: [
      {
        question: "Comment le stress affecte-t-il la perte de poids ?",
        answer: "Le stress augmente le cortisol, une hormone qui favorise le stockage des graisses, notamment abdominales. Il augmente aussi les envies de sucre et de gras. Gérer son stress est donc essentiel pour perdre du poids efficacement. Nos articles vous donnent des techniques pratiques."
      },
      {
        question: "Combien d'heures de sommeil faut-il pour perdre du poids ?",
        answer: "La plupart des adultes ont besoin de 7 à 9 heures de sommeil de qualité. Un manque de sommeil perturbe les hormones de la faim (leptine et ghréline), augmentant l'appétit et les envies de malbouffe. Améliorer son sommeil peut accélérer significativement la perte de poids."
      },
      {
        question: "La méditation aide-t-elle à perdre du poids ?",
        answer: "Des études montrent que la méditation et la pleine conscience réduisent l'alimentation émotionnelle et améliorent la conscience corporelle. L'Audio Program LOWIS utilise ces principes pour vous aider à développer une relation plus saine avec la nourriture."
      },
      {
        question: "Comment gérer l'alimentation émotionnelle ?",
        answer: "L'alimentation émotionnelle se gère en identifiant d'abord vos déclencheurs (stress, ennui, tristesse). Ensuite, développez des alternatives : marche, appel à un ami, journaling. LOWIS vous aide à reconnaître ces patterns et à créer de nouvelles réponses."
      }
    ]
  },
  mindset: {
    extendedDescription: `
      Votre mental est le facteur le plus déterminant dans votre réussite. Le mindset, c'est-à-dire votre état d'esprit et vos croyances, influence directement vos comportements alimentaires et votre capacité à maintenir de nouvelles habitudes sur le long terme.

      Nos articles mindset vous aident à identifier et transformer les schémas de pensée qui sabotent vos efforts. Les croyances limitantes comme "je n'ai aucune volonté" ou "j'ai toujours été comme ça" peuvent être remplacées par des pensées plus constructives et réalistes.

      La psychologie de la perte de poids est un domaine fascinant que nous explorons en profondeur. Nous abordons des sujets comme la motivation intrinsèque vs extrinsèque, la formation d'habitudes, la gestion des échecs, et la construction d'une identité de personne en bonne santé.

      L'Audio Program LOWIS, au cœur de notre méthode, utilise des techniques de reprogrammation mentale pour changer votre relation avec la nourriture en douceur. Car la vraie transformation commence dans votre tête avant de se voir sur la balance.
    `.trim(),
    faqs: [
      {
        question: "Comment développer la volonté pour tenir un régime ?",
        answer: "La volonté est une ressource limitée. Plutôt que de compter sur elle, créez un environnement qui facilite les bons choix : éliminez les tentations, préparez vos repas à l'avance, et développez des routines automatiques. Le mindset LOWIS vous apprend à travailler AVEC votre cerveau, pas contre lui."
      },
      {
        question: "Comment se remotiver après un échec ?",
        answer: "Les 'échecs' font partie du parcours. Chaque faux pas est une opportunité d'apprentissage. Au lieu de vous culpabiliser, analysez ce qui s'est passé et ajustez votre approche. Le perfectionnisme est l'ennemi du progrès. Un pas en arrière, deux pas en avant."
      },
      {
        question: "Qu'est-ce que l'Audio Program LOWIS ?",
        answer: "L'Audio Program est un programme quotidien de 10 minutes qui utilise des techniques de coaching mental, visualisation et affirmations pour reprogrammer votre relation avec la nourriture. C'est comme avoir un coach personnel qui travaille sur votre mindset chaque jour."
      },
      {
        question: "Comment arrêter de voir la nourriture comme l'ennemi ?",
        answer: "Cette perception vient souvent de régimes trop restrictifs. La nourriture est votre alliée, source d'énergie et de plaisir. Notre approche mindset vous aide à développer une relation neutre et positive avec l'alimentation, sans culpabilité ni obsession."
      }
    ]
  },
  'sante-femme': {
    extendedDescription: `
      Le corps féminin a des besoins nutritionnels spécifiques qui varient tout au long du cycle menstruel et des différentes étapes de la vie. Notre section santé femme vous offre des conseils adaptés à ces particularités trop souvent ignorées.

      Les fluctuations hormonales influencent l'appétit, les envies alimentaires, le métabolisme et même la rétention d'eau. Comprendre ces variations vous permet d'adapter votre alimentation pour optimiser votre énergie, votre humeur et vos résultats de perte de poids.

      Nous abordons des sujets essentiels comme l'alimentation adaptée à chaque phase du cycle, la nutrition pendant la grossesse et l'allaitement, la gestion du syndrome prémenstruel par l'alimentation, et les besoins spécifiques de la ménopause.

      LOWIS intègre le suivi du cycle dans son accompagnement, permettant une personnalisation encore plus fine de vos recommandations. Car une approche nutrition qui ignore les hormones féminines est une approche incomplète.
    `.trim(),
    faqs: [
      {
        question: "Comment le cycle menstruel affecte-t-il la perte de poids ?",
        answer: "Le cycle influence le métabolisme, la rétention d'eau et les envies alimentaires. En phase lutéale (avant les règles), le métabolisme augmente légèrement mais les envies sucrées aussi. La balance peut varier de 1-2 kg selon la phase. LOWIS prend en compte ces variations dans son suivi."
      },
      {
        question: "Faut-il manger différemment selon les phases du cycle ?",
        answer: "Adapter son alimentation au cycle peut optimiser l'énergie et réduire les symptômes du SPM. En phase folliculaire, favorisez les aliments frais et légers. En phase lutéale, augmentez légèrement les glucides complexes et le magnésium. Nos articles détaillent ces ajustements."
      },
      {
        question: "Comment gérer les envies sucrées avant les règles ?",
        answer: "Ces envies sont liées aux fluctuations de sérotonine. Plutôt que de lutter, anticipez avec des alternatives saines : chocolat noir, fruits, glucides complexes. Augmenter le magnésium (bananes, épinards, amandes) peut aussi aider. L'important est de ne pas culpabiliser."
      },
      {
        question: "La pilule contraceptive affecte-t-elle le poids ?",
        answer: "Certaines femmes notent des variations de poids avec la pilule, généralement liées à la rétention d'eau ou des changements d'appétit. Les effets varient selon le type de pilule et l'individu. Une alimentation équilibrée et de l'activité physique aident à maintenir un poids stable."
      }
    ]
  }
};

// Spanish
export const categoryContentES: CategoryContentMap = {
  guides: {
    extendedDescription: `
      Nuestras guías de nutrición y pérdida de peso están diseñadas para acompañarte en cada etapa de tu camino hacia la salud. Ya sea que estés comenzando tu transformación o buscando optimizar tus resultados, nuestros expertos han creado recursos completos y accesibles.

      Cada guía combina las últimas investigaciones científicas con consejos prácticos adaptados a tu día a día. Abordamos temas esenciales como la comprensión de los macronutrientes, la gestión de las porciones, la creación de menús equilibrados y las estrategias para mantener tu motivación a largo plazo.

      El enfoque LOWIS se distingue por su uso de inteligencia artificial para personalizar cada recomendación. Nuestras guías te explican cómo aprovechar al máximo esta tecnología mientras desarrollas tu autonomía nutricional.

      Ya sea que quieras perder peso, ganar energía, mejorar tu digestión o simplemente comer más saludable, aquí encontrarás los recursos necesarios para alcanzar tus objetivos de manera duradera y sin frustración.
    `.trim(),
    faqs: [
      {
        question: "¿Por dónde empezar cuando quieres perder peso?",
        answer: "Comienza evaluando tus hábitos actuales y definiendo objetivos realistas. LOWIS te ayuda con una evaluación personalizada que tiene en cuenta tu estilo de vida, preferencias alimentarias y limitaciones. Nuestra guía 'Perder peso inteligentemente' es el punto de partida ideal."
      },
      {
        question: "¿Cuánto tiempo se tarda en ver resultados?",
        answer: "Los primeros resultados suelen ser visibles después de 2 a 3 semanas de alimentación equilibrada. Sin embargo, una pérdida de peso saludable y duradera es de 0,5 a 1 kg por semana. Lo importante es construir hábitos que perduren, no buscar resultados rápidos."
      },
      {
        question: "¿Debo contar calorías para perder peso?",
        answer: "El conteo de calorías puede ser una herramienta útil, pero no es obligatorio. LOWIS simplifica este proceso guiándote hacia opciones alimentarias naturalmente equilibradas. Nuestra IA analiza tus comidas y te da retroalimentación personalizada sin que tengas que calcular todo manualmente."
      },
      {
        question: "¿Cómo evitar el efecto rebote después de una dieta?",
        answer: "El efecto rebote suele ocurrir después de dietas muy restrictivas. La clave es adoptar cambios progresivos y duraderos en lugar de restricciones drásticas. Nuestras guías te enseñan a comer intuitivamente y mantener un equilibrio que se adapte a tu vida."
      },
      {
        question: "¿Las guías LOWIS son aptas para principiantes?",
        answer: "¡Absolutamente! Nuestras guías están redactadas para ser accesibles a todos, sin importar tu nivel de conocimiento en nutrición. Explicamos los conceptos básicos mientras ofrecemos información detallada para quienes quieran profundizar."
      }
    ]
  },
  comparatifs: {
    extendedDescription: `
      Elegir la aplicación de nutrición correcta puede transformar tu camino hacia la salud. En un mercado saturado de opciones, nuestras comparativas detalladas te ayudan a identificar la solución que realmente se adapta a tus necesidades específicas.

      Analizamos objetivamente las principales aplicaciones de seguimiento nutricional: MyFitnessPal, Yazio, Lose It!, Noom y muchas otras. Para cada comparación, evaluamos criterios esenciales como la precisión de la base de datos de alimentos, la calidad del coaching, la interfaz de usuario, la relación calidad-precio y, sobre todo, la eficacia para alcanzar tus objetivos.

      Lo que distingue a LOWIS de otras aplicaciones es nuestro enfoque híbrido que combina inteligencia artificial avanzada con acompañamiento humano. Nuestras comparativas te muestran concretamente cómo esta diferencia se traduce en tu experiencia diaria y tus resultados.

      Cada artículo incluye tablas comparativas claras, opiniones de usuarios reales y recomendaciones adaptadas a diferentes perfiles: principiantes, deportistas, personas con restricciones alimentarias, etc.
    `.trim(),
    faqs: [
      {
        question: "¿Cuál es la mejor aplicación para perder peso?",
        answer: "La mejor aplicación depende de tus necesidades específicas. Para un acompañamiento personalizado con IA y soporte humano, LOWIS es ideal. MyFitnessPal sirve para el simple conteo de calorías, mientras que Noom propone un enfoque psicológico. Nuestras comparativas detalladas te ayudan a elegir según tus prioridades."
      },
      {
        question: "¿LOWIS es realmente diferente de MyFitnessPal?",
        answer: "Sí, fundamentalmente. MyFitnessPal se centra en el conteo de calorías, mientras que LOWIS ofrece coaching IA personalizado, planes adaptados a tus preferencias, un programa de audio para el mindset y seguimiento por nutricionistas reales. Es la diferencia entre una herramienta y un verdadero acompañamiento."
      },
      {
        question: "¿Las aplicaciones gratuitas son efectivas?",
        answer: "Las versiones gratuitas pueden ser útiles para empezar, pero generalmente ofrecen funcionalidades limitadas. Para un acompañamiento completo y resultados duraderos, invertir en una solución premium como LOWIS puede marcar toda la diferencia en tu éxito."
      },
      {
        question: "¿Puedo usar varias aplicaciones al mismo tiempo?",
        answer: "Es posible pero a menudo contraproducente. Seguir varias aplicaciones crea confusión y puede llevar a la obsesión. Es mejor elegir una solución completa que responda a todas tus necesidades. LOWIS integra nutrición, mindset y seguimiento en una sola plataforma."
      }
    ]
  },
  astuces: {
    extendedDescription: `
      Los pequeños cambios crean las grandes transformaciones. Nuestros tips de nutrición te ofrecen consejos prácticos y fáciles de implementar para mejorar tu alimentación día a día, sin revolucionar tu vida.

      Cada tip es seleccionado por su impacto real y su facilidad de aplicación. Cubrimos todos los aspectos de la nutrición práctica: cómo gestionar los antojos, optimizar tus compras, preparar comidas rápidas y saludables, comer equilibrado en restaurantes y mucho más.

      Nuestros consejos están basados en la ciencia del comportamiento y los comentarios de miles de usuarios de LOWIS. Sabemos que la teoría no basta: es la aplicación concreta la que marca la diferencia. Por eso cada tip incluye ejemplos precisos y pasos de acción claros.

      Ya sea que te falte tiempo, motivación o simplemente ideas, encontrarás aquí la inspiración para tomar mejores decisiones alimentarias, un pequeño paso a la vez.
    `.trim(),
    faqs: [
      {
        question: "¿Cómo resistir los antojos de dulces?",
        answer: "Los antojos de dulces suelen estar relacionados con carencias, estrés o hábitos. Nuestros tips incluyen: comer suficientes proteínas, mantenerse hidratado, tener alternativas saludables a mano e identificar los desencadenantes emocionales. LOWIS te ayuda a entender tus patrones personales."
      },
      {
        question: "¿Cómo comer saludable cuando tienes poco tiempo?",
        answer: "¡La preparación es la clave! Nuestros tips incluyen el batch cooking del domingo, las comidas en 15 minutos, las combinaciones express equilibradas y las elecciones inteligentes en caso de comida improvisada. Tener un plan simple marca toda la diferencia."
      },
      {
        question: "¿Cuáles son los errores más comunes en nutrición?",
        answer: "Los errores frecuentes incluyen: saltarse comidas, eliminar grupos de alimentos enteros, no comer suficientes proteínas, ignorar la hidratación y buscar resultados demasiado rápidos. Nuestros tips te ayudan a evitar estas trampas comunes."
      },
      {
        question: "¿Cómo mantener buenos hábitos a largo plazo?",
        answer: "La constancia vence a la intensidad. Comienza con un solo hábito, ancla durante 3 semanas mínimo, luego añade el siguiente. Celebra las pequeñas victorias y no busques la perfección. LOWIS te acompaña con recordatorios y apoyo adaptado."
      }
    ]
  },
  recettes: {
    extendedDescription: `
      Comer saludable no significa renunciar al placer gastronómico. Nuestra colección de recetas healthy demuestra que el equilibrio nutricional y los sabores pueden coexistir perfectamente, incluso con los platos tradicionales que amas.

      Cada receta es desarrollada y validada por nuestro equipo de nutricionistas para garantizar un equilibrio óptimo entre proteínas, carbohidratos y grasas. Indicamos sistemáticamente los valores nutricionales, el tiempo de preparación y alternativas para adaptar cada plato a tus preferencias o restricciones alimentarias.

      Nuestras recetas se inspiran en cocinas del mundo respetando los principios de una alimentación equilibrada. Encontrarás versiones ligeras de tus platos favoritos, ideas de meal prep para la semana, opciones vegetarianas y veganas, así como recetas adaptadas a diferentes objetivos (pérdida de peso, ganancia muscular, energía).

      La aplicación LOWIS te permite escanear estas recetas para integrarlas directamente a tu plan alimentario, con un cálculo automático de las porciones según tus necesidades calóricas personales.
    `.trim(),
    faqs: [
      {
        question: "¿Cómo hacer un plato tradicional más saludable?",
        answer: "Varias técnicas funcionan: reducir las grasas cocinando al horno en lugar de freír, aumentar las verduras, usar alternativas más ligeras (yogur griego en lugar de nata) y controlar las porciones. Nuestras recetas muestran cómo adaptar tus platos favoritos."
      },
      {
        question: "¿Cuántas calorías por comida para perder peso?",
        answer: "Depende de tu metabolismo y objetivos. En general, para perder peso, apunta a 400-600 calorías por comida principal con snacks de 100-200 calorías. LOWIS calcula tus necesidades personales y adapta las porciones de cada receta automáticamente."
      },
      {
        question: "¿Cómo cocinar healthy con poco presupuesto?",
        answer: "Privilegia las legumbres, los huevos, las verduras de temporada y los carbohidratos integrales que son nutritivos y económicos. El batch cooking también reduce los costos. Nuestras recetas incluyen a menudo alternativas económicas."
      },
      {
        question: "¿Se pueden comer postres perdiendo peso?",
        answer: "¡Absolutamente! La privación total suele llevar a excesos. Nuestras recetas de postres healthy usan edulcorantes naturales, frutas y técnicas para reducir calorías sin sacrificar el sabor. Comer un postre razonable es parte de una alimentación equilibrada."
      }
    ]
  },
  temoignages: {
    extendedDescription: `
      Nada es más motivador que descubrir las historias de personas que han logrado su transformación. Nuestros testimonios LOWIS te muestran recorridos auténticos, con sus altos y bajos, para inspirarte y demostrarte que el cambio es posible.

      Cada testimonio presenta el contexto inicial, los desafíos encontrados, las estrategias que funcionaron y los resultados obtenidos. Compartimos historias diversas: madres jóvenes, profesionales ocupados, personas que han probado numerosas dietas sin éxito, deportistas que buscan optimizar su nutrición.

      Lo que hace únicos a estos testimonios es su honestidad. No prometemos milagros sino mostramos transformaciones realistas y duraderas. Nuestros usuarios también comparten cómo el acompañamiento IA de LOWIS les ayudó a mantenerse motivados y superar los momentos difíciles.

      Estas historias no son solo inspiradoras, son instructivas. Encontrarás consejos prácticos probados en el terreno y lecciones aprendidas que te evitarán errores comunes.
    `.trim(),
    faqs: [
      {
        question: "¿Los resultados presentados son reales?",
        answer: "Sí, todos nuestros testimonios provienen de usuarios reales de LOWIS que aceptaron compartir su recorrido. Verificamos cada historia y solo publicamos transformaciones auténticas y documentadas. Los resultados varían según los individuos."
      },
      {
        question: "¿Cuánto peso se puede perder con LOWIS?",
        answer: "Los resultados dependen de tu situación inicial y tu compromiso. Nuestros usuarios pierden en promedio 0,5 a 1 kg por semana de manera saludable. Algunos testimonios muestran pérdidas de 10, 20 o incluso 30 kg en varios meses, siempre de forma progresiva."
      },
      {
        question: "¿Puedo compartir mi propio testimonio?",
        answer: "¡Por supuesto! Nos encanta escuchar las historias de nuestra comunidad. Si has vivido una transformación con LOWIS, contáctanos a través de la aplicación. Tu recorrido podría inspirar a otras personas en la misma situación."
      },
      {
        question: "¿Los testimonios incluyen fotos del antes y después?",
        answer: "Algunos testimonios incluyen fotos, siempre con el consentimiento explícito de nuestros usuarios. Creemos que las transformaciones van más allá de lo físico, por eso también destacamos los cambios de energía, confianza y relación con la comida."
      }
    ]
  },
  'bien-etre': {
    extendedDescription: `
      La pérdida de peso duradera no solo concierne lo que comes, sino también cómo te sientes. Nuestra sección bienestar explora la conexión profunda entre tu salud mental, tu gestión del estrés, tu sueño y tus objetivos nutricionales.

      El estrés crónico, la falta de sueño y las emociones negativas son a menudo obstáculos invisibles para la pérdida de peso. Influyen en tus hormonas, tus antojos alimentarios y tu capacidad de tomar buenas decisiones. Comprender estos mecanismos es esencial para una transformación exitosa.

      Nuestros artículos de bienestar te ofrecen estrategias concretas para mejorar tu calidad de vida global: técnicas de gestión del estrés, rituales para dormir mejor, ejercicios de mindfulness y métodos para cultivar una relación sana con tu cuerpo.

      El enfoque LOWIS integra el bienestar en el corazón de su programa con un Audio Program diario de 10 minutos para trabajar tu mindset y tu relación con la comida. Porque cuidar tu cuerpo empieza por cuidar tu mente.
    `.trim(),
    faqs: [
      {
        question: "¿Cómo afecta el estrés a la pérdida de peso?",
        answer: "El estrés aumenta el cortisol, una hormona que favorece el almacenamiento de grasa, especialmente abdominal. También aumenta los antojos de azúcar y grasa. Gestionar el estrés es por tanto esencial para perder peso eficazmente. Nuestros artículos te dan técnicas prácticas."
      },
      {
        question: "¿Cuántas horas de sueño hacen falta para perder peso?",
        answer: "La mayoría de adultos necesitan 7 a 9 horas de sueño de calidad. La falta de sueño altera las hormonas del hambre (leptina y grelina), aumentando el apetito y los antojos de comida basura. Mejorar el sueño puede acelerar significativamente la pérdida de peso."
      },
      {
        question: "¿La meditación ayuda a perder peso?",
        answer: "Estudios muestran que la meditación y el mindfulness reducen la alimentación emocional y mejoran la conciencia corporal. El Audio Program LOWIS usa estos principios para ayudarte a desarrollar una relación más sana con la comida."
      },
      {
        question: "¿Cómo gestionar la alimentación emocional?",
        answer: "La alimentación emocional se gestiona identificando primero tus desencadenantes (estrés, aburrimiento, tristeza). Luego, desarrolla alternativas: caminar, llamar a un amigo, escribir un diario. LOWIS te ayuda a reconocer estos patrones y crear nuevas respuestas."
      }
    ]
  },
  mindset: {
    extendedDescription: `
      Tu mente es el factor más determinante en tu éxito. El mindset, es decir tu estado mental y tus creencias, influye directamente en tus comportamientos alimentarios y tu capacidad de mantener nuevos hábitos a largo plazo.

      Nuestros artículos de mindset te ayudan a identificar y transformar los patrones de pensamiento que sabotean tus esfuerzos. Las creencias limitantes como "no tengo fuerza de voluntad" o "siempre he sido así" pueden ser reemplazadas por pensamientos más constructivos y realistas.

      La psicología de la pérdida de peso es un campo fascinante que exploramos en profundidad. Abordamos temas como la motivación intrínseca vs extrínseca, la formación de hábitos, la gestión de los fracasos y la construcción de una identidad de persona saludable.

      El Audio Program LOWIS, en el corazón de nuestro método, utiliza técnicas de reprogramación mental para cambiar tu relación con la comida suavemente. Porque la verdadera transformación empieza en tu cabeza antes de verse en la báscula.
    `.trim(),
    faqs: [
      {
        question: "¿Cómo desarrollar la fuerza de voluntad para seguir una dieta?",
        answer: "La fuerza de voluntad es un recurso limitado. En lugar de depender de ella, crea un entorno que facilite las buenas decisiones: elimina tentaciones, prepara tus comidas con antelación y desarrolla rutinas automáticas. El mindset LOWIS te enseña a trabajar CON tu cerebro, no contra él."
      },
      {
        question: "¿Cómo remotivarse después de un fracaso?",
        answer: "Los 'fracasos' son parte del camino. Cada tropiezo es una oportunidad de aprendizaje. En lugar de culparte, analiza qué pasó y ajusta tu enfoque. El perfeccionismo es el enemigo del progreso. Un paso atrás, dos pasos adelante."
      },
      {
        question: "¿Qué es el Audio Program LOWIS?",
        answer: "El Audio Program es un programa diario de 10 minutos que usa técnicas de coaching mental, visualización y afirmaciones para reprogramar tu relación con la comida. Es como tener un coach personal que trabaja tu mindset cada día."
      },
      {
        question: "¿Cómo dejar de ver la comida como el enemigo?",
        answer: "Esta percepción suele venir de dietas muy restrictivas. La comida es tu aliada, fuente de energía y placer. Nuestro enfoque mindset te ayuda a desarrollar una relación neutral y positiva con la alimentación, sin culpa ni obsesión."
      }
    ]
  },
  'sante-femme': {
    extendedDescription: `
      El cuerpo femenino tiene necesidades nutricionales específicas que varían a lo largo del ciclo menstrual y las diferentes etapas de la vida. Nuestra sección salud femenina te ofrece consejos adaptados a estas particularidades demasiado a menudo ignoradas.

      Las fluctuaciones hormonales influyen en el apetito, los antojos alimentarios, el metabolismo e incluso la retención de líquidos. Comprender estas variaciones te permite adaptar tu alimentación para optimizar tu energía, tu humor y tus resultados de pérdida de peso.

      Abordamos temas esenciales como la alimentación adaptada a cada fase del ciclo, la nutrición durante el embarazo y la lactancia, la gestión del síndrome premenstrual mediante la alimentación y las necesidades específicas de la menopausia.

      LOWIS integra el seguimiento del ciclo en su acompañamiento, permitiendo una personalización aún más fina de tus recomendaciones. Porque un enfoque nutricional que ignora las hormonas femeninas es un enfoque incompleto.
    `.trim(),
    faqs: [
      {
        question: "¿Cómo afecta el ciclo menstrual a la pérdida de peso?",
        answer: "El ciclo influye en el metabolismo, la retención de líquidos y los antojos. En fase lútea (antes de la regla), el metabolismo aumenta ligeramente pero los antojos dulces también. La báscula puede variar 1-2 kg según la fase. LOWIS tiene en cuenta estas variaciones en su seguimiento."
      },
      {
        question: "¿Hay que comer diferente según las fases del ciclo?",
        answer: "Adaptar la alimentación al ciclo puede optimizar la energía y reducir los síntomas del SPM. En fase folicular, favorece alimentos frescos y ligeros. En fase lútea, aumenta ligeramente los carbohidratos complejos y el magnesio. Nuestros artículos detallan estos ajustes."
      },
      {
        question: "¿Cómo gestionar los antojos de dulces antes de la regla?",
        answer: "Estos antojos están relacionados con las fluctuaciones de serotonina. En lugar de luchar, anticípate con alternativas saludables: chocolate negro, frutas, carbohidratos complejos. Aumentar el magnesio (plátanos, espinacas, almendras) también puede ayudar. Lo importante es no culpabilizarse."
      },
      {
        question: "¿La píldora anticonceptiva afecta al peso?",
        answer: "Algunas mujeres notan variaciones de peso con la píldora, generalmente relacionadas con la retención de líquidos o cambios de apetito. Los efectos varían según el tipo de píldora y el individuo. Una alimentación equilibrada y actividad física ayudan a mantener un peso estable."
      }
    ]
  }
};

// English
export const categoryContentEN: CategoryContentMap = {
  guides: {
    extendedDescription: `
      Our nutrition and weight loss guides are designed to support you at every stage of your health journey. Whether you're starting your transformation or looking to optimize your results, our experts have created comprehensive and accessible resources.

      Each guide combines the latest scientific research with practical advice tailored to your daily life. We cover essential topics like understanding macronutrients, portion management, creating balanced menus, and strategies for maintaining long-term motivation.

      The LOWIS approach stands out through its use of artificial intelligence to personalize every recommendation. Our guides explain how to make the most of this technology while developing your nutritional autonomy.

      Whether you want to lose weight, gain energy, improve digestion, or simply eat healthier, you'll find the resources you need here to achieve your goals sustainably and without frustration.
    `.trim(),
    faqs: [
      {
        question: "Where do I start when I want to lose weight?",
        answer: "Start by evaluating your current habits and setting realistic goals. LOWIS helps with a personalized assessment that considers your lifestyle, food preferences, and constraints. Our 'Smart Weight Loss' guide is the ideal starting point."
      },
      {
        question: "How long does it take to see results?",
        answer: "Initial results are usually visible after 2 to 3 weeks of balanced eating. However, healthy and sustainable weight loss is between 0.5 and 1 kg per week. The key is building habits that last, not seeking quick results."
      },
      {
        question: "Do I need to count calories to lose weight?",
        answer: "Calorie counting can be a useful tool, but it's not mandatory. LOWIS simplifies this process by guiding you toward naturally balanced food choices. Our AI analyzes your meals and gives you personalized feedback without requiring manual calculations."
      },
      {
        question: "How do I avoid the yo-yo effect after a diet?",
        answer: "The yo-yo effect often occurs after overly restrictive diets. The key is adopting gradual, sustainable changes rather than drastic restrictions. Our guides teach you to eat intuitively and maintain a balance that fits your life."
      },
      {
        question: "Are LOWIS guides suitable for beginners?",
        answer: "Absolutely! Our guides are written to be accessible to everyone, regardless of your nutrition knowledge level. We explain basic concepts while offering in-depth information for those who want to learn more."
      }
    ]
  },
  comparatifs: {
    extendedDescription: `
      Choosing the right nutrition app can transform your health journey. In a market saturated with options, our detailed comparisons help you identify the solution that truly fits your specific needs.

      We objectively analyze the main nutritional tracking applications: MyFitnessPal, Yazio, Lose It!, Noom, and many others. For each comparison, we evaluate essential criteria like food database accuracy, coaching quality, user interface, value for money, and above all, effectiveness in achieving your goals.

      What sets LOWIS apart from other apps is our hybrid approach combining advanced artificial intelligence with human support. Our comparisons show you concretely how this difference translates into your daily experience and results.

      Each article includes clear comparison tables, real user feedback, and recommendations tailored to different profiles: beginners, athletes, people with dietary restrictions, etc.
    `.trim(),
    faqs: [
      {
        question: "What's the best app for losing weight?",
        answer: "The best app depends on your specific needs. For personalized coaching with AI and human support, LOWIS is ideal. MyFitnessPal works for simple calorie counting, while Noom offers a psychological approach. Our detailed comparisons help you choose based on your priorities."
      },
      {
        question: "Is LOWIS really different from MyFitnessPal?",
        answer: "Yes, fundamentally. MyFitnessPal focuses on calorie counting, while LOWIS offers personalized AI coaching, plans adapted to your preferences, an audio program for mindset, and monitoring by real nutritionists. It's the difference between a tool and true support."
      },
      {
        question: "Are free apps effective?",
        answer: "Free versions can be useful for starting out, but they generally offer limited features. For comprehensive support and lasting results, investing in a premium solution like LOWIS can make all the difference in your success."
      },
      {
        question: "Can I use multiple apps at the same time?",
        answer: "It's possible but often counterproductive. Following multiple apps creates confusion and can lead to obsession. It's better to choose a complete solution that meets all your needs. LOWIS integrates nutrition, mindset, and tracking in one platform."
      }
    ]
  },
  astuces: {
    extendedDescription: `
      Small changes create big transformations. Our nutrition tips offer practical, easy-to-implement advice to improve your daily eating without disrupting your life.

      Each tip is selected for its real impact and ease of application. We cover all aspects of practical nutrition: how to manage cravings, optimize your shopping, prepare quick and healthy meals, eat balanced at restaurants, and much more.

      Our advice is based on behavioral science and feedback from thousands of LOWIS users. We know that theory isn't enough: it's the concrete application that makes the difference. That's why each tip includes specific examples and clear action steps.

      Whether you lack time, motivation, or simply ideas, you'll find inspiration here to make better food choices, one small step at a time.
    `.trim(),
    faqs: [
      {
        question: "How do I resist sugar cravings?",
        answer: "Sugar cravings are often related to deficiencies, stress, or habit. Our tips include: eating enough protein, staying hydrated, having healthy alternatives on hand, and identifying emotional triggers. LOWIS helps you understand your personal patterns."
      },
      {
        question: "How do I eat healthy when I have little time?",
        answer: "Preparation is key! Our tips include Sunday batch cooking, 15-minute meals, balanced express combinations, and smart choices for improvised meals. Having a simple plan makes all the difference."
      },
      {
        question: "What are the most common nutrition mistakes?",
        answer: "Common mistakes include: skipping meals, eliminating entire food groups, not eating enough protein, ignoring hydration, and seeking results too quickly. Our tips help you avoid these common pitfalls."
      },
      {
        question: "How do I maintain good habits long-term?",
        answer: "Consistency beats intensity. Start with one habit, anchor it for at least 3 weeks, then add the next. Celebrate small victories and don't aim for perfection. LOWIS supports you with reminders and adapted encouragement."
      }
    ]
  },
  recettes: {
    extendedDescription: `
      Eating healthy doesn't mean giving up culinary pleasure. Our healthy recipe collection proves that nutritional balance and flavors can perfectly coexist, even with the traditional dishes you love.

      Each recipe is developed and validated by our nutritionist team to ensure optimal balance between proteins, carbohydrates, and fats. We systematically provide nutritional values, preparation time, and alternatives to adapt each dish to your preferences or dietary restrictions.

      Our recipes draw inspiration from world cuisines while respecting the principles of balanced eating. You'll find lighter versions of your favorite dishes, meal prep ideas for the week, vegetarian and vegan options, as well as recipes adapted to different goals (weight loss, muscle gain, energy).

      The LOWIS app lets you scan these recipes to integrate them directly into your meal plan, with automatic portion calculation based on your personal caloric needs.
    `.trim(),
    faqs: [
      {
        question: "How do I make a traditional dish healthier?",
        answer: "Several techniques work: reducing fats by baking instead of frying, increasing vegetables, using lighter alternatives (Greek yogurt instead of cream), and controlling portions. Our recipes show how to adapt your favorite dishes."
      },
      {
        question: "How many calories per meal to lose weight?",
        answer: "It depends on your metabolism and goals. Generally, for weight loss, aim for 400-600 calories per main meal with 100-200 calorie snacks. LOWIS calculates your personal needs and automatically adapts each recipe's portions."
      },
      {
        question: "How do I cook healthy on a budget?",
        answer: "Prioritize legumes, eggs, seasonal vegetables, and whole grains which are nutritious and economical. Batch cooking also reduces costs. Our recipes often include budget-friendly alternatives."
      },
      {
        question: "Can I eat desserts while losing weight?",
        answer: "Absolutely! Total deprivation often leads to excess. Our healthy dessert recipes use natural sweeteners, fruits, and techniques to reduce calories without sacrificing taste. Eating a reasonable dessert is part of balanced eating."
      }
    ]
  },
  temoignages: {
    extendedDescription: `
      Nothing is more motivating than discovering the stories of people who have achieved their transformation. Our LOWIS testimonials show you authentic journeys, with their ups and downs, to inspire you and prove that change is possible.

      Each testimonial presents the initial context, challenges faced, strategies that worked, and results achieved. We share diverse stories: young mothers, busy professionals, people who tried numerous diets without success, athletes looking to optimize their nutrition.

      What makes these testimonials unique is their honesty. We don't promise miracles but show realistic and lasting transformations. Our users also share how LOWIS AI support helped them stay motivated and overcome difficult moments.

      These stories aren't just inspiring, they're instructive. You'll find practical advice tested in the field and lessons learned that will help you avoid common mistakes.
    `.trim(),
    faqs: [
      {
        question: "Are the presented results real?",
        answer: "Yes, all our testimonials come from real LOWIS users who agreed to share their journey. We verify each story and only publish authentic, documented transformations. Results vary by individual."
      },
      {
        question: "How much weight can I lose with LOWIS?",
        answer: "Results depend on your starting situation and commitment. Our users lose an average of 0.5 to 1 kg per week in a healthy way. Some testimonials show losses of 10, 20, or even 30 kg over several months, always progressively."
      },
      {
        question: "Can I share my own testimonial?",
        answer: "Of course! We love hearing stories from our community. If you've experienced a transformation with LOWIS, contact us through the app. Your journey could inspire others in the same situation."
      },
      {
        question: "Do testimonials include before/after photos?",
        answer: "Some testimonials include photos, always with explicit consent from our users. We believe transformations go beyond physical, which is why we also highlight changes in energy, confidence, and relationship with food."
      }
    ]
  },
  'bien-etre': {
    extendedDescription: `
      Sustainable weight loss isn't just about what you eat, but also how you feel. Our wellness section explores the deep connection between your mental health, stress management, sleep, and your nutritional goals.

      Chronic stress, lack of sleep, and negative emotions are often invisible obstacles to weight loss. They influence your hormones, food cravings, and ability to make good choices. Understanding these mechanisms is essential for successful transformation.

      Our wellness articles offer concrete strategies to improve your overall quality of life: stress management techniques, rituals for better sleep, mindfulness exercises, and methods for cultivating a healthy relationship with your body.

      The LOWIS approach integrates wellness at the heart of its program with a 10-minute daily Audio Program to work on your mindset and relationship with food. Because taking care of your body starts with taking care of your mind.
    `.trim(),
    faqs: [
      {
        question: "How does stress affect weight loss?",
        answer: "Stress increases cortisol, a hormone that promotes fat storage, especially abdominal. It also increases cravings for sugar and fat. Managing stress is therefore essential for effective weight loss. Our articles give you practical techniques."
      },
      {
        question: "How many hours of sleep do I need to lose weight?",
        answer: "Most adults need 7 to 9 hours of quality sleep. Sleep deprivation disrupts hunger hormones (leptin and ghrelin), increasing appetite and junk food cravings. Improving sleep can significantly accelerate weight loss."
      },
      {
        question: "Does meditation help with weight loss?",
        answer: "Studies show that meditation and mindfulness reduce emotional eating and improve body awareness. The LOWIS Audio Program uses these principles to help you develop a healthier relationship with food."
      },
      {
        question: "How do I manage emotional eating?",
        answer: "Emotional eating is managed by first identifying your triggers (stress, boredom, sadness). Then develop alternatives: walking, calling a friend, journaling. LOWIS helps you recognize these patterns and create new responses."
      }
    ]
  },
  mindset: {
    extendedDescription: `
      Your mindset is the most determining factor in your success. Your mental state and beliefs directly influence your eating behaviors and ability to maintain new habits long-term.

      Our mindset articles help you identify and transform thought patterns that sabotage your efforts. Limiting beliefs like "I have no willpower" or "I've always been this way" can be replaced with more constructive and realistic thoughts.

      The psychology of weight loss is a fascinating field that we explore in depth. We cover topics like intrinsic vs extrinsic motivation, habit formation, failure management, and building a healthy person identity.

      The LOWIS Audio Program, at the heart of our method, uses mental reprogramming techniques to gently change your relationship with food. Because true transformation starts in your head before showing on the scale.
    `.trim(),
    faqs: [
      {
        question: "How do I develop willpower to stick to a diet?",
        answer: "Willpower is a limited resource. Rather than relying on it, create an environment that makes good choices easier: eliminate temptations, prepare your meals in advance, and develop automatic routines. LOWIS mindset teaches you to work WITH your brain, not against it."
      },
      {
        question: "How do I remotivate after a failure?",
        answer: "'Failures' are part of the journey. Every misstep is a learning opportunity. Instead of blaming yourself, analyze what happened and adjust your approach. Perfectionism is the enemy of progress. One step back, two steps forward."
      },
      {
        question: "What is the LOWIS Audio Program?",
        answer: "The Audio Program is a daily 10-minute program that uses mental coaching techniques, visualization, and affirmations to reprogram your relationship with food. It's like having a personal coach working on your mindset every day."
      },
      {
        question: "How do I stop seeing food as the enemy?",
        answer: "This perception often comes from overly restrictive diets. Food is your ally, a source of energy and pleasure. Our mindset approach helps you develop a neutral, positive relationship with eating, without guilt or obsession."
      }
    ]
  },
  'sante-femme': {
    extendedDescription: `
      The female body has specific nutritional needs that vary throughout the menstrual cycle and different life stages. Our women's health section offers advice adapted to these often-ignored particularities.

      Hormonal fluctuations influence appetite, food cravings, metabolism, and even water retention. Understanding these variations allows you to adapt your diet to optimize your energy, mood, and weight loss results.

      We cover essential topics like nutrition adapted to each cycle phase, nutrition during pregnancy and breastfeeding, managing premenstrual syndrome through diet, and specific menopause needs.

      LOWIS integrates cycle tracking into its support, allowing even finer personalization of your recommendations. Because a nutritional approach that ignores female hormones is an incomplete approach.
    `.trim(),
    faqs: [
      {
        question: "How does the menstrual cycle affect weight loss?",
        answer: "The cycle influences metabolism, water retention, and cravings. In the luteal phase (before period), metabolism slightly increases but so do sweet cravings. The scale can vary 1-2 kg depending on the phase. LOWIS accounts for these variations in its tracking."
      },
      {
        question: "Should I eat differently according to cycle phases?",
        answer: "Adapting your diet to the cycle can optimize energy and reduce PMS symptoms. In the follicular phase, favor fresh, light foods. In the luteal phase, slightly increase complex carbs and magnesium. Our articles detail these adjustments."
      },
      {
        question: "How do I manage sugar cravings before my period?",
        answer: "These cravings are related to serotonin fluctuations. Rather than fighting, anticipate with healthy alternatives: dark chocolate, fruits, complex carbs. Increasing magnesium (bananas, spinach, almonds) can also help. The key is not to feel guilty."
      },
      {
        question: "Does birth control affect weight?",
        answer: "Some women notice weight changes with the pill, usually related to water retention or appetite changes. Effects vary by pill type and individual. A balanced diet and physical activity help maintain stable weight."
      }
    ]
  }
};
