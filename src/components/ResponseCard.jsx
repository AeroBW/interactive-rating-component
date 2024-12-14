function ResponseCard({ rating }) {
  return (
    <div className="w-[90%] max-w-[400px] rounded-3xl bg-darkBlue p-8 text-center text-white">
      <img
        src="/images/illustration-thank-you.svg"
        alt="thank you"
        className="m-auto"
      />
      <p className="mx-auto mb-8 mt-4 w-max rounded-full bg-lightGrey/15 px-4 py-2 font-bold text-orange">
        You selected {rating} out of 5
      </p>
      <h1 className="mb-2 text-2xl font-bold sm:text-3xl">Thank you!</h1>
      <p className="opacity-70">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default ResponseCard;
