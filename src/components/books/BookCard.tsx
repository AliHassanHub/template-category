
import React from "react";
import { Book } from "@/types/book";

interface BookCardProps {
  book: Book;
  onEdit: (id: string) => void;
  onBuy: (id: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onEdit, onBuy }) => {
  return (
    <article className="flex flex-col border box-border bg-white p-6 rounded-lg border-solid border-[#F2F2F2]">
      <img
        src={book.imageUrl}
        className="w-full aspect-[1.5] object-cover rounded-lg mb-4"
        alt={`${book.title} cover`}
      />
      <div className="flex flex-col gap-3">
        <div className="text-[#808080] text-xs font-medium uppercase">
          {book.type}
        </div>
        <h3 className="text-[#1A011E] text-lg font-medium leading-6">
          {book.title}
        </h3>
        <div className="flex flex-col gap-2">
          <div className="text-[#808080] text-sm">
            <span className="text-[#1A011E] font-medium">Author: </span>
            <span>{book.author}</span>
          </div>
          <div className="text-[#808080] text-sm">
            <span className="text-[#1A011E] font-medium">File type: </span>
            <span>{book.fileType}</span>
          </div>
        </div>
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => onEdit(book.id)}
            className="flex-1 border text-[#6B047C] rounded text-sm font-medium cursor-pointer px-4 py-2.5 border-solid border-[#6B047C] hover:bg-[#6B047C]/10"
          >
            Edit
          </button>
          <button
            onClick={() => onBuy(book.id)}
            className="flex-1 text-white rounded text-sm font-medium cursor-pointer bg-[#6B047C] px-4 py-2.5 hover:bg-[#6B047C]/90"
          >
            Buy for ${book.price}
          </button>
        </div>
      </div>
    </article>
  );
};
