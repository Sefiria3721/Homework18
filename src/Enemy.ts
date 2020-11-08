export abstract class Enemy {
    public name: string;
    public hp: number;
    public color: string;
    
    protected damage: number;
    protected range: number;
    
    
    constructor (name: string, hp: number, color: string, damage: number, range: number){
        this.name = name;
        this.hp = hp;
        this.color = color;
        this.damage = damage;
        this.range = range;
    }

    public Attack(target: Enemy, range: number): void{
        target.takeDamage(this.damage);
        console.log(range);
    }

    protected takeDamage(damage: number): void{
        this.hp -= damage;
    }

    public scream(): void{
        console.log(this.name);
    }
}