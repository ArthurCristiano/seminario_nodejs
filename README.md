# CRUD de Pessoas com Node.js e PostgreSQL

Esta aplicação foi desenvolvido para realizar operações de **CRUD** para um cadastro de Pessoas.  
A aplicação foi desenvolvida utilizando **Node.js**, **Express** para o servidor e **PostgreSQL** como banco de dados.

---

## ⚙️ Tecnologias Utilizadas
- **Node.js**: Ambiente de execução do JavaScript no servidor.
- **Express.js**: Framework para criação do servidor e gerenciamento de rotas.
- **PostgreSQL**: Banco de dados relacional para armazenamento dos dados.
- **node-postgres (pg)**: Driver para a conexão entre o Node.js e o PostgreSQL.
- **dotenv**: Para gerenciamento de variáveis de ambiente.
- **nodemon**: Para reiniciar o servidor automaticamente durante o desenvolvimento.

---

## 📂 Estrutura de Pastas
O projeto está organizado da seguinte forma para separar as responsabilidades:

```
/crud-pessoas
|-- /src
|   |-- /controllers    // Contém a lógica de negócio da aplicação.
|   |-- /database       // Configuração da conexão com o banco de dados.
|   |-- /routes         // Definição dos endpoints.
|   |-- app.js          // Arquivo de configuração do Express.
|   |-- server.js       // Arquivo que inicia o servidor.
|-- .env                // Arquivo para variáveis de ambiente.
|-- package.json        // Dependências e scripts do projeto.
```

---

## 🚀 Configuração do Ambiente

### Pré-requisitos
- **Node.js** 
- **NPM** 
- **PostgreSQL**

### Intalação das Dependências
```bash
npm install
npm install express pg dotenv
npm install nodemon -D
```

### Configuração do Banco de Dados
```sql

-- Criação da tabela 'pessoas'
CREATE TABLE pessoas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    rua VARCHAR(255),
    numero VARCHAR(20),
    complemento VARCHAR(100),
    bairro VARCHAR(100),
    cep VARCHAR(9),
    cidade VARCHAR(100),
    estado VARCHAR(2)
);
```

### Configuração das Variáveis de Ambiente
Crie um arquivo chamado **.env** na raiz do projeto:

```env
# Credenciais do Banco de Dados
DB_HOST=localhost
DB_PORT=5432
DB_USER=USER
DB_PASSWORD=PASSWORD
DB_DATABASE=BASE_DADOS
PORT=3333
```

---

## 📖 API Endpoints

| Método | Endpoint       | Descrição                      
|--------|---------------|--------------------------------|
| POST   | `/pessoas`    | Cria uma nova pessoa           |
| GET    | `/pessoas`    | Lista todas as pessoas         |
| GET    | `/pessoas/:id`| Busca uma pessoa pelo ID       |
| PUT    | `/pessoas/:id`| Atualiza os dados de uma pessoa|
| DELETE | `/pessoas/:id`| Deleta uma pessoa pelo ID      |

### Exemplo de Body para **POST** e **PUT**:
```json
{
  "nome": "Arthur Cristiano",
  "cpf": "000.000.000-04",
  "telefone": "(11) 98765-4321",
  "rua": "Rua Da Minha Casa",
  "numero": "123",
  "complemento": "Apto 4B",
  "bairro": "Centro",
  "cep": "12345-678",
  "cidade": "Pato Branco",
  "estado": "PR"
}
```
