import styled from 'styled-components';

export const Item = styled.li`
    display:flex;
    align-items:center;
    gap: 10px;
    width: 150px;
    height:70px;
    border: 2px solid greenyellow;
    margin-bottom: 10px;
    padding: 10px
    
`
export const Status = styled.span`
    display:block;
    width: 10px;
    height: 10px;
    border-radius:50%
`

export const Title = styled.p`
    font-size: 16px;
    font-weight:500;
    font-style:italic;
    color: grey
`