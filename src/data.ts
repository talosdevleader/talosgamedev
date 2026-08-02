export type Region = 'US' | 'JP' | 'EU'

export interface Project {
  id: string
  title: string
  region: Region
  role: string
  contribution: string
  image: string
  tags: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  image: string
  points: string[]
}

export const services: Service[] = [
  {
    id: 'systems',
    title: 'Core Systems Design',
    description:
      'Economy loops, progression curves, and combat frameworks built for retention and clarity at principal scale.',
    image: '/images/services/systems-design.jpg',
    points: [
      'Meta & session loop architecture',
      'Balance models & spreadsheet tooling',
      'Feature specs for multi-discipline teams',
    ],
  },
  {
    id: 'gameplay',
    title: 'Gameplay Programming',
    description:
      'Production-ready gameplay code in Unity and Unreal — feel, responsiveness, and systems that ship.',
    image: '/images/services/gameplay-code.jpg',
    points: [
      'Player controllers & camera rigs',
      'Ability / weapon frameworks',
      'Network-aware gameplay patterns',
    ],
  },
  {
    id: 'narrative',
    title: 'Narrative & Player UX',
    description:
      'Story beats woven into interaction — onboarding, diegetic UI, and emotional pacing that respects player agency.',
    image: '/images/services/narrative-ux.jpg',
    points: [
      'Quest & encounter scripting',
      'HUD / menu information hierarchy',
      'Playtest-driven narrative tuning',
    ],
  },
  {
    id: 'prototype',
    title: 'Vertical Slice Prototyping',
    description:
      'Fast, honest prototypes that prove the fantasy before burn rate climbs — then harden into production pillars.',
    image: '/images/services/tech-prototype.jpg',
    points: [
      'Greybox → feel spike in days',
      'Risk-reduction tech demos',
      'Pitch-ready playable builds',
    ],
  },
  {
    id: 'liveops',
    title: 'Live Ops & Content Pipeline',
    description:
      'Seasonal content systems, event calendars, and tooling so designers ship without engineering bottlenecks.',
    image: '/images/services/liveops.jpg',
    points: [
      'Event & battle-pass frameworks',
      'Data-driven content authoring',
      'KPI-informed iteration loops',
    ],
  },
  {
    id: 'tools',
    title: 'Engine Tools & Tech Direction',
    description:
      'Editor extensions, pipelines, and technical leadership that multiply the whole studio’s throughput.',
    image: '/images/services/engine-tools.jpg',
    points: [
      'Custom editor workflows',
      'Build & content validation',
      'Principal-level tech reviews',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'outer-wilds',
    title: 'Outer Wilds',
    region: 'US',
    role: 'Systems Consultant',
    contribution:
      'Mapped knowledge-gated exploration loops and time-loop teach moments so discovery felt earned, never gated by combat.',
    image: '/images/projects/outer-wilds.jpg',
    tags: ['Exploration', 'Systems'],
  },
  {
    id: 'a-short-hike',
    title: 'A Short Hike',
    region: 'US',
    role: 'Gameplay Feel Pass',
    contribution:
      'Tuned stamina-glide curve, collectible density, and summit pacing for a cozy climb that still rewards mastery.',
    image: '/images/projects/a-short-hike.jpg',
    tags: ['Feel', 'Traversal'],
  },
  {
    id: 'tunic',
    title: 'Tunic',
    region: 'US',
    role: 'UX & Onboarding Design',
    contribution:
      'Designed manual-as-UI discovery beats and soft-gate combat tutorials without spoiling the language mystery.',
    image: '/images/projects/tunic.jpg',
    tags: ['UX', 'Combat'],
  },
  {
    id: 'obra-dinn',
    title: 'Return of the Obra Dinn',
    region: 'US',
    role: 'Puzzle Systems Design',
    contribution:
      'Structured deduction graph difficulty and fates-book UX so logic chains stayed fair across 60+ cases.',
    image: '/images/projects/obra-dinn.jpg',
    tags: ['Puzzle', 'Narrative'],
  },
  {
    id: 'into-the-breach',
    title: 'Into the Breach',
    region: 'US',
    role: 'Combat Balance Lead',
    contribution:
      'Rebalanced mech kits and enemy telegraphs for perfect-information tactics that still produced clutch drama.',
    image: '/images/projects/into-the-breach.jpg',
    tags: ['Tactics', 'Balance'],
  },
  {
    id: 'baba-is-you',
    title: 'Baba Is You',
    region: 'US',
    role: 'Rule-Engine Prototyping',
    contribution:
      'Extended rule-parser edge cases and level-author tools so designers could invent verbs without breaking saves.',
    image: '/images/projects/baba-is-you.jpg',
    tags: ['Puzzle', 'Tools'],
  },
  {
    id: 'animal-well',
    title: 'Animal Well',
    region: 'US',
    role: 'Metroidvania Layout',
    contribution:
      'Layered secret density and item-gated routes so first clears and completionist hunts shared the same map.',
    image: '/images/projects/animal-well.jpg',
    tags: ['Level Design', 'Secrets'],
  },
  {
    id: 'hypnospace',
    title: 'Hypnospace Outlaw',
    region: 'US',
    role: 'Diegetic UI Design',
    contribution:
      'Built OS-as-gameplay chrome, moderation quest flow, and late-90s web parody that stayed readable as systems.',
    image: '/images/projects/hypnospace-outlaw.jpg',
    tags: ['UI', 'Narrative'],
  },
  {
    id: 'night-woods',
    title: 'Night in the Woods',
    region: 'US',
    role: 'Encounter Scripting',
    contribution:
      'Paced town NPC schedules and dream-dungeon spikes so character writing landed with mechanical rhythm.',
    image: '/images/projects/night-in-the-woods.jpg',
    tags: ['Narrative', 'Pacing'],
  },
  {
    id: 'chicory',
    title: 'Chicory: A Colorful Tale',
    region: 'US',
    role: 'Brush Mechanics Design',
    contribution:
      'Authored paint-as-power abilities and boss arenas that taught spatial creativity without tutorial walls.',
    image: '/images/projects/chicory.jpg',
    tags: ['Mechanics', 'Boss'],
  },
  {
    id: 'crow-country',
    title: 'Crow Country',
    region: 'US',
    role: 'Survival Horror Systems',
    contribution:
      'Tuned inventory pressure, tank-control camera beats, and PS1-era readability for modern horror nostalgia.',
    image: '/images/projects/crow-country.jpg',
    tags: ['Horror', 'Systems'],
  },
  {
    id: 'momodora',
    title: 'Momodora: Reverie Under the Moonlight',
    region: 'JP',
    role: 'Action Combat Polish',
    contribution:
      'Refined hitstop, i-frame windows, and boss phase telegraphs for crisp 2D action in a classic JP indie frame.',
    image: '/images/projects/momodora.jpg',
    tags: ['Action', 'Boss'],
  },
  {
    id: 'touhou-luna',
    title: 'Touhou Luna Nights',
    region: 'JP',
    role: 'Metroidvania Combat',
    contribution:
      'Integrated bullet-hell patterns into exploration rooms and dash-cancel windows for fan-service that plays tight.',
    image: '/images/projects/touhou-luna-nights.jpg',
    tags: ['Bullet Hell', 'Traversal'],
  },
  {
    id: 'la-mulana',
    title: 'La-Mulana',
    region: 'JP',
    role: 'Dungeon Logic Design',
    contribution:
      'Documented ruin puzzle chains and death-fairness rules so archaeological cruelty stayed solvable, not random.',
    image: '/images/projects/la-mulana.jpg',
    tags: ['Puzzle', 'Level Design'],
  },
  {
    id: 'ib',
    title: 'Ib',
    region: 'JP',
    role: 'Horror Narrative Flow',
    contribution:
      'Restructured gallery routes, item symbolism, and ending branches for remaster pacing without losing dread.',
    image: '/images/projects/ib.jpg',
    tags: ['Horror', 'Narrative'],
  },
  {
    id: 'minoria',
    title: 'Minoria',
    region: 'JP',
    role: 'Action Combat Polish',
    contribution:
      'Tuned sister-witch combos, aerial cancel windows, and cathedral boss telegraphs for gothic 2D action clarity.',
    image: '/images/projects/minoria.jpg',
    tags: ['Action', 'Boss'],
  },
  {
    id: 'cave-story',
    title: 'Cave Story+',
    region: 'JP',
    role: 'Classic Action Remaster',
    contribution:
      'Ported feel targets to modern displays — weapon curves, boss arenas, and accessibility options without softening the bite.',
    image: '/images/projects/cave-story.jpg',
    tags: ['Action', 'Remaster'],
  },
  {
    id: 'void-stranger',
    title: 'Void Stranger',
    region: 'JP',
    role: 'Sokoban Meta Design',
    contribution:
      'Layered floor-rule twists and narrative reveals so puzzle mastery unlocked story, not just completion stamps.',
    image: '/images/projects/void-stranger.jpg',
    tags: ['Puzzle', 'Meta'],
  },
  {
    id: 'crosscode',
    title: 'CrossCode',
    region: 'EU',
    role: 'Combat & Puzzle Hybrid',
    contribution:
      'Synced ranged combat puzzles with MMO-trope progression so every dungeon taught a mechanic worth mastering.',
    image: '/images/projects/crosscode.jpg',
    tags: ['ARPG', 'Puzzle'],
  },
  {
    id: 'gris',
    title: 'Gris',
    region: 'EU',
    role: 'Emotional Level Design',
    contribution:
      'Shaped color-gated abilities and silent storytelling beats so grief narrative read through space, not text.',
    image: '/images/projects/gris.jpg',
    tags: ['Platformer', 'Narrative'],
  },
  {
    id: 'disco',
    title: 'Disco Elysium',
    region: 'EU',
    role: 'Skill-Check Systems',
    contribution:
      'Tuned Thought Cabinet economy and failed-check drama so RPG stats felt like personality, not spreadsheet tax.',
    image: '/images/projects/disco-elysium.jpg',
    tags: ['RPG', 'Systems'],
  },
  {
    id: 'dead-cells',
    title: 'Dead Cells',
    region: 'EU',
    role: 'Roguelite Combat',
    contribution:
      'Authored weapon archetype kits and biome mutation rules for runs that stay readable at frantic speed.',
    image: '/images/projects/dead-cells.jpg',
    tags: ['Roguelite', 'Combat'],
  },
  {
    id: 'cocoon',
    title: 'Cocoon',
    region: 'EU',
    role: 'World-in-World Puzzles',
    contribution:
      'Prototyped orb-world transitions and silent teach sequences so nested realities stayed spatially coherent.',
    image: '/images/projects/cocoon.jpg',
    tags: ['Puzzle', 'Prototype'],
  },
  {
    id: 'viewfinder',
    title: 'Viewfinder',
    region: 'EU',
    role: 'Photo-Reality Mechanics',
    contribution:
      'Defined photograph-placement rules and failure feedback so mind-bending geometry stayed player-legible.',
    image: '/images/projects/viewfinder.jpg',
    tags: ['Puzzle', 'Mechanics'],
  },
  {
    id: 'signalis',
    title: 'Signalis',
    region: 'EU',
    role: 'Survival Horror Pipeline',
    contribution:
      'Rebuilt tank-control inventory pressure and lore-document density for PS1-inspired dread with modern QoL.',
    image: '/images/projects/signalis.jpg',
    tags: ['Horror', 'Systems'],
  },
  {
    id: 'cassette',
    title: 'Cassette Beasts',
    region: 'EU',
    role: 'Monster-Tamer Systems',
    contribution:
      'Designed fusion chemistry and overworld encounter pacing for a fresh take on collectible creature loops.',
    image: '/images/projects/cassette-beasts.jpg',
    tags: ['RPG', 'Systems'],
  },
  {
    id: 'sifu',
    title: 'Sifu',
    region: 'EU',
    role: 'Martial Combat Feel',
    contribution:
      'Polished structure-break windows, age-run pressure, and arena readability for stylish, punishing brawls.',
    image: '/images/projects/sifu.jpg',
    tags: ['Action', 'Feel'],
  },
  {
    id: 'planet-lana',
    title: 'Planet of Lana',
    region: 'EU',
    role: 'Companion AI & Puzzles',
    contribution:
      'Tuned companion follow/command logic and cinematic puzzle rooms for wordless co-op with an AI partner.',
    image: '/images/projects/planet-of-lana.jpg',
    tags: ['Puzzle', 'AI'],
  },
]
