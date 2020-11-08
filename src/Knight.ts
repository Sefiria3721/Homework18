import { Enemy } from "./Enemy";

export class Knight extends Enemy {
    constructor(name: string) {
        super(name, 150, 'red', 30, 20);
    }

    public AttackAll(targets: Enemy[]): void {
        targets.forEach(target => {
            this.Attack(target, this.range);
        });
        console.log('К рыцарю лучше не подходить!');
    }

}
