const song = "I will be right here waiting for you";

// const doseExist = song.includes("here");
// const doseExist = song.includes("hera");

const search = " HERE";

const doseExist = song.toLowerCase().includes(search.toLowerCase())

console.log(doseExist);
