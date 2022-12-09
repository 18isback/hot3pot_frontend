import styled from "styled-components";

export const BottomBarContainer = styled.div`
  background-color: #ffffff;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #dbdbdb;
`;

export const BottomBarBtn = styled.div`
  width: calc(100vw / 3);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
