import { DomainItem, ChoiceOption, TableAssignment, UserSelections } from '../types.ts';

export const DOMAINS: DomainItem[] = [
  {
    id: 'web-cloud',
    title: 'Web & Cloud',
    desc: 'Frontend, backend, cloud altyapıları',
    icon: 'cloud_queue',
  },
  {
    id: 'ai-data',
    title: 'Yapay Zeka',
    desc: 'LLM, veri bilimi, akıllı sistemler',
    icon: 'psychology',
  },
  {
    id: 'mobile-dev',
    title: 'Mobil Geliştirme',
    desc: 'Flutter, Android, iOS',
    icon: 'stay_current_portrait',
  },
  {
    id: 'game-3d',
    title: 'Oyun & 3D',
    desc: 'Oyun motorları, modelleme',
    icon: 'view_in_ar',
  },
  {
    id: 'product-design',
    title: 'Ürün & Tasarım',
    desc: 'UI/UX, deneyim, prototip',
    icon: 'palette',
  },
  {
    id: 'startups',
    title: 'Girişimcilik',
    desc: 'Fikir, MVP, takım kurma',
    icon: 'rocket_launch',
  },
  {
    id: 'cybersecurity',
    title: 'Siber Güvenlik',
    desc: 'Ağ güvenliği, etik hacking',
    icon: 'security',
  },
  {
    id: 'casual-talk',
    title: 'Serbest Muhabbet',
    desc: 'Kahve, kariyer, genel sohbet',
    icon: 'coffee',
  },
];

export const SOCIAL_STYLE_OPTIONS: ChoiceOption[] = [
  {
    id: 'opt-a',
    badge: 'A',
    title: 'Konuşmayı ve yeni konular açmayı severim',
    desc: 'Sohbetin akışını başlatmaktan ve fikir paylaşmaktan keyif alırım.',
  },
  {
    id: 'opt-b',
    badge: 'B',
    title: 'Önce dinlemeyi ve gözlemlemeyi tercih ederim',
    desc: 'Masayı tanıyıp kendimi rahat hissedince sohbete katılırım.',
  },
  {
    id: 'opt-c',
    badge: 'C',
    title: 'Ortama göre dengelerim, her iki role de uyarım',
    desc: 'Masadaki tempoya ve arkadaşların durumuna göre esnek davranırım.',
  },
];

export const HOBBY_OPTIONS: ChoiceOption[] = [
  {
    id: 'opt-a',
    title: 'Müzik, sinema ve görsel sanatlar',
    desc: 'Yeni albümler, film analizleri, sergiler veya tasarım trendleri.',
    icon: 'headphones',
  },
  {
    id: 'opt-b',
    title: 'Kahve kültürü, seyahat ve şehir keşfi',
    desc: 'Yeni mekanlar keşfetmek, iyi bir kahve eşliğinde yürüyüşler ve sohbet.',
    icon: 'local_cafe',
  },
  {
    id: 'opt-c',
    title: 'Video oyunları, masa oyunları ve popüler kültür',
    desc: 'Strateji oyunları, e-spor veya yeni çıkan dizileri takip etmek.',
    icon: 'sports_esports',
  },
  {
    id: 'opt-d',
    title: 'Kitaplar, podcastler ve felsefe/bilim',
    desc: 'Yeni bir şeyler öğrenmek, derin fikir sohbetleri yapmak.',
    icon: 'auto_stories',
  },
];

export const EXPECTATION_OPTIONS: ChoiceOption[] = [
  {
    id: 'networking',
    title: 'Yeni insanlarla tanışmak ve çevre edinmek',
    desc: 'Etkinlikte benzer ilgi alanlarına sahip yeni arkadaşlarla samimi ve keyifli bir networking deneyimi.',
    icon: 'group',
  },
  {
    id: 'hackathon',
    title: 'Proje veya hackathon için takım arkadaşı bulmak',
    desc: 'Birlikte proje geliştirebileceğimiz, fikir üretebileceğimiz takım arkadaşlarıyla tanışmak.',
    icon: 'rocket_launch',
  },
  {
    id: 'community',
    title: 'GDG topluluğunu tanımak ve ekibe dahil olmak',
    desc: 'Kulübün çalışma sistemini, organizasyon ekibini ve dönem içi etkinliklerini keşfetmek.',
    icon: 'school',
  },
  {
    id: 'inspiration',
    title: 'Teknoloji dünyasındaki gelişmeleri ve deneyimleri dinlemek',
    desc: 'Yeni teknolojilerden haberdar olmak ve masadakilerin tecrübelerinden ilham almak.',
    icon: 'lightbulb',
  },
];

