import * as React from 'react';
import *as ReactDOM from 'react-dom/client';
import App from './App.tsx'
import { createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`

html {
  font-size: 62.5%;
  overflow-x: hidden;
}
body,
input,
button,
textarea,
seclect {
font-family: 'space mono', sans-serif;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    
  </React.StrictMode>
)
