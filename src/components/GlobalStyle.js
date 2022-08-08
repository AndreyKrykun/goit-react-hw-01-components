import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body { font-family: 'Roboto', sans-serif;
    }   
   h1,h2,h3, p {margin:0;}
   ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}`;
