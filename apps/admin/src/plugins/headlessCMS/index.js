// headlessCmsPlugins/index.js
import webhookPlugin from "./webhookPlugin";

export default () =>
{
    return [
        webhookPlugin(),
    ];
};