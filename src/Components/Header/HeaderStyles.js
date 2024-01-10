import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-columns: 33% 33% 33%;
grid-template-rows: 100%;
height: 15vh;
width: 100vw;
justify-content: space-around;
background-color: white;
align-content: center;
justify-items: center;
`

export const Title = styled.img`
background-color: white;
grid-column-start:2;
grid-column-end:3;
align-self: center;
`

export const PokedexButton = styled.button`
height: 30%;
width: 30%;
grid-column: 1 / span 1;
grid-row: 1 / span 1;
align-self: center;
`

export const HomeButton = styled.button`
height: 30%;
width: 30%;
grid-column-start:3;
grid-column-end:4;
align-self: center;
`

export const DetailsButton = styled.button`
height: 30%;
width: 15%;
grid-column: 1 / span 1;
grid-row: 1 / span 1;
align-self: center;
`

export const RemoveButton = styled.button`
height: 30%;
width: 15%;
grid-column: 3 / span 1;
grid-row: 1 / span 1;
align-self: center;
`