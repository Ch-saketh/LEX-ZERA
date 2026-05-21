// src/components/ImageModal.jsx

import { X } from "lucide-react";

export default function ImageModal({ image, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6">

      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white"
      >
        <X size={32} />
      </button>

      <img
        src={image}
        alt=""
        className="max-w-full max-h-full object-contain"
      />

    </div>
  );
}