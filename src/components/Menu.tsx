import styled from "styled-components";
import { FaPen, FaCheck, FaArrowLeft } from "react-icons/fa";
import { useRef, useState } from "react";
import "../css/animation.css";

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 30px 0px 0px 30px;
  color: black;
  /* transform: translateX(100%); */
  transition: transform 0.6s ease-out;

  header {
    margin: auto;
    width: 82%;
    height: auto;
    position: relative;
    top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    width: 82%;
    height: 500px;
    margin: auto;
    padding: 0;
    margin-top: 45px;

    li {
      font-weight: bold;
      list-style: none;
      margin-top: 4px;
      font-size: 20px;
    }
  }

  footer {
    width: 82%;
    margin: auto;
    position: relative;
    font-size: 30px;
  }

  #img {
    width: 60px;
    height: 60px;
    background-color: #b0b0b0;
    border-radius: 50%;
  }

  input {
    color: grey;
    width: 130px;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
  }

  .icon {
    color: green;
  }

  p {
    color: grey;
  }
`;

interface Props {
  isMenuOpen: boolean;
  onClose: () => void;
  fetchName: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Menu = ({ fetchName, isMenuOpen, onClose }: Props) => {
  const [inputVisible, setInputVisibility] = useState(false);

  const hideElement = inputVisible ? { display: "none" } : { display: "block" };
  const showElement = inputVisible ? { display: "block" } : { display: "none" };

  const name = useRef<HTMLInputElement>(null);

  const listElements = ["Notes", "Categories", "Settings"];

  return (
    <div>
      <Container className={isMenuOpen ? "open" : "close"}>
        <header>
          <div id="img"></div>
          <p style={hideElement}>
            {(name.current?.value?.length ?? 0) > 0
              ? name.current?.value
              : "Type your name ..."}
          </p>
          <input
            ref={name}
            id="name"
            type="text"
            style={showElement}
            placeholder="Type your name ..."
            onChange={(event) => fetchName(event)}
          />
          <FaPen
            size={19}
            className="icon"
            style={hideElement}
            onClick={() => setInputVisibility(true)}
          />
          <FaCheck
            size={19}
            className="icon"
            style={showElement}
            onClick={() => setInputVisibility(false)}
          />
        </header>
        <ul>
          {listElements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <footer>
          <FaArrowLeft onClick={onClose} />
        </footer>
      </Container>
    </div>
  );
};

export default Menu;
