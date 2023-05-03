import { FunctionComponent } from "react";

export type ModalProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export type OrderModalProps = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export type ListingViewProps = {
  model: WatchDetailsProps;
  sellingPrice: number;
  comissionRate: number;
  sellerFee: number;
  earnings: number;
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
