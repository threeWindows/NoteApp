import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 150px;

  div {
    width: 48%;
    height: 250px;
    background-color: #faf8ff;
    margin-top: 15px;
    border-radius: 25px;
    color: black;

    h3 {
      width: 100%;
      text-align: center;
      margin: 7px 0 0 0;
    }

    span {
      padding: 10px;
      font-weight: 500;
    }
  }
`;

interface NewNote {
  id: number;
  title: string;
  note: string;
  category: string;
}

interface Props {
  newNote: NewNote[];
}

const SingleNote = ({ newNote }: Props) => {
  useEffect(() => {
    console.log(newNote);
  }, [newNote]);

  return (
    <Container>
      {newNote.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <span>{item.note}</span>
        </div>
      ))}
    </Container>
  );
};

export default SingleNote;
