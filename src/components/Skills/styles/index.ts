import styled from "styled-components";


export const GridStyled = styled.div`
  width: 100%;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 2vh;
  @media (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
  }    
`

export const GridCellStyled = styled.div`
  padding: 10px;
  position: relative;
  text-align: center;
  width: 90%;
  margin: 0 auto;
`;