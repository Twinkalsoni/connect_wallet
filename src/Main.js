import { useMoralis } from "react-moralis";
const main = () => {
  const LegendaryMonster = Moralis.Object.extend("Monster");
  const monster = new LegendaryMonster();
  const Monster = Moralis.Object.extend(
    "Monster",
    {
      hasSuperHumanStrength: function () {
        return this.get("strength") > 18;
      },
      initialize: function (attrs, options) {
        this.sound = "Rawr";
      },
    },
    {
      spawn: function (strength) {
        const monster = new Monster();
        monster.set("strength", strength);
        return monster;
      },
    }
  );
  const monster = Monster.spawn(200);
  alert(monster.get("strength"));
  alert(monster.sound);
};
export default main;
