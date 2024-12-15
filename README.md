# REST API com NestJS, Prisma e MySQL

Este projeto é uma API REST desenvolvida com **NestJS**, **Prisma** e **MySQL**, contendo dois módulos principais: **Users** (Usuários) e **Auth** (Autenticação). A API é equipada com encriptação de senhas utilizando a biblioteca **bcrypt** e geração de tokens para controle de acesso com **JWT** (JSON Web Token).

---

## **Funcionalidades**

1. **Users (Usuários):**
   - Cadastro de usuários.
   - Listagem de usuários.
   - Detalhes de um usuário por ID.
   - Atualização e exclusão de usuários.

2. **Auth (Autenticação):**
   - Login com validação de credenciais.
   - Geração de token JWT para autenticação.
   - Validação de token JWT para acesso às rotas protegidas.

---

## **Tabela de Endpoints do Módulo Users**

| Método | Endpoint   | Descrição                        | Payload / Parâmetro |
|---------|------------|------------------------------------|----------------------|
| POST    | `/users`   | Cria um novo usuário              | `username`, `email`, `password` |
| GET     | `/users`   | Lista todos os usuários           | - |
| GET     | `/users/:id` | Busca um usuário por ID          | `id` |
| PUT     | `/users/:id` | Atualiza os dados de um usuário   | `id`, dados parciais de usuário |
| DELETE  | `/users/:id` | Remove um usuário por ID         | `id` |

---

## **Configuração do Projeto**

### **1. Requisitos**

- Node.js (v16 ou superior)
- MySQL
- NestJS CLI

### **2. Configuração do Banco de Dados**

Certifique-se de ter o MySQL em funcionamento e configure o arquivo `.env` com as seguintes variáveis:

```env
DATABASE_URL=mysql://username:password@localhost:3306/database_name
JWT_SECRET=seu_segredo_para_jwt
```

### **3. Instalação**

Clone o repositório e instale as dependências usando o gerenciador de pacotes de sua preferência:

#### Usando npm
```bash
git clone <repo_url>
cd <repo_name>
npm install
```

#### Usando yarn
```bash
git clone <repo_url>
cd <repo_name>
yarn install
```

#### Usando pnpm
```bash
git clone <repo_url>
cd <repo_name>
pnpm install
```

Em seguida, gere as migrações e sincronize o banco de dados:

```bash
npx prisma migrate dev
```

### **4. Executando o Servidor**

Inicie o servidor de desenvolvimento:

#### Usando npm
```bash
npm run start:dev
```

#### Usando yarn
```bash
yarn start:dev
```

#### Usando pnpm
```bash
pnpm run start:dev
```

A API estará disponível em `http://localhost:3000`.

---

## **Endpoints**

### **Users Module**

#### **1. Criar um novo usuário**
- **POST** `/users`
- **Payload**:

```json
{
  "username": "exemplo",
  "email": "exemplo@email.com",
  "password": "senha123"
}
```

#### **2. Listar todos os usuários**
- **GET** `/users`

#### **3. Buscar usuário por ID**
- **GET** `/users/:id`

#### **4. Atualizar um usuário**
- **PUT** `/users/:id`
- **Payload**:

```json
{
  "username": "novo_nome",
  "email": "novo_email@email.com"
}
```

#### **5. Deletar um usuário**
- **DELETE** `/users/:id`

---

### **Auth Module**

#### **1. Login**
- **POST** `/auth/login`
- **Payload**:

```json
{
  "email": "exemplo@email.com",
  "password": "senha123"
}
```

- **Resposta**:

```json
{
  "accessToken": "token_jwt"
}
```

---

## **Tecnologias Utilizadas**

- **NestJS**: Framework para construção de aplicações Node.js.
- **Prisma**: ORM para manipulação do banco de dados.
- **MySQL**: Banco de dados relacional.
- **bcrypt**: Biblioteca para hash de senhas.
- **JWT**: Biblioteca para autenticação e autorização.

---

## **Fluxo da API**

### **Registro e Login**
1. O usuário faz o registro enviando seus dados para `/users`.
2. O login é feito com e-mail e senha em `/auth/login`.
3. Um token JWT é retornado e utilizado para autenticação em outras rotas.

### **Proteção de Rotas**
As rotas do módulo **Users** podem ser protegidas utilizando **Guards** com JWT.

---

## **Imagens Explicativas**

### **Diagrama de Módulos**

![Diagrama de Módulos](https://via.placeholder.com/800x400?text=Diagrama+de+M%C3%B3dulos)

### **Fluxo de Autenticação**

![Fluxo de Autenticação](https://via.placeholder.com/800x400?text=Fluxo+de+Autentica%C3%A7%C3%A3o)

---

## **Testes**

Inclua testes unitários para garantir a integridade da aplicação.

```bash
npm run test
```

---

## **Contribuição**

Contribuições são bem-vindas! Por favor, siga as diretrizes descritas no arquivo `CONTRIBUTING.md`.

---

## **Licença**

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
