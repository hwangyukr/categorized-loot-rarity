# improved_loot_rarity
suggestion of new loot NFT rarity


## 1. Problems of traditional Loot Rarity
 1. The variance of traditional rarity of Loot NFT is not even
 2. Some categories contains nothing
 3. Some items in categories for rarer ones contains more items than categories for more common ones.


## 2. Suggestion
 - We should adjust the counts threshold for each parts of items.


## 3. How to use this package

### installation
```
 npm install --save improved-loot-rarity
```
 - or just download and unzip it
 - it doesn't depend anything. This is a simple vanilaJs functions

### code example

 - sample1
```
var LootRarity = require('improved-loot-rarity');
var result = LootRarity.getImprovedRarities(lootId=50);
console.log(result);
```
  - output
  ```
  {
      weapon: 1,
      chest: 3,
      head: 1,
      waist: 1,
      foot: 3,
      hand: 4,
      neck: 1,
      ring: 1
  }
  ```
 - sample2
  ```
  var LootRarity = require('improved-loot-rarity');
  var result = LootRarity.getImprovedRarities(lootId=50, parts='weapon', value_type='tier');
  ```
  - output : `common`
 - appendix
   - it works to get traditional rarity also for your convenience.
   ```
   var LootRarity = require('improved-loot-rarity');
   console.log(LootRarity.getImprovedRarities(lootId=50, parts='weapon', value_type='tier')); // 'common'
   ```
