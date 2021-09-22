
function superbowlWin(array) {
    let foundPerson = array.find(isWin);
    if (foundPerson) {
        return foundPerson.year;
    } else {
        return foundPerson;
    }
}

function isWin(resultObject) {
    return resultObject.result === "W";
}

