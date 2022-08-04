import React from "react";

import LayoutPrincipal from "../../layouts/LayoutPrincipal";
import useAnime from "../../hooks/useAnime";

import './HomeContainer.css'

const HomeContainer = ({ children }) => {
  const {darkPage} = useAnime()
  return (
    <LayoutPrincipal>
      <main className={`home__layout ${darkPage && 'darkPage'}`}>
        {children}
      </main>
    </LayoutPrincipal>
  );
};

export default HomeContainer;
