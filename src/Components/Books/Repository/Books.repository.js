import ApiGateway from "../../../Shared/ApiGateway.js";

class BooksRepository {
  constructor() {
    this.httpGateway = new ApiGateway();
  }

  getAllBooks = async () => {
    const booksDto = await this.httpGateway.get("/");
    return booksDto;
  };

  getPrivateBooks = async () => {
    const booksDto = await this.httpGateway.get("/private");
    return booksDto;
  };

  addBook = async ({ name, author }) => {
    const bookAddDto = await this.httpGateway.post("/books", { name, author });
    return bookAddDto && bookAddDto.status === "ok" ? true : false;
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
