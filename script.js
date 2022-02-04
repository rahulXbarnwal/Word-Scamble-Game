const input = document.querySelector("input");
  const msg = document.querySelector(".msg");
  const btn = document.querySelector(".btn");
  let play = false;
  let newWords = "";
  let ranWords = "";
  let sWords = [
    "python",
    "javascript",
    "c++",
    "php",
    "java",
    "c#",
    "html",
    "css",
    "reactjs",
    "angular",
    "swift",
    "android",
    "sql"
  ];

  const createNewWord = () => {
    let x = Math.floor(Math.random() * sWords.length);
    return sWords[x];
  }

  const scrambleWords = (arr) => {
    for(let i = arr.length-1; i>=0; i--) {
      let temp = arr[i];
      let j = Math.floor(Math.random() * (i+1));
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }

  btn.addEventListener('click', function(){
    if(!play) {
      play = true;
      btn.innerHTML="Guess";
      input.classList.toggle('hidden');
      newWords = createNewWord();
      ranWords = scrambleWords(newWords.split("")).join("");
      msg.innerHTML=`input the Word ${ranWords}`;
    }
    else {
        let tempWord = input.value;
        if(tempWord===newWords) {
            play = false;
            msg.innerHTML = `Awesome It's Correct. It is ${newWords}`;
            btn.innerHTML = "Start Again";
            input.classList.toggle('hidden');
            input.value="";
        }
        else {
            msg.innerHTML = `Sorry, It's Incorrect. Please try again ${ranWords}`;
        }
    }
  });