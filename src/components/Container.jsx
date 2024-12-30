import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import { FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS } from "../lib/constants";

function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfCharacters: text.length,
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}

export default Container;
