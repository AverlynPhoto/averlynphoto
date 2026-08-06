export const images: ImageCollection = {
  hero: createBatch('hero', [
    '1516589178581-6cd7833ae3b2',
    '1492691527719-9d1e07e534b4',
    '1506744038136-46273834b3fb',
    '1519741497674-611481863552',
    '1469474968028-56623f02e42e',
  ], 2400, 88), // 5 images

  // Expanded portrait category (includes former branding photo slots)
  portrait: createBatch('portrait', [
    '1524504388940-b1c1722653e1',
    '1534528741775-53994a69daeb',
    '1517841905240-472988babdf9',
    '1507003211169-0a1dd7228f2d',
    '1494790108377-be9c29b29330',
    '1539571696357-5a69c17a67c6',
    '1508214751196-bcfd4ca60f91', // former branding 1
    '1497366216548-37526070297c', // former branding 2
    '1556761175-5973dc0f32e7', // former branding 3
    '1551836022-d5d88e9218df', // former branding 4
    '1507679799987-c73779587ccf', // former branding 5
  ]), // 11 images total

  family: createBatch('family', [
    '1511895426328-dc8714191300',
    '1542037104857-ffbb0b9155fb',
    '1609220136738-4431461fe112',
    '1502086223501-7ea6ecd79368',
    '1577896851231-70ef18881754',
  ]), // 5 images

  couple: createBatch('couple', [
    '1519741497674-611481863552',
    '1516589178581-6cd7833ae3b2',
    '1522529599102-193c0d76b5b6',
    '1518105779142-d975f22f1b0a',
    '1529156069898-49953e39b3ac',
  ]), // 5 images

  lifestyle: createBatch('lifestyle', [
    '1524250502761-1ac6f2e30d43',
    '1488426862026-3ee34a7d66df',
    '1515886657613-9f3515b0c78f',
    '1483985988355-763728e1935b',
    '1513151233558-d860c5398176',
  ]), // 5 images

  editorial: createBatch('editorial', [
    '1529626455594-4ff0802cfb7e',
    '1509631179647-0177331693ae',
    '1469334031218-e382a71b716b',
    '1515886657613-9f3515b0c78f',
    '1502716119720-b23a93e5fe1b',
  ], 1600), // 5 images

  coast: createBatch('coast', [
    '1507525428034-b723cf961d3e',
    '1500375592092-40eb2168fd21',
    '1505118380757-91f5f5632de0',
    '1471922694854-ff1b63b20054',
    '1519046904884-53103b34b206',
  ], 1800), // 5 images

  detail: createBatch('detail', [
    '1544005313-94ddf0286df2',
    '1513151233558-d860c5398176',
    '1513519245088-0e12902e5a38',
    '1506744038136-46273834b3fb',
  ]), // 4 images

  friends: createBatch('friends', [
    '1529156069898-49953e39b3ac',
    '1539571696357-5a69c17a67c6',
    '1511632765486-a01980e01a18',
    '1522071820081-009f0129c71c',
  ]), // 4 images

  man: createBatch('man', [
    '1500648767791-00dcc994a43e',
    '1507003211169-0a1dd7228f2d',
    '1506794778202-cad84cf45f1d',
    '1492562080023-ab3db95bfbce',
  ]), // 4 images
};

// 4. Portfolio Items (Branding items replaced with Portrait items)
export const portfolioItems: PortfolioItem[] = [
  { category: 'Couples', src: images.hero[0].url, alt: images.hero[0].alt, shape: 'tall' },
  { category: 'Portraits', src: images.portrait[0].url, alt: images.portrait[0].alt, shape: 'standard' },
  { category: 'Families', src: images.family[0].url, alt: images.family[0].alt, shape: 'wide' },
  { category: 'Lifestyle', src: images.lifestyle[0].url, alt: images.lifestyle[0].alt, shape: 'tall' },
  { category: 'Portraits', src: images.portrait[6].url, alt: images.portrait[6].alt, shape: 'standard' },
  { category: 'Portraits', src: images.editorial[0].url, alt: images.editorial[0].alt, shape: 'tall' },
  { category: 'Couples', src: images.couple[0].url, alt: images.couple[0].alt, shape: 'wide' },
  { category: 'Lifestyle', src: images.friends[0].url, alt: images.friends[0].alt, shape: 'standard' },
  { category: 'Portraits', src: images.detail[0].url, alt: images.detail[0].alt, shape: 'tall' },
  { category: 'Portraits', src: images.man[0].url, alt: images.man[0].alt, shape: 'standard' },
];

// 5. Journal Posts
export const journalPosts: JournalPost[] = [
  { title: 'Best Miami Portrait Locations', category: 'Miami Guide', excerpt: 'A refined guide to quiet shorelines, architectural corners, and luminous gardens made for meaningful portraits.', image: images.coast[0].url },
  { title: 'What to Wear for Lifestyle Sessions', category: 'Session Notes', excerpt: 'How texture, movement, and a softly coordinated palette can help your photographs feel effortless and entirely like you.', image: images.lifestyle[0].url },
  { title: 'Sunrise vs Sunset Photography', category: 'Behind the Lens', excerpt: 'Two beautiful kinds of light, two distinct moods—and a few simple ways to choose the right one for your story.', image: images.hero[0].url },
  { title: 'Why Printed Photos Matter', category: 'Legacy', excerpt: 'The images we hold become the stories we keep. A reflection on creating tangible artwork for future generations.', image: images.family[0].url },
  { title: 'Starting Fresh in Miami', category: 'Personal', excerpt: 'A new coastline, a familiar calling, and the beginning of Averlyn Photo’s South Florida chapter.', image: images.portrait[0].url },
];
