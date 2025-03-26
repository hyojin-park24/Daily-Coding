let courseName = "100Days";
let coursePrice = 100;
let courseMainGoals = ["one","two","three"];

alert(courseName);
alert(coursePrice);
alert(courseMainGoals);

let course = {
    name: courseName,
    price: coursePrice,
    mainGoals: courseMainGoals
};

alert(course.name);
alert(course.price);
alert(course.mainGoals);

alert(course.mainGoals[1]);


function getListItem(array, index) {
    let item = array[index];
    return item;
}
let goals = getListItem(course.mainGoals, 2);
alert(goals);
