import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SearchEngine from "./components/SearchEngine";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import NewNote from "./components/NewNote";
import SingleNote from "./components/SingleNote";

function App() {
  const [name, setName] = useState("");
  const [containerVisible, setContainerVisibility] = useState(false);
  const [newNoteVIsible, setNewNoteVisibility] = useState(false);

  const fetchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const categories = ["All notes", "Category 1"];

  const [title, setTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [category, setCategory] = useState("");

  const [newNote, setNewNote] = useState([
    {
      title: "Title 1",
      note: "Note 1",
      category: ""
    }
  ]);

  const [copyNotes, setCopyNotes] = useState([...newNote]);

  async function fetchh(obj) {
    console.log(obj);
    try {
      const request = await fetch("http://localhost:8000/data", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(obj)
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function fetchh3() {
      try {
        const request = await fetch("http://localhost:8000/getdata", {
          method: "GET",
          headers: {
            "Content-type": "application/json"
          }
        });
        const response = await request.json();
        const arr = [...newNote, ...response];
        setCopyNotes(arr);
        setNewNote(arr);
      } catch (err) {
        console.log(err);
      }
    }
    fetchh3();
  }, []);
  const addNewNote = () => {
    const objrk = {
      title: title,
      note: noteText,
      category: category
    };
    setNewNote([...newNote, objrk]);
    fetchh(objrk);
    window.location.reload();
    setNewNoteVisibility(false);
  };

  const findNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCopyNotes([...newNote]);

    setCopyNotes(
      newNote.filter((item) =>
        item.title.toLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  };

  const findByCategory = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const value = event.target.textContent;

    value === "All notes"
      ? setCopyNotes(newNote.filter((item) => item.id && item))
      : setCopyNotes(newNote.filter((item) => item.category === value && item));
  };

  return (
    <>
      <div>
        <Header name={name} onOpen={() => setContainerVisibility(true)} />
        <Menu
          onClose={() => setContainerVisibility(false)}
          isMenuOpen={containerVisible}
          fetchName={fetchName}
        />
        <SearchEngine findBy={(event) => findNote(event)} />
        <Categories
          findByCategory={(event) => findByCategory(event)}
          text={categories}
        />
        <NewNote
          saveNote={addNewNote}
          setCategory={(event) => setCategory(event.target.value)}
          setNote={(event) => setNoteText(event.target?.value)}
          setTitle={(event) => setTitle(event.target?.value)}
          onClose={() => setNewNoteVisibility(false)}
          isOpen={newNoteVIsible}
          category={categories}
        />
        <SingleNote newNote={copyNotes} />
        <Footer onOpen={() => setNewNoteVisibility(true)} />
      </div>
    </>
  );
}

export default App;
