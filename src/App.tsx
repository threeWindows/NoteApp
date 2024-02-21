import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SearchEngine from "./components/SearchEngine";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("");
  const [containerVisible, setContainerVisibility] = useState(true);

  const fetchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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
        <SearchEngine />
        <Footer />
      </div>
    </>
  );
}

export default App;
