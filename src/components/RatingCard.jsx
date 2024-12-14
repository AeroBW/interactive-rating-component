import { useState } from "react";

const ratings = [1, 2, 3, 4, 5];

function RatingCard({ setRating, rating, setSubmitted }) {
  const [error, setError] = useState("");
  function handleClick() {
    if (rating === 0) {
      setError("Please select a rating");
      return;
    }
    setError("");
    setSubmitted(true);
  }
  return (
    <div className="w-[90%] max-w-[400px] space-y-4 rounded-3xl bg-darkBlue p-8 text-white">
      <img
        src="/images/icon-star.svg"
        alt="star icon"
        className="size-10 rounded-full bg-lightGrey/15 p-3"
      />
      <h1 className="text-2xl font-bold sm:text-3xl">How did we do?</h1>
      <p className="opacity-70">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      {rating === 0 ? <p className="text-orange">{error}</p> : null}
      <div className="flex justify-between">
        {ratings.map((num) => (
          <button
            key={num}
            type="button"
            onClick={() => setRating(num)}
            className={`size-10 rounded-full p-3 font-bold leading-5 transition duration-100 ease-in-out hover:bg-orange hover:text-veryDarkBlue sm:size-12 ${
              rating === num ? "bg-white text-veryDarkBlue" : "bg-lightGrey/15"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="w-full rounded-full bg-orange py-2 font-bold text-veryDarkBlue transition duration-100 ease-in-out hover:bg-white hover:text-veryDarkBlue active:bg-orange/70"
        onClick={handleClick}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default RatingCard;
