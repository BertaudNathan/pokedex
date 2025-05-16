import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Pokemon {
    id: number;
    name: string;
    types: string[];
    image: string;
}

interface PokemonState {
    pokemons: number[];
    loading: boolean;
    error: string | null;
}

const initialState: PokemonState = {
    pokemons: [],
    loading: false,
    error: null,
};

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        fetchPokemonsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchPokemonsSuccess(state, action: PayloadAction<number[]>) {
            state.pokemons = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchPokemonsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        addPokemon(state, action: PayloadAction<number>) {
            state.pokemons.push(action.payload);
        },
        removePokemon(state, action: PayloadAction<number>) {
            state.pokemons = state.pokemons.filter(p => p !== action.payload);
        },
    },
});

export const {
    fetchPokemonsStart,
    fetchPokemonsSuccess,
    fetchPokemonsFailure,
    addPokemon,
    removePokemon,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;