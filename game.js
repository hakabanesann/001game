  //ダイス
  function rand(){
    return Math.floor(Math.random()*100+1);
  }

  //【START】ボタンを押した際の動作
  $('#start_DICE').on('click', function() {
      var DICE_log = rand();
      $('#result01').text(DICE_log);
      logAdd(DICE_log);
      });

  //ダイスの履歴
  const log = document.querySelector("#log");

  function logAdd(add){
    const newLog = document.createElement("li");
    newLog.append(add);
    log.prepend(newLog)

  }

  //arrayからcount個をランダムに引くスクリプト
  function randomSelected (array, count){
      const copyArray = [...array];
      const randomArray = [...Array(count)].map(() => {
              const randomStaetIndex = Math.floor(Math.random()*copyArray.length);
              return copyArray.splice(randomStaetIndex, 1).at();
      })
      return randomArray;
    }

  // 【Draw】ボタンを押した際の動作
  $('#start_CARD').on('click', function() {
      var Card_count = Number($('select[name="Card_count"]').val());
      const randomNumber = randomSelected(Card,Card_count);
      $('#result02').text(randomNumber);
      });

      const Card = ["[+10]","[+20]","[+30]","[-10]","[-20]","[-30]","[スワップ]","[ターンオーバー]","[決定権]","[敗北者]","[星の導き]",];
