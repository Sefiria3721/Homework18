import { Enemy } from "./Enemy";

export class Elf extends Enemy {
    constructor(name: string) {
        super(name, 50, 'blue', 50, 30);
    }

    public MagicAttack(target: Enemy): void {
        this.Attack(target, 20);
        console.log('Ты не пройдешь!');
    }

}
