import styled from 'styled-components'

export const Button = styled.button`
border-radius: ${props => props.radius || '5px'};
border: 5px groove orange;
background-color: papayawhip;
font-size: 2rem;
width: 500px;

@keyframes pulse1 {
  0% {
    color: orange;
  }
 100% {
    color: black;
  }
}

animation: pulse1 3s ease infinite alternate;
`

export const Flexus = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:${props => props.justify || 'center'};
align-items:center;
`

export const Container = styled.div`
border: 50px solid blue;

background-color: ${props => props.background || 'white'};
margin: 5px;
font-size: 1rem;
font-weight: ${props => props.weight || 'bold'};
text-shadow: ${props => props.shadow || '3px 3px 5px black'};
`

export const SmallContainer =styled.div`
background-color: ${props => props.background || 'white'};
border-bottom: 4px dotted orange;
border-right: 4px dotted orange;
border-left: 4px dotted papayawhip;
/* border: 4px dotted papayawhip;
border-top:none; */
`

export const Title = styled.h1`
color: ${props => props.color || 'white'};
text-shadow: 2px 2px 3px ${props => props.shadow || '#fff'};
font-size: 2.5rem;
/* width: 80%; */

@keyframes pulse {
  0% {

    color: white;
  }
 25% {
 
    color: black;
  }
  50% {

color: olive;
}
100%{
    color: olivedrab;
}
}

/* @keyframes nudge {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(150px, 0);
  }
  80% {
    transform: translate(-150px, 0);
  }
} */

animation: pulse 3s ease infinite alternate, 
    nudge 10s linear infinite alternate;
`