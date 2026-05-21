// src/components/ReviewForm.jsx

import { useState } from "react";

export default function ReviewForm({ onAddReview }) {

  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !review) return;

    onAddReview({
      name,
      review,
      rating,
    });

    setName("");
    setReview("");
    setRating(5);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-slate-200 p-6 flex flex-col gap-4"
    >

      <h3 className="text-xl font-black uppercase text-[#0b2240]">
        Add Review
      </h3>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-slate-200 px-4 py-3 outline-none"
      />

      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="border border-slate-200 px-4 py-3 outline-none"
      >
        <option value={5}>5 Stars</option>
        <option value={4}>4 Stars</option>
        <option value={3}>3 Stars</option>
        <option value={2}>2 Stars</option>
        <option value={1}>1 Star</option>
      </select>

      <textarea
        rows="5"
        placeholder="Write your review..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="border border-slate-200 px-4 py-3 outline-none resize-none"
      />

      <button
        type="submit"
        className="bg-[#ff5700] text-white py-4 font-black uppercase tracking-widest hover:bg-[#0b2240] transition-colors"
      >
        Submit Review
      </button>

    </form>
  );
}