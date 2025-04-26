export interface Template {
  id: string;
  type: "TEMPLATE";
  title: string;
  author: string;
  fileType: "DOC" | "PDF" | "PPT" | "XLS";
  price: number;
  imageUrl: string;
  description: string;
  discountInfo?: string | null;
} 