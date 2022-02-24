import "./styles.css";
import useDeviceOrientation from "./useDeviceOrientation";

export default function App() {
  const orientation = useDeviceOrientation();
  console.log("YO", orientation);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{orientation.beta || "nothing"}</h2>
    </div>
  );
}
