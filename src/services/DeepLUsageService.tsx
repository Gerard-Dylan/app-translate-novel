import axios from 'axios';

const API_BASE_URL =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : 'https://app-translate-novel.onrender.com';

export const getDeepLUsage = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/deepl-usage`);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de l’usage DeepL:', error);
        return null;
    }
};
