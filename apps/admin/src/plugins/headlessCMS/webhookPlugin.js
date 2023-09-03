// headlessCmsPlugins/webhookPlugin.js
import { plugins } from "@webiny/plugins";
import { sendWebhook } from "./webhookHandler";

export default () =>
{
    plugins.register({
        type: "webiny-headless-cms-model",
        name: "webiny-headless-cms-model-webhook",
        async beforeCreate({ input })
        {
            // Customize this logic to check if the model is the one you want to trigger the webhook for.
            if (input.modelId === "events")
            {
                const webhookData = {
                    event: "content_saved",
                    contentId: input.id,
                    // Add more relevant data here.
                };
                await sendWebhook(webhookData);
            }
        },
    });
};
