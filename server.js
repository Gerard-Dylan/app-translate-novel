import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3001;

const DEEPL_API_KEY = process.env.DEEPL_API_KEY;


app.use(cors());
app.use(express.json());

app.post('/translate', async (req, res) => {
    const { text, targetLang } = req.body;

    try {
        const response = await axios.post('https://api-free.deepl.com/v2/translate', null, {
            params: {
                auth_key: DEEPL_API_KEY,
                text,
                target_lang: targetLang,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Erreur serveur proxy :', error.response?.data || error.message);
        res.status(500).json({ error: 'Erreur lors de la traduction' });
    }
});

app.listen(port, () => {
    console.log(`Serveur proxy démarré sur http://localhost:${port}`);
});
