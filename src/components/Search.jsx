import styled from "styled-components";
import { useContext } from "react";
import { CityContext } from "../context/CityContext";
import { fetchCity } from "../api/api";

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
`;

const SearchInput = styled.input`
  padding: 15px 20px;
  width: 100%;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 15px 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  transform: translateX(80%);
`;

const Search = () => {
  const { setCityName, cityName } = useContext(CityContext);
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="What city do you wanna search for?"
        onChange={(e) => setCityName(e.target.value.toLowerCase())}
      />
      <SearchButton
        onClick={() => {
          fetchCity(cityName, setCityName);
        }}
      >
        🔎
      </SearchButton>
    </SearchContainer>
  );
};

export default Search;
