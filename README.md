# Inventory Management System

`User API`: http://localhost:5000/api/v1/user

```
{
    "_id": "01",
    "username": "Dummy User",
    "email": "dummy@xyz.com",
    "role": "customer",
    "profileInfo": [],
    "createdAt": "2024-04-20T05:39:14.945Z",
    "updatedAt": "2024-04-20T05:39:14.945Z",
}
```

`Product API`: http://localhost:5000/api/v1/product

```
{
    "_id": "01",
    "name": "Laptop",
    "description": "High-performance laptop with SSD storage",
    "category": "Electronics",
    "batchNumber": "BATCH123",
    "expiryDate": "2025-12-31T00:00:00.000Z",
    "purchasePrice": 800,
    "salePrice": 1200,
    "stockQuantity": 50,
    "stockLimit": 100,
    "minimumStockLimit": 20,
    "warehouseLocation": "Warehouse A",
    "supplier": "Tech Supplies Inc",
    "createdAt": "2024-04-20T07:08:45.814Z",
    "updatedAt": "2024-04-20T09:40:24.116Z",
}
```

`Feedback API`: http://localhost:5000/api/v1/feedback

```
{
    "_id": "01",
    "customer": {
        "_id": "01",
        "username": "Dummy User",
        "email": "dummy@xyz.com",
        "role": "customer",
        "profileInfo": [],
        "createdAt": "2024-04-20T05:39:14.945Z",
        "updatedAt": "2024-04-20T05:39:14.945Z",
    },
    "feedback": "Great product! Excellent quality and fast delivery.",
    "createdAt": "2024-04-20T05:52:39.211Z",
    "updatedAt": "2024-04-20T05:52:39.211Z",
}
```

`Order API`: http://localhost:5000/api/v1/order

```
{
    "_id": "01",
    "customer": {
        "_id": "01",
        "username": "Dummy User",
        "email": "dummy@xyz.com",
        "role": "customer",
        "profileInfo": [],
        "createdAt": "2024-04-20T05:39:14.945Z",
        "updatedAt": "2024-04-20T05:39:14.945Z",
        "__v": 0
    },
    "products": [
        {
            "product": null,
            "quantity": 20,
            "_id": "662361d45159d41c067ea797"
        }
    ],
    "status": "shipped",
    "shippingAddress": "567 Maple St, Countryside",
    "billingAddress": "567 Maple St, Countryside",
    "paymentMethod": "Bank Transfer",
    "totalAmount": 899.99,
    "isPaid": true,
    "createdAt": "2024-04-20T06:33:56.754Z",
    "updatedAt": "2024-04-20T06:33:56.754Z",
    "__v": 0
}
```
# Inventory-Managment-Project_470
# Inventory-Managment-System-Server_470
