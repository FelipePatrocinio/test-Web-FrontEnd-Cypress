# test-Web-FrontEnd-Cypress
Testes de regressão com Cypress

Segue um passo a passo para instalar o Cypress e seus requisitos:

Passo 1: Verifique se você atende aos requisitos mínimos para instalar o Cypress. São eles:

Um sistema operacional suportado (Windows, macOS ou Linux)
Node.js versão 12 ou superior
NPM (Node Package Manager) instalado
Passo 2: Abra o terminal ou prompt de comando.

Passo 3: Crie uma nova pasta para o projeto e navegue até essa pasta usando o comando cd seguido do caminho da pasta. Por exemplo:

$ mkdir meu-projeto
$ cd meu-projeto
Passo 4: Inicialize um novo projeto Node.js executando o seguinte comando:

$ npm init -y
Esse comando irá criar um novo arquivo package.json na pasta do seu projeto.

Passo 5: Instale o Cypress usando o comando:

$ npm install cypress --save-dev
Esse comando irá instalar o Cypress e suas dependências localmente no seu projeto, e também atualizará o arquivo package.json com as informações necessárias.

Passo 6: Após a conclusão da instalação, o Cypress estará disponível na pasta node_modules/.bin. Para facilitar o uso do Cypress, adicione a pasta .bin ao seu caminho de execução, executando o seguinte comando:

$ export PATH="$PATH:./node_modules/.bin"
No Windows, você pode usar o seguinte comando:

$ setx PATH "%PATH%;%cd%/node_modules/.bin"
Passo 7: Para abrir o Cypress pela primeira vez e configurar seu projeto, execute o seguinte comando:

$ npx cypress open
Isso abrirá a interface gráfica do Cypress e gerará a estrutura básica de arquivos em um diretório chamado cypress na raiz do seu projeto.

Passo 8 (opcional): Se quiser realizar testes em navegadores específicos, você precisa instalar os navegadores desejados. O Cypress suporta automaticamente a execução de testes no Chrome, mas você pode adicionar suporte para outros navegadores, como Firefox, seguindo as instruções disponíveis na documentação oficial do Cypress.

Pronto! Você agora tem o Cypress instalado em seu projeto e pode começar a escrever seus testes automatizados.
