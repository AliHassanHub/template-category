import React from "react";
import { Category } from "@/types/book";

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const categories: Category[] = ["Books", "Software", "Templates", "Courses"];

  return (
    <nav className="flex gap-2.5 bg-[#F2F2F2] p-1 rounded-lg max-sm:flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded text-[#808080] text-base font-medium leading-6 cursor-pointer px-4 py-2 ${
            selectedCategory === category ? "bg-white" : "hover:bg-white/50"
          }`}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};
