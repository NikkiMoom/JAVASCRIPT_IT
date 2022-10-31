// IV* Преобразовать задание III* таким образом, чтобы возраст вводился, используя функцию prompt в привязанной верстке

let age = prompt("Введите ваш возраст");
function checkAge(age) {
  let strToNum = Number("" + age);
  if (!isNaN(strToNum)) {
    if (strToNum < age_2) {
      return (
        "You don’t have access cause your age is " +
        strToNum +
        " It’s less then"
      );
    } else if (strToNum >= age_2 && age < age_3) {
      return "Welcome, your age is " + age;
    } else if (strToNum > age_3) {
      return "Keep calm and look Culture channel, u are " + strToNum;
    } else {
      return "Technical work";
    }
  } else {
    return "Ошибка, введено не число, а << " + age + " >>";
  }
}

let re_checking = String(checkAge(age));
document.getElementById("result").innerHTML = re_checking;
console.log(re_checking);

