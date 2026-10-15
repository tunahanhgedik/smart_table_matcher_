# GDG Campus Match — Info Session Onboarding & Table Allocation

An interactive, Material You multi-screen onboarding app designed for GDG on Campus Info Sessions. It guides students through interest discovery and conversational style profiling to dynamically assign them to ideal networking tables with custom icebreakers.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural decisions reflect the design specifications and confirmed user choices:

- **End-to-End Navigation Scope**: Implements the full flow:
  1. *Step 1: Giriş ve Hoş Geldin* (Name input & event badge introduction)
  2. *Step 2.1: Domain Selection (İlgi Alanları)* (8 interactive tech domains with multi-select counter)
  3. *Step 2.2: Sohbet Tarzı (Sosyal Dinamik)* (3 conversational posture cards: initiator, listener, balanced)
  4. *Step 2.3: Teknoloji Dışı Hobiler* (4 lifestyle & creative hobby cards)
  5. *Step 2.4: Temel Beklenti* (4 motivation options: networking, hackathon team, community crew, inspiration)
  6. *Step 2.5: Masa Ortamı Tercihi* (Atmosphere choice: dynamic, calm, or adaptive)
  7. *Step 3: Masan Hazır (Table Allocation)* (Personalized assigned table, live roster simulation, dynamic icebreaker prompt, and check-in confirmation)
- **Dynamic Table Matching Engine**: Generates real table allocations (Tables 01–08) based on chosen domain combinations, social rhythm, and energy preference, complete with contextual icebreakers (e.g., AI/Cloud discussions vs. creative tech deep dives).
- **Responsive Presentation**: Tailored for mobile ergonomics (thumb-zone CTAs, 44px+ touch hitboxes, Material You surface elevations) with an optional desktop device frame toggle for presentations and screen mirroring.

---

## 1. Overview & Core Concept

- **What It Does**: Automates participant check-in and intelligent table seating during GDG On Campus info sessions. Participants enter their name, select technical interests and social styles, and instantly receive their table ticket with a curated first conversation prompt.
- **Target Audience**: University students, GDG club members, tech enthusiasts, and newcomers looking to connect without awkward networking barriers.
- **Key Value**: Reduces social friction and optimizes group conversation dynamics by pairing complementary conversation styles (listeners + initiators) around shared interests.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **Step 1: Welcome & Name Badge (`/welcome`)**:
   - Google Developer Groups community banner with signature 4-color dots.
   - Text input for "Ad Soyad" with clear icon and inline character validation.
   - Live preview hint ("Yaka kartında görünür").
   - Primary action: "Devam Et: İlgi Alanlarını Seç →".

2. **Step 2.1: Domain Selection (`/step2/domains`)**:
   - 8 domain tiles (Web & Cloud, Yapay Zeka, Mobil Geliştirme, Oyun & 3D, Ürün & Tasarım, Girişimcilik, Siber Güvenlik, Serbest Muhabbet).
   - Multi-select support with floating/pill counter ("X seçildi").
   - Navigation: Previous button + "Sonraki Soru (2/5) →".

3. **Step 2.2: Conversational Style (`/step2/social-dynamic`)**:
   - Radio group: Initiator / Active Listener / Balanced Adapter.
   - Custom radio indicators with color transitions.

4. **Step 2.3: Non-Tech Hobbies (`/step2/hobbies`)**:
   - 4 lifestyle cards: Music & Visual Arts, Coffee & Travel, Video & Board Games, Books & Science/Philosophy.
   - Single-choice radio selection with iconography.

5. **Step 2.4: Core Expectations (`/step2/expectations`)**:
   - 4 motivation cards: Meeting new peers, Finding hackathon team, Joining GDG core team, Listening to tech journeys.

6. **Step 2.5: Table Atmosphere & Finalization (`/step2/atmosphere`)**:
   - 3 energy options: Dynamic brainstorming, Calm focused talks, or Highly adaptable.
   - High-energy submission CTA: "Masamı Belirle & Bitir →".

7. **Step 3: Table Assignment (`/table-ready`)**:
   - Celebration badge: "Masa Eşleşmesi Tamamlandı".
   - Huge Table Board Ticket (e.g., "MASA 04").
   - Curated Icebreaker Card ("Gününüz nasıl geçti?", "Son zamanlarda seni en çok heyecanlandıran teknoloji nedir?").
   - Check-in button ("Harika! Keyifli Sohbetler ✨") with interactive confirmed state and reset option.

