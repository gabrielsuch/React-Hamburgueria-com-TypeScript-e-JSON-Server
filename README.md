## Projeto Front-end onde é realizado a simulação de uma compra em uma lanchonete. Contém cadastro, login, e permite ao usuário realizar a compra dos lanches, definir sua quantidade e pode também realizar a remoção destes lanches ou quantidade a qualquer momento.

### Pode demorar ao realizar um cadastro, pois está se conectando pela primeira vez na API.

### Link da página: https://burguerkenzie.vercel.app/

#

### LINK DA API: https://hamburgueriajsonserver.herokuapp.com/		
# 
<h1 style="text-align: center;">Cadastro</h1>

## POST /signup - Formato da Requisição

```json
{
	"email": "bla@hotmail.com",
	"password": "123456",
	"name": "Bla"
}
```

### Status 201 - Created:

```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJsYUBob3RtYWlsLmNvbSIsImlhdCI6MTY0Mjk4ODMwMSwiZXhwIjoxNjQyOTkxOTAxLCJzdWIiOiIxMCJ9.NF3L1Z6AyqgoE-oYpVxtloybkQsCeJSBy8UH0eyuu04",
	"user": {
		"email": "bla@hotmail.com",
		"name": "Bla",
		"id": 10
	}
}
```

### Status 400 - Bad Request:

```json
"Email already exists"
```

# 
<h1 style="text-align: center;">Login</h1>


## POST /login - Formato da Requisição

```json
{
	"email": "bla@hotmail.com",
	"password": "123456"
}
```

### Status 200 - OK:

```json
{
	"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJsYUBob3RtYWlsLmNvbSIsImlhdCI6MTY0Mjk4ODM0MiwiZXhwIjoxNjQyOTkxOTQyLCJzdWIiOiIxMCJ9.7z0orZhp_deStr9wJ7GFAq3pOs-JDHyj_aZamqtZQF4",
	"user": {
		"email": "bla@hotmail.com",
		"name": "Bla",
		"id": 10
	}
}
```

### Status 400 - Bad Request:

```json
"Incorrect password" or "Cannot find user" or "Email format is invalid"
```


# 
<h1 style="text-align: center;">Produtos</h1>

## GET /products - Formato da Requisição - Com Autenticação Bearer

<br>

### Status 200 - OK:

```json
[
	{
		"productId": 1,
		"name": "Hamburguer",
		"category": "Sanduíches",
		"price": 14,
		"img_url": "https://i.ibb.co/fpVHnZL/hamburguer.png",
		"amount": 1
	},
	{
		"productId": 2,
		"name": "X-Burguer",
		"category": "Sanduíches",
		"price": 16,
		"img_url": "https://i.ibb.co/djbw6LV/x-burgue.png",
		"amount": 1
	},
	{
		"productId": 3,
		"name": "Big Kenzie",
		"category": "Sanduíches",
		"price": 18,
		"img_url": "https://i.ibb.co/FYBKCwn/big-kenzie.png",
		"amount": 1
	},
	{
		"productId": 4,
		"name": "Fanta Guaraná",
		"category": "Bebidas",
		"price": 5,
		"img_url": "https://i.ibb.co/cCjqmPM/fanta-guarana.png",
		"amount": 1
	},
	{
		"productId": 5,
		"name": "Coca",
		"category": "Bebidas",
		"price": 4.99,
		"img_url": "https://i.ibb.co/fxCGP7k/coca-cola.png",
		"amount": 1
	},
	{
		"productId": 6,
		"name": "McShake Ovomaltine",
		"category": "Bebidas",
		"price": 4.99,
		"img_url": "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
		"amount": 1
	}
]
```


# 
<h1 style="text-align: center;">Carrinho</h1>


## POST /cart?userId=10 - Formato da Requisição - Com Autenticação Bearer

```json
{
	"id": 54,
	"name": "McShake Ovomaltine",
	"category": "Bebidas",
	"price": 4.99,
	"img_url": "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
	"userId": 10,
	"amount": 1
}
```

### Status 201 - Created:

```json
{
	"id": 54,
	"name": "McShake Ovomaltine",
	"category": "Bebidas",
	"price": 4.99,
	"img_url": "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
	"userId": 10,
	"amount": 1
}
```

#

## GET /cart?userId=10 - Formato da Requisição - Com Autenticação Bearer

<br>

### Status 200 - OK:

```json
[
	{
		"id": 54,
		"name": "McShake Ovomaltine",
		"category": "Bebidas",
		"price": 4.99,
		"img_url": "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
		"userId": 10,
		"amount": 1
	}
]
```

### Status 400 - Bad Request:
```json
"No Bearer Authentication" or "No products in Cart"
```

#

## PATCH /cart/10 - Formato da Requisição - Com Autenticação Bearer
```json
{
	"id": 55,
	"name": "McShake Ovomaltine",
	"category": "Bebidas",
	"price": 4.99,
	"img_url": "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
	"userId": 10,
	"amount": 5
}
```

### Status 200 - OK:
```json
"Product Updated"
```

### Status 401 - Unauthorized:
```json
"Cannot read property 'userId' of undefined"
```

### Status 404 - Not Found:
```json
"Product Not Found"
```

#

## DELETE /cart/10 - Formato da Requisição - Com Autenticação Bearer

<br>

### Status 200 - OK:
```json
"Product Deleted"
```

### Status 401 - Unauthorized:
```json
"Cannot read property 'userId' of undefined"
```

### Status 404 - Not Found:
```json
"Product Not Found"
```
