StartupEvents.registry('item', event => {
    //Material unification
    event.create('tin_rod')                                                                 
    event.create('silver_rod')
    event.create('bronze_rod')
    event.create('signalum_rod')
    event.create('lumium_rod')
    event.create('enderium_rod')
    //Misc materials
    event.create('wrought_iron')
    event.create('rubber_drop')
    event.create('bluestone')
    event.create('magic_sludge')  
    //Components
    event.create('signalum_frame').rarity('uncommon')
    event.create('lumium_frame').rarity('uncommon') 
    event.create('enderium_frame').rarity('uncommon') 
    event.create('manamithril_frame').rarity('uncommon') 
    event.create('soulstained_frame').rarity('uncommon') 
    event.create('elementium_frame').rarity('uncommon') 
    event.create('terrasteel_frame').rarity('uncommon') 
    //Other
    event.create('mead_bottle')
})