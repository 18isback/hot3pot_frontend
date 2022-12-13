import React, { useEffect, useState } from "react";
import {
  CardIndiv,
  CardVidContainer,
  CardPlaceName,
  CardBottomDiv,
  CardBottomHeadline,
  CardBottomDesc,
  CardBottomDataName,
  CardBottomDataDate,
  CardTopDiv,
} from "./Card.element";
import "./Card.custom.css";

const Card = (data) => {
  var vidWidth = 0.99 * window.innerWidth;
  // const [vidWidth, setVidWidth] = useState();

  return (
    <CardIndiv className="Card" key={data.id}>
      <CardTopDiv>
        <CardPlaceName>{data.place}</CardPlaceName>
        <CardBottomDataDate>{data.day}</CardBottomDataDate>
      </CardTopDiv>
      {/* <ReactPlayer
        width={"90vw"}
        url={data.src}
        playing={true}
        controls={true}
        loop={true}
        // onReady={onLoadedData}
      /> */}
      <CardVidContainer>
        {
          // data.vid_src.split(".")[1] === "gif"
          data.type === "gif" ? (
            <img src={data.vid_src} alt="test" width={vidWidth} />
          ) : (
            <video
              src={data.vid_src}
              width={vidWidth}
              loop
              controls
              autoPlay={false}
              muted
              poster={data.img_src}
            />
          )
        }

        {/* <img src={Vidsrc} alt="test" /> */}
      </CardVidContainer>
      <CardBottomDiv>
        <CardBottomHeadline>
          <CardBottomDataName>{data.name}</CardBottomDataName>
        </CardBottomHeadline>
        <CardBottomDesc>{data.description}</CardBottomDesc>
      </CardBottomDiv>
    </CardIndiv>
  );
};

export default Card;
