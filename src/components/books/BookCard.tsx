import React from "react";
import { Book } from "@/types/book";

interface BookCardProps {
  book: Book;
  onEdit: (id: string) => void;
  onBuy: (id: string) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onEdit, onBuy }) => {
  return (
    <article className="flex flex-col border box-border bg-white p-4 rounded-lg border-solid border-[#F2F2F2]">
      <img
        src={book.imageUrl}
        className="w-full h-auto rounded mb-4"
        alt={`${book.title} cover`}
      />
      <div className="flex flex-col gap-2">
        <div className="text-[#808080] text-[10px] font-medium leading-[13px]">
          {book.type}
        </div>
        <h3 className="text-[#1A011E] text-base font-medium leading-6">
          {book.title}
        </h3>
        <div className="flex justify-between">
          <div className="text-[#808080] text-xs font-medium leading-[15.6px]">
            <span className="text-[#1A011E] text-sm">Author: </span>
            <span>{book.author}</span>
          </div>
          <div className="text-[#808080] text-xs font-medium leading-[15.6px]">
            <span className="text-[#1A011E] text-sm">File type: </span>
            <span>{book.fileType}</span>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => onEdit(book.id)}
            className="flex-1 border text-[#6B047C] rounded text-sm font-medium leading-[18.2px] text-center cursor-pointer px-2.5 py-2 border-solid border-[#6B047C]"
          >
            Edit
          </button>
          <button
            onClick={() => onBuy(book.id)}
            className="flex-1 text-white rounded text-sm font-medium leading-[18.2px] text-center cursor-pointer bg-[#6B047C] px-2.5 py-2"
          >
            Buy for ${book.price}
          </button>
        </div>
      </div>
    </article>
  );
};
