import { Dialog } from "@headlessui/react";
import { OrderModalProps } from "./types";
import { ListingView } from "./ListingView";

export const OrderModal = ({
  isOpen,
  openModal,
  closeModal,
}: OrderModalProps) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-2 text-center">
          <Dialog.Panel className="flex w-full justify-between p-12 max-w-4xl transform overflow-hidden rounded-2xl bg-beige p-6 text-left align-middle">
            <div className="flex flex-col mx-8 justify-between py-8">
              <div>
                <Dialog.Title className="font-semibold text-sm text-gray uppercase">Congrats!</Dialog.Title>
                <Dialog.Description className="mb-4 font-medium text-green-300 text-3xl">
                  Your watch sold!
                </Dialog.Description>

                <p className="text-gray-green">
                  You have 1 business day to accept the sale. <br />
                  If you do not accept, it will be automatically rejected.
                </p>
              </div>

              <div className="flex flex-col">
                <button className="btn btn-primary" onClick={closeModal}>
                  Accept sale
                </button>
                <button className="btn btn-clear my-2" onClick={closeModal}>
                  Reject sale
                </button>
              </div>
            </div>
            <ListingView />
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
