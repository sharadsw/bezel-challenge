import { WatchDetailsComponent } from "./types";

export const WatchDetails: WatchDetailsComponent = ({
  id,
  name,
  displayName,
  brand,
  referenceNumber,
  description,
  manufactureYear,
  condition,
  imageUrl,
}) => {
  return (
    <div className="watchdetails-view py-4">
      <div className="watchdetails-view__brand flex justify-between">
        <div className="flex flex-col text-green-400 font-medium">
          <span>{brand.displayName}</span>
          <span>{displayName}</span>
        </div>
        <span>
          {condition} / {manufactureYear}
        </span>
      </div>
      <img className="watchdetails-view__img rounded-2xl" src={imageUrl} />
    </div>
  );
};
