import { FunctionComponent } from "react";

export type OrderModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  handleAccept: () => void;
  handleReject: () => void;
  data: ListingViewProps | null;
}

export type ListingViewProps = {
  model: WatchDetailsProps;
  sellingPrice: number;
  comissionRate: number;
  sellerFee: number;
  earnings: number;
  manufactureYear: number;
  condition: string;
  imageUrl: string;
};

export type WatchDetailsProps = {
  id: number;
  name: string;
  displayName: string;
  brand: BrandInfo;
  referenceNumber: string;
  description: string;
  manufactureYear: number;
  condition: string;
  imageUrl: string;
};

export type BrandInfo = {
  id: number;
  name: string;
  displayName: string;
};

export type WatchDetailsComponent = FunctionComponent<WatchDetailsProps>;
export type ListingViewComponent = FunctionComponent<ListingViewProps>;
