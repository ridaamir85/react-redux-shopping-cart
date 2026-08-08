# Submission notes

I built NovaCart, a responsive shopping cart application that demonstrates both Context API and Redux Toolkit for global state management.

I used Context API to manage and persist the light/dark theme. I created a Redux store with separate products and cart slices. The products slice manages search, categories, sorting, request status, and API data. The cart slice manages adding and removing products, quantities, totals, persistence, and the cart drawer.

I used `createAsyncThunk` to fetch products from an external API and implemented pending, fulfilled, and rejected states with loading skeletons, results, error feedback, and retry behavior.

Through this project, I learned when simple Context state is appropriate and when Redux Toolkit is more useful for complex state, derived values, and asynchronous workflows.
