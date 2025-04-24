import { useEffect, useState } from 'react';
import { Pokemon } from '../models/Pokemon'; // Assure-toi que ce type existe et correspond bien

export const useGetPokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://tyradex.vercel.app/api/v1/pokemon")
      .then((response) => {
        if (!response.ok) throw new Error('Erreur réseau');
        return response.json();
      })
      .then((data) => {
        const formatted = data.map((pkmn: Pokemon) => ({
          pokedex_id: pkmn.pokedex_id,
          name: pkmn.name,
          types: pkmn.types,
          height: pkmn.height,
          weight: pkmn.weight,
          sprites: {
            regular: pkmn.sprites.regular,
            shiny: pkmn.sprites.shiny,
          },
          talents: pkmn.talents,
          stats: pkmn.stats,
          resistances: pkmn.resistances,
          evolution: pkmn.evolution,
          category: pkmn.category,
          generation: pkmn.generation,
          egg_groups: pkmn.egg_groups,
          sexe: pkmn.sexe,
          catch_rate: pkmn.catch_rate,
          level_100: pkmn.level_100,
          formes: pkmn.formes,
        }));
        setPokemons(formatted);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { pokemons, loading, error };
};
