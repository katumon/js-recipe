const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")

const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}
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
      }
  ],
  answer:function(){
    choicesContainer.children[0].onclick = function () {
    // 0 番目の選択肢を選択
    choose(0)},
  choicesContainer.children[1].onclick = function () {
      // 0 番目の選択肢を選択
    choose(1)},
  choicesContainer.children[2].onclick = function () {
      // 0 番目の選択肢を選択
    choose(2)},
  choicesContainer.children[3].onclick = function () {
        // 0 番目の選択肢を選択
    choose(3)},
  }
}
// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  //ボタンを作成
  for (let i = 0; i < quiz.choices.length; i++) {
    const buttons = document.createElement("button")
    // 選択肢（ボタン）の中身を表示
    buttons.id = "choice" + (i+1)
    buttons.textContent = quiz.choices[i].text
    choicesContainer.append(buttons)
  }
}
choicesContainer.onclick = quiz.answer
for(let i = 0; i < quiz.choices.length; i++) {
  const button + (i+1) = document.getElementById("choice" + (i+1))
}
// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
// choiceNumber番目の選択肢を選択


choicesContainer.children[0].onclick = function () {
  // 0 番目の選択肢を選択
  choose(0)
}
choicesContainer.children[1].onclick = function () {
  // 1 番目の選択肢を選択
  choose(1)
}
choicesContainer.children[2].onclick = function () {
  // 2 番目の選択肢を選択
  choose(2)
}
choicesContainer.children[3].onclick = function () {
  // 3 番目の選択肢を選択
  choose(3)
}

/*choicesContainer.children[number].onclick = function (number) {
  // number 番目の選択肢を選択
  choose(number)
}*/




