# sports-backend

main route: /api/v1/

## Product:

- /products [GET] - get all products
  - /products?name=<searchTerm> - searchByName
  - /products?category=<val>&price=<val>&brand=<val>&rating=<val>
  - /products?sort=<asc/dsc> - sort by ascending or descending order (asc/des)
- /products/:id [GET] - find a product
- /products [POST] - create a product
- /products/:id [PATCH] - update a product
- /products/:id [DELETE] - Delete a product
