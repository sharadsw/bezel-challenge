import { useEffect, useState } from "react";
import { OrderModal } from "./components/OrderModal";
import axios from "axios";
import { ListingViewProps } from "./components/OrderModal/types";
import { ButtonPrimary } from "./components/Button";

function App() {
  const [data, setData] = useState<ListingViewProps | null>(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123"
        );
        const data = response.data;
        const listingObj = {
          model: data["listing"]["model"],
          manufactureYear: data["listing"]["manufactureYear"],
          condition: data["listing"]["condition"],
          sellingPrice: data["salePriceCents"] / 100,
          comissionRate: data["commissionRateBips"] / 100,
          sellerFee: data["sellerFeeCents"] / 100,
          earnings: data["payoutAmountCents"] / 100,
          imageUrl: data["listing"]["images"][0]["image"]["url"],
        };
        setData(listingObj);
      } catch (error) {
        console.log("Failed to fetch data", error);
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

  const handleAccept = async () => {
    try {
      const res = await axios.post(
        "https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/accept"
      );
      if (res.status === 200) closeModal();
    } catch (error) {
      console.log("Error in accepting", error);
    }
  };

  const handleReject = async () => {
    try {
      const res = await axios.post(
        "https://eb863a74-7a4e-4daf-9540-d2db8470c18e.mock.pstmn.io/marketplace/orders/123/decline"
      );
      if (res.status === 200) closeModal();
    } catch (error) {
      console.log("Error in declining", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-beige">
      <ButtonPrimary
        className="w-96"
        onClick={openModal}
        title="View Order"
      />
      <OrderModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        handleAccept={handleAccept}
        handleReject={handleReject}
        data={data}
      />
    </div>
  );
}

export default App;
