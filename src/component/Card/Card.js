import React from "react";
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
  var vid_width = 0.99 * window.innerWidth;
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
          data.id === 3 ? (
            <img src={data.vid_src} alt="test" width={vid_width} />
          ) : (
            <video
              src={data.vid_src}
              width={vid_width}
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
