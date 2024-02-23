import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 20px;
  padding: 10px 0;
  display: flex;
  align-items: center;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    li {
      margin-left: 10px;
      list-style: none;
      font-size: 19px;
    }

    .li-active {
      border-bottom: 3px solid #fffd21;
    }
  }
`;

interface Props {
  text: string[];
  findByCategory: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const Categories = ({ text, findByCategory }: Props) => {
  const [itemIndex, setIndex] = useState(-1);

  return (
    <Container>
      <ul>
        <ul>
          {text.map((item, index) => (
            <li
              key={item}
              onClick={(event) => {
                findByCategory(event);
                const clickedItem = index;
                if (index == clickedItem) {
                  setIndex(index);
                }
              }}
              className={index == itemIndex ? "li-active" : item}
            >
              {item}
            </li>
          ))}
        </ul>
      </ul>
    </Container>
  );
};

export default Categories;
