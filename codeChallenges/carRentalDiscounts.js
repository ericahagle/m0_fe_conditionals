// Medium

// Using the following variables:

 var goodDrivingRecord = true;
 var age = 24;

//  var goodDrivingRecord = true;
//  var age = 25;

//  var goodDrivingRecord = false;
//  var age = 24;

//  var goodDrivingRecord = true;
//  var age = 27;

/* Write a program that evaluates the status of the variables above, and uses logic to print one of three possible messages:
 - If the driving record is good and user is over 25 years old, they should get a discount on the car rental
 - If the user either has a good record or is over 25 years old, they should pay full price
 - If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental */

if (goodDrivingRecord === true && age >= 25) {
    console.log("Mazel tov! You get a discount on your car rental!");
} else if (goodDrivingRecord === true || age >= 25) {
    console.log("You can rent a car from us at our set price.");
} else if (goodDrivingRecord !== true && age < 25) {
    console.log("Apologies, you'll need someone else to rent a car for you.");
} else {
    console.log("Huhwha???");
}

// NOTE FROM ERICA: I went ahead and assumed that if a user IS 25 years old, that counts the same as being OVER 25 years old because once you turn 25, you're then technically seconds/minutes/hours/days/weeks/months OVER 25.