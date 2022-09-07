
import CardOne from "./card1";
import CardTwo from "./card2";
import "./styles/App.css";
import image1 from "./assets/photo1.jpg";
import image2 from "./assets/photo2.jpg";

function App() {
  return (
    <div className="body">
      <CardOne image1={image1}/>
      <CardTwo image2={image2} />
      
    </div>
  );
}

export default App;
