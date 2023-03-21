const { Configuration, OpenAIApi } = require("openai");
const readline = require('readline');
const dotenv = require('dotenv').config();
const fs = require('fs');

const configuration = new Configuration({
  organization: process.env.ORG_ID,
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getInput(prompt, file) {
  return new Promise((resolve) => {
    rl.question(prompt, file, (input) => {

      if (input === 'exit') {

        fs.appendFileSync(file, "**Pergunta:** " + input + "\n\n" + `**Resposta:** Goodbye!\n\n ${new Date(Date.now())} <hr/>\n `, function (err) {
          if (err) throw err;
        });

        console.log("Goodbye!");
        process.exit();
      }

      fs.appendFileSync(file, "**Pergunta:** " + input + "\n\n", function (err) {
        if (err) throw err;
      });
      
      resolve(input);
    });
  });
}

async function chatGPT(question, file) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: question }],
  });

  fs.appendFileSync(file, "**Resposta:** " + completion.data.choices[0].message.content + "\n\n", function (err) {
    if (err) throw err;
  });

  return completion.data.choices[0].message.content;
}

async function main(file) {
  console.log(file)
  let question = await getInput("Pergunta: ", file);
  let answer = await chatGPT(question, file);
  console.log("Resposta:", answer);

  while (true) {

    question = await getInput("\nPergunta: ", file);
    answer = await chatGPT(question, file);
    console.log("Resposta:", answer);

  }
}

rl.question('Digite o nome do arquivo: ', (filename) => {
  
  const file = "doc/" + filename + ".md";
  const title = filename.charAt(0).toUpperCase() + filename.slice(1)

  fs.appendFileSync(file, `\n## Nova conversa sobre: ${title}\n ${new Date(Date.now())}\n\n`, (err) => {
    if (err) throw err
  });

  main(file);
});