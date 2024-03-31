import { useState } from "react";
import { books } from "../constants/mockData";
import Book from "./Book";
import Side from "./Side";

import styles from "./Books.module.css";

function Books() {
  const [likedList, setLikedList] = useState([]);

  const handleLikedList = (book, status) => {
    if (status) {
      setLikedList([...likedList, book]);
    } else {
      const newLikedList = likedList.filter((item) => item.id !== book.id);
      setLikedList(newLikedList);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {books.map((book) => (
          <Book data={book} key={book.id} handleLikedList={handleLikedList} />
        ))}
      </div>
      {!!likedList.length && (
        <div className={styles.favorite}>
          <h4>Favorite</h4>
          {likedList.map((likedBook) => (
            <Side key={likedBook.id} data={likedBook} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
