import Circle from "./components/Circle";
import Square from "./components/Square";

function App() {
  return (
    <div>
      <h1>Total Clicks: 0</h1>

      <div className="shapes">
        <Circle />
        <Circle />
        <Square color="orange" />
        <Square color="blue" />
      </div>
    </div>
  );
}

export default App;

///
