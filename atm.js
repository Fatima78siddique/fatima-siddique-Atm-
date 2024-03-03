import inquirer from "inquirer";
const userInput = await inquirer.prompt([
    {
        type: "input",
        name: "userID",
        message: "Enter user ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter User Pin"
    },
    {
        type: "list",
        name: "accountType ",
        choices: ["Current", "Savng "],
        message: "Select your Account Type "
    },
    {
        type: "list",
        name: "transactionType  ",
        choices: ["withdraw Cash ", "balance Inquiry ", "Fast Cash "],
        message: "Select your Transaction "
    },
    {
        type: "number",
        name: "amount ",
        message: "Enter amount  you want to withdraw ",
        when(userInput) {
            return userInput.transactionType === "withdraw cash ";
        }
    },
    {
        type: "list",
        name: "amount ",
        choices: [1000, 2000, 3000, 5000, 10000],
        message: "Select amout you want to withdraw",
        when(userInput) {
            return userInput.transactionType === "Fast Cash ";
        }
    },
]);
const userID = userInput.userID;
const userPin = userInput.userPin;
const Enteredamount = userInput.amount;
if ((userID && userPin) && userInput.transactionType === "Balance inquiry ") {
    const userbalance = Math.floor(Math.random() * 10000);
    console.log(`your current balance is Rs ${userbalance}\n`);
}
else if (userID && userPin) {
    const userbalance2 = Math.floor(Math.random() * 100000);
    if (userbalance2 > Enteredamount) {
        console.log(`your account has been debited with Rs ${Enteredamount} and your remaining balance is${userbalance2 - Enteredamount}`);
    }
    else {
        console.log(`\n unsufficient balance `);
    }
}
