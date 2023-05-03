import "./App.css";
import { useEffect, useState } from "react";
import { OrderModal } from "./components/OrderModal";
import axios from "axios";
import { WatchDetails } from "./components/OrderModal/WatchDetails";

function App() {
  const [data, setData] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("data.json");
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
    <div className="App">
      <div className="App-header">
        <button className="btn btn-primary w-25">View Order</button>
        <WatchDetails
          id={12}
          name={"Nautilus"}
          displayName="Nautilus"
          brand={{
            id: 2,
            name: "Patek Philippe",
            displayName: "Patek Philippe",
          }}
          referenceNumber="5712/1A-001"
          description="k"
          manufactureYear={1994}
          condition="NEW"
          imageUrl="https://getbezel.mo.cloudinary.net/sandbox/1583bb64-0df2-4a69-a10d-119e464ab6fe.png"
        />
      </div>
    </div>
  );
}

export default App;
