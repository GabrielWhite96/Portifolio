import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: #fff;
    color: #222;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
  }
`;

export default function App() {
  return <GlobalStyle />;
}
