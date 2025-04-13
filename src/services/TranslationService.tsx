import axios from "axios";

const API_KEY = "YOUR_DEEPL_API_KEY";
const BASE_URL = "https://api-free.deepl.com/v2/translate";

export const translateText = async (text, targetLang) => {
    try {
        const response = await axios.post(BASE_URL, null, {
            params: {
                auth_key: API_KEY,
                text,
                target_lang: targetLang,
            },
        });
        return response.data.translations[0].text;
    } catch (error) {
        console.error("Erreur de traduction:", error);
        return null;
    }
};
