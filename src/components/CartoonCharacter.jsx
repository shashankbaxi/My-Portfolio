import React from "react";

const CartoonCharacter = () => {
  return (
    <svg
      width="260"
      height="300"
      viewBox="0 0 260 300"
      className="animate-float"
    >
      {/* Head */}
      <circle cx="130" cy="60" r="40" fill="#facc15" />
      {/* Eyes */}
      <circle cx="115" cy="60" r="4">
        <animate
          attributeName="r"
          values="4;4;0;4"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="145" cy="60" r="4">
        <animate
          attributeName="r"
          values="4;4;0;4"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Body */}
      <rect x="90" y="100" width="80" height="70" rx="10" fill="#38bdf8" />

      {/* Laptop */}
      <rect x="85" y="140" width="90" height="40" rx="4" fill="#020617" />
      <rect x="80" y="180" width="100" height="6" fill="#000" />
    </svg>
  );
};

export default CartoonCharacter;
