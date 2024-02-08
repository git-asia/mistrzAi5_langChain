// import {HuggingFaceInference} from '@langchain/community/llms/hf';
// import {HUGGING_FACE_API_KEY} from "./config";
import {sayHelloPrompt} from "./prompts/say-hello.prompt";

// Hugging Face LLM's
// (async () => {
//     // Tworzymy model
//     const model = new HuggingFaceInference({
//         endpointUrl: 'https://nis5wwh2896n0io6.us-east-1.aws.endpoints.huggingface.cloud',
//         // model: 'meta-llama/Llama-2-70b-chat-hf',
//         apiKey: HUGGING_FACE_API_KEY,
//     });
//
//     console.log('Asking ...');
//     const text = await model.invoke('What language model are you?');
//     console.log(text);
// })();

// ! Taki zapis jest podatny na prompt injecton. To ma nam tylko pomóc w przechowywaniu promptów, a nie w zaezpieczeniu kodu.
(async () => {
    const text = await sayHelloPrompt.format({
        name: 'Jakub',
    });

    console.log(text);

})();