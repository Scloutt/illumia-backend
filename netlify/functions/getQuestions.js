exports.handler = async (event) => {
  const topic = event.queryStringParameters.topic;

  const questions = {
    "Cell Structure": [
      "What is the function of the mitochondria?",
      "Name the parts of a plant cell.",
      "What is the role of ribosomes?"
    ],
    "Enzymes": [
      "What is an enzyme?",
      "How does temperature affect enzyme activity?",
      "What is the active site?"
    ]
  };

  return {
    statusCode: 200,
    body: JSON.stringify({
      topic,
      questions: questions[topic] || ["No questions found for this topic."]
    })
  };
};
