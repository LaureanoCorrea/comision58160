import { db } from "../../services/firebase/firebaseConfig.js";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import {
  getDocs,
  collection,
  query,
  where,
  documentId,
  writeBatch,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import FormForCheckout from "../Checkout/FormForCheckout.jsx";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const { cart, total, clearCart } = useCart();

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = query(
        collection(db, "products"),
        where(documentId(), "in", ids)
      );

      const { docs } = await getDocs(productsRef);

      docs.forEach(async (documentnapshot) => {
        const fields = documentnapshot.data();
        const stockDb = fields.stock;

        const productAddedToCart = cart.find(
          (prod) => prod.id === documentnapshot.id
        );
        const prodQuantity = productAddedToCart.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(documentnapshot.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: documentnapshot.id, ...fields });
        }

        if (outOfStock.length === 0) {
          const ordersRef = collection(db, "orders");

          const { id } = await addDoc(ordersRef, objOrder);
          batch.commit();
          clearCart();
          setOrderId(id);
        } else {
          console.log("no hay stock");
        }
      });
    } catch (error) {
      console.error("error generando la orden");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se esta generando su orden...</h1>;
  }

  if (orderId) {
    return <h1>El id de su orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <FormForCheckout onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;