import React from "react";
import { ImageBackground } from "react-native";
import { styles } from "./styles";

import backgroundImg from "../../assets/background-galaxy.png";

interface Props {
  children: React.ReactNode;
}

//tudo que estiver dentro do nosso componente é o children
export function Background({ children }: Props) {
  return (
    <ImageBackground
      source={backgroundImg}
      style={styles.container}
      defaultSource={backgroundImg}
    >
      {children}
    </ImageBackground>
  );
}
