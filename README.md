SauceDemo Playwright Automation

Projeto de automação de testes End-to-End (E2E) desenvolvido com Playwright para validação dos principais fluxos da aplicação SauceDemo.

Tecnologias Utilizadas
Playwright
JavaScript/TypeScript
Node.js
Dotenv
Estrutura dos Testes
Suite 1: Tela de Login

Esta suíte contempla os cenários relacionados à autenticação de usuários.

Cenários Automatizados
✅ Usuário realizando Login
✅ Login com Sucesso
✅ Login com usuário bloqueado (Locked User)
✅ Login com senha incorreta
Suite 2: Tela de Produto e Carrinho

Esta suíte valida o fluxo completo de compra dentro da aplicação.

Cenário Automatizado
✅ Adicionando produto ao carrinho
✅ Finalizando a compra com sucesso

***Configuração do Ambiente***

Instalação

npm install

***Configuração das Variáveis de Ambiente***

Este projeto utiliza um arquivo .env para armazenar informações sensíveis e configurações de execução.

Por questões de segurança, o arquivo .env não é versionado no repositório e está listado no .gitignore.

Foi disponibilizado um arquivo: .env.example

contendo apenas a estrutura das variáveis necessárias para execução dos testes, utilizando valores fictícios.

Antes de executar os testes, crie um arquivo .env com seus próprios dados utilizando o .env.example como referência.

***Executando os Testes***

Executar todos os testes:  
npx playwright test

Executar uma suíte específica:
npx playwright test "Tela de Login"

***Boas Práticas Aplicadas***

Separação dos testes por suíte funcional.
Utilização de variáveis de ambiente para dados sensíveis.
Versionamento seguro através do .gitignore.
Estrutura preparada para manutenção e escalabilidade dos testes.
Cobertura dos principais fluxos críticos da aplicação.

***Autor: João Freire da Silva***
 Projeto: SauceDemo Playwright Automation Framework 🚀