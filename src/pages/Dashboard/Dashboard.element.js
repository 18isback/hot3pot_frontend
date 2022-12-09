import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: #fafafa;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchArea = styled.div`
  /* background-color: yellow; */
  height: 48px;
  width: 80vw;
  display: flex;
  justify-content: center;
  margin-top: 6px;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: 1;
`;

export const SearchBar = styled.input`
  width: 100px;
  height: 40px;
  border: none;
  background-color: transparent;
  -webkit-appearance: none;
  text-align: center;
  margin-left: 10px;
  overflow: auto; //검색어가 길어졌을때 오른쪽으로 자연스럽게 검색되도록 하기 위해
  z-index: -1;
  font-size: 20px;
  &:focus {
    outline: none;
    width: 60vw;
    text-align: left;
  }
`;
