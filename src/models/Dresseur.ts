import { Pokemon } from './Pokemon.ts';


export interface Dresseur {
    id: number;
    name: string;
    age: number;
    region: string;
    pokemons: Pokemon[];
}