import axios from 'axios';

const API_BASE_URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : 'https://app-translate-novel.onrender.com';

export const translateText = async (text: string, targetLang: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/translate`, {
            text,
            targetLang,
        });

        return response.data.translations[0].text;
    } catch (error) {
        console.error('Erreur de traduction :', error);
        throw error;
    }
};
