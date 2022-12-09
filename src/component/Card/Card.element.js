import styled from "styled-components";

export const CardIndiv = styled.div`
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  margin: 6px 0;
  padding-bottom: 2vh;
`;

export const CardVidContainer = styled.div`
  margin-bottom: 1vh;
`;

export const CardTopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 4vw;
`;

export const CardPlaceName = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

export const CardBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4vw;
`;

export const CardBottomHeadline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1vh;
`;

export const CardBottomDataName = styled.div`
  font-weight: bold;
`;

export const CardBottomDataDate = styled.div`
  color: #8e8e8e;
  font-size: 14px;
`;

export const CardBottomDesc = styled.div`
  font-size: 14px;
  text-align: left;
`;
