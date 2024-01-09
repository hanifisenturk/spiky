import OpenAI from 'openai';

export const revalidate = 0;

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo-1106',
    response_format: {type: 'json_object'},
    messages: [
      {
        role: 'user',
        content:
          'I would like you to generate five random questions about random topics. Each question should contain four options, and one of these options must be the correct. Please provide the output in JSON format. Questions should be in an Array of Objects, with each object containing the question, options and the correct answer. Options should be in an Array of Objects, with each object containing the option and a boolean value called is_correct to indicate whether it is the correct answer. The correct answer should be indicated by a boolean value of true. True option must be placed randomly in the options array. Every time you get the promp, you should generate different questions. Just return the output in JSON format. Do not add any additional text.',
      },
    ],
  });

  const response = JSON.parse(
    chatCompletion.choices[0].message.content as string,
  );

  return Response.json(response);
}
