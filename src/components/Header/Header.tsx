import React from "react";
import iconSprite from "../../assets/iconSprite.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between mb-5">
      <span className="text-white font-semibold text-3xl">TODO</span>
      <svg className="w-6 h-6">
        <use href={`${iconSprite}#icon-moon`}></use>
      </svg>
    </header>
  );
}
