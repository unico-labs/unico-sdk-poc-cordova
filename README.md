# unico-sdk-poc-cordova
POC de implementação do SDK Web Unico | Check em Cordova

## Instalação de dependências e execução do projeto
Para executar o projeto primeiro realize as instalações das dependências com o seguinte comando:

```
npm install
```

Após a instalação, é necessário subir um servidor node (porta deafault 4200):

```
npm start
```

Com isso a aplicação estará disponível para ser acessada via browser. Por padrão na seguinte URL: http://localhost:4200

## Configurações de credenciais na POC
A configuração do bundle gerado pelo portal da Unico deve ser colocado na camada nativa do projeto. Abaixo vou indicar os arquivos que precisam ser preenchidos.

Obs: caso os dados do bundle estejam incorretos, um erro de "unable to get unico authentication" ou "current host is not registred" pode ser disparado ao tentar abrir a camêra.

### Locais dos arquivos
Preencher os seguintes arquivos abaixo com o bundle gerado no portal da Unico:
* /src/assets/UnicoConfigDefault.json
* /src/assets/UnicoConfigLiveness.json
