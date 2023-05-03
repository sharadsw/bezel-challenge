import "./App.css";
import { useEffect, useState } from "react";
import { OrderModal } from "./components/OrderModal";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-beige">
        <button
          className="btn btn-primary w-25"
          onClick={() => setIsOpen(true)}
        >
          View Order
        </button>
        <OrderModal isOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} />
    </div>
  );
}

export default App;
