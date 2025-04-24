
import React, { useState } from "react";
import { Book, Category } from "@/types/book";
import { BookCard } from "./BookCard";
import { CategoryFilter } from "./CategoryFilter";
import { Pagination } from "./Pagination";

const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0f63340b2ad1d91d53b28b3980a5bfb8d7570c5?placeholderIfAbsent=true",
  },
  {
    id: "2",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/01b02f2faab82c2ac72973a624b082184c6e2307?placeholderIfAbsent=true",
  },
  {
    id: "3",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b74b3b7200c617997526800f5231207eddde4fdc?placeholderIfAbsent=true",
  },
  {
    id: "4",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0f63340b2ad1d91d53b28b3980a5bfb8d7570c5?placeholderIfAbsent=true",
  },
  {
    id: "5",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/01b02f2faab82c2ac72973a624b082184c6e2307?placeholderIfAbsent=true",
  },
  {
    id: "6",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b74b3b7200c617997526800f5231207eddde4fdc?placeholderIfAbsent=true",
  },
  {
    id: "7",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0f63340b2ad1d91d53b28b3980a5bfb8d7570c5?placeholderIfAbsent=true",
  },
  {
    id: "8",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/01b02f2faab82c2ac72973a624b082184c6e2307?placeholderIfAbsent=true",
  },
  {
    id: "9",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b74b3b7200c617997526800f5231207eddde4fdc?placeholderIfAbsent=true",
  }
];

export const BookList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Books");
  const [currentPage, setCurrentPage] = useState(1);

  const handleEdit = (id: string) => {
    console.log("Edit book:", id);
  };

  const handleBuy = (id: string) => {
    console.log("Buy book:", id);
  };

  const handleAddBook = () => {
    console.log("Add new book");
  };

  return (
    <main className="max-w-[1442px] w-full box-border mx-auto my-0 px-[100px] py-10 max-md:px-5 max-md:max-w-[991px] max-sm:max-w-screen-sm">
      <div className="flex justify-between items-center mb-8 max-sm:flex-col max-sm:items-start gap-4">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <button
          onClick={handleAddBook}
          className="text-white rounded text-sm font-medium leading-[18.2px] cursor-pointer bg-[#6B047C] px-4 py-2.5 hover:bg-[#6B047C]/90 max-sm:self-end"
        >
          Add a new book
        </button>
      </div>

      <section className="grid grid-cols-3 gap-6 max-md:grid-cols-2 max-sm:grid-cols-1">
        {MOCK_BOOKS.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onEdit={handleEdit}
            onBuy={handleBuy}
          />
        ))}
      </section>

      <Pagination
        currentPage={currentPage}
        totalPages={6}
        onPageChange={setCurrentPage}
      />
    </main>
  );
};
