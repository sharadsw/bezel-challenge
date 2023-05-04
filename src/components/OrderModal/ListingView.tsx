import { HR } from "../HR";
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
    <div className="flex flex-col justify-around bg-beige-200 w-128 h-3/4 m-2 px-8 py-12 rounded-3xl text-gray-green text-sm">
      <HR />
      <WatchDetails
        {...{
          ...model,
          condition,
          manufactureYear,
          imageUrl,
        }}
      />
      <HR />
      <div className="flex justify-between mt-4">
        <span>Selling Price</span>
        <span className="text-green-300 font-medium">
          ${sellingPrice.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between">
        <span>Level 1 Commission ({comissionRate}%)</span>
        <span>${((sellingPrice * comissionRate) / 100).toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Seller Fee</span>
        <span>${sellerFee.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span>Insured Shipping</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between mb-4 text-teal">
        <span>Bezel Authentication</span>
        <span>Free</span>
      </div>
      <HR />
      <div className="flex justify-between mt-4 text-green-500 font-medium">
        <span>Earnings</span>
        <span>${earnings.toFixed(2)}</span>
      </div>
    </div>
  );
};
