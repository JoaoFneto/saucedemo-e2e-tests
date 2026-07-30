![Playwright](https://img.shields.io/badge/Playwright-Latest-2EAD33?style=for-the-badge&logo=playwright)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Dotenv](https://img.shields.io/badge/Dotenv-Environment%20Variables-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
![Git](https://img.shields.io/badge/Git-Version%20Control-F05032?style=for-the-badge&logo=git&logoColor=white)

SauceDemo Playwright Automation
Projeto de automação de testes End-to-End (E2E) utilizando Playwright para validação dos principais fluxos da aplicação SauceDemo.

Índice
#sobre-o-projeto
#tecnologias-utilizadas
#estrutura-do-projeto
#cobertura-de-testes
#configuração-do-ambiente
#execução-dos-testes
#boas-práticas-aplicadas
Sobre o Projeto
Este projeto foi desenvolvido com o objetivo de demonstrar conhecimentos em Automação de Testes E2E utilizando Playwright.

A automação contempla fluxos críticos da aplicação SauceDemo, validando autenticação de usuários, tratamento de erros de login e o processo completo de compra.

Objetivos
Demonstrar conhecimento em automação de testes web.
Aplicar boas práticas de organização e manutenção de testes.
Validar cenários positivos e negativos.
Construir um projeto de portfólio para Quality Assurance.
Tecnologias Utilizadas
Playwright
JavaScript
Node.js
Dotenv
Git
GitHub
Estrutura do Projeto
saucedemo-playwright-automation/
│ 

├── tests/
│   
├── login.spec.js
│  
└── cart.spec.js
│
├── pages/
│
├── utils/
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.js
└── README.md
Cobertura de Testes
Suite 1 - Tela de Login
Validação dos fluxos de autenticação do usuário.

Cenários Automatizados
Usuário realizando Login
Login com Sucesso
Login com Usuário Locked
Login com Senha Incorreta

Suite 2 - Tela de Produto e Carrinho
Validação do fluxo de compra da aplicação.

Cenários Automatizados
Adicionando produto ao carrinho
Finalizando compra com sucesso

Configuração do Ambiente
Clonar o Repositório
git clone https://github.com/JoaoFneto/saucedemo-e2e-tests.git

cd saucedemo-e2e-tests
Instalar Dependências
npm install
Instalar Navegadores do Playwright
npx playwright install
Variáveis de Ambiente
Este projeto utiliza variáveis de ambiente para armazenar informações de configuração.

Por questões de segurança:
O arquivo .env está listado no .gitignore.
O arquivo .env não é enviado para o GitHub.

Foi disponibilizado um arquivo .env.example contendo apenas valores fictícios.
Exemplo:
BASE_URL=https://www.saucedemo.com
USERNAME=standard_user
PASSWORD=password_exemplo
Antes de executar os testes, crie um arquivo .env baseado no .env.example e informe seus próprios dados.

**Execução dos Testes**

npx playwright test

**Abrir relatório Playwright**

npx playwright show-report

**Boas Práticas Aplicadas**

Organização dos testes por suítes funcionais.
Utilização de variáveis de ambiente.
Proteção de dados sensíveis através do .gitignore.
Separação da lógica de teste.
Cenários positivos e negativos.
Código preparado para manutenção e escalabilidade.
Estrutura adequada para projetos de automação em Playwright.

Autor
João Freire da Silva
QA Automation Engineer

GitHub: https://github.com/JoaoFneto

Desenvolvido para fins de estudo, prática e demonstração de habilidades em Automação de Testes.
