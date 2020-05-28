var likesPinas;
var likesGettingCaughtInTheRain;
var isNotIntoYoga;
var hasHalfABrain;
var likesMakingLoveAtMidnightOnTheDunesByTheCape;

likesPinas = confirm("do you like pina coladas");
likesGettingCaughtInTheRain = confirm("and getting caught in the rain");
isNotIntoYoga = confirm("are you not into yoga");
hasHalfABrain = confirm("do you have half a brain");
likesMakingLoveAtMidnightOnTheDunesByTheCape = confirm("do you like making love at midnight on the dunes by the cape");

if (likesPinas &&
    likesGettingCaughtInTheRain &&
    isNotIntoYoga &&
    hasHalfABrain &&
    likesMakingLoveAtMidnightOnTheDunesByTheCape) {
    alert("I'm the one that you've looked for - come with me and escape");
    location.assign("https://www.youtube.com/watch?v=TazHNpt6OTo");
}
else {
	alert("thank u, next!");
}