function gradeCalculator(score){
    let grade = "";
    switch(true){
        case (score>=95) :
            grade = "O+";
            break;
        case (score >=85):
            grade = "A+";
            break;
        case (score >=75):
            grade = "B+";
            break;
        case (score >=65):
            grade = "C";
            break;
        default:
            grade = "E";
            break;    
    }
    return grade;
}


console.log(gradeCalculator(100));
console.log(gradeCalculator(90));
console.log(gradeCalculator(83));
console.log(gradeCalculator(71));
console.log(gradeCalculator(58));
