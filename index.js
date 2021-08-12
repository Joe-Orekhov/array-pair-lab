const ourCohort = [
    "Erica Rojo",
    "Natalie Barba",
    "Joe Orekhov",
    "Tina Guliuzza",
    "Gabriel Rodriguez",
    "Shawna Akiona",
    "Charles Oneymem",
    "Melissa Funk",
    "Gabriel Miranda",
]

const coursePhases = [
    {phaseNumber: 1, name: "Vanilla JavaScript", language: "JavaScript", framework: "None"},
    {phaseNumber: 2, name: "JS, React, & Redux", language: "JavaScript", framework: "React"},
    {phaseNumber: 3, name: "Vanilla Ruby", language: "Ruby", framework: "None"},
    {phaseNumber: 4, name: "Rails as an API", language: "Ruby", framework: "Rails"},
    {phaseNumber: 5, name: "Capstone Project", language: "Ruby & JavaScript", framework: "Rails & React"}
]

// Write your functions here!
function sortCohortDesc() {
    ourCohort.sort()    
    return ourCohort.reverse()
}

function shortNames() {
    return ourCohort.filter(name => name.length < 15)

}
    
function cohortSize() {
   return ourCohort.length
}

function locateStudent(x) {
   const name = ourCohort.indexOf(x)
   return ourCohort[name]
}

 function phaseNames(){
   return coursePhases.map(x => x.name)
}

function cohortPhases(){
    return coursePhases.filter(x => x.language === 'JavaScript')
 }

function allTheGabes(){
    return ourCohort.filter(x => x.includes("Gabriel"))
}

function studentAndPhase(){
    return ourCohort.map(x => x + 'is in Phase one')
}

function sortPhasesByName(){
    newArr = (ourCohort.map(x => x + 'is in Phase one'))
    return newArr.sort()
    
}



// You don't have to change anything below this line
// These console logs are for you to check your work in the browser console.

console.log(sortCohortDesc())
console.log(shortNames())
console.log(cohortSize())
console.log(locateStudent("Joe Orekhov"))
console.log(phaseNames())
console.log(cohortPhases())
console.log(allTheGabes())
console.log(studentAndPhase())
console.log(sortPhasesByName())
