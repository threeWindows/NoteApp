import styled from "styled-components";
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import { useRef } from "react";
import "../css/animation.css";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1f1f1f;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transition: transform 0.6s ease;

  header {
    padding: 20px 20px 25px 20px;
    display: flex;
    justify-content: space-between;
  }

  main {
    padding: 10px 20px 20px 20px;

    div {
      padding-bottom: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    input {
      width: 160px;
      font-size: 18px;
      outline: none;
      border: none;
      border-bottom: 1px solid #cdcdcd;
      background-color: #1f1f1f;
      color: #cdcdcd;
    }

    select {
      font-size: 16px;
      background-color: #1f1f1f;
      border: none;
      color: #cdcdcd;
      outline: none;

      option {
        font-size: 12px;
      }
    }

    textarea {
      width: 100%;
      background-color: #1f1f1f;
      border: none;
      outline: none;
      color: #cdcdcd;
      font-size: 15px;
      font-family: Arial, Helvetica, sans-serif;
    }
  }
`;

interface Props {
  category: string[];
  isOpen: boolean;
  onClose: () => void;
  setTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setNote: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  setCategory: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  saveNote: () => void;
}

const NewNote = ({
  category,
  isOpen,
  onClose,
  setTitle,
  setNote,
  setCategory,
  saveNote
}: Props) => {
  const title = useRef(null);
  const note = useRef(null);
  const selectedCategory = useRef(null);

  return (
    <Container className={isOpen ? "newNoteOpen" : "newNoteClose"}>
      <header>
        <FaArrowLeft onClick={onClose} size={19} />
        <FaCheck
          size={19}
          onClick={() => {
            saveNote();
            title.current.value = "";
            note.current.value = "";
            selectedCategory.current.value = "";
          }}
        />
      </header>
      <main>
        <div>
          <input
            ref={title}
            onChange={(event) => setTitle(event)}
            type="text"
            placeholder="Title"
          />
          <select
            ref={selectedCategory}
            onChange={(event) => setCategory(event)}
          >
            {category.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <textarea
          ref={note}
          onChange={(event) => setNote(event)}
          cols={40}
          rows={10}
          placeholder="Note ..."
        ></textarea>
      </main>
    </Container>
  );
};

export default NewNote;
