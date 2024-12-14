import RatingCard from "./RatingCard";
import ResponseCard from "./ResponseCard";
import { useState } from "react";

function Card() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="flex h-dvh items-center justify-center bg-veryDarkBlue">
      {!submitted ? (
        <RatingCard
          setRating={setRating}
          rating={rating}
          setSubmitted={setSubmitted}
        />
      ) : null}
      {submitted ? <ResponseCard rating={rating} /> : null}
    </main>
  );
}

export default Card;
