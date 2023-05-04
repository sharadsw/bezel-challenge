import { WatchDetailsComponent } from "./types";

export const WatchDetails: WatchDetailsComponent = ({
  displayName,
  brand,
  referenceNumber,
  manufactureYear,
  condition,
  imageUrl,
}) => {
  return (
    <div className="flex justify-between py-4">
      <div className="flex flex-col justify-between items-start">
        <div className="flex flex-col text-green-400 font-medium">
          <span>{brand.displayName}</span>
          <span>{displayName} {referenceNumber}</span>
        </div>
        <span>
          <span className="capitalize">{condition.toLowerCase()}</span> / {manufactureYear}
        </span>
      </div>
      <img className="w-24 h-24 rounded-3xl" src={imageUrl} />
    </div>
  );
};
