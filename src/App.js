import {GlobalStyled} from "./GlobalStyled"
import Page from "./Pages/PokedexPage/PokedexPage"
import Header from "./Components/Header/Header"
import PokemonListPage from "./Pages/PokemonsListPage/PokemonsListPage"

function App() {

  return (
    <>
    <GlobalStyled />
        <Header></Header>
        <PokemonListPage></PokemonListPage>
        </>
        )
}

export default App;
