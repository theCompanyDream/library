import { createContext } from 'react'

const BookContext = createContext({
    kind: "",
    totalItems: 0,
    items: [],
    addBook: (book) => this.items.push(book)
})

export default BookContext