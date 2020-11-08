import { Enemy } from "./Enemy";

export class Dwarf extends Enemy {
    constructor(name: string) {
        super(name, 100, 'grey', 50, 10);
    }

    public ThrowAxe(target: Enemy): void {
        this.Attack(target, 30);
        console.log('Звучит свист топоров');
    }
}
