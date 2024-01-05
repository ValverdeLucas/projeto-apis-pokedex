import { PokemonImg, PokemonBox, CaptureButton, DetailButton } from "./PokemonCardStyles";
function PokemonCard() {

    return (
            <PokemonBox>
                <PokemonImg src="https://picsum.photos/300/335?a=1"></PokemonImg>
                <CaptureButton>Capturar</CaptureButton>
                <DetailButton>Ver det.</DetailButton>
            </PokemonBox>
    )
}

export default PokemonCard;
