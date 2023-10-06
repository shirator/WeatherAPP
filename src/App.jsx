import "./App.css";
import SunIcon from "./components/Sun";
import Search from "./components/Search";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { useContext } from "react";
import { CityContext } from "./context/CityContext";

const CityContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding: 20px 50px;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  div {
    display: flex;
    align-items: center;
  }

  .temp {
    font-size: 5rem;
  }
  .fahrenheit {
    font-size: 2rem;
    position: relative;
    bottom: 2rem;
  }
  p {
    font-size: 3rem;
  }
`;

function App() {
  const cityData = useContext(CityContext);
  cons

  return (
    <>
      <div>
        <SunIcon />
        <Typewriter
          options={{
            strings: ["Wheater APP", "Is it rainy?", "Or sunny?"],
            autoStart: true,
            loop: true,
            cursor: "|",
          }}
        />
        <Search />
      </div>
      <>
        {cityData ? (
          <CityContainer>
            <div>
              <h1>{cityData?.name} - </h1>
              <p>
                <span className="temp">{cityData?.main?.temp}</span>
                <span className="fahrenheit">°F</span>
              </p>
            </div>
            <p>{cityData?.weather?.description}</p>
          </CityContainer>
        ) : (
          <h1>Loading...</h1>
        )}
      </>
    </>
  );
}

export default App;
