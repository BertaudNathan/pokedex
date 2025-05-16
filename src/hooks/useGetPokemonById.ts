import { useEffect, useState } from 'react';
import { Pokemon } from '../models/Pokemon'; // Assure-toi que ce type existe et correspond bien

export const useGetPokemonById = (id:number) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://tyradex.vercel.app/api/v1/pokemon/${id}`)
      .then((response) => {
        if (!response.ok) throw new Error('Erreur réseau');
        return response.json();
      })
      .then((data) => {
        const formatted = data
        setPokemon(formatted);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return { pokemon, loading, error };
};
