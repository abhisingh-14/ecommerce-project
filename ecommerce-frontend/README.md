# E-Commerce Web Application

A modern, responsive e-commerce web application built with **React**, **Vite**, and **React Router**. This project offers a full online shopping experience including product browsing, shopping cart management, flexible delivery selection, and order history tracking.

---

## 🚀 Features

- **Product Catalog (`/`)**: Browse products with dynamic pricing, customer ratings, quantity selection, and search header.
- **Cart & Checkout (`/checkout`)**:
  - Review items added to the cart.
  - Choose between multiple shipping options (Free, Standard, Express).
  - Live cost calculation breakdown (Items subtotal, shipping & handling, estimated tax, and order total).
- **Orders History (`/orders`)**: View past order summaries, delivery dates, and purchased item cards with re-order capabilities.
- **Order Tracking (`/tracking`)**: Interface to track package shipment progress.
- **Responsive Layout**: Designed for seamless usage across both mobile devices and desktop screens.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 19](https://react.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Build Tool & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS with modular stylesheet organization
- **Linting**: [ESLint](https://eslint.org/)

---

## 📁 Project Structure

```text
ecommerce-project/
├── public/                # Static assets (product images, logo, icons)
├── src/
│   ├── pages/             # Page components & styles
│   │   ├── HomePage.jsx
│   │   ├── CheckoutPage.jsx
│   │   ├── OrdersPage.jsx
│   │   └── Tracking.jsx
│   ├── startingcode/      # Mock backend datasets & initial data
│   │   ├── backend/       # JSON mock data (cart, orders, delivery options, products)
│   │   └── data/          # Product dataset JavaScript utilities
│   ├── App.jsx            # Application routing configuration
│   ├── main.jsx           # React application entry point
│   ├── App.css            # Component-level styles
│   └── index.css          # Global design tokens and base styles
├── index.html             # Main HTML document
├── package.json           # Scripts and dependencies
└── vite.config.js         # Vite configuration
```

---

## 📦 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) and `npm` installed on your machine.

### Installation

1. **Clone or open the repository**:
   ```bash
   cd ecommerce-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with HMR (Hot Module Replacement). |
| `npm run build` | Builds the app for production to the `dist` folder. |
| `npm run preview` | Previews the built production app locally. |
| `npm run lint` | Runs ESLint to check for code quality and formatting issues. |

---

## 📄 License

This project is for educational and portfolio demonstration purposes.
