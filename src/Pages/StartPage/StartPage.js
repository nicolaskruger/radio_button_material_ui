import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import { StartPageContainer, RadioContainer, ImageSelect } from "./style";
import { Mobile } from "../../Services/Responsive";
import id1 from "../../Services/imagens-site/1.jpg";
import id2 from "../../Services/imagens-site/2.jpg";
import id3 from "../../Services/imagens-site/3.jpg";
import id4 from "../../Services/imagens-site/4.jpg";
import id5 from "../../Services/imagens-site/5.jpg";

const StartPage = () => {
  const [currImg, setCurrImg] = useState("id1");

  const selectedValue = {
    id1: {
      img: id1,
    },
    id2: {
      img: id2,
    },
    id3: {
      img: id3,
    },
    id4: {
      img: id4,
    },
    id5: {
      img: id5,
    },
  };
  console.log("apertado", selectedValue);

  const handleChange = (event) => {
    setCurrImg(event.target.value);
  };

  console.log("teste", handleChange);
  return (
    <Mobile>
      <StartPageContainer>
        <ImageSelect src={selectedValue[currImg].img} />

        <Radio
          checked={selectedValue === "id1"}
          onChange={handleChange}
          value="id1"
          color="default"
          name="radio-button-demo"
        />
        <Radio
          checked={selectedValue === "id2"}
          onChange={handleChange}
          value="id2"
          color="default"
          name="radio-button-demo"
          inputProps={{ "aria-label": "B" }}
        />
        <Radio
          checked={selectedValue === "id3"}
          onChange={handleChange}
          value="id3"
          color="default"
          name="radio-button-demo"
          inputProps={{ "aria-label": "C" }}
        />
        <Radio
          checked={selectedValue === "id4"}
          onChange={handleChange}
          value="id4"
          color="default"
          name="radio-button-demo"
          inputProps={{ "aria-label": "D" }}
        />
        <Radio
          checked={selectedValue === "id5"}
          onChange={handleChange}
          value="id5"
          color="default"
          name="radio-button-demo"
        />
      </StartPageContainer>
    </Mobile>
  );
};

export default StartPage;
