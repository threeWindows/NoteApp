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
  background-color: #1f1f1f;
  padding-top: 15px;

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

interface Props {
  onOpen: () => void;
}

const Footer = ({ onOpen }: Props) => {
  return (
    <Container>
      <button>
        <IoIosAdd onClick={onOpen} size={45} />
      </button>
    </Container>
  );
};

export default Footer;
