// Part 1: Variables, Conditions
function greetUser() {

    let name = document.getElementById('username').value;

    if (name === "") {
        document.getElementById('greeting').innerText = "Please enter your name.";
    }
    else {
        document.getElementById('greeting').innerText = "Hello, " + name + "👋"
    }
}

// Part 2: Functions
function calculateSum() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    num1 = Number(num1);
    num2 = Number(num2);

    let total = num1 + num2;

    document.getElementById('sumResult').innerText = "The sum is: " + total;
}

// Additional reusable function
function formatMessage(message) {
    return "🌟 " + message.toUpperCase() + " 🌟";
}

// Part 3: Loops
function showCountdown() {
    let list = document.getElementById('countdownList');
    list.innerHTML = "";

    for (let i = 5; i > 0; i--) {
        let li = document.createElement('li');
        li.innerText = i;
        list.appendChild(li);
    }
}

function listFruits() {
    let fruits = ['Apple', 'Bnanana', 'Mango', 'Orange'];
    let list = document.getElementById('fruitList');
    list.innerHTML = '';

    fruits.forEach(function(fruit) {
        let li = document.createElement('li');
        li.innerText = fruit;
        list.appendChild(li);
    });
}

// Part 4: DOM Manipulation

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

function changeMessage() {
  let messageElement = document.getElementById("domMessage");
  messageElement.innerText = formatMessage("You just changed the text!");
}
