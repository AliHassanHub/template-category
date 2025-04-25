import React, { useState } from "react";
import { Book, Category } from "@/types/book";
import { BookCard } from "./BookCard";
import { CategoryFilter } from "./CategoryFilter";
import { Pagination } from "./Pagination";
import { BookFormModal } from "./BookFormModal";

const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0f63340b2ad1d91d53b28b3980a5bfb8d7570c5?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  },
  {
    id: "2",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/01b02f2faab82c2ac72973a624b082184c6e2307?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  },
  {
    id: "3",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b74b3b7200c617997526800f5231207eddde4fdc?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  },
  {
    id: "4",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c0f63340b2ad1d91d53b28b3980a5bfb8d7570c5?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  },
  {
    id: "5",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/01b02f2faab82c2ac72973a624b082184c6e2307?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  },
  {
    id: "6",
    type: "BOOK",
    title: "The grey pattern to lawing cases",
    author: "Wisdom Umanah",
    fileType: "PDF",
    price: 300,
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b74b3b7200c617997526800f5231207eddde4fdc?placeholderIfAbsent=true",
    description: "A comprehensive guide to understanding and applying legal patterns in various cases. This book provides detailed insights into the methodology of handling complex legal scenarios.",
  }
];

export const BookList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Books");
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useState<Book[]>(MOCK_BOOKS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>();
  const [modalMode, setModalMode] = useState<"edit" | "add">("add");

  const handleEdit = (id: string) => {
    const bookToEdit = books.find((book) => book.id === id);
    if (bookToEdit) {
      setSelectedBook(bookToEdit);
      setModalMode("edit");
      setIsModalOpen(true);
    }
  };

  const handleBuy = (id: string) => {
    // Here you would typically integrate with a payment system
    alert(`Processing payment for book: ${id}`);
  };

  const handleAddBook = () => {
    setSelectedBook(undefined);
    setModalMode("add");
    setIsModalOpen(true);
  };

  const handleSubmit = (bookData: Partial<Book>) => {
    if (modalMode === "edit" && selectedBook) {
      // Update existing book
      setBooks(
        books.map((book) =>
          book.id === selectedBook.id ? { ...book, ...bookData } : book
        )
      );
    } else {
      // Add new book
      const newBook: Book = {
        id: String(books.length + 1),
        type: "BOOK",
        fileType: "PDF",
        ...bookData,
      } as Book;
      setBooks([...books, newBook]);
    }
  };

  return (
    <main className="max-w-[1000px] w-full box-border mx-auto my-0 px-16 py-6 max-sm:px-4">
      <div className="flex justify-between items-center mb-8 max-sm:mb-6 max-sm:flex-col max-sm:items-start max-sm:gap-4">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <button
          onClick={handleAddBook}
          className="text-white rounded text-sm font-medium leading-[18.2px] cursor-pointer bg-[#6B047C] px-4 py-2 max-sm:w-full hover:scale-105 transition-all duration-200"
        >
          Add a new book
        </button>
      </div>

      <section className="grid grid-cols-3 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-4">
        {books.map((book) => (
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

      <BookFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        book={selectedBook}
        mode={modalMode}
      />
    </main>
  );
};
