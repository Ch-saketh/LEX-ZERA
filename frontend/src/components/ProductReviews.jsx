// src/components/ProductReviews.jsx

export default function ProductReviews({ reviews }) {
  return (
    <div className="flex flex-col gap-4">

      {reviews.map((r, index) => (

        <div
          key={index}
          className="border border-slate-100 p-5"
        >

          <div className="flex items-center justify-between mb-3">

            <p className="font-black text-[#0b2240]">
              {r.name}
            </p>

            <p className="text-[#ff5700]">
              {"⭐".repeat(r.rating)}
            </p>

          </div>

          <p className="text-slate-500 text-sm leading-relaxed">
            {r.review}
          </p>

        </div>

      ))}

    </div>
  );
}