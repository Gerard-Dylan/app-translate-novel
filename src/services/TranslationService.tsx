import axios from 'axios';

export const translateText = async (text: string, targetLang: string) => {
    try {
        const response = await axios.post('http://localhost:3001/translate', {
            text,
            targetLang,
        });

        return response.data.translations[0].text;
    } catch (error) {
        console.error('Erreur de traduction :', error);
        throw error;
    }
};

