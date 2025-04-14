
import axios from 'axios';

export const getDeepLUsage = async () => {
    try {
        const response = await axios.get('https://api-free.deepl.com/v2/usage', {
            headers: {
                'Authorization': `DeepL-Auth-Key ${import.meta.env.VITE_DEEPL_API_KEY}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération de l’usage DeepL:', error);
        return null;
    }
};
