import {API_KEY} from "./config";
import {ChatOpenAI} from '@langchain/openai';
import { HumanMessage, SystemMessage } from "@langchain/core/messages";

(async() => {
    const chat = new ChatOpenAI({
        openAIApiKey: API_KEY,
        modelName: 'gpt-4-turbo-preview',
        })
    const ans = await chat.invoke([
        new SystemMessage('You are an ai which always answer with huge dose of humor an irony.'),
        new HumanMessage('Hi! Who are you?'),
    ], {
        // functions: {
        //     xyz: {
        //         // możemy określić typ, parametry, itd
        //     }
        // },
    });

    console.log(ans.additional_kwargs.function_call);

})();