import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0px;

  input {
    width: 100%;
    padding: 16px 35px;
    border-radius: 10px;
    border: none;
    background-color: #454545;
    outline: none;
    color: #d1d1d1;
    font-size: 16px;
  }
  .icon {
    position: absolute;
    left: 20px;
  }
`;

interface Props {
  findBy: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchEngine = ({ findBy }: Props) => {
  const findNote = useRef(null);

  return (
    <Container>
      <FaSearch className="icon" />
      <input
        ref={findNote}
        onChange={(event) => findBy(event)}
        type="text"
        placeholder="Find note ..."
      />
    </Container>
  );
};

export default SearchEngine;
