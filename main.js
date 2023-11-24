let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("")
console.log("Seja bem-vindo usuário!")
rl.question('Digite o seu nome: ', (userName) => {
    console.log("")
    console.log(`${userName}, vamos montar um herói?`);

    rl.question('Digite (1) para iniciar: ', (createHero) => {
        if (createHero == 1) {

            class hero {
                constructor(name, age, type) {
                    this.name = name
                    this.age = age
                    this.type = type
                }
                viewHero() {
                    console.log(`O nome do herói é ${this.name}, ele está com ${this.age} anos de idade, ele faz parte do tipo ${this.type}!`)
                }
                heroAttack() {
                    if (this.type == "Guerreiro") {
                        this.attack = "a espada"
                    } else if (this.type == "Mago") {
                        this.attack = "magia"
                    } else if (this.type == "Monge") {
                        this.attack = "artes marcias"
                    } else if (this.type == "Ninja") {
                        this.attack = "shuriken"
                    }
                    console.log(`O herói ${this.name} é do tipo ${this.type} e atacou usando ${this.attack}.`)
                    console.log("")
                    process.exit();

                }

            }

            newHero()
            function newHero() {

                console.log("")
                console.log("Nossos heróis são classificados pelo nome, idade e tipo (ex: Guerreiro, Mago, Monge, Ninja)!")
                console.log("")
                rl.question('Primeiramente, digite qual será o nome do seu herói: ', (inputName) => {

                    console.log("")
                    rl.question(`Qual seria a idade do herói ${inputName}: `, (inputAge) => {

                        console.log("")
                        console.log(`Defina o tipo/classe do seu herói: `)
                        console.log("")
                        console.log(`1 - Guerreiro`)
                        console.log(`2 - Mago`)
                        console.log(`3 - Monge`)
                        console.log(`4 - Ninja`)
                        console.log("")
                        rl.question(`Digite a opção desejada: `, (inputType) => {

                            function heroClass() {
                                if (inputType == 1) {
                                    return heroType = "Guerreiro"

                                } else if (inputType == 2) {
                                    return heroType = "Mago"

                                } else if (inputType == 3) {
                                    return heroType = "Monge"

                                } else if (inputType == 4) {
                                    return heroType = "Ninja"

                                } else {
                                    console.log("Opção inválida, programa finalizado!")
                                    process.exit();
                                }

                            }

                            let heroCreate = new hero(inputName, inputAge, heroClass())
                            console.log("")
                            heroCreate.viewHero()
                            heroCreate.heroAttack()


                        });

                    });

                });

            }

        } else {
            console.log("Opção inválida, programa finalizado!")
            process.exit();
        }

    });

});





