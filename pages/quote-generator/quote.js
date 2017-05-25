var quotes = [
  ["Make it so.", "Captain Jean-Luc Picard"],
  ["Things are only impossible until they are not.", "Captain Jean-Luc Picard"],      
  ["The road from legitimate suspicion to rampant paranoia is very much shorter than we think.", "Captain Jean-Luc Picard"],   
  ["It is possible to commit no mistakes and still lose. That is not a weakness. That is life.", "Captain Jean-Luc Picard"],
  ["No being is so important that he can usurp the rights of another.", "Captain Jean-Luc Picard"],
  ["Villians who twirl their mustaches are easy to spot. Those who clothe themselves in good deeds are well camouflaged.", "Captain Jean-Luc Picard"],
  ["Live now. Make now always the most precious time. Now will never come again.", "Captain Jean-Luc Picard"],
  ["That is what it is to be human, to make yourself more than you are.", "Captain Jean-Luc Picard"],
  ["What we leave behind is not as important as how we lived.", "Captain Jean-Luc Picard"],
  ["There are times when men of good conscience cannot blindly follow orders.", "Captain Jean-Luc Picard"],
  ["Being first at any cost is not always the point.", "Captain Jean-Luc Picard"],
  ["Imprisonment is an injury regardless of how you justify it.", "Captain Jean-Luc Picard"],
  ["With the first link, the chain is forged. The first speech censured, the first thought forbidden, the first freedom denied, chains us all irrevocably.", "Captain Jean-Luc Picard"],
  ["The first time any man's freedom is trodden on, we're all damaged.", "Captain Jean-Luc Picard"],
  ["Vigilance is the price we must continually pay.", "Captain Jean-Luc Picard"],
  
  ["The game's not big enough unless it scares you a little.","Commander William T. Riker"],
  ["In all trust, there is the possibility for betrayal.","Commander William T. Riker"],
  ["Maybe if we felt any human loss as keenly as we feel one of those close to us, human history would be far less bloody.","Commander William T. Riker"],
  ["Some days you get the bear, and some days the bear gets you.","Commander William T. Riker"],
  ["Fear is the true enemy, the only enemy.","Commander William T. Riker"],
  ["Don't try to be a great man, just be a man and let history make it's own judgements.","Commander William T. Riker"],
  
  ["You can't go through life trying to avoid getting a broken heart. If you do, it'll break from lonliness anyway.", "Doctor Julian Bashir"],
  ["Causing people to suffer because you hate them is terrible... but causing people to suffer because you've forgotten how to care, that's really hard to understand.", "Doctor Julian Bashir"],

  ["Ah, an open mind! The essence of intellect!", "Elim Garak"],
  
  ["When a man is convinced that he is going to die tomorow, he'll probably find a way to make it happen.", "Guinan"],
  
  ["Everyone has their reasons. That's what's so terrifying. People can find a way to justify any action, no matter how evil.","Major Kira Nerys"],
  ["The best way to survive a knife fight is never to get in one.","Major Kira Nerys"],
  ["If you want to change the government, you vote to change it. You don't sneak up from behind it with a dagger.","Major Kira Nerys"],
  
  ["You can use logic to justify almost anything. That's its power. And its flaw.","Captain Kathryn Janeway"],
  ["You know as well as I do that fear exists for one purpose, to be conquered.","Captain Kathryn Janeway"],
  ["You can't just walk away from your responsibilities because you made a mistake.","Captain Kathryn Janeway"],
  ["I dread the day when everyone agrees with me.","Captain Kathryn Janeway"],
  
  ["I've always thought technology could solve almost any problem. It enhances the quality of our lives, lets us travel across the galaxy, even gave me my vision. But sometimes you just have to turn it all off.","Lt. Commander Geordi LaForge"],
  
  ["Every once in a while, declare peace. It confuses the hell out of your enemies.","Quark"],
  
  ["Fun will now commence.","Seven of Nine"],
  
  ["That's the problem with believing in a supernatural being... trying to determine what he wants.","Deanna Troi"],
  ["To admit that you're afraid gives you strength.","Deanna Troi"],
  
  ["When it comes to picnics, the only thing that really matters is the company.","Lwaxana Troi"],
  
  ["Without the darkness, how would we recognise the light?","Tuvok"],
  ["We often fear what we don't understand. Our best defence is knowledge.","Tuvok"],
  
  
  
];

var currentQuote = quotes[0][0];
var currentAuthor = quotes[0][1];


function getQuote() {
  //index = quotes.length-1;
  index = Math.floor(Math.random()*quotes.length);
  currentQuote = quotes[index][0];
  currentAuthor = quotes[index][1];
  
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
    + encodeURIComponent('"' + currentQuote + '"\n --' + currentAuthor));
  document.getElementById("text").innerHTML= currentQuote;
  document.getElementById("author").innerHTML= currentAuthor;
}

$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
  $('#tweet-quote').on('click', function() { 
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
	  + encodeURIComponent('"' + currentQuote + '"\n --' + currentAuthor));
  });
});
