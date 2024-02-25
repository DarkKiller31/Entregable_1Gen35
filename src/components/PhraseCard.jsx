import "./styles/PhraseCard.css";

const PhraseCard = ({ phraseRandom }) => {
  const { phrase, author } = phraseRandom;

  return (
    <>
      <p className="card__phrase">{phrase}</p>
      <p className="card__phrase">{author}</p>
    </>
  );
};

export default PhraseCard;
