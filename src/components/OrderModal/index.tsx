import { Dialog, Transition } from "@headlessui/react";
import { OrderModalProps } from "./types";
import { ListingView } from "./ListingView";
import { Fragment } from "react";
import { ButtonClear, ButtonPrimary } from "../Button";

export const OrderModal = ({
  isOpen,
  closeModal,
  handleAccept,
  handleReject,
  data,
}: OrderModalProps) => {
  if (!data) return null;

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-full justify-between p-12 max-w-4xl transform overflow-hidden rounded-3xl bg-beige p-6 text-left align-middle">
                  <div className="flex flex-col max-w-md justify-between px-12 pt-8 pb-4">
                    <div>
                      <Dialog.Title className="font-semibold text-sm text-gray uppercase">
                        Congrats!
                      </Dialog.Title>
                      <Dialog.Description className="mb-4 font-medium text-green-300 text-3xl">
                        Your watch sold!
                      </Dialog.Description>

                      <p className="text-gray-green text-sm">
                        You have 1 business day to accept the sale.
                        If you do not accept, it will be automatically rejected.
                      </p>
                    </div>

                    <div className="flex flex-col">
                      <ButtonPrimary
                        onClick={handleAccept}
                        title="Accept sale"
                      />
                      <ButtonClear
                        className="my-2"
                        onClick={handleReject}
                        title="Reject sale"
                      />
                    </div>
                  </div>
                  <ListingView {...data} />

                  <button onClick={closeModal} className="flex">
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
