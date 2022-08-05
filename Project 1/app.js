//variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{quote: `“Fortune favors the bold.”` , person: `- Virgil.`},
                {quote: `“I think, therefore I am.”` , person: `- René Descartes`},
                {quote: `"Life is what happens when you're busy making other plans""` , person: `-John Lennon`},
                {quote: `"When the going gets tough, the tough get going."` , person: `- Joe Kennedy`},
                {quote: `"You must be the change you wish to see in the world."` , person: `- Mahatma Gandhi`},
                {quote: `"You only live once, but if you do it right, once is enough."` , person: `- Mae West`},
                {quote: `"Tough times never last but tough people do."` , person: `- Robert H Schuller`},
                {quote: `"Whether you think you can or you think you can't, you're right."` , person: `Henry Ford`},
                {quote: `"Tis better to have loved and lost than to have never loved at all"` , person: `- Alrded Lord Tennyson`},
                {quote: `"A man is but what he knows"` , person: `- Sir Francis Bacon`},
                {quote: `"You miss 100 percent of the shots you never take."` , person: `- Wayne Gretzky`},
                {quote: `"If you're going through hell, keep going."` , person: `- Winston Churchill`},
                {quote: `"Strive not to be a success, but rather to be of value."` , person: `- Albert Einstein`},
                {quote: `"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do."` , person: `- Mark Twain`},
                {quote: `"Great minds discuss ideas; average minds discuss events; small minds discuss people."` , person: `- Eleanor Roosevelt`},
                {quote: `"Those who dare to fail miserably can achieve greatly."` , person: `- john F Kennedy`},
                {quote: `"Life is ten percent what happens to you and ninety percent how you respond to it."` , person: `- Charles Swindoll`}
                ];


btn.addEventListener("click", function(){

    let random = Math.floor(Math.random()* quotes.length);

    quote.textContent = quotes[random].quote;
    person.textContent = quotes[random].person;
})