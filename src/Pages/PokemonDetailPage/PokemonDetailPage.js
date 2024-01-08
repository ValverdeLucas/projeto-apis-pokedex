import { Container, FrontalImg, RearImg, Stats, Types, Moves, StatsContainer, TypesContainer, ImgContainer, TypesMovesContainer, MovesContainer} from "./PokemonDetailPageStyles"

function PokemonDetailPage() {

    return (
        <Container>
            <ImgContainer>
                <FrontalImg src="https://picsum.photos/300/335?a=1"></FrontalImg>
                <RearImg src="https://picsum.photos/300/335?a=1"></RearImg>
            </ImgContainer>
            <StatsContainer>
                <h1><strong>Stats</strong></h1>
                <Stats>HP: 46</Stats>
                <Stats>Attack: 39</Stats>
                <Stats>Defense: 52</Stats>
                <Stats>Special Attack: 43</Stats>
                <Stats>Special Defense: 54</Stats>
                <Stats>Speed: 54</Stats>
            </StatsContainer>
            <TypesMovesContainer>
                <TypesContainer>
                    <Types>Type 1</Types>
                    <Types>Type 2</Types>
                </TypesContainer>
                <MovesContainer>
                    <h1><strong>Moves</strong></h1>
                    <Moves>Move Name 1</Moves>
                    <Moves>Move Name 2</Moves>
                    <Moves>Move Name 3</Moves>
                </MovesContainer>
            </TypesMovesContainer>
        </Container >
    )
}

export default PokemonDetailPage;