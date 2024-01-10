import { GlobalStyled } from "./GlobalStyled"
import Header from "./Components/Header/Header"
import PokemonListPage from "./Pages/PokemonsListPage/PokemonsListPage"
import PokedexPage from "./Pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage"
import { useState } from "react"
import Router from "./Routes/Router"

function App() {

  return (
    <>
      <GlobalStyled />
      <Router />
    </>

  )
}

export default App;
