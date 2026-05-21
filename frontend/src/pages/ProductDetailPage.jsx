// src/pages/ProductDetailPage.jsx

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ProductGallery from "../components/ProductGallery";
import ProductReviews from "../components/ProductReviews";
import ReviewForm from "../components/ReviewForm";
import RelatedProducts from "../components/RelatedProducts";

import { PRODUCTS } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetailPage() {

  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const product = PRODUCTS.find(
    (p) => p.id === Number(id)
  );

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] ?? "M"
  );

  const [reviews, setReviews] = useState([
    {
      name: "Alex",
      rating: 5,
      review: "Amazing quality and fit.",
    },
    {
      name: "Jordan",
      rating: 4,
      review: "Loved the fabric and design.",
    },
  ]);

  if (!product) {
    return (
      <div className="p-20 text-center">
        Product not found
      </div>
    );
  }

  const related = PRODUCTS.filter(
    (p) =>
      p.category === product.category &&
      p.id !== product.id
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <button
        onClick={() => navigate(-1)}
        className="mb-10 text-xs font-black uppercase tracking-widest text-slate-500 hover:text-[#ff5700]"
      >
        ← Back to Shop
      </button>

      {/* Main Layout */}
      <div className="grid lg:grid-cols-2 gap-14 items-start">

        {/* Gallery */}
        <ProductGallery images={product.images} />

        {/* Product Info */}
        <div>

          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#3b82f6] mb-4">
            {product.brand} · {product.department}
          </p>

          <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight text-[#0b2240]">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mt-6">
            <span className="text-4xl font-black text-[#0b2240]">
              ${product.price}
            </span>

            {product.originalPrice && (
              <span className="text-2xl line-through text-slate-400">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Sizes */}
          <div className="mt-10">

            <p className="mb-4 text-xs font-black uppercase tracking-widest text-[#0b2240]">
              Available Sizes
            </p>

            <div className="flex gap-3 flex-wrap">

              {product.sizes.map((size) => (

                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-3 border font-black uppercase transition-colors
                    ${
                      selectedSize === size
                        ? "bg-[#0b2240] text-white border-[#0b2240]"
                        : "border-slate-300 text-slate-500"
                    }`}
                >
                  {size}
                </button>

              ))}

            </div>

          </div>

          {/* Add to Cart */}
          <button
            onClick={() =>
              addToCart({
                ...product,
                size: selectedSize,
              })
            }
            className="mt-10 w-full md:w-fit bg-[#ff5700] text-white px-10 py-5 text-sm font-black uppercase tracking-widest hover:bg-[#0b2240] transition-colors"
          >
            Add to Bag
          </button>

          {/* Description */}
          <div className="mt-12 border-t pt-8">

            <h3 className="text-xl font-black uppercase text-[#0b2240] mb-4">
              Product Details
            </h3>

            <p className="text-slate-500 leading-relaxed">
              Premium heavyweight construction designed for modern streetwear silhouettes.
              Soft brushed interior with structured oversized fit.
            </p>

          </div>

        </div>

      </div>

      {/* Reviews */}
      <div className="mt-24 grid lg:grid-cols-2 gap-10">

        <ReviewForm
          onAddReview={(review) =>
            setReviews((prev) => [review, ...prev])
          }
        />

        <ProductReviews reviews={reviews} />

      </div>

      {/* Related */}
      <RelatedProducts
        products={related}
        onAddToCart={(product) =>
          addToCart({
            ...product,
            size: product.sizes?.[0] ?? "M",
          })
        }
      />

    </div>
  );
}