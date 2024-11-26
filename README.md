# AccelPro Express API

This is an Express.js application for managing sport goods inventory.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v20 or later)
- npm (comes with Node.js)
- MongoDB
- docker

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/coder7475/sports-backend.git
   cd sports-backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:

   ```
   NODE_ENV=development
   PORT=5003
   DATABASE_URL=mongodb+srv://your-username:your-password@your-cluster-url/sport-goods?retryWrites=true&w=majority
   ```

   Replace the `DATABASE_URL` with your actual MongoDB connection string.

4. Start the server:

   ```
   npm run dev
   ```

5. Run in production mode with docker

first build the image:

```bash
docker build -t node-backend:8 .
```

Run the image

```bash
docker run -d --env-file .env -p 5003:5003 node-backend:8
```

The server should now be running on `http://localhost:5003`.

## API Endpoints

- `GET /api/v1/products`: Get all products
- `POST /api/v1/products`: Create a new product
- `GET /api/v1/products/:id`: Get a specific product
- `PUT /api/v1/products/:id`: Update a product
- `DELETE /api/v1/products/:id`: Delete a product
- `GET /api/v1/products?name=<searchTerm>`: Search products by name
- `GET /api/v1/products?category=<val>&price=<val>&brand=<val>&rating=<val>`: Filter products by category, price, brand, and rating
- `GET /api/v1/products?sort=<asc/desc>`: Sort products in ascending or descending order

## Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
