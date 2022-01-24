														CRIAÇÃO DE UMA CONTA:


PARA CRIAR UMA CONTA, O USUÁRIO DEVE ESTAR NA ROTA /signup, e usar os seguintes comandos: 
	{
		"email": "bla@hotmail.com",
		"password": "123456",
		"name": "Bla"
	}

CASO DER CERTO, RETORNARÁ O STATUS 201 CREATED, COM O SEGUINTE RETORNO: 
	{
		"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJsYUBob3RtYWlsLmNvbSIsImlhdCI6MTY0Mjk4ODMwMSwiZXhwIjoxNjQyOTkxOTAxLCJzdWIiOiIxMCJ9.NF3L1Z6AyqgoE-oYpVxtloybkQsCeJSBy8UH0eyuu04",
		"user": {
			"email": "bla@hotmail.com",
			"name": "Bla",
			"id": 10
		}
	}


CASO O EMAIL JA EXISTA, RETORNARÁ O STATUS 400 BAD REQUEST, COM O SEGUINTE RETORNO: "Email already exists"


												   		FAZENDO LOGIN


PARA FAZER LOGIN, O USUÁRIO DEVE ESTAR NA ROTA /login, e usar os seguintes comandos:
	{
		"email": "bla@hotmail.com",
		"password": "123456"
	}

CASO DER CERTO, RETORNARÁ O STATUS 200 OK, COM O SEGUINTE RETORNO:
	{
		"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJsYUBob3RtYWlsLmNvbSIsImlhdCI6MTY0Mjk4ODM0MiwiZXhwIjoxNjQyOTkxOTQyLCJzdWIiOiIxMCJ9.7z0orZhp_deStr9wJ7GFAq3pOs-JDHyj_aZamqtZQF4",
		"user": {
			"email": "bla@hotmail.com",
			"name": "Bla",
			"id": 10
		}
	}
	
CASO O EMAIL NÃO EXISTIR, RETORNARÁ O STATUS 400 BAD REQUEST, COM O SEGUINTE RETORNO: "Cannot find user" ou "Email format is invalid"
CASO A SENHA ESTIVER INCORRETA, RETORNARÁ O STATUS 400 BAD REQUEST, COM O SEGUINTE RETORNO: "Incorrect password"


										 					PRODUTOS
												  
  
PARA MOSTRAR OS PRODUTOS, NECESSITA ESTAR LOGADO E COM AUTENTICAÇÃO BEARER, E ENTÃO ESTAR NA ROTA /products, CASO DER CERTO, O STATUS SERÁ (200 OK), COM O SEGUINTE RETORNO:
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


															CARRINHO

PARA ADICIONAR UM PRODUTO NO CARRINHO, DEVE ESTAR LOGADO E COM AUTENTICAÇÃO BEARER, E ENTÃO ESTAR NA ROTA /cart?userId=10, CASO DER CERTO, O STATUS SERÁ (201 CREATED) 
	{
		"id": 54,
		"name": "McShake Ovomaltine",
		"category": "Bebidas",
		"price": 4.99,
		"img_url": "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
		"userId": 10,
		"amount": 1
	}

E O RETORNO SERÁ: 
	{
		"id": 54,
		"name": "McShake Ovomaltine",
		"category": "Bebidas",
		"price": 4.99,
		"img_url": "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
		"userId": 10,
		"amount": 1
	}

PARA PEGAR UM PRODUTO NO CARRINHO, DEVE ESTAR LOGADO E COM AUTENTICAÇÃO BEARER, E ENTÃO ESTAR NA ROTA /cart?userId=10, CASO DER CERTO, O STATUS SERÁ (200 OK), E TERÁ O SEGUINTE RETORNO:
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

CASO DER ERRADO, É PORQUE NÃO ESTÁ PASSANDO A AUTENTICAÇÃO BEARER OU NÃO POSSUI NENHUM PRODUTO NO CARRINHO

PARA DELETAR UM PRODUTO DO CARRINHO, DEVE ESTAR LOGADO E COM AUTENTICAÇÃO BEARER, E DEVE PASSAR COMO QUERY PARAMS, O ID DO PRODUTO, E ENTÃO ESTAR NA ROTA /cart/54, CASO DER CERTO, O STATUS SERÁ (200 OK)

CASO DER ERRADO É PORQUE O ID DO PRODUTO NÃO PERTENCE A ESTE USUÁRIO, E RETORNARÁ O ERRO (401 UNAUTHORIZED), COM A SEGUINTE MENSAGEM: "Cannot read property 'userId' of undefined"


PARA ATUALIZAR UM PRODUTO NO CARRINHO, DEVE ESTAR LOGADO E COM AUTENTICAÇÃO BEARER, E DEVE PASSAR COMO QUERY PARAMS, O ID DO PRODUTO, E ENTÃO ESTAR NA ROTA /cart/54, CASO DER CERTO, O STATUS SERÁ (200 OK)
	{
		"id": 55,
		"name": "McShake Ovomaltine",
		"category": "Bebidas",
		"price": 4.99,
		"img_url": "https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png",
		"userId": 10,
		"amount": 5
	}

CASO O ID ESTEJA DIFERENTE, RETORNARÁ O STATUS (401 UNAUTHORIZED), E RETORNARÁ A SEGUINTE MENSAGEM: "Cannot read property 'userId' of undefined"