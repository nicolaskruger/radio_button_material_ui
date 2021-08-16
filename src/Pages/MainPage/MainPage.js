import React from "react";
import Header from "../../Components/Header/Header";
import StartPage from "../StartPage/StartPage";
import { MainContainer, h1 } from "./style";

const MainPage = () => {

  return (
    <MainContainer>
      <Header/>
      <StartPage/>
    </MainContainer>
  );
}

export default MainPage;