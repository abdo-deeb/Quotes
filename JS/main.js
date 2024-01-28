
function getRandomInt() {
  return Math.floor(Math.random() * 10);
}


var view = ``
function qutegnerator() {
  if (getRandomInt() == 1) {
    view += `<h2>“Be yourself; everyone else is already taken.”
    ― Oscar Wilde </h2>`
    document.getElementById("ID").innerHTML = view
    view=""
  } else if (getRandomInt() == 2) {
    view += `<h2>“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    ― Marilyn Monroe</h2>`
    document.getElementById("ID").innerHTML = view
    view=""
  } else if (getRandomInt() == 3) {
    view += `<h2>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein </h2>`
    document.getElementById("ID").innerHTML = view
    view=""
  } else if (getRandomInt() == 4) {
    view += `<h2>“So many books, so little time.”
    ― Frank Zappa </h2>`
    document.getElementById("ID").innerHTML = view
    view=""
  } else if (getRandomInt() == 5) {
    view += `<h2>“A room without books is like a body without a soul.”
    ― Marcus Tullius Cicero </h2>`
    document.getElementById("ID").innerHTML = view
    view=""
  } else if (getRandomInt() == 6) {
    view += `<h2>“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
    ― Bernard M. Baruch </h2>`
    document.getElementById("ID").innerHTML = view
    view=""
  } else if (getRandomInt() == 7) {
    view += `<h2>“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”
    ― William W. Purkey </h2>`
    document.getElementById("ID").innerHTML = view
    view=""
  } else if (getRandomInt() == 8) {
    view += `<h2>“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
    ― Dr. Seuss </h2>`
    document.getElementById("ID").innerHTML = view
    view=""
  } else if (getRandomInt() == 9) {
    view += `<h2>“You only live once, but if you do it right, once is enough.”
    ― Mae West </h2>`
    document.getElementById("ID").innerHTML = view
    view=""
  } else if (getRandomInt() == 0) {
    view += `<h2>“Be the change that you wish to see in the world.”
    ― Mahatma Gandhi </h2>`
    document.getElementById("ID").innerHTML = view
    view=""
  } else if (getRandomInt() == 10) {
    view += `<h2>“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
    ― J.K. Rowling, Harry Potter and the Goblet of Fire </h2>`
    document.getElementById("ID").innerHTML = view
    view=""
  }
}