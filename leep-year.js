function isLeepYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}

const myYearIsLeepYear = isLeepYear(2016);

console.log(myYearIsLeepYear);

const herYearIsLeepYear = isLeepYear(2017);

console.log(herYearIsLeepYear);

