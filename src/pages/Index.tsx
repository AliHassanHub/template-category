import React from "react";
import { BookList } from "@/components/books/BookList";

const Index: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <BookList />
    </>
  );
};

export default Index;
