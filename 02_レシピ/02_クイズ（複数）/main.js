// 登場人物たち
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const nextQuizButton = document.getElementById("next-quiz")

// 裏方さんたち
let quizNumber = 0
const quizzes = [
  {
    text: "パンダは何時間寝る？",
    image: "panda.jpg",
    choices: [
      {
        text: "8時間",
        isCorrect: false,
        feedback: "残念！8時間寝るのは我々人間です。",
      },
      {
        text: "2時間",
        isCorrect: false,
        feedback: "残念！キリンは2時間しか寝ないんだ！",
      },
      {
        text: "13時間",
        isCorrect: true,
        feedback:
          "正解！なんと1日の半分は寝て、半分は食べるという至福を味わっているんだ。",
      },
    ],
  },
  {
    text: "寿司は何料理？",
    image: "sushi.jpg",
    choices: [
      {
        text: "イタリアン",
        isCorrect: false,
        feedback: "残念！イタリアンはピザだね！",
      },
      {
        text: "日本料理",
        isCorrect: true,
        feedback: "正解！",
      },
      {
        text: "アメリカン",
        isCorrect: false,
        feedback: "残念！アメリカンハンバーガーが有名だね",
      },
    ],
  },
  {
    text: "ディズニーランドの中で一番早い乗り物は？",
    image: "disney.jpg",
    choices: [
      {
        text: "スプラッシュ・マウンテン",
        isCorrect: true,
        feedback: "正解！時速62kmらしい",
      },
      {
        text: "スペース・マウンテン",
        isCorrect: false,
        feedback: "残念！時速50kmらしい",
      },
      {
        text: "ビックサンダー・マウンテン",
        isCorrect: false,
        feedback: "残念！時速45kmらしい",
      },
    ],
  },
]

// 共通の処理①
// quizNumber番目の問題を画面に表示する
const reloadQuiz = function (quizNumber) {
  // quizzes[quizNumber] は使いまわすので、定数に入れておく
  const quiz = quizzes[quizNumber]

  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text

  // フィードバックを削除
  feedback.textContent = ""

  // 次の問題ボタンを隠す
  nextQuizButton.classList.add("hidden")
}

// 共通の処理②
// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // quizzes[quizNumber].choices[choiceNumber] は使いまわすので、定数に入れておく
  const choice = quizzes[quizNumber].choices[choiceNumber]

  // フィードバックを表示
  feedback.textContent = choice.feedback

  // 正解ならば……
  if (choice.isCorrect) {
    if (quizNumber < quizzes.length - 1) {
      // 次の問題があれば、次の問題ボタンを表示
      nextQuizButton.classList.remove("hidden")
    } else {
      // 次の問題がなければ、結果を表示
    }
  }
}

choice1.onclick = function () {
  // 0番目の選択肢を選択
  choose(0)
}
choice2.onclick = function () {
  // 1番目の選択肢を選択
  choose(1)
}
choice3.onclick = function () {
  // 2番目の選択肢を選択
  choose(2)
}

// 次の問題ボタンを押したら
nextQuizButton.onclick = function () {
  // 問題番号を１増やす
  quizNumber += 1
  // quizNumber番目の問題を読み込む
  reloadQuiz(quizNumber)
}

// 0番目のクイズを表示
reloadQuiz(0)
