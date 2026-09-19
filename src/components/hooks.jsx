import { useEffect, useState } from "react";
function Writer(
  words = [],
  typingSpeed = 150,
  deletingSpeed = 100,
  delay = 1000,
) {
  let [text, settext] = useState("");
  let [wordidex, setwordindex] = useState(0);
  let [isdeleting, setisdeleting] = useState(false);
  useEffect(() => {
    const curword = words[wordidex] || "";
    const curspeed = isdeleting ? deletingSpeed : typingSpeed;
    const handltyping = () => {
      if (!isdeleting) {
        settext(curword.substring(0, text.length + 1));

        if (text == curword) {
          setTimeout(() => setisdeleting(true));
        }
      } else {
        settext(curword.substring(0, text.length - 1));
        if (text == "") {
          setisdeleting(false);
          setwordindex((prev) => (prev + 1) % words.length);
        }
      }
    };
    const timer = setTimeout(handltyping, curspeed);
    return () => clearTimeout(timer);
  }, [text, isdeleting, wordidex, words, typingSpeed, delay, deletingSpeed]);

  return text;
}
export default Writer;
