const { Configuration, OpenAIApi } = require("openai");
const readline = require('readline');

const configuration = new Configuration({
  organization: "org-JHyFWljmE8BVYEvQnDB3OfuW",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function getInput(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(input);
    });
  });
}

async function chatGPT() {
  const question = await getInput("question? ");
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: question}],
  });

  return completion.data.choices[0].message.content;
}

async function chatLoop() {
  while (true) {
    chatGPT();
    const exit = await getInput("Type 'exit' to quit, or press Enter to ask another question: ");
    if (exit === "exit") {
      rl.close();
      break;
    }
  }
}

chatLoop();