import React, { useState } from "react";
import TranslateUX from "./TranslateUX.tsx";
import { translateText } from "../services/TranslationService.tsx";


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
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Une erreur inconnue est survenue.");
            }
        }
        finally {
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
