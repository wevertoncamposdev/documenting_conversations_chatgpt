
## Nova conversa sobre: Debugging NodeJS
 Wed Mar 22 2023 21:36:42 GMT-0300 (Horário Padrão de Brasília)

**Pergunta:** Como fazer debug no nodejs usando o vscode?

**Resposta:** 

Para fazer debug no Node.js usando o VS Code, siga os seguintes passos:

1. Abra o arquivo JavaScript que pretende debugar no VS Code.
2. Adicione um breakpoint na linha onde deseja iniciar o debug, clicando no lado direito da linha ou pressionando F9.
3. Pressione F5 ou acesse o menu de debug e selecione "Iniciar depuração" (Start Debugging).
4. O VS Code abrirá uma nova janela do terminal e iniciará o programa no modo de depuração, parando no ponto de interrupção que você definiu.
5. Na barra lateral esquerda do VS Code, você encontrará o painel de depuração. Ali, é possível dar passos para frente e para trás, bem como inspecionar variáveis e executar comandos no console.

Observação: certifique-se de ter adicionado o arquivo que está sendo executado ao seu diretório de trabalho no VS Code. Caso contrário, o programa não será encontrado no modo de depuração.

**Pergunta:** Algumas das outras ferramentas úteis de depuração disponíveis no VS Code para depuração de aplicativos Node.js são:

**Resposta:** 

1. Breakpoints: permitem definir pontos de interrupção no código, para que a execução pare em um determinado momento e permita a análise do estado das variáveis ​​e das informações disponíveis naquele momento.

2. Watch expressions: permitem monitorar variáveis ​​ao longo do tempo, para que possa ver como seus valores mudam à medida que o programa executa. É possível definir expressões que examinam estados de objetos, estruturas de dados, etc.

3. Console: permite executar comandos JavaScript no contexto do código em execução, para que possa experimentar e testar hipóteses em tempo real.

4. Eventos: fornece informações sobre eventos durante a execução de um programa. Você pode definir eventos personalizados para coletar informações específicas para ajudar a depurar um problema.

5. Integração do TypeScript: permite trabalhar com TypeScript em conjunto com Node.js. O VS Code oferece suporte à compilação TypeScript em tempo real e a depuração do código gerado.

6. Terminal integrado: permite abrir um terminal para executar comandos de linha de comando, o que é especialmente útil para depuração de aplicativos em execução.

7. Extensões do VS Code: há inúmeras extensões no mercado que adicionam recursos de depuração adicionais, como a extensão Node Debug 2.0, que adiciona recursos avançados para depuração de aplicativos Node.js.

**Pergunta:** Como posso usar uma depuração no vscode que recebe uma requisição do navegador para avaliar os caminhos do projeto e os dados recebidos do navegador? 

**Resposta:** 

Você pode usar o depurador do VSCode para avaliar a requisição do navegador e os dados recebidos em seu projeto. Para isso, você precisa seguir os seguintes passos:

1. Instalar a extensão "Debugger for Chrome" no VSCode.
2. Iniciar o servidor local do seu projeto.
3. Abrir o Chrome e visitar a URL do servidor local.
4. Abrir o VSCode e clicar no ícone "Debug" na barra lateral esquerda.
5. Clicar no botão "Criar arquivo launch.json" e selecionar "Chrome".
6. Ajustar as configurações de depuração como necessário.
7. Clicar em "Iniciar Depuração" e seguir as instruções.

A partir deste ponto, o VSCode abrirá o Chrome e permitirá que você depure o código enquanto recebe e avalia a requisição do navegador. Você pode usar as informações fornecidas pelo depurador para identificar problemas com o caminho do projeto ou com os dados recebidos do navegador.

**Pergunta:** exit

**Resposta:** Goodbye!

 Wed Mar 22 2023 23:20:07 GMT-0300 (Horário Padrão de Brasília) <hr/>
 
 https://learn.microsoft.com/pt-br/training/browse/