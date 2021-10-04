
function LootRarity() {
    var self = this;
    var part_types = ['all', 'weapon','chest','head','waist','foot','hand','neck','ring'];

    this.loadImprovedRarity = (function getLoadImprovedRarityFunc() {
        var improved_loot_rarity = {'level': null, 'tier': null};
        return function(value_type='level') {
            var type = value_type === 'level' ? value_type : 'tier';
            if (improved_loot_rarity[type]) return improved_loot_rarity[type]; // load cached data
            if (type === 'level') return improved_loot_rarity[type] = require('../data/improved_loot_level.json');
            if (type === 'tier') return improved_loot_rarity[type] = require('../data/improved_loot_tier.json');
        }
    })();

    this.loadTraditionalRarity = (function getLoadTraditionalRarityFunc() {
        var improved_loot_rarity = {'level': null, 'tier': null};
        return function(value_type='level') {
            var type = value_type === 'level' ? value_type : 'tier';
            if (improved_loot_rarity[type]) return improved_loot_rarity[type]; // load cached data
            if (type === 'level') return improved_loot_rarity[type] = require('../data/traditional_loot_level.json');
            if (type === 'tier') return improved_loot_rarity[type] = require('../data/traditional_loot_tier.json');
        }
    })();

    this.getRarities = function(lootId, parts='all', value_type='level', loadFunc) {
        if (isNaN(lootId)) throw 'param \'lootId\' have to be a number';
        if (parseInt(lootId) < 1 || parseInt(lootId) > 8000) throw 'param \'lootId\' have to be in range [1, 8000]';
        if (!part_types.includes(parts)) throw 'param parts have to be one of [' + String(part_types) + ']';
        var loot = loadFunc(value_type)[String(lootId)];
        if (parts !== 'all') return loot[parts];
        return loot;
    }

    this.getImprovedRarities = function(lootId, parts='all', value_type='level') {
        return self.getRarities(lootId=lootId, parts=parts, value_type=value_type, self.loadImprovedRarity);
    }

    this.getTraditionalRarities = function(lootId, parts='all', value_type='level') {
        return self.getRarities(lootId=lootId, parts=parts, value_type=value_type, self.loadTraditionalRarity);
    }
}

module.exports = new LootRarity();
