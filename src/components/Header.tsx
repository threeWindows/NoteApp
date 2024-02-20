import styled from "styled-components";
import { IoIosMenu } from "react-icons/io";

const Container = styled.div`
  width: 100%;
  height: auto;
  /* background-color: #6d6d6d; */
  font-size: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    display: block;
    margin-top: -5px;
  }
`;

interface Props {
  onOpen: () => void;
}

const Header = ({ onOpen }: Props) => {
  const name = "John";

  return (
    <Container>
      <div>
        Good morning,
        <span>{name}!</span>
      </div>
      <IoIosMenu size={43} onClick={onOpen} />
    </Container>
  );
};

export default Header;
