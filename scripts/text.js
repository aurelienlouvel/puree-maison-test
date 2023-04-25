export function SplitIntoWords(text) {
  text.innerHTML = text.innerHTML.replace(/(\S+\s*)/g, "<span>$1</span>");
}

export function SplitIntoLines(text) {
  //Sort by offset
  const words = text.querySelectorAll("span");
  let lines = {};
  words.forEach((word) => {
    let offset = word.offsetTop;
    if (!(offset in lines)) {
      lines[`${offset}`] = [];
    }
    lines[`${offset}`].push(word.innerHTML);
  });

  //Join text

  let linestext = [];
  for (let key in lines) {
    let text = "";
    lines[key].forEach((word) => {
      text = `${text} ${word}`;
    });
    linestext.push(text);
  }

  //Replace HTML
  text.innerHTML = "";

  linestext.forEach((line) => {
    text.innerHTML += `<span class="mask"><span class="line">${line}</span></span>`;
  });
}

export function RevealText(text) {
  const lines = text.querySelectorAll(".line");
  lines.forEach((line, i) => {
    window.setTimeout(() => {
      line.classList.add("reveal");
    }, i * 200);
  });
}

export function MoveText(text) {
  text.classList.add("reveal");
}
