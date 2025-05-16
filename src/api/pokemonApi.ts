import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Pokemon } from "../models/Pokemon";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tyradex.app/api/v1/",
  }),
  tagTypes: ["Pokemon"], // <- ça aussi doit être au niveau racine
  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemon[], void>({
      query: () => "pokemon",
      providesTags: ["Pokemon"],
    }),
    getPokemonById: builder.query<Pokemon, number>({
      query: (id) => `pokemon/${id}`,
      providesTags: ["Pokemon"],
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi;
