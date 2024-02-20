import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div>
        <Header onOpen={() => console.log("asd")} />
      </div>
    </>
  );
}

export default App;
