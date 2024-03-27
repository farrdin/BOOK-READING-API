import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getReadBooks = () => {
  const savedReadBooks = localStorage.getItem("readBook");
  return savedReadBooks ? JSON.parse(savedReadBooks) : [];
};

const getWishBooks = () => {
  const savedWishBooks = localStorage.getItem("wishBook");
  return savedWishBooks ? JSON.parse(savedWishBooks) : [];
};

const readBook = (bookId) => {
  const readBooks = getReadBooks();
  const wishBooks = getWishBooks();

  if (readBooks.includes(bookId)) {
    toast.error("You have already added this book to the read list.");
  } else {
    const updatedReadBooks = [...readBooks, bookId];
    localStorage.setItem("readBook", JSON.stringify(updatedReadBooks));

    if (wishBooks.includes(bookId)) {
      toast("You've wished this book, now in read list.");
    } else {
      toast("Book added to Read list.");
    }
  }
};

const wishBook = (bookId) => {
  const readBooks = getReadBooks();
  const wishBooks = getWishBooks();

  if (wishBooks.includes(bookId)) {
    toast.error("You have already added this book to the wishlist.");
  } else {
    if (readBooks.includes(bookId)) {
      toast.error("You have already read this book, cannot add to wishlist.");
    } else {
      const updatedWishBooks = [...wishBooks, bookId];
      localStorage.setItem("wishBook", JSON.stringify(updatedWishBooks));
      toast("Book added to Wishlist.");
    }
  }
};

export { readBook, getReadBooks, wishBook, getWishBooks };
