window.addEventListener("load",registerEvents,false);

        function registerEvents(e) {
            document.getElementById("ask");
            addEventListener("click", findAnswer,false);
        }

        function findAnswer() {
            // получить пользовательский запрос
            let question = document.getElementById("userQuestion").value;
            /*создать новый объект регулярного выражения, которое ищет 
            полное совпадение со строкой "JavaScript"*/
            let re = new RegExp("JavaScript");
            // если в запросе найдена строка "JavaScript"
            if (re.test(question)==true) {
                // вывести ответ
            document.getElementById("answer").innerHTML = "есть вопросы по JS? Кури Stack Overflow.";
            // записать "JavaScript!" в консоль
            console.log("JavaScript!");
            }
        }