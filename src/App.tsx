import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SearchEngine from "./components/SearchEngine";
import Footer from "./components/Footer";
import Categories from "./components/Categories";

function App() {
  const [name, setName] = useState("");
  const [containerVisible, setContainerVisibility] = useState(false);

  const fetchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const categories = ["All notes", "Category 1"];

  return (
    <>
      <div>
        <Header name={name} onOpen={() => setContainerVisibility(true)} />
        <Menu
          onClose={() => setContainerVisibility(false)}
          isMenuOpen={containerVisible}
          fetchName={fetchName}
        />
        <SearchEngine />
        <Categories text={categories} />
        <Footer />
      </div>
    </>
  );
}

export default App;
