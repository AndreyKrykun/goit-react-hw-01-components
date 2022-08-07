import styled from 'styled-components';

export const StatisticsTitle = styled.h2`
text-transform: uppercase;
margin-bottom: ${p => p.theme.space[4]}px;
`

export const StatList = styled.ul`
display: flex;
 align-items: center;
 border: 1px solid black;
`

export const StatItem = styled.li`
display: flex;
flex-direction: column;
 align-items: center;
margin-right: ${p => p.theme.space[4]}px;`