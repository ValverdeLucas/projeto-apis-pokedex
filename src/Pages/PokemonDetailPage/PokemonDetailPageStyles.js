import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
height: 85vh;
width: 100%;
background-color: gray;
gap: 24px;
align-content: space-around;
justify-content: space-around;
`
export const ImgContainer = styled.div`
display: flex;
flex-direction: column;
gap: 24px;

`

export const FrontalImg = styled.img`
height: 300px;
width: 300px;
`

export const RearImg = styled.img`
height: 300px;
width: 300px;
`

export const StatsContainer = styled.ul`
background-color: white;
width: 25vw;
text-align: center;
`
export const Stats = styled.li`
text-align: left;
padding: 20px;
`

export const TypesMovesContainer = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`

export const TypesContainer = styled.ul`
background-color: white;
height: 7.5%;
width: 20vw;
text-align: center;
`

export const Types = styled.li`
display: inline-block;
margin-right: 12px;
`

export const MovesContainer = styled.ul`
background-color: white;
height: 92.5%;
text-align: center;
`

export const Moves = styled.li`
margin-bottom: 48px;
`