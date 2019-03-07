"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Caleb Snow
   Date:   3/4/19
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/
// This variable simply calls upon the text string holding the race title and amking it a value for every race to have their specific title
var reportHTML = "<h1>" + raceTitle + "</h1>";
//This main for loop makes it so that all of the votes wuithin the specific races have their specific amounts of votes going to whatever candidate using the table tag with table rows with table headers
for (var i = 0; i < race.length; i++) {
    var totalVotes = 0;
    votes[i].forEach(calcSum);
    reportHTML += "<table>";
    reportHTML += "<caption>" + race[i] + "</caption>";
    reportHTML += "<tr><th>Candidate</th><th>Votes</th><tr>";
    reportHTML += candidateRows(i, totalVotes);
    reportHTML += "</table>";
}
//The document here puts all of the following JavaScript into the section tag that we have placed specifically into the index.html file 
document.getElementsByTagName("section")[0].innerHTML = reportHTML;
//This function makes all of the specific candidate variables for each candidate in each race including their name, party, votes that is later presented by the bar function
function candidateRows(raceNum, totalVotes) {
    var rowHTML = "";
    for (var j = 0; j <= 2; j++) {
        var candidateName = candidate[raceNum][j];
        var candidateParty = party[raceNum][j];
        var candidateVotes = votes[raceNum][j];
        var candidatePercent = calcPercent(candidateVotes, totalVotes);
        rowHTML += "<tr><td>" + candidateName + "(" + candidateParty + ")</td><td>" + candidateVotes.toLocaleString() + "(" + candidatePercent.toFixed(1) + "%)</td></tr>"
//This nested for loop actually makes the physical look of the bar itself
        for (var k = 0; k < candidatePercent; k++) {
            rowHTML += createBar(candidateParty);
        }
//This is the ending table row tag to keep in track with the rowHTML variable and whewre it ends
        rowHTML += "</tr>"
    }
//This return value makes an ending point for the row HTML's effects 
    return rowHTML;
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}
//This function holds the switch case which makes it so that each race will have visual stats for the user to see and compare even
function createBar(partyType) {
    var barHTML = "";
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>"
            break;
        case "R":
            barHTML = "<td class='rep'></td>"
            break;
        case "I":
            barHTML = "<td class='ind'></td>"
            break;
    }
    return barHTML;
}