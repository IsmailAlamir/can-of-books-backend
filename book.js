'use strict';

async function seedData(){
    const bookOne = new Book({
     title :  "Memoirs of a Geisha",
     description : "A literary sensation and runaway bestseller, this brilliant novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha." ,
     status  : "online Book"
    })
    const bookTwo = new Book({
     title :  "The Hobbit",
     description : "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort." ,
     status  : "online Book"
    })
    const bookThree = new Book({
     title :  "1984",
     description : "The new novel by George Orwell is the major work towards which all his previous writing has pointed. Critics have hailed it as his (most solid, most brilliant) work. Though the story of Nineteen Eighty-Four takes place thirty-five years hence, it is in every sense timely. The scene is London, where there has been no new housing since 1950 and where the city-wide slums are called Victory Mansions. Science has abandoned Man for the State. As every citizen knows only too well, war is peace." ,
     status  : "online Book"
    })
    await bookOne.save();
    await bookTwo.save();
    await bookThree.save();
}
module.exports=seedData;
