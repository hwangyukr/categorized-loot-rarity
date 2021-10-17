
function LootRarity() {
    var self = this;
    var part_types = ['all', 'weapon','chest','head','waist','foot','hand','neck','ring'];

    this.loadCategorizedRarity = (function getLoadCategorizedRarityFunc() {
        var categorized_loot_rarity = {'level': null, 'tier': null};
        return function(value_type='level') {
            var type = value_type === 'level' ? value_type : 'tier';
            if (categorized_loot_rarity[type]) return categorized_loot_rarity[type]; // load cached data
            if (type === 'level') return categorized_loot_rarity[type] = require('../data/categorized_loot_level.json');
            if (type === 'tier') return categorized_loot_rarity[type] = require('../data/categorized_loot_tier.json');
        }
    })();

    this.loadTraditionalRarity = (function getLoadTraditionalRarityFunc() {
        var traditional_loot_rarity = {'level': null, 'tier': null};
        return function(value_type='level') {
            var type = value_type === 'level' ? value_type : 'tier';
            if (traditional_loot_rarity[type]) return traditional_loot_rarity[type]; // load cached data
            if (type === 'level') return traditional_loot_rarity[type] = require('../data/traditional_loot_level.json');
            if (type === 'tier') return traditional_loot_rarity[type] = require('../data/traditional_loot_tier.json');
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

    this.getCategorizedRarities = function(lootId, parts='all', value_type='level') {
        return self.getRarities(lootId=lootId, parts=parts, value_type=value_type, self.loadCategorizedRarity);
    }

    this.getTraditionalRarities = function(lootId, parts='all', value_type='level') {
        return self.getRarities(lootId=lootId, parts=parts, value_type=value_type, self.loadTraditionalRarity);
    }
}

module.exports = new LootRarity();
