import { Container, DetailsButton, PokedexButton, Title, HomeButton, RemoveButton } from "./HeaderStyles"
import logo from "../../Medias/poke-logo.png"
import { useState } from "react"
import { useNavigate, useResolvedPath } from "react-router-dom"
import { goToPokedex, goToDetails, goToHome } from "../../Routes/Coordinator"

function Header() {

    const navigate = useNavigate()
    const page = useResolvedPath()

    switch (page.pathname) {
        case "/":
            return (
                <Container>
                    <Title src={logo} />
                    <HomeButton onClick={() => goToPokedex(navigate)}>Ver minha Pokédex</HomeButton>
                </Container>);

        case "/details":
            return (
                <Container>
                    <Title src={logo} />
                    <DetailsButton onClick={() => goToHome(navigate)}>Voltar</DetailsButton>
                    <RemoveButton>Excluir da Pokédex</RemoveButton>
                </Container>);

        case "/pokedex":
            return (
                <Container>
                    <Title src={logo} />
                    <PokedexButton onClick={() => goToHome(navigate)}>Todos os Pokemons</PokedexButton>
                </Container>);
    }
}

export default Header;
