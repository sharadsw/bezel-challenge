# Bezel Programming Challenge

This is my submission for the Bezel Programming Challenge. The code uses `React`, `Tailwind` and `Headless UI` (also by Tailwind) to create the order action modal.

**Deployed on:** https://bezel-challenge-production.up.railway.app/

## Dependencies
* `react`
* `tailwindcss`
* `@headlessui/react`
* `axios`
* `typescript`

## Modal Component
The modal component can be found in the `src/components/OrderModal` directory. It has the following files:
* `index.tsx` : The component containing the entire modal.
* `ListingView.tsx` : A sub-component that renders the listing details found on the right side of the modal.
* `WatchDetails.tsx` : A sub-component to `ListingView` that renders information about the given watch.

![screenshot](https://user-images.githubusercontent.com/16229739/236104467-a9dc471e-0893-4685-a53f-1fc3bce53b8e.png)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
