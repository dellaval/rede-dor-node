'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('movies', [
      { name: "The Eternal Quest", synopsis: "A wanderer's journey through mystical lands to find the essence of life.", rating: 8.5 },
      { name: "Stars Above", synopsis: "A young astronomer discovers a new planet and the dangers lurking within.", rating: 7.8 },
      { name: "Dark Waters", synopsis: "A detective uncovers secrets hidden in a small coastal town.", rating: 8.1 },
      { name: "Echoes of Silence", synopsis: "A haunted mansion reveals its tragic past to a group of friends.", rating: 6.9 },
      { name: "Rising Sun", synopsis: "A samurai sets out to avenge his fallen family in feudal Japan.", rating: 8.7 },
      { name: "The Alchemist's Secret", synopsis: "An ancient book unlocks the mysteries of the universe for a young scholar.", rating: 7.3 },
      { name: "Parallel Realities", synopsis: "Two strangers discover they are living in alternate realities that intersect.", rating: 8.0 },
      { name: "Beyond the Horizon", synopsis: "An astronaut faces her greatest fears on a distant planet.", rating: 7.6 },
      { name: "The Hidden Code", synopsis: "A hacker stumbles upon a secret that puts his life in danger.", rating: 7.4 },
      { name: "Legends of the Fall", synopsis: "Three brothers experience love, war, and betrayal in the 1900s.", rating: 7.9 },
      { name: "Silent Witness", synopsis: "A mute artist witnesses a crime and must find a way to expose the truth.", rating: 7.0 },
      { name: "The Last Train", synopsis: "A group of strangers bond over a life-changing journey on a midnight train.", rating: 8.2 },
      { name: "Into the Deep", synopsis: "Marine biologists discover more than they bargained for underwater.", rating: 7.1 },
      { name: "Winds of Change", synopsis: "A young girl battles against traditions to follow her dreams.", rating: 7.5 },
      { name: "The Forgotten City", synopsis: "A journalist uncovers the lost secrets of a hidden metropolis.", rating: 8.3 },
      { name: "Shadows of the Past", synopsis: "A man's haunted memories lead him to confront his dark secrets.", rating: 7.2 },
      { name: "The Golden Key", synopsis: "An orphan finds a magical key that opens doors to unknown worlds.", rating: 8.4 },
      { name: "Dreamcatcher", synopsis: "A psychologist helps patients who have shared dreams of a mysterious figure.", rating: 6.8 },
      { name: "Bound by Honor", synopsis: "Two rival gang leaders unite to face a greater threat.", rating: 7.6 },
      { name: "The Painter's Curse", synopsis: "A cursed painting haunts anyone who tries to possess it.", rating: 7.7 },
      { name: "Secrets in the Sand", synopsis: "An archaeologist discovers ancient secrets buried in the desert.", rating: 8.1 },
      { name: "Edge of Tomorrow", synopsis: "A soldier relives the same day over and over in a battle against aliens.", rating: 8.0 },
      { name: "The Silent Guardian", synopsis: "A reclusive man becomes the unlikely hero of his small town.", rating: 7.4 },
      { name: "Clockwork Fate", synopsis: "A clockmaker's invention brings unforeseen consequences to his village.", rating: 7.8 },
      { name: "Falling Stars", synopsis: "Two astronomers' friendship is tested as they compete for a discovery.", rating: 6.9 },
      { name: "The Final Note", synopsis: "A jazz musician searches for his long-lost daughter across cities.", rating: 8.6 },
      { name: "Dance of Shadows", synopsis: "A ballerina is haunted by a mysterious figure in her dance studio.", rating: 7.1 },
      { name: "Beyond the Veil", synopsis: "A medium tries to protect her town from malevolent spirits.", rating: 7.9 },
      { name: "Codebreaker", synopsis: "A cryptographer finds himself in a conspiracy he can't decode.", rating: 8.2 },
      { name: "Silent Strike", synopsis: "A group of elite operatives must complete a mission without being detected.", rating: 8.0 },
      { name: "The Lighthouse Keeper", synopsis: "A lighthouse keeper tries to solve a decades-old mystery.", rating: 7.3 },
      { name: "Emerald Seas", synopsis: "A crew of treasure hunters faces perils in search of a lost emerald.", rating: 7.7 },
      { name: "Lost in Time", synopsis: "A scientist accidentally travels to the 18th century.", rating: 8.4 },
      { name: "Beneath the Surface", synopsis: "A diver explores a cave system with dark secrets.", rating: 7.2 },
      { name: "Vortex", synopsis: "An experimental physicist opens a portal to another dimension.", rating: 7.5 },
      { name: "Tides of War", synopsis: "A sailor must survive the dangers of a war-torn ocean.", rating: 8.1 },
      { name: "The Art of Espionage", synopsis: "A young spy navigates the world of espionage.", rating: 7.6 },
      { name: "Echoes of War", synopsis: "A veteran grapples with memories from the battlefield.", rating: 7.0 },
      { name: "The Long Goodbye", synopsis: "A detective tries to solve his last case before retirement.", rating: 7.8 },
      { name: "The Gilded Cage", synopsis: "A socialite finds herself trapped in a luxurious prison.", rating: 7.4 },
      { name: "Chasing the Storm", synopsis: "A storm chaser discovers a mysterious force within the clouds.", rating: 8.2 },
      { name: "Mosaic", synopsis: "A detective connects seemingly unrelated murders in a chilling pattern.", rating: 7.9 },
      { name: "The Crystal Fortress", synopsis: "An explorer seeks a mythical fortress made entirely of crystal.", rating: 8.5 },
      { name: "The Iron Mask", synopsis: "A warrior fights to uncover his hidden heritage in a divided kingdom.", rating: 7.3 },
      { name: "Fallen Kingdom", synopsis: "A prince must reclaim his throne from a ruthless usurper.", rating: 7.7 },
      { name: "Dusk till Dawn", synopsis: "A night shift worker witnesses strange events after dark.", rating: 7.2 },
      { name: "The Silent Woods", synopsis: "A couple discovers eerie secrets in an isolated cabin in the woods.", rating: 8.0 },
      { name: "Midnight Echo", synopsis: "A journalist investigates paranormal activities in a small town.", rating: 8.1 },
      { name: "The Black Rose", synopsis: "An assassin grapples with his conscience on his final mission.", rating: 8.3 },
      { name: "Into Oblivion", synopsis: "A young scientist's experiment goes horribly wrong.", rating: 7.5 },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('movies', null, {});
  }
};
