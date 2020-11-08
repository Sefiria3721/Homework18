import { Enemy } from "./Enemy";
export class Dwarf extends Enemy {
    constructor(name) {
        super(name, 100, 'grey', 50, 10);
    }
    ThrowAxe(target) {
        this.Attack(target, 30);
        console.log('Звучит свист топоров');
    }
}
