export interface Pokemon {
    pokedex_id: number;
    generation: number;
    category: string;
    name: {
      fr: string;
      en: string;
      jp: string;
    };
    sprites: {
      regular: string;
      shiny: string;
      gmax: string | null;
    };
    types: Type[];
    talents: Talent[];
    stats: Stats;
    resistances: Resistance[];
    evolution: Evolution;
    height: string;
    weight: string;
    egg_groups: string[];
    sexe: {
      male: number;
      female: number;
    };
    catch_rate: number;
    level_100: number;
    formes: any; // null or could be another type depending on context
  }
  
  export interface Type {
    name: string;
    image: string;
  }
  
  export interface Talent {
    name: string;
    tc: boolean;
  }
  
  export interface Stats {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  }
  
  export interface Resistance {
    name: string;
    multiplier: number;
  }
  
  export interface Evolution {
    pre: EvolutionStep[];
    next: EvolutionStep[];
    mega: any; // null or future object
  }
  
  export interface EvolutionStep {
    pokedex_id: number;
    name: string;
    condition: string;
  }