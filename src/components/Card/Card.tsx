import './Card.css'
function Card(props: { img: string; name: string; description: string; }) {
  return (
    <div className="card">
      <img src={props.img} alt="" />
      <div className="text">
        <h2 className="projectTitle">{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default Card;
