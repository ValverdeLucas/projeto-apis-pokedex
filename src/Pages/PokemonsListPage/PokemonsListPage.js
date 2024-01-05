import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {Container, Text} from "./PokemonsListPageStyles"

function PokemonListPage() {

    return (
        <Container>
            <Text>Todos os Pokemons</Text>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
        </Container>
    )
}

export default PokemonListPage;
