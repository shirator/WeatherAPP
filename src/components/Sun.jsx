import SunImage from "../assets/sun.svg";
import styled from "styled-components";

const ImgContainer = styled.img`
  width: 100px;
  height: 100px;
  animation: rotateSun 10s linear infinite;

  @keyframes rotateSun {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SunIcon = () => {
  return <ImgContainer src={SunImage} alt="Sun Icon" />;
};

export default SunIcon;
