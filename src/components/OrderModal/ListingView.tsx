import "./ordermodal.css";
import { WatchDetails } from "./WatchDetails";

export const ListingView = () => {
  return (
    <div className="listing-view w-96 h-3/4 px-8 py-12 rounded-3xl text-gray-green">
      <hr />
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
      <hr />
      <div className="listing-view__entry mt-4">
        <span>Selling Price</span>
        <span className="text-green-300 font-medium">$17950</span>
      </div>
      <div className="listing-view__entry">
        <span>Level 1 Commission (6.5%)</span>
        <span>$15000</span>
      </div>
      <div className="listing-view__entry">
        <span>Seller Free</span>
        <span>$15.00</span>
      </div>
      <div className="listing-view__entry">
        <span>Insured Shipping</span>
        <span>Free</span>
      </div>
      <div className="listing-view__entry mb-4 text-teal">
        <span>Bezel Authentication</span>
        <span>Free</span>
      </div>
      <hr />
      <div className="listing-view__entry mt-4 text-green-500 font-medium">
        <span>Earnings</span>
        <span>$24000.75</span>
      </div>
    </div>
  );
};