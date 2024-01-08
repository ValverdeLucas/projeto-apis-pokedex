import {Container, GoToPokedex, Title} from "./HeaderStyles"
import logo from "../../Medias/poke-logo.png"

function Header() {

    return (
        <Container>
            <Title src={logo}/>
            <GoToPokedex>Ver minha Pokédex</GoToPokedex>
        </Container>
    )
}

export default Header;
