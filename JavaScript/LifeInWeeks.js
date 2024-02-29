
function lifeUntilNinety(age){
    var monthsUntil90 = (90 - age) * 12;
    var weeksUntil90 = (90 - age) * 52;
    var daysUntil90 = (90 - age) * 365;

    console.log("You have " + daysUntil90 + " days, " + weeksUntil90 + " weeks, and " + monthsUntil90 + " months left.");

}

lifeUntilNinety(56);

