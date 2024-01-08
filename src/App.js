import { GlobalStyled } from "./GlobalStyled"
import Header from "./Components/Header/Header"
import PokemonListPage from "./Pages/PokemonsListPage/PokemonsListPage"
import PokedexPage from "./Pages/PokedexPage/PokedexPage"
import PokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage"
import { useState } from "react"

function App() {

  const [page, setPage] = useState(1)

  const changePage = (page) => setPage(page)

  switch (page) {
    case 1:

      return (
        <>
          <GlobalStyled />
          <Header></Header>
          <PokemonListPage />
        </>)

    case 2:

      return (
        <>
          <GlobalStyled />
          <Header></Header>
          <PokedexPage />
        </>)

    case 3:

      return (
        <>
          <GlobalStyled />
          <Header></Header>
          <PokemonDetailPage />
        </>)

    default:
      return "Página não encontrada"

  }
}

export default App;
