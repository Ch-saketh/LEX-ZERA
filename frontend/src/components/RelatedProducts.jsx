// src/components/RelatedProducts.jsx

import ProductCard from "./ProductCard";

export default function RelatedProducts({
  products,
  onAddToCart,
}) {
  return (
    <section className="mt-20">

      <h2 className="text-4xl font-black uppercase text-[#0b2240] mb-8">
        You May Also Like
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {products.map((p) => (

          <ProductCard
            key={p.id}
            product={p}
            onAddToBag={onAddToCart}
          />

        ))}

      </div>

    </section>
  );
}