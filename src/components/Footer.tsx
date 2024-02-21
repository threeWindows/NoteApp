import styled from "styled-components";
import { IoIosAdd } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  bottom: 0px;
  left: 0;
  display: flex;
  justify-content: center;

  button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: #454545;
    color: #cdcdcd;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <Container>
      <button>
        <IoIosAdd size={45} />
      </button>
    </Container>
  );
};

export default Footer;
