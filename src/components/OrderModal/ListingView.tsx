import "./ordermodal.css";
import { ListingViewComponent } from "./types";
import { WatchDetails } from "./WatchDetails";

export const ListingView: ListingViewComponent = ({
  model,
  sellingPrice,
  comissionRate,
  sellerFee,
  earnings,
  manufactureYear,
  condition,
  imageUrl,
}) => {
  return (
    <div className="listing-view w-96 h-3/4 px-8 py-12 rounded-3xl text-gray-green">
      <hr />
      <WatchDetails
        {...{
          ...model,
          condition,
          manufactureYear,
          imageUrl,
        }}
      />
      <hr />
      <div className="listing-view__entry mt-4">
        <span>Selling Price</span>
        <span className="text-green-300 font-medium">
          {sellingPrice.toFixed(2)}
        </span>
      </div>
      <div className="listing-view__entry">
        <span>Level 1 Commission ({comissionRate}%)</span>
        <span>{(sellingPrice * comissionRate / 100).toFixed(2)}</span>
      </div>
      <div className="listing-view__entry">
        <span>Seller Fee</span>
        <span>{sellerFee.toFixed(2)}</span>
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
        <span>{earnings.toFixed(2)}</span>
      </div>
    </div>
  );
};
