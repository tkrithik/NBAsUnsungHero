import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Float } from "@react-three/drei";
import FloatButtons from "./components/FloatButtons";


import Cards from "./components/Cards";
import Rashi from "./components/Rashi";
import Rashi2 from "./components/Rashi-2";

import Header from "./components/Header";

const Container = styled.div`
  height: 1000vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("img/bg.jpeg");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>

      <Hero />
      
      <FloatButtons />

      <Cards />

      <Rashi />

      <Rashi2 />

      <Contact />
 
    </Container>
  );
}

export default App;
