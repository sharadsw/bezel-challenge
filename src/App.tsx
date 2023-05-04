import "./App.css";
import { useEffect, useState } from "react";
import { OrderModal } from "./components/OrderModal";
import axios from "axios";
import { ListingViewProps } from "./components/OrderModal/types";

function App() {
  const [data, setData] = useState<ListingViewProps | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123");
        const data = response.data;
        const listingObj = {
          model: data["listing"]["model"],
          manufactureYear: data["listing"]["manufactureYear"],
          condition: data["listing"]["condition"],
          sellingPrice: data["salePriceCents"] / 100,
          comissionRate: data["commissionRateBips"] / 100,
          sellerFee: data["sellerFeeCents"] / 100,
          earnings: data["payoutAmountCents"] / 100,
          imageUrl: data["listing"]["images"][0]["image"]["url"]
        };
        setData(listingObj);
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
        <OrderModal isOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} data={data} />
    </div>
  );
}

export default App;
