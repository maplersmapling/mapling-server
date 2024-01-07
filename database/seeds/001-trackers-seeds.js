exports.seed = function(knex) {

  // Deletes ALL existing entries
  return knex('dailyTrackers').del()
    .then(function () {
    // Inserts seed entries
    return knex('dailyTrackers').insert([
      {   
        type: 'Task', 
        name: 'Guild Check-in'
    }, { 
        type: 'Task', 
        name: 'MPE'
    }, { 
        type: 'Arcane River', 
        name: 'Vanishing Journey'
    }, { 
        type: 'Arcane River', 
        name: 'Chu Chu'
    }, { 
        type: 'Arcane River', 
        name: 'Lachelein'
    }, { 
        type: 'Arcane River', 
        name: 'Arcana'
    }, { 
        type: 'Arcane River', 
        name: 'Morass'
    }, { 
        type: 'Arcane River', 
        name: 'Esfera'
    }, { 
        type: 'Arcane River', 
        name: 'Tenebris Research'
    }, {
        type: 'Grandis', 
        name: 'Erda\'s Request'
    }, { 
        type: 'Grandis', 
        name: 'Cernium'
    }, { 
        type: 'Grandis', 
        name: 'Arcus'
    }, { 
        type: 'Grandis', 
        name: 'Odium'
    }, { 
        type: 'Grandis', 
        name: 'Shangri-La'
    }, { 
        type: 'Grandis', 
        name: 'Arteria'
    }
    ]);
  });
};