export const ATMOSPHERE_OPTIONS: ChoiceOption[] = [
  {
    id: 'dynamic',
    title: 'Dinamik, bol fikir fırtınalı ve hareketli',
    desc: 'Herkesin fikrini heyecanla paylaştığı, ritmi yüksek ve canlı bir ortam.',
    icon: 'bolt',
    tagColor: '#EA4335',
  },
  {
    id: 'calm',
    title: 'Sakin, dengeli ve odaklanmış sohbet',
    desc: 'Gürültüsüz, derin sohbetlerin yapıldığı ve dinlemenin öne çıktığı keyifli bir tempo.',
    icon: 'headphones',
    tagColor: '#4285F4',
  },
  {
    id: 'flexible',
    title: 'Fark etmez, her ortama kolayca adapte olurum',
    desc: 'Masanın kendi ritmine ve dinamizmine göre keyif almaya daima açığım.',
    icon: 'shuffle',
    tagColor: '#34A853',
  },
];

export const TABLES: TableAssignment[] = [
  {
    tableNumber: 'MASA 04',
    name: 'İnovasyon & Web Buluşması',
    domainFocus: 'Web & Yapay Zeka',
    vibe: 'Dengeli & İlham Verici',
    icebreaker: '“Gününüz nasıl geçti ?”',
    backupIcebreakers: [
      '“Son zamanlarda seni en çok şaşırtan veya heyecanlandıran teknolojik yenilik neydi?”',
      '“Eğer sınırsız bir bütçen ve 3 ayın olsaydı hangi projeyi inşa ederdin?”',
      '“Kod yazarken veya çalışırken dinlediğin vazgeçilmez şarkı ya da tür nedir?”',
    ],
    capacity: 6,
    currentCount: 4,
    members: [
      { name: 'Selin A.', role: 'GDG Lead', domain: 'Cloud & AI', avatarColor: '#4285F4' },
      { name: 'Mert K.', role: '3. Sınıf', domain: 'Full Stack', avatarColor: '#34A853' },
      { name: 'Ece B.', role: '2. Sınıf', domain: 'UI/UX Design', avatarColor: '#EA4335' },
      { name: 'Kaan D.', role: '1. Sınıf', domain: 'AI & Data', avatarColor: '#FBBC04' },
    ],
  },
  {
    tableNumber: 'MASA 02',
    name: 'Yapay Zeka & Gelecek',
    domainFocus: 'Yapay Zeka & Veri',
    vibe: 'Dinamik & Fikir Fırtınası',
    icebreaker: '“Yapay zekanın günlük hayatında en çok işini kolaylaştırdığı an hangisi?”',
    backupIcebreakers: [
      '“Yapay zeka araçları arasında en sık kullandığın hangisi?”',
      '“Sence önümüzdeki 2 yılda hangi meslek en çok değişime uğrayacak?”',
    ],
    capacity: 6,
    currentCount: 5,
    members: [
      { name: 'Burak Y.', role: 'Core Team', domain: 'Machine Learning', avatarColor: '#4285F4' },
      { name: 'Zeynep T.', role: '4. Sınıf', domain: 'Data Science', avatarColor: '#EA4335' },
      { name: 'Arda G.', role: '2. Sınıf', domain: 'Python & LLMs', avatarColor: '#34A853' },
      { name: 'Defne C.', role: '1. Sınıf', domain: 'Yapay Zeka Meraklısı', avatarColor: '#FBBC04' },
      { name: 'Emre S.', role: '3. Sınıf', domain: 'Backend & Cloud', avatarColor: '#0058BD' },
    ],
  },
  {
    tableNumber: 'MASA 01',
    name: 'Mobil & Çoklu Platform',
    domainFocus: 'Mobil & Flutter',
    vibe: 'Odaklı & Proje Odaklı',
    icebreaker: '“Telefonunda en çok açtığın ve tasarımını en sevdiğin mobil uygulama hangisi?”',
    backupIcebreakers: [
      '“Flutter mı, Kotlin/Swift mi yoksa React Native mi?”',
      '“Mobil cihazında olmasını hayal ettiğin ama henüz var olmayan bir özellik?”',
    ],
    capacity: 6,
    currentCount: 4,
    members: [
      { name: 'Oğuz V.', role: 'Mobile Lead', domain: 'Flutter', avatarColor: '#0058BD' },
      { name: 'İrem Ş.', role: '3. Sınıf', domain: 'Android / Kotlin', avatarColor: '#34A853' },
      { name: 'Barış M.', role: '2. Sınıf', domain: 'iOS / Swift', avatarColor: '#EA4335' },
      { name: 'Melis E.', role: '1. Sınıf', domain: 'Mobil Tasarım', avatarColor: '#FBBC04' },
    ],
  },
  {
    tableNumber: 'MASA 03',
    name: 'Tasarım & Ürün İnovasyonu',
    domainFocus: 'Ürün & Tasarım',
    vibe: 'Yaratıcı & Sakin',
    icebreaker: '“Gündelik hayatta karşılaştığın en kötü ve en iyi kullanıcı deneyimi neydi?”',
    backupIcebreakers: [
      '“Bir ürün tasarlayacak olsaydın ilk olarak kimi hedef kitlen seçerdin?”',
      '“Figma mı pen & paper mı?”',
    ],
    capacity: 6,
    currentCount: 4,
    members: [
      { name: 'Büşra N.', role: 'Design Lead', domain: 'UI/UX', avatarColor: '#EA4335' },
      { name: 'Can P.', role: '3. Sınıf', domain: 'Product Management', avatarColor: '#34A853' },
      { name: 'Ayşe L.', role: '2. Sınıf', domain: 'Frontend & CSS', avatarColor: '#4285F4' },
      { name: 'Doruk A.', role: '1. Sınıf', domain: 'Görsel İletişim', avatarColor: '#FBBC04' },
    ],
  },
  {
    tableNumber: 'MASA 05',
    name: 'Girişim & Hackathon Ruhu',
    domainFocus: 'Girişimcilik & Takım',
    vibe: 'Yüksek Enerji & Hedef',
    icebreaker: '“Aklında dönüp duran, bir gün mutlaka hayata geçirmek istediğin startup fikri nedir?”',
    backupIcebreakers: [
      '“Daha önce katıldığın bir hackathonda öğrendiğin en büyük ders neydi?”',
      '“Bir takımda en çok hangi tamamlayıcı role ihtiyaç duyarsın?”',
    ],
    capacity: 6,
    currentCount: 5,
    members: [
      { name: 'Tolga H.', role: 'Entrepreneurship', domain: 'Startup MVP', avatarColor: '#006E2C' },
      { name: 'Sena K.', role: '4. Sınıf', domain: 'Business Dev', avatarColor: '#FBBC04' },
      { name: 'Kerem B.', role: '3. Sınıf', domain: 'Full Stack', avatarColor: '#4285F4' },
      { name: 'Gamze Y.', role: '2. Sınıf', domain: 'Pitching & Pitch Deck', avatarColor: '#EA4335' },
      { name: 'Alişan R.', role: '1. Sınıf', domain: 'Proje Geliştirme', avatarColor: '#0058BD' },
    ],
  },
  {
    tableNumber: 'MASA 06',
    name: 'Oyun & 3D Dünyalar',
    domainFocus: 'Oyun & 3D Grafik',
    vibe: 'Eğlenceli & Canlı',
    icebreaker: '“Seni hayatında en çok etkileyen veya saatlerini gömdüğün oyun hangisiydi?”',
    backupIcebreakers: [
      '“Unity mi, Unreal Engine mi, yoksa Godot mu?”',
      '“Hikaye odaklı oyunlar mı rekabetçi e-spor mu?”',
    ],
    capacity: 6,
    currentCount: 4,
    members: [
      { name: 'Umut C.', role: 'Game Dev Lead', domain: 'Unity & C#', avatarColor: '#4285F4' },
      { name: 'Gizem Ö.', role: '3. Sınıf', domain: '3D Artist', avatarColor: '#34A853' },
      { name: 'Koray T.', role: '2. Sınıf', domain: 'Game Design', avatarColor: '#EA4335' },
      { name: 'Bora F.', role: '1. Sınıf', domain: 'Level Design', avatarColor: '#FBBC04' },
    ],
  },
  {
    tableNumber: 'MASA 07',
    name: 'Siber Güvenlik & Bulut',
    domainFocus: 'Siber Güvenlik & Cloud',
    vibe: 'Meraklı & Derin',
    icebreaker: '“İnternette veya teknolojide seni en çok şaşırtan güvenlik açığı ya da olay nedir?”',
    backupIcebreakers: [
      '“CTF yarışmalarına katıldın mı, hangi alanda uzmanlaşmak istiyorsun?”',
      '“Linux dağıtımı tercihin nedir?”',
    ],
    capacity: 6,
    currentCount: 4,
    members: [
      { name: 'Faruk Z.', role: 'Cyber Lead', domain: 'Ethical Hacking', avatarColor: '#006E2C' },
      { name: 'Damla R.', role: '3. Sınıf', domain: 'Network Security', avatarColor: '#4285F4' },
      { name: 'Halil V.', role: '2. Sınıf', domain: 'DevSecOps', avatarColor: '#EA4335' },
      { name: 'Eren K.', role: '1. Sınıf', domain: 'Sistem Analizi', avatarColor: '#FBBC04' },
    ],
  },
  {
    tableNumber: 'MASA 08',
    name: 'Kahve & Serbest Muhabbet',
    domainFocus: 'Serbest Muhabbet & Kampüs',
    vibe: 'Sıcak & Samimi',
    icebreaker: '“Kampüste ya da şehirde en sevdiğin çalışma veya kahve içme mekanı neresi?”',
    backupIcebreakers: [
      '“Üniversitede şu ana kadar aldığın en ilginç veya keyifli ders neydi?”',
      '“Hafta sonları kafanı dağıtmak için en çok ne yapmaktan keyif alırsın?”',
    ],
    capacity: 6,
    currentCount: 4,
    members: [
      { name: 'Nilüfer S.', role: 'Event Host', domain: 'Community', avatarColor: '#EA4335' },
      { name: 'Tuna G.', role: '2. Sınıf', domain: 'Genel Teknoloji', avatarColor: '#4285F4' },
      { name: 'Ezgi M.', role: '1. Sınıf', domain: 'Hazırlık / Meraklı', avatarColor: '#34A853' },
      { name: 'Alp E.', role: '3. Sınıf', domain: 'Kariyer & Staj', avatarColor: '#FBBC04' },
    ],
  },
];

export function calculateMatchingTable(selections: UserSelections): TableAssignment {
  const domains = selections.selectedDomains;
  
  // Prioritize based on domain selections
  if (domains.includes('ai-data')) {
    return { ...TABLES[1] }; // MASA 02 - Yapay Zeka
  }
  if (domains.includes('mobile-dev')) {
    return { ...TABLES[2] }; // MASA 01 - Mobil
  }
  if (domains.includes('product-design')) {
    return { ...TABLES[3] }; // MASA 03 - Tasarım
  }
  if (domains.includes('startups') || selections.expectation === 'hackathon') {
    return { ...TABLES[4] }; // MASA 05 - Girişim
  }
  if (domains.includes('game-3d')) {
    return { ...TABLES[5] }; // MASA 06 - Oyun
  }
  if (domains.includes('cybersecurity')) {
    return { ...TABLES[6] }; // MASA 07 - Siber
  }
  if (domains.includes('casual-talk') && domains.length === 1) {
    return { ...TABLES[7] }; // MASA 08 - Kahve & Sohbet
  }

  // Default to MASA 04 as shown in the original mock
  return { ...TABLES[0] };
}
