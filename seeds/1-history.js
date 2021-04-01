
exports.seed = function (knex, Promise) {
  return knex('history').insert([
    { id: 1, name: 'Salazar Slytherin', message: "Ssssslytherin isssss awesssssome! It'sssss the bessssst house. Down with the othersssss. We like green. We're not evil but dark magic isssss kind of cool, no? " },
    { id: 2, name: 'Salazar Slytherin', message: "I'll just leave thisssss sssssecret chamber here ssssso that one day a sssssuper duper pure blood ssssstudent can releassssse the basssssilisssssk and cleanssssse the ssssschool of thossssse who are not worthy of coming here." },
    { id: 3, name: 'The Basilisk', message: "I'm a ssssssssssssssssssssnaaaake" },
    { id: 4, name: 'Lord Voldemort', message: "Curssssse you, Harry Potter! If it weren't for you and thossssse other meddling kidsssss I'd be, like, sssssuper ssssspecial powerful right now and basssssically the bossssssssss of the world and thingsssss and everyone would do the thingsssss I want them to and maybe I could have a sssssoul." },
    { id: 5, name: 'Draco Malfoy', message: "Booksssss, quillsssss, robesssss, parchment, ssssshoesssss, sssssweetsssss, cauldron." },
    { id: 6, name: 'Bellatrix Lestrange', message: "Who can I curssssse next ssssso that the Dark Lord will love me?" },
    { id: 7, name: 'Draco Malfoy', message: "I really wisssssh I wasssssn't in the Death Eatersssss now. I'm not really into all thisssss torture and avada kedavra'sssss and thingsssss. Unfortunately it ssssseemsssss to be a bit like blood-in blood-out with thessssse folksssss. " },
    { id: 8, name: 'Lucius Malfoy', message: "I'm ssssso sssssick of the Dark Lord bossssssssssing me around! Give me a break mate I'm doing my bessssst." },
    { id: 9, name: 'Lord Voldemort', message: "Harry Potter isssss jussssst the worssssst!" },
    { id: 10, name: 'Lord Voldemort', message: "I've forgotten where I put one of my Horcruxesssss but I'm too embarrassssssssssed to tell anyone." }
  ]);
}

