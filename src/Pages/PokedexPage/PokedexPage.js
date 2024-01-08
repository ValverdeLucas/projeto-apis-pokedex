import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { Container, Text } from "./PokedexPageStyles";

function PokedexPage() {

    return (
        <Container>
            <Text>Meus Pokemons</Text>
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
            <PokemonCard />
        </Container>
    )
}

export default PokedexPage;
