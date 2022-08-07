import styled from 'styled-components';

export const FriendItem = styled.li`
display: flex;
align-items: baseline;
border: 2px solid black;
margin-bottom: ${p => p.theme.space[4]}px;
`

export const OnlineStatus = styled.span`
width: 10px;
display: block;
height: 10px;
border-radius: ${p => p.theme.radii.round};
background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
}}
`