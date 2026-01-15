let account = {
    name: "",
    balance: 0,
    history: []
};

function createAccount() {
    const name = document.getElementById("name").value;
    const initialBalance = Number(document.getElementById("initialBalance").value);

    if (name === "" || initialBalance < 0) {
        alert("Please enter valid details");
        return;
    }

    account.name = name;
    account.balance = initialBalance;
    account.history = [`Account created with balance $${initialBalance}`];

    updateUI();
}

function deposit() {
    const amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {
        alert("Enter a valid deposit amount");
        return;
    }

    account.balance += amount;
    account.history.push(`Deposited $${amount}`);
    updateUI();
}

function withdraw() {
    const amount = Number(document.getElementById("amount").value);

    if (amount <= 0) {
        alert("Enter a valid withdrawal amount");
        return;
    }

    if (amount > account.balance) {
        alert("Insufficient balance");
        return;
    }

    account.balance -= amount;
    account.history.push(`Withdrew $${amount}`);
    updateUI();
}

function updateUI() {
    document.getElementById("displayName").innerText = account.name;
    document.getElementById("displayBalance").innerText = account.balance;

    const historyList = document.getElementById("history");
    historyList.innerHTML = "";

    account.history.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        historyList.appendChild(li);
    });
}
