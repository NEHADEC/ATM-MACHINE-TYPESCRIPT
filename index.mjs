import inquirer from "inquirer";
//initialize user balance and pin code 
let mybalance = 20000;
let mypin = 3690;
//print welcome message
console.log("Welcome To Neha Bilal - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin Code:"
    }
]);
if (pinAnswer.pin === mypin) {
    console.log("Pin Is Correct, Login Successfully!");
    // console.log(`Current Account Balance Is ${mybalance} `);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select An Operation",
            choices: ["Withdrew Amount", "Check Balance",]
        }
    ]);
    if (operationAns.operation === "Withdrew Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter The Amount TO Withdrew:"
            }
        ]);
        if (amountAns.amount > mybalance) {
            console.log("Insufficient Balance");
        }
        else {
            mybalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdrew Successfully`);
            console.log(`Your Remaining Balance Is : ${mybalance} `);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Account Balance Is  : ${mybalance}`);
    }
}
else {
    console.log("Pin Is Incorrect, Try Again! ");
}
