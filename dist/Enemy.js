export class Enemy {
    constructor(name, hp, color, damage, range) {
        this.name = name;
        this.hp = hp;
        this.color = color;
        this.damage = damage;
        this.range = range;
    }
    Attack(target, range) {
        target.takeDamage(this.damage);
        console.log(range);
    }
    takeDamage(damage) {
        this.hp -= damage;
    }
    scream() {
        console.log(this.name);
    }
}
