function playFired() {
    let hitNum = 0;
    let score = 0;
    let count = 0;
    function totalbb() {
      //   console.log(num);
      let bub = "";
      let bbBody = document.querySelector(".bubble-body");
      for (let b = 1; b <= 200; b++) {
        let num = Math.floor(Math.random() * 20);
        bub += `<p class="bb">${num}</p>`;
      }
  
      const audio = document.getElementById("myAudio");
      document.querySelector(".bubble-body").addEventListener("click", () => {
        audio.play();
      });
  
      bbBody.innerHTML = bub;
    }
    totalbb();
    function timerFunc() {
      let timer = 60;
      //   let t = "";
      let timerfun = setInterval(() => {
        if (timer > 0) {
          timer--;
          document.querySelector(".count").innerText = timer;
  
          document.querySelector(".count").classList.add("timmer-ani");
        } else {
          clearInterval(timerfun);
          document.querySelector(".main-container").innerHTML = `
          <div class="main-container">
          <div class="ovl"></div>
            <div class="sub-Container">
            <div class="clut">
            
            <div class="bottom-right"><img src="./imgs/pngwing.com(2).png" alt=""></div>
            <div class="right"><img src="./imgs/pngwing.com(6).png" alt=""></div>
            <div class="left"><img src="./imgs/pngwing.com(4).png" alt=""></div>
            <div class="frame"><img src="./imgs/pngwing.com(7).png" alt=""></div>
            <div class="bottom-left"><img src="./imgs/pngwing.com(1) - Copy.png" alt=""></div>
        </div>
              <div class="bubble-header">    
        <div class="hit wd">
        <h1>Hit</h1>
        <div>
            <h1 class="hit-no wi "></h1>
        </div>
    </div>
    <div class="timer wd">
        <h1>timer</h1>
        <div>
            <h1 class="count wi"></h1>
        </div>
    </div>
    <div class="score wd">
        <h1>score</h1>
    <div>
        <h1 class="score-no wi">0</h1>
    </div>
    </div>
    </div>
  
              </div>
              </div>
              <div class="container plContainer">
  
              <div class="pLeft"><img src="./imgs/pngwing.com(4).png" alt=""></div>
              <div class="sub">
              <embed src="./sound/videogame-death-sound-43894.mp3" loop="false" autostart="true" width="0" height="0" style="position: absolute; top:0">
            <div class="Fscore ff"> Your score:<span> ${score}</span></div>
            <div class="Fhits ff"> Total hits: <span>${count}</span></div>
            <div class="playAgain play">play again</div>
            </div>
            </div>
          
            <div class="bubble-body">
            <audio id="myAudio">
            <source src="./sound/pop-39222.mp3" type="audio/mpeg">
          
          </audio>
            </div>
              <div>
          `;
  
          document.querySelector(".ovl").classList.add("ovr");
          document.querySelector(".container").classList.add("container-animate");
  
          hitNum = 0;
          score = 0;
          count = 0;
          document.querySelector(".playAgain").addEventListener("click", () => {
            document.querySelector(".main-container").innerHTML = `
            <div class="main-container">
  
            <div class="sub-Container">
            <div class="clut">
            <audio id="playAgainAud">
            <source src="./sound/merner-pop-117203.mp3" type="audio/mpeg">
          </audio>
            <div class="bottom-right">
            <img src="./imgs/pngwing.com(2).png" alt=""></div>
            <div class="right"><img src="./imgs/pngwing.com(6).png" alt=""></div>
            <div class="left"><img src="./imgs/pngwing.com(4).png" alt=""></div>
            <div class="frame"><img src="./imgs/pngwing.com(7).png" alt=""></div>
            <div class="bottom-left"><img src="./imgs/pngwing.com(1) - Copy.png" alt=""></div>
        </div>
              <div class="bubble-header">    
        <div class="hit wd">
        <img src="./imgs/pngwing.com(12).png" alt="">
        <h1>Hit</h1>
        <div>
            <h1 class="hit-no wi "></h1>
        </div>
    </div>
    <div class="timer wd">
    <img src="./imgs/pngwing.com(10).png" alt="">
        <h1>timer</h1>
        <div>
            <h1 class="count wi"></h1>
        </div>
    </div>
    <div class="score wd">
    <img src="./imgs/pngwing.com(13).png" alt="">
        <h1>score</h1>
    <div>
        <h1 class="score-no wi">0</h1>
    </div>
    </div>
    </div>
    <div class="bubble-body">
    <div class="bubble-body">
    <audio id="myAudio">
    <source src="./sound/pop-39222.mp3" type="audio/mpeg">
  
  </audio>
    </div>
              </div>
              </div>
              <div>
            `;
            const audio = document.getElementById("playAgainAud");
            audio.play();
            totalbb();
            timerFunc();
            Hit();
            incScore();
          });
          //   document.querySelector(".container").className.add("container-animate");
        }
      }, 1000);
    }
    timerFunc();
  
    function Hit() {
      hitNum = Math.floor(Math.random() * 20);
      document.querySelector(".hit-no ").innerText = hitNum;
      //   console.log(count);
      parseInt(hitNum);
    }
    Hit();
  
    function incScore() {
      document.querySelector(".bubble-body").addEventListener("click", (e) => {
        if (e.target.innerText == hitNum) {
          count++;
          score += 10;
          totalbb();
          Hit();
        }
        document.querySelector(".score-no").innerText = score;
      });
    }
    incScore();
  }
  document.querySelector(".play").addEventListener("click", () => {
    playFired();
    document.querySelector(".open").remove();
    document.querySelector(".overlay").style.zIndex = "0";
    document.querySelector(".overlay").style.width = "1px";
    const playB = document.getElementById("playB");
    playB.play();
  });
  