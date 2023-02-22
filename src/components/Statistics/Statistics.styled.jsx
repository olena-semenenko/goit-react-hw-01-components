import styled from 'styled-components';


export const Section = styled.section`
    width: 300px;
    background-color:whitesmoke;
    padding: 20px;
    border-radius: 12px
`
export const SectionTitle = styled.h2`
    font-size: 24px;
    font-weight: 600;
    color: black;
    text-align: center
`
export const StatsList = styled.ul`
    list-style: none;
    display:flex;
    padding-inline-start: 0px;
    justify-content: center
`
export const StatsItem = styled.li`
    display:flex;
    width: 100px;
    flex-direction:column;
    align-items: center;
`

export const StatsLabel = styled.span`
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-bottom: 10px
`
export const StatsPercentage = styled.span`
    font-size: 20px;
    font-weight: 600;
    color:  white
`