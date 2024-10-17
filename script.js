function numberOfBooksRead(library) {
  // Initialize a counter to keep track of the number of books read
  let count = 0;
  
  // Loop through each book in the library array
  for (let book of library) {
    // Check if the book has been read
    if (book.readingStatus === true) {
      count++;
    }
  }

  // Return the total count of books that have been read
  return count;
}

// Example library object
const library = [
  { author: "J.K. Rowling", title: "Harry Potter", readingStatus: true },
  { author: "Harper Lee", title: "To Kill a Mockingbird", readingStatus: false },
  { author: "George Orwell", title: "1984", readingStatus: true },
];

// Test the function
console.log(numberOfBooksRead(library)); // Output: 2
