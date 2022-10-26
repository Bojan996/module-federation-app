import express from "express";
import { products, ProductInterface } from "./products";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 8080;
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Products
app.get("/products", (req, res) => {
  res.send(products);
});
app.get("/products/:id", (req, res) => {
  const product = products.find((e) => e.id === Number(req.params.id));
  res.send(product);
});

//Cart
interface CartInterface extends ProductInterface {
  amount: number;
}
let cartItemsDB: CartInterface[] = [
  {
    id: 0,
    name: "Sisanje",
    description: "Sisam kao Stiven Segal sto bije kriminalce, to znaci jako.",
    price: 1000,
    image: "http://localhost:8080/mf_app_sisanje.jpg",
    amount: 1,
  },
];
app.get("/cart", (req, res) => {
  res.send({ cart: cartItemsDB });
});
app.post("/add-to-cart", (req, res) => {
  const id = req.body.id;

  const itemAlreadyExists = cartItemsDB.findIndex((e) => e.id == id);
  if (itemAlreadyExists !== -1) {
    cartItemsDB[itemAlreadyExists].amount++;
    res.send({ message: "Added amount", cart: cartItemsDB });
  } else {
    const foundProduct = products.find((e) => e.id == id);
    foundProduct &&
      cartItemsDB.push({
        ...foundProduct,
        amount: 1,
      });
    res.send({ message: "Added new item", cart: cartItemsDB });
  }
});
app.delete("/delete-from-cart", (req, res) => {
  const id = req.body.id;

  const itemAlreadyExists = cartItemsDB.findIndex((e) => e.id == id);
  if (itemAlreadyExists !== -1) {
    cartItemsDB[itemAlreadyExists].amount--;
    if (cartItemsDB[itemAlreadyExists].amount === 0) {
      cartItemsDB.splice(itemAlreadyExists, 1);
    }
    res.send({ message: "Removed amount", cart: cartItemsDB });
  } else {
    cartItemsDB = cartItemsDB.filter((e) => e.id != id);
    res.send({ message: "Removed item from cart", cart: cartItemsDB });
  }
});

//Root of Application
app.get("/", (req, res) => {
  res.send("Hello from backend");
});
app.listen(port, () => {
  console.log(`backend listening at http://localhost:${port}`);
});
