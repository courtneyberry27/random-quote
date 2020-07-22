
/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*** 
 * `quotes` array: gives quotes for cycling through as objects in an array.
 ***/
let quotes = [
    { quote: 'Life is about making an impact, not making an income.', source: 'Kevin Kruse', tags: "Financial" },
    { quote: 'Whatever the mind of man can coonceive and believe, it can achieve.', source: "Napoleon Hill" },
    { quote: 'Strive not to be a success, but rather to be of value.', source: 'Albert Einstein' },
    { quote: 'Two roads diverged in a wood, and I-I took the one less traveled by, and that has made all the difference.', source: 'Robert Frost', citation: "The Road Not Taken", year: '1916', tags: "Poetry" },
    { quote: 'I attribute my success to this: I never gave or took any excuse.', source: 'Florence Nightingale', citation: "The Life of Florence Nightingale", tags: "Biography" },
    { quote: 'You miss 100% of the shots you don’t take.', source: 'Wayne Gretzky', year: "1983" },
    { quote: "I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.", source: 'Michael Jordan', tags: "Sports" },
    { quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", source: 'Amelia Earhart' },
    { quote: 'Every strike brings me closer to the next home run.', source: "Babe Ruth", tags: "Sports" },
    { quote: "Definiteness of purpose is the starting point of all achievement.", source: "Clement Stone" },
    { quote: "Life isn't about getting and having, it's about giving and being.", source: "Kevin Kruse" },
    { quote: "Life is what happens to you while you’re busy making other plans.", source: 'John Lennon', citation: "Beautiful Boy (Darling Boy)", year: "1980", tags: "Music" },
    { quote: "Life is 10% what happens to me and 90% of how I react to it.", source: 'Charles Swindoll' },
    { quote: "The most common way people give up their power is by thinking they don’t have any.", source: "Alice Walker" },
    { quote: "The mind is everything. What you think you become.", source: 'Buddha', tags: "Spirituality" },
    { quote: "An unexamined life is not worth living.", source: "Socrates", tags: "Philosophy" },
    { quote: "Eighty percent of success is showing up.", source: "Woody Allen" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", source: "Steve Jobs" },
    { quote: "Every child is an artist.  The problem is how to remain an artist once he grows up.", source: "Pablo Picasso", tags: "Art" },
    { quote: "You can never cross the ocean until you have the courage to lose sight of the shore.", source: "Christopher Columbus", tags: "History" },
    { quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", source: "Maya Angelou" },
    { quote: "Whether you think you can or you think you can’t, you’re right.", source: "Henry Ford" },
    { quote: "The two most important days in your life are the day you are born and the day you find out why.", source: "Mark Twain", tags: "Literature" },
    { quote: "The only person you are destined to become is the person you decide to be.", source: "Ralph Waldo Emerson", tags: "Literature" },
    { quote: "Go confidently in the direction of your dreams.  Live the life you have imagined.", source: "Henry David Thoreau", tags: "Literature" },
    { quote: "Teach thy tongue to say, 'I do not know,' and thous shalt progress.", source: "Maimonides" },
    { quote: "Fall seven times and stand up eight.", source: "Japanese Proverb" },
    { quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", source: "Helen Keller" },
    { quote: "If you want to lift yourself up, lift up someone else.", source: "Booker T. Washington" }
];


/***
 * `getRandomQuote` function
 * Description: Creates a random number using the length of the quotes array, then uses that number as the index of quotes array.
 * @returns [object]- the randomQuote, which is the index referring to a random object with information about the quote in it.
 ***/
function getRandomQuote() {
    let randNum = Math.floor(Math.random() * quotes.length); //generates random number
    randomQuote = quotes[randNum]; //uses random number as index for array of quotes
    return randomQuote;
}

/***
 * `getRandomColor` function
 * Description: generates random color for background of quote each time a new quote is displayed
 * No return value necessary because of the second line.
 */
function getRandomColor() {
    let randomColor = Math.floor(Math.random() * Math.pow(256, 3)).toString(16); //randomizes the color using all possible ascii characters, therefore creating a ton of letter combos behind the # in the color 
    document.body.style.backgroundColor = "#" + randomColor;
}

/***
 * `printQuote` function
 * Description: diplays relevant and given quote information to the screen.
 * @return {"string"]- returns message and displays to quote box.
 ***/
function printQuote() {
    let randomQuote = getRandomQuote(quotes); //calls getRandomQuote function 
    let quote = `<p class = "quote">${randomQuote.quote}</p>` //creates the quoteportion of the output
    let source;
    // conditional formatting to only display source information that is given in quote object
    if (randomQuote.citation === undefined && randomQuote.year === undefined && randomQuote.tags === undefined) { //if only author is given
        source = `<p class= "source"> ${randomQuote.source}</p>`;
    } else if (randomQuote.citation !== undefined && randomQuote.year === undefined && randomQuote.tags === undefined) { //if only author and citation are given in quote object
        source = `<p class = "source"> ${randomQuote.source}, ${randomQuote.citation}</p>`;
    } else if (randomQuote.citation === undefined && randomQuote.year !== undefined && randomQuote.tags === undefined) { //if only author and year are given in quote object
        source = `<p class = "source"> ${randomQuote.source}, ${randomQuote.year}</p>`;
    } else if (randomQuote.citation !== undefined && randomQuote.year !== undefined && randomQuote.tags === undefined) { // if author, citation, and year are given in quote object
        source = `<p class = "source"> ${randomQuote.source}, ${randomQuote.citation}, ${randomQuote.year}</p>`;
    } else if (randomQuote.citation !== undefined && randomQuote.year !== undefined && randomQuote.tags !== undefined) { // if author, citation, year, and tag are given in the quote object
        source = `<p class = "source"> ${randomQuote.source}, ${randomQuote.citation}, ${randomQuote.year}, ${randomQuote.tags}</p>`;
    } else if (randomQuote.citation !== undefined && randomQuote.year === undefined && randomQuote.tags !== undefined) { //if only citation, author, and tag are given
        source = `<p class = "source"> ${randomQuote.source}, ${randomQuote.citation}, ${randomQuote.tags}</p>`;
    } else if (randomQuote.citation == undefined && randomQuote.year !== undefined && randomQuote.tags !== undefined) { // if only year, author and tag are given
        source = `<p class = "source"> ${randomQuote.source}, ${randomQuote.year}, ${randomQuote.tags}</p>`;
    } else if (randomQuote.citation === undefined && randomQuote.year === undefined && randomQuote.tags !== undefined) { // if only author and tag are given
        source = `<p class = "source"> ${randomQuote.source}, ${randomQuote.tags}</p>`;
    } else { // if nothing is known about the source in the object
        source = `<p class = "source"> Unknown </p>`;
    }
    let message = quote + source; //combines the two aspects to output the full message
    let outputDiv = document.getElementById('quote-box'); //references box created for quote in HTML and CSS
    outputDiv.innerHTML = message; //prints quote to box
    getRandomColor(); // calls random color function

    return message;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
