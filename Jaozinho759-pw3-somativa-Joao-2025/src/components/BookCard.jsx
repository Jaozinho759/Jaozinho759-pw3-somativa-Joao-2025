import Style from "./BookCard.module.css";

const BookCard = ({ titulo, autor, imagem }) => {
  return (
    <div className={Style.teste}>
      <h3>{titulo}</h3>
      <p>{autor}</p>
      <img src={imagem} alt="Capa: As Cavernas de Aço" />
    </div>
  );
};

export default BookCard;
