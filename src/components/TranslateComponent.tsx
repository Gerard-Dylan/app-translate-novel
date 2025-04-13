
import React, { useState } from "react";
import { translateText } from "../services/translationService";

const TranslateComponent = () => {
    const [text, setText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [loading, setLoading] = useState(false);

    const handleTranslate = async () => {
        setLoading(true);
        const result = await translateText(text, "FR");
        setTranslatedText(result);
        setLoading(false);
    };

    return (
        <div>
      <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Texte à traduire"
      />
            <button onClick={handleTranslate} disabled={loading}>
                {loading ? "Traduction..." : "Traduire"}
            </button>
            {translatedText && <p>Traduction: {translatedText}</p>}
        </div>
    );
};

export default TranslateComponent;
