import { useNavigate } from "react-router-dom";
import { goToDetails } from "../../Routes/Coordinator";
import { PokemonImg, PokemonBox, CaptureButton, DetailButton } from "./PokemonCardStyles";
function PokemonCard() {

    const navigate = useNavigate()

    return (
            <PokemonBox>
                <PokemonImg src="https://picsum.photos/300/335?a=1"></PokemonImg>
                <CaptureButton>Capturar</CaptureButton>
                <DetailButton onClick={()=>goToDetails(navigate)}>Ver det.</DetailButton>
            </PokemonBox>
    )
}

export default PokemonCard;
