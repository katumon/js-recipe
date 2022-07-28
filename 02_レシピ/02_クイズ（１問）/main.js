const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
/*const choiceContainer = document.getElementById("choice-container")
const Display = document.getElementById("display")*/
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "パンダは何時間寝る？",
  image: "panda.jpg",
  choices: [
    {
      text: "8時間",
      feedback: "残念！8時間寝るのは我々人間です。",
    },
    {
      text: "2時間",
      feedback: "残念！キリンは2時間しか寝ないんだ！",
    },
    {
      text: "13時間",
      feedback:
        "正解！なんと1日の半分は寝て、半分は食べるという至福を味わっているんだ。",
    },
    {
      text: "22時間",
      feedback: "残念！コアラはほとんど寝ているみたい。",
    },
  ],
}
// quiz を画面に表示する関数
const reloadQuiz = function () {
    // 問題文を表示
    quizText.textContent = "Q. " + quiz.text
  
    // 画像を表示
    quizImage.src = "./images/" + quiz.image
  
    // 選択肢（ボタン）の中身を表示
    choice1.textContent = quiz.choices[0].text
    choice2.textContent = quiz.choices[1].text
    choice3.textContent = quiz.choices[2].text
    choice4.textContent = quiz.choices[3].text
  }
  
  // choiceNumber番目の選択肢を選択
  const choose = function (choiceNumber) {
    // フィードバックを表示
    feedback.textContent = quiz.choices[choiceNumber].feedback
  }
  
  choice1.onclick = function () {
    // 0 番目の選択肢を選択
    choose(0)
  }
  choice2.onclick = function () {
    // 1 番目の選択肢を選択
    choose(1)
  }
  choice3.onclick = function () {
    // 2 番目の選択肢を選択
    choose(2)
  }
  choice4.onclick = function () {
    // 3 番目の選択肢を選択
    choose(3)
  }
  
  // reloadQuiz関数 を実行して、クイズを画面に表示する
  reloadQuiz()

/*// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  //ボタンを作成
  for (let i = 0; i < quiz.choices.length; i++) {
    const buttons = document.createElement("button")
    // 選択肢（ボタン）の中身を表示
    buttons.textContent = quiz.choices[i].text
    choiceContainer.appendChild(buttons)
  }
}
// reloadQuiz関数 を実行して、クイズを画面に表示する
Display.onclick = reloadQuiz()
// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choiceContainer.onclick = function ([k])
}
*/


