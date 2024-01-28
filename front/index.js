
    let input = document.getElementById('input_one');
    let btn = document.getElementById('btn_one');
    let resultOutput = document.getElementById('result');

    btn.addEventListener('click', () => {
      let resInput = input.value;
      let num = [];
      let simvol = [];

     
      let newInput = resInput.replaceAll("+", " + ")
                              .replaceAll("-", " - ")
                              .replaceAll("*", " * ")
                              .replaceAll("/", " / ")
                              .split(" ");

      for (let item of newInput) {
        if (!isNaN(item)) {
          
          num.push(parseFloat(item));
        } else if (item.trim() !== "") {
         
          simvol.push(item.trim());
        }
      }

      let result = calculateResult(num, simvol);
      
     
      resultOutput. textContent= result;
    });

    function calculateResult(numbers, operators) {
      let result = numbers[0];

      for (let i = 0; i < operators.length; i++) {
        let num = numbers[i + 1];
        let operator = operators[i];

        if (operator === '+') {
          result += num;
        } else if (operator === '-') {
          result -= num;
        } else if (operator === '*') {
          result *= num;
        } else if (operator === '/') {
          result /= num;
        }
      }

      return result;
    }
 