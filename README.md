### 🚨 AJUDE UM PARCEIRO DEV 🚨
**PIX/CNPJ:** 24.811.012/0001-64

Preciso de ajuda para regularizar minha situação com o **MEI**.
Tenho parceladas atrasadas e guias atuais em atraso totalizando quase 1000,00. 
Qualquer ajuda é bem-vinda. 🙏

#### 🚨 ESTÁGIO 🚨
Vou concluir a faculdade este ano e estou a procura de estágio na área. [LinkedIn](https://www.linkedin.com/in/wevertoncamposdev)


<hr>

# Documenting OpenAI Requests
<p align="justify">
Um registro documental das suas perguntas e respostas obtidas em um determinado tema de estudo ou área de interesse. É uma forma de criar um arquivo de informações relevantes e úteis para referências futuras e aprimoramento contínuo do seu conhecimento. Alguns termos que podem descrever essa prática são "anotações de estudo", "diário de aprendizado" ou "registro de perguntas e respostas".

Com a API da OpenAI, você pode conversar com o chatGPT pelo terminal e salvar automaticamente todas as conversas em um arquivo para fácil acesso posterior. Isso permite que você se concentre na conversa e na construção de ideias, enquanto tudo é documentado em segundo plano.
<p>

<hr>

# Configurando o Ambiente

## Cadastro na OpenAI

Faça seu cadastro na plataforma da  [OpenAI](https://platform.openai.com/account/). Lá você vai obter todos os dados necessários para o acesso a API.

##  Clonando o respositório
 
Clonando o respositório em ser servidor local:

``` shell
git clone https://github.com/wevertoncamposdev/documenting_openai_requests.git

cd documenting_openai_requests
```

## Instalando as dependências

Este projeto utiliza NodeJs, então você precisar instalar em seu ambiente o **nodejs** e o gerenciador de pacotes **npm**. [Nodejs](https://nodejs.org/en/download)

``` shell
npm install
```

## Configurando as variaveis de ambiente
Crie o arquivo .env contendo as suas variaveis de acesso da **OpenAI** API 

``` shell
ORG_ID="your_organization_id"
OPENAI_API_KEY="your_api_key"
```

## Iniciando uma conversa

``` shell
node index.js
```
Insira um nome para gerar o arquivo, esse nome será o nome do arquivo que será salvo em **./doc** e será o título da sua conversa. Agora **Divirta-se!**

## Lista de comandos

* **exit**: para finalizar a conversa
