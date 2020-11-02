class Enemy {
    constructor (name, hp, color, damage, range){
        this.name = name;
        this.hp = hp;
        this.color = color;
        this.damage = damage;
        this.range = range;
    }

    Attack(target, range){
        target.takeDamage(this.damage);
        console.log(range);
    }

    takeDamage(damage){
        this.hp -= damage;
    }

    scream(){
        console.log(this.name);
    }
}

class Knight extends Enemy {
    constructor(name){
        super(name, 150, 'red', 30, 20);
    }

    AttackAll(targets){
        targets.forEach(target => {
            this.Attack(target, this.range)
        });
        console.log('К рыцарю лучше не подходить!');
    }

}

class Elf extends Enemy {
    constructor (name){
        super(name, 50, 'blue', 50, 30);
    }

    MagicAttack(target){
        this.Attack(target, 20);
        console.log('Ты не пройдешь!');
    }
    
}

class Dwarf extends Enemy {
    constructor(name){
        super(name, 100, 'grey', 50, 10);
    }

    ThrowAxe(target){
        this.Attack(target, 30);
        console.log('Звучит свист топоров');
    }
}

let arthur = new Knight('Arthur');
let silvia = new Elf('Silvia');
let thrum = new Dwarf('Thrum');

arthur.AttackAll([silvia, thrum]);
silvia.MagicAttack(arthur);
thrum.ThrowAxe(arthur);
console.log(arthur.hp, silvia.hp, thrum.hp);