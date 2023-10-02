const input = require('sync-input');

class CoffeeMachine {

    constructor() {
        this.waterInMachine = 400;
        this.milkInMachine = 540;
        this.beansInMachine = 120;
        this.disposableCups = 9;
        this.money = 550;
        this.isCleaned = true;
    }

    get enoughResources() {
        return "I have enough resources, making you a coffee!\n";
    }

    get notEnoughResources() {
        return "Sorry, not enough water!\n";
    }

    get cleaningStatus() {
        if (this.isCleaned) {
            return "cleaned"
        } else {
            return "dirty"
        }
    }


    coffeeExpress() {
        console.log(`
The coffee machine has:
${this.waterInMachine} ml of water
${this.milkInMachine} ml of milk
${this.beansInMachine} g of coffee beans
${this.disposableCups} disposable cups
$${this.money} of money
coffee machine is ${this.cleaningStatus} \n`);
    }


    espresso() {
        if (this.waterInMachine - 250 >= 0 && this.beansInMachine - 16 >= 0 && this.disposableCups - 1 >= 0) {
            console.log(this.enoughResources);
            this.waterInMachine -= 250;
            this.beansInMachine -= 16;
            this.disposableCups -= 1;
            this.money += 4;
            this.isCleaned = false;
        } else {
            console.log(this.notEnoughResources);
        }
    }

    latte() {
        if (this.waterInMachine - 350 >= 0 && this.milkInMachine - 75 >= 0 && this.beansInMachine - 20 >= 0 && this.disposableCups - 1 >= 0) {
            console.log(this.enoughResources);
            this.waterInMachine -= 350;
            this.milkInMachine -= 75;
            this.beansInMachine -= 20;
            this.disposableCups -= 1;
            this.money += 7;
            this.isCleaned = false;
        } else {
            console.log(this.notEnoughResources);
        }
    }

    cappuccino() {
        if (this.waterInMachine - 200 >= 0 && this.milkInMachine - 100 >= 0 && this.beansInMachine - 12 >= 0 && this.disposableCups - 1 >= 0) {
            console.log(this.enoughResources);
            this.waterInMachine -= 200;
            this.milkInMachine -= 100;
            this.beansInMachine -= 12;
            this.disposableCups -= 1;
            this.money += 6;
            this.isCleaned = false;
        } else {
            console.log(this.notEnoughResources);
        }
    }

    buy() {
        console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ");

        let choseCoffee = input();

        if (choseCoffee === "back") {
            console.log();
            this.whichAction();
        } else {
            choseCoffee = parseInt(choseCoffee);

            if (choseCoffee === 1) {
                this.espresso();
            } else if (choseCoffee === 2) {
                this.latte();
            } else if (choseCoffee === 3) {
                this.cappuccino();
            }
        }
    }


    fill() {
        console.log("\nWrite how many ml of water you want to add:");
        let waterToAdd = parseInt(input());
        this.waterInMachine += waterToAdd;

        console.log("Write how many ml of milk you want to add:");
        let milkToAdd = parseInt(input());
        this.milkInMachine += milkToAdd;

        console.log("Write how many grams of coffee beans you want to add:");
        let beansToAdd = parseInt(input());
        this.beansInMachine += beansToAdd;

        console.log("Write how many disposable cups you want to add:")
        let disposibleCupsToAdd = parseInt(input());
        this.disposableCups += disposibleCupsToAdd;

        console.log();
    }

    cleaning() {
        this.cleaning = true;
    }


    take() {
        console.log(`\nI gave you $${this.money}\n`);
        this.money = 0;
    }


    whichAction() {
        while (true) {

            console.log("Write action (buy, fill, take, remaining, cleaning, exit):");
            let choseActon = input();

            if (choseActon === "buy") {
                this.buy();
            } else if (choseActon === "fill") {
                this.fill();
            } else if (choseActon === "take") {
                this.take();
            } else if (choseActon === "remaining") {
                this.coffeeExpress();
            } else if (choseActon === "cleaning") {
                this.cleaning();
            } else if (choseActon === "exit") {
                process.exit(0);
            }
        }
    }
}

// Create a CoffeeMachine instance
const coffeeMachine = new CoffeeMachine();
coffeeMachine.whichAction();