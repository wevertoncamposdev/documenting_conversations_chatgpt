##### Ajude um parceiro DEV

Preciso de ajuda para regularizar minha situação com o **MEI**, tenho guias parceladas e guias em atraso. Qualquer ajuda é bem-vinda. 

**PIX/CNPJ:** 24.811.012/0001-64

<hr>

# Documenting OpenAI Requests
<p align="justify">
Um registro documental das suas perguntas e respostas obtidas em um determinado tema de estudo ou área de interesse. É uma forma de criar um arquivo de informações relevantes e úteis para referências futuras e aprimoramento contínuo do seu conhecimento. Alguns termos que podem descrever essa prática são "anotações de estudo", "diário de aprendizado" ou "registro de perguntas e respostas".
 <p>


## Cadastro

Faça seu cadastro na plataforma da  [OpenAI](https://platform.openai.com/account/). Lá você vai obter todos os dados necessários para o acesso a API.

##  Clonando o respositório
 
Clonando o respositório em ser servidor local:

``` shell
git clone https://github.com/wevertoncamposdev/documenting_openai_requests.git

cd documenting_openai_requests
```

## Instalando as dependências

``` shell
npm install
```

## Configurando as variaveis de ambiente
Crie o arquivo .env contendo as suas variaveis de acesso da OpenAI API

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
