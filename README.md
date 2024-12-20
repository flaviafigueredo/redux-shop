# Redux Shop

Redux Shop é um projeto criado com o objetivo de estudar e praticar o uso do Redux no gerenciamento de estado em uma aplicação React. A aplicação simula uma loja online simples, onde os usuários podem adicionar produtos ao carrinho, removê-los e visualizar a quantidade de produtos no carrinho.

## Funcionalidades

O usuário pode realizar as seguintes ações:

- Adicionar produtos ao carrinho

- Remover produtos do carrinho

- Visualizar a quantidade de produtos no carrinho: um ícone do carrinho no cabeçalho da aplicação exibe a quantidade total de produtos adicionados

- Navegar entre as páginas da home e do carrinho.

## Páginas:

- **Home**: Página inicial que exibe a lista de produtos disponíveis.

- **Carrinho**: Página que mostra os produtos adicionados ao carrinho.

## Tecnologias Utilizadas

- **JavaScript**: Linguagem principal usada no projeto.

- **React**: Biblioteca para construção da interface do usuário.

- **Redux**: Gerenciamento de estado global da aplicação.

- **Redux Toolkit**: Facilita a configuração e uso do Redux.

- **React Router**: Navegação entre as páginas da aplicação.

- **Vite**: Ferramenta para construção e desenvolvimento rápido de projetos front-end.

## Como Executar o Projeto

### Pré-requisitos:

Node.js instalado.

### Passos para rodar a aplicação:

Clone o repositório:

```bash
  git clone <link-do-repositório>
```

Instale as dependências:

```bash
  npm install
```

Inicie o servidor de desenvolvimento:

```bash
  npm run dev
```

Acesse a aplicação no navegador em: http://localhost:5173

## Estrutura do Projeto
```
src/
  components/
  json/
  pages/
  store/
    actions/
    reducers/
  App.jsx
```

## Conceitos Praticados

- Configuração de um store Redux usando configureStore.

- Criação de reducers para manipular o estado global.

- Definição de actions para alterar o estado do Redux.

- Uso do useSelector e useDispatch para conectar os componentes ao estado global.

- Navegação com React Router.