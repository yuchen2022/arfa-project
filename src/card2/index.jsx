import "../styles/cards.css";



export default function CardTwo({image2}){
  return(
    <div className="cardTwo" style={{background:`url(${image2}) center / cover no-repeat` }} >
      <nav className="navbar">
        <span >12 Aug 2016</span>
      </nav>

    </div>
  );
}