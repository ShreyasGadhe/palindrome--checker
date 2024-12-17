const checkBtn = document.getElementById("check-btn");
const ignoreStr = ",. /_-|()";
const ignore = ignoreStr.split("");
const input = document.getElementById("text-input");
let output;
const body = document.body;
body.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);
});
checkBtn.addEventListener("click", () => {
  console.log(ignore);
  const text1 = input.value;
  let text = "";
  for (let char of text1) {
    if (ignore.includes(char) || char === "\\") {
      text += "";
    } else {
      text += char;
    }
  }
  console.log(text);

  if (text == "") {
    alert("Please input a value");
    return;
  }
  // const arr = text.toLowerCase().split(" ");

  // console.log(arr);
  const str = text.toLowerCase();
  const strRev = str.split("").reverse().join("");
  console.log(str);
  console.log(strRev);

  if (str === strRev) {
    output = text1 + " is a palindrome";
  } else {
    output = text1 + " is not a palindrome";
  }
  console.log(output);
  const result = document.getElementById("result");
  result.innerHTML = output;
});
