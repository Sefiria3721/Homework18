(()=>{"use strict";class t{constructor(t,s,e,c,a){this.name=t,this.hp=s,this.color=e,this.damage=c,this.range=a}Attack(t,s){t.takeDamage(this.damage),console.log(s)}takeDamage(t){this.hp-=t}scream(){console.log(this.name)}}let s=new class extends t{constructor(t){super(t,150,"red",30,20)}AttackAll(t){t.forEach((t=>{this.Attack(t,this.range)})),console.log("К рыцарю лучше не подходить!")}}("Arthur"),e=new class extends t{constructor(t){super(t,50,"blue",50,30)}MagicAttack(t){this.Attack(t,20),console.log("Ты не пройдешь!")}}("Silvia"),c=new class extends t{constructor(t){super(t,100,"grey",50,10)}ThrowAxe(t){this.Attack(t,30),console.log("Звучит свист топоров")}}("Thrum");s.AttackAll([e,c]),e.MagicAttack(s),c.ThrowAxe(s),console.log(s.hp,e.hp,c.hp)})();