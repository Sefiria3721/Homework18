import { Dwarf } from "./Dwarf";
import { Elf } from "./Elf";
import { Knight } from "./Knight";

let arthur = new Knight('Arthur');
let silvia = new Elf('Silvia');
let thrum = new Dwarf('Thrum');

arthur.AttackAll([silvia, thrum]);
silvia.MagicAttack(arthur);
thrum.ThrowAxe(arthur);
console.log(arthur.hp, silvia.hp, thrum.hp);