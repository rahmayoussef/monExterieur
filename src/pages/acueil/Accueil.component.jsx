import React from "react";
import AccueilCover from "../../components/landing/accueilCover/AccueilCover.component";
import Directory from "../../components/landing/directory/Directory.component";
import Espace from "../../components/landing/espace/Espace.component";
import Realization from "../../components/landing/realization/Realization.component";
import Separateur from "../../components/landing/separateur/Separateur.component";
import WoodOverview from "../../components/landing/wood-overview/WoodOverview.component";
import WoodStore from "../../components/landing/woodStore/WoodStore.component";

const Accueil = () => {
  return (
    <div>
      <AccueilCover />
      <WoodOverview />
      <Espace />
      <Realization />
      <Directory />
      <WoodStore />
      <Separateur />
    </div>
  );
};
export default Accueil;
