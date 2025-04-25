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
    <nav className="flex gap-2 bg-[#F2F2F2] p-1 rounded-lg overflow-x-auto whitespace-nowrap max-sm:w-full max-sm:-mx-4 max-sm:px-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded text-[#808080] text-sm font-medium leading-6 cursor-pointer px-3 py-1.5 flex-shrink-0 ${
            selectedCategory === category ? "bg-white" : "hover:bg-white/50"
          }`}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};
