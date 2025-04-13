import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import React from "react";
import "./ux.css";
import Spinner from "./Spinner";

interface TranslateUXProps {
    text: string;
    translatedText: string;
    loading: boolean;
    error: string;
    setText: Dispatch<SetStateAction<string>>;
    handleTranslate: () => void;
}

const TranslateUX: React.FC<TranslateUXProps> = ({text, translatedText, loading, error, setText, handleTranslate,}: TranslateUXProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const translatedRef = useRef<HTMLTextAreaElement>(null);

    const syncHeights = () => {
        if (textareaRef.current && translatedRef.current) {
            textareaRef.current.style.height = "auto";
            translatedRef.current.style.height = "auto";

            const height1 = textareaRef.current.scrollHeight;
            const height2 = translatedRef.current.scrollHeight;

            const maxHeight = Math.max(height1, height2);

            textareaRef.current.style.height = `${maxHeight}px`;
            translatedRef.current.style.height = `${maxHeight}px`;
        }
    };

    useEffect(() => {
        syncHeights();
    }, [text, translatedText]);

    return (
        <div className="translate-container">
            <div className="buttons">
                <button
                    onClick={handleTranslate}
                    disabled={loading || !text.trim()}
                    className={`translate-button ${loading ? "loading" : ""}`}
                >
                    {loading ? (
                        <>
                            Traduction...
                            <Spinner /> {}
                        </>
                    ) : (
                        "Traduire"
                    )}
                </button>
                <button onClick={() => setText("")} className="clear-button">
                    Clear
                </button>
            </div>

            <div className="text-columns">
                <div className="text-column">
                    <h4 className="section-title">À traduire :</h4>
                    <textarea
                        ref={textareaRef}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Texte à traduire..."
                        className="input-textarea"
                    />
                </div>
                <div className="text-column">
                    <h4 className="section-title">Traduction :</h4>
                    <textarea
                        ref={translatedRef}
                        value={translatedText || "Aucune traduction disponible."}
                        readOnly
                        className="translated-text"
                    />
                </div>
            </div>

            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default TranslateUX;
