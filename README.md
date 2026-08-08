# NovaCart — Context API & Redux Toolkit

A responsive shopping cart application demonstrating two approaches to global state management in React.

## Assignment criteria

- **Context API:** `ThemeContext` shares light/dark theme state across the app.
- **Redux Toolkit:** the store contains separate `products` and `cart` slices.
- **createAsyncThunk:** `fetchProducts` loads product data from an external API and handles loading, success, and error states.
- **State-managed React app:** search, category filters, sorting, cart quantities, totals, and persistence are driven by shared state.

## Context API section

`src/context/ThemeContext.jsx` creates a provider with the current theme and a toggle function. The header consumes this context through the `useTheme` hook. The selected theme is saved to local storage.

Context is a good fit here because the theme is simple, low-frequency global state.

## Redux Toolkit section

`src/app/store.js` combines two reducers:

1. `productsSlice` stores API products, request status, errors, search, category, and sorting.
2. `cartSlice` stores cart items, quantities, totals, and drawer visibility.

Redux Toolkit is useful here because product and cart data have multiple actions, derived values, and many consumers.

## Async API flow

`fetchProducts` is created with `createAsyncThunk`. Redux handles its three lifecycle states:

- `pending` → show loading skeletons
- `fulfilled` → save and display products
- `rejected` → show an error and retry button

## Features

- API-powered product catalogue
- Product search, category filtering, and sorting
- Add, remove, increase, and decrease cart items
- Calculated item count and subtotal
- Cart and theme persistence with local storage
- Light and dark themes
- Loading, empty, and error states
- Responsive mobile layout
- Demo checkout page and order confirmation (no data storage or payment processing)

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
```

## Technology

- React
- Redux Toolkit
- React Redux
- Context API
- Vite
- Lucide React
- DummyJSON products API
