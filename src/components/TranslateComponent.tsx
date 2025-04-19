import React, { useEffect, useState } from "react";
import TranslateUX from "./components/TranslateUX";
import { translateText } from "./services/DeepLService";


const TranslateComponent: React.FC = () => {
    const [text, setText] = useState<string>("");
    const [translatedText, setTranslatedText] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleTranslate = async () => {
        setError(null);


        try {
            setLoading(true);
            const result = await translateText(text, 'FR')
            setTranslatedText(result);
        } catch (err) {
            setError("Erreur lors de la traduction.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <TranslateUX
            text={text}
            translatedText={translatedText}
            loading={loading}
            error={error}
            setText={setText}
            handleTranslate={handleTranslate}

        />
    );
};

export default TranslateComponent;
