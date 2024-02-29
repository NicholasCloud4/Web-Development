var loveScore = Math.random() * 100 + 1;
loveScore = Math.floor(loveScore);
console.log(loveScore);

if(loveScore > 70){
    console.log("Your love score is: " + loveScore + "% \nYou will LOVE eachother.");
} else if(loveScore > 30 && loveScore <= 70){
    console.log("Your love score is: " + loveScore + "%");
}
else{
    console.log("Your loves score is: " + loveScore + "%. \nYou are not meant to be together.");
}