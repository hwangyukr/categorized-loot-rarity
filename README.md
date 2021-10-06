# improved_loot_rarity
suggestion of new loot NFT rarity

<img src="https://github.com/hwangyukr/improved-loot-rarity/blob/master/docs/loot.png?raw=true" alt="Loot for adventure" width="320px">

## 1. Problems of traditional Loot Rarity
 1. The variance of traditional rarity of Loot NFT is not even
 2. Some categories contains nothing
 3. Some items in categories for rarer ones contains more items than categories for more common ones.


## 2. Suggestion
 - We should adjust the counts threshold for each parts of items.

 <img src="https://github.com/hwangyukr/improved-loot-rarity/blob/master/docs/before_after.png?raw=true" alt="Before And After" width="720px">

 - adjusted threshold of item counts each part
 |part|common|rare|epic|legendary|
 |---|---|---|---|---|
 |weapon|count<2|count<200|count<320|other|
 |chest|count<2|count<300|count<385|other|
 |head|count<2|count<300|count<380|other|
 |waist|count<2|count<300|count<380|other|
 |foot|count<2|count<300|count<380|other|
 |hand|count<2|count<300|count<380|other|
 |neck|count<2|count<1800|other|-|
 |ring|count<2|count<1000|other|-|

## 3. How to use this package

### installation
```bash
 npm install --save improved-loot-rarity
```
 - Or just download and unzip it
 - It doesn't depend anything. These are simple vanilaJs functions

### code example

 - sample1
```javascript
var LootRarity = require('improved-loot-rarity');
var result = LootRarity.getImprovedRarities(lootId=50);
console.log(result);
```
  - output
  ```javascript
  {
      weapon: 1,
      chest: 3,
      head: 1,
      waist: 1,
      foot: 3,
      hand: 4,
      neck: 2,
      ring: 2
  }
  ```
 - sample2
  ```javascript
  var LootRarity = require('improved-loot-rarity');
  var result = LootRarity.getImprovedRarities(lootId=50, parts='weapon', value_type='tier');
  ```
  - output : `common`
 - appendix
   - it works to get traditional rarity also for your convenience.
   ```javascript
   var LootRarity = require('improved-loot-rarity');
   console.log(LootRarity.getImprovedRarities(lootId=50, parts='weapon', value_type='tier')); // 'common'
   ```

### compare
<img src="https://github.com/hwangyukr/improved-loot-rarity/blob/master/docs/charts.png?raw=true" alt="Before And After" width="640px">