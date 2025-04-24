import './App.css'
import { useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'
import TableauDresseurs from './components/TableauDresseurs'
import { Dresseur } from './models/Dresseur'
import NavBar from './components/nav/NavBar'
import PokemonGrid from './components/PokemonGrid'
import { Pokemon } from './models/Pokemon'
import {useGetPokemons} from './hooks/useGetPokemons'
function App() {

  const [dresseurs, setDresseurs] = useState<Dresseur[]>(
    JSON.parse(localStorage.getItem("dresseurs") || "[]")
  )

  // Rafraîchir quand le localStorage change dans un autre onglet
  useEffect(() => {
    const handleStorageChange = () => {
      setDresseurs(JSON.parse(localStorage.getItem("dresseurs") || "[]"))
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Optionnel : Si tu veux aussi détecter les changements de localStorage dans le même onglet
  const updateDresseurs = () => {
    const updated = JSON.parse(localStorage.getItem("dresseurs") || "[]")
    setDresseurs(updated)
  }
  const { pokemons, loading, error } = useGetPokemons();

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <>
    <NavBar onUpdate={updateDresseurs}/>
      <PokemonGrid pokemons={pokemons} />
    </>
  )
}

export default App