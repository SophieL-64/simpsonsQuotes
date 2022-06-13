const QuoteCard = (props) => {
  const { simpson, getSimpsons } = props;

  return (
    <div>
      <button onClick={getSimpsons}>Une nouvelle citation siouplaît</button>
      <h1>{simpson.character}</h1>
      <img src={simpson.image} alt={simpson.character}></img>
      <p>{simpson.quote}</p>
    </div>
  );
};

export default QuoteCard;
