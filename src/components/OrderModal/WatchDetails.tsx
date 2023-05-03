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
    <div>
      <div>
        <span>{brand.displayName}</span>
        <span>{displayName}</span>
        <span>
          {condition} / {manufactureYear}
        </span>
      </div>
        <img src={imageUrl} />
    </div>
  );
};