### Visual Identity & Theme Tokens

- **Aesthetic**: Modern Community Tech (Material You / Google Design Language).
- **Color Palette**:
  - Dominant Canvas: `#F9F9FF`
  - Container Low: `#F0F3FF`
  - Container High: `#DEE8FF`
  - Surface White: `#FFFFFF`
  - Primary (Google Blue): `#0058BD` / `#4285F4`
  - Secondary (Google Green): `#006E2C` / `#34A853`
  - Tertiary (Google Red): `#B51B15` / `#EA4335`
  - Warning/Accent (Google Yellow): `#B06000` / `#FBBC04`
  - Text Neutral: `#111C2D`
  - Text Muted: `#424753`
- **Typography**:
  - Display & Headings: `Plus Jakarta Sans` (bold weights, tight tracking).
  - Body & UI Controls: `Inter` (high-clarity legibility, tabular numerals).
- **Motion & Ergonomics**:
  - 150–200ms scale feedback on card taps (`active:scale-[0.98]`).
  - Progress indicator showing 3 major steps with 5 sub-steps in Step 2.

---

## 3. Key Product Decisions & Trade-Offs

- **Client-Side State with Session Storage Backup**:
  - *Chosen Approach*: React state tree with persistent synchronization to `sessionStorage`.
  - *Why*: Allows instant back/forward transitions without losing selected domains or name input, even on mobile browser refresh.
- **Deterministic Yet Lively Matching Logic**:
  - *Chosen Approach*: Algorithm considers predominant domain + atmosphere preference + participant hash to assign a balanced table (1–8) and match a fitting icebreaker card.
  - *Why*: Gives realistic table diversity while ensuring repeatable results for the same inputs.
- **Embedded Mobile Container with Desktop Mode**:
  - *Chosen Approach*: Centered max-w-md mobile frame on wide viewports with a subtle status bar and toggle for full-width presentation.
  - *Why*: Preserves pixel-accurate mobile proportions from the provided design specs while looking immaculate on laptops or projectors.

---

## 4. Technical Architecture & Data Strategy

### Component Hierarchy & State Flow

```
┌─────────────────────────────────────────────────────────────┐
│                          App.tsx                            │
│  - Session State (User Profile, Selections, Assigned Table) │
│  - Navigation Coordinator (Step 1 -> 2.1-2.5 -> Step 3)     │
│  - Device Frame / Fullscreen Presentation Shell             │
└──────────────────────────────┬──────────────────────────────┘
                               │
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
┌──────────────┐      ┌─────────────────┐     ┌────────────────┐
│ WelcomeStep  │      │   WizardStep    │     │ TableReadyStep │
│ (Ad Soyad,   │      │ (2.1 to 2.5)    │     │ (Table Ticket, │
│  Badge Intro)│      │  - Domains      │     │  Icebreaker,   │
└──────────────┘      │  - Social Style │     │  Check-in CTA) │
                      │  - Hobbies      │     └────────────────┘
                      │  - Expectation  │
                      │  - Atmosphere   │
                      └─────────────────┘
```

### Data Model

```typescript
interface UserProfile {
  fullName: string;
  selectedDomains: string[];
  conversationStyle: 'initiator' | 'listener' | 'balanced';
  hobby: 'arts' | 'coffee' | 'games' | 'books';
  expectation: 'networking' | 'hackathon' | 'community' | 'inspiration';
  atmosphere: 'dynamic' | 'calm' | 'flexible';
  assignedTable?: {
    tableNumber: string;
    tableName: string;
    focusTopic: string;
    icebreaker: string;
    membersCount: number;
    maxMembers: number;
  };
}
```

### Interactive State Transitions

- **Step Validation**: Next buttons are conditionally enabled or provided with soft validation pulses if required fields (e.g., name or at least 1 domain) are missing.
- **History & Breadcrumbs**: Native browser back support (`history.pushState` integration) and in-app "Önceki" controls.
- **Reset / Restart**: Ability to restart the questionnaire from the results screen to test different matching combinations.
