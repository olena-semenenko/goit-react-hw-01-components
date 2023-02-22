import styled from 'styled-components';


export const ProfileContainer = styled.div`
    padding: 20px;
    width: 300px;
    height: 300px;
    background-color: greenyellow;
    border-radius: 12px;
    
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 30%;

`

export const UserName = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin-block-start: 2px;
    margin-block-end: 2px;
    color: violet
`

export const UserTag = styled.p`
  font-size: 20px;
    font-weight: 500;
    margin-block-start: 2px;
    margin-block-end: 2px;
    color: red
`  
export const UserLocation = styled.p`
   font-size: 20px;
    font-weight: 500;
    margin-block-start: 2px;
    margin-block-end: 2px;
    color: blueviolet 
`
export const StatsList = styled.ul`
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    display: flex;
    width: 200px;
    justify-content: space-around;
    border: 2px solid grey;
    padding-inline-start: 0px;
    border-radius: 12px;
    background-color: violet
`
export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const StatsLabel = styled.span`
   font-size: 16px;
    font-weight: 500;
    color: navy
`
export const StatsQuantity = styled.span`
 font-size: 16px;
    font-weight: 500;
    color: blanchedalmond  
`