import { useState, useRef, useEffect } from "react";
import { translateText } from "../services/TranslationService";
import { getDeepLUsage } from "../services/DeepLUsageService";
import TranslateUX from "../components/TranslateUX";

const TranslateComponent = () => {
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [usage, setUsage] = useState<{ count: number, limit: number } | null>(null);

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    }, [text]);


    useEffect(() => {
        const fetchUsage = async () => {
            const data = await getDeepLUsage();
            if (data && data.character) {
                setUsage(data.character);
            }
        };
        fetchUsage();
    }, []);

    const handleTranslate = async () => {
        if (!text.trim()) {
            setError("Entre un texte à traduire.");
            return;
        }

        setLoading(true);
        setError("");
        const result = await translateText(text, "FR");
        if (result) {
            setTranslatedText(result);
        } else {
            setError("Erreur lors de la traduction. Veuillez réessayer.");
        }
        setLoading(false);
    };

    return (
        <div>
            <TranslateUX
                text={text}
                translatedText={translatedText}
                loading={loading}
                error={error}
                setText={setText}
                handleTranslate={handleTranslate}
                usage={usage}
            />
        </div>
    );
};

export default TranslateComponent;
