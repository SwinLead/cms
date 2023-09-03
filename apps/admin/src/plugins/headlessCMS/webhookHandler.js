// headlessCmsPlugins/webhookHandler.js
import axios from "axios";

export const sendWebhook = async (data) =>
{
    try
    {
        const webhookUrl =
            "https://www.swinlead.org/api/revalidate?secret=a5eaa4a262e0db92314affc0a81eaa8d07cb62d00c5c6807";
        const response = await axios.post(webhookUrl, data);
        console.log("Webhook response:", response.data);
    } catch (error)
    {
        console.error("Error sending webhook:", error);
    }
};
