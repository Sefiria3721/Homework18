import { Enemy } from "./Enemy";
export class Elf extends Enemy {
    constructor(name) {
        super(name, 50, 'blue', 50, 30);
    }
    MagicAttack(target) {
        this.Attack(target, 20);
        console.log('Ты не пройдешь!');
    }
}
