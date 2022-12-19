
let button = document.querySelectorAll('.button')[0].onclick = function () {

  let password = (string_length) => {
    let emptyString = "";
    let general = "ABCD12abcdefg!#$h345EF6ijk@%^lmn78GHIJo&*pqrst90KLMNOuvwPQRSTUVxyzWXYZ";
    for (let i = 0; i < string_length; i++) {
      emptyString += general.charAt(Math.floor(Math.random() * general.length))
    }
    document.getElementById('input_bar').value = emptyString;
  }
  password(9)
}























