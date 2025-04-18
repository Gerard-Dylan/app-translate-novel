import axios from 'axios';

export const getDeepLUsage = async () => {
    try {
        const response = await axios.get('http://localhost:3001/deepl-usage');
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de l’usage DeepL:', error);
        return null;
    }
};
