import React, { Component } from "react";
import Slider from "./components/Slider";

class App extends Component {
  render() {
    return (
      <Slider
        slides={[
          {
            src:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg",
            description:
              "description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description ",
            title: "Space image",
            alt: "Space image",
          },
          {
            src:
              "https://scitechdaily.com/images/Illustration-Photons-Galaxy.jpg",
            description:
              "description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description ",
            title: "Space image2",
            alt: "Space image2",
          },
          {
            src:
              "https://kids.nationalgeographic.com/content/dam/kidsea/kids-core-objects/backgrounds/ngk_spacehub3_2.adapt.1900.1.jpg",
            description:
              "description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description description ",
            title: "Space image3",
            alt: "Space image3",
          },
        ]}
      />
    );
  }
}

export default App;
