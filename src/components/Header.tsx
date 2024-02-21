import styled from "styled-components";

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

  #img {
    width: 60px;
    height: 60px;
    background-color: gray;
    border-radius: 50%;
  }
`;

interface Props {
  onOpen: () => void;
  name: string;
}

const Header = ({ onOpen, name }: Props) => {
  return (
    <Container>
      <div>
        Good morning,
        <span>{name}!</span>
      </div>
      <div id="img" onClick={onOpen}></div>
    </Container>
  );
};

export default Header;
