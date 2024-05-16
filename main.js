#! `"/usr/bin/"` env node
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinanswer.pin === mypin) {
    console.log("correct pin code");
    let operationsans = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationsans);
    if (operationsans.operation === "withdraw") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountans.amount > mybalance) {
            console.log("insufficient balance");
        }
        else if (mybalance -= amountans.amount) {
            console.log(`your balance is ${mybalance}`);
        }
    }
    else if (operationsans.operation === "check balance") {
        console.log(`your balance is ${mybalance}`);
    }
}
else {
    console.log("incorrect pin code");
}
