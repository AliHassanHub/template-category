export interface Book {
  id: string;
  type: "BOOK" | "SOFTWARE" | "TEMPLATE" | "COURSE";
  title: string;
  author: string;
  fileType: string;
  price: number;
  imageUrl: string;
}

export type Category = "Books" | "Software" | "Templates" | "Courses";
