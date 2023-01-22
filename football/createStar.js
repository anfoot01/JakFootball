function starCreate (star){

 let five = document.createElement('input');
five.type = "radio";
five.id = "star-5";
five.name = "rating";
five.value = "5";
star.append(five);

let four = document.createElement('input');
four.type = "radio";
four.id = "star-5";
four.name = "rating";
four.value = "5";
star.append(four);

let three = document.createElement('input');
three.type = "radio";
three.id = "star-5";
three.name = "rating";
three.value = "5";
star.append(three);

let two = document.createElement('input');
two.type = "radio";
two.id = "star-5";
two.name = "rating";
two.value = "5";
star.append(two);

let one = document.createElement('input');
one.type = "radio";
one.id = "star-5";
one.name = "rating";
one.value = "5";
star.append(one);

let labelFive = document.createElement('label');
labelFive.for = "star-5";
star.append(labelFive);

let labelFour = document.createElement('label');
labelFour.for = "star-5";
star.append(labelFour);

let labelThree = document.createElement('label');
labelThree.for = "star-5";
star.append(labelThree);

let labelTwo = document.createElement('label');
labelTwo.for = "star-5";
star.append(labelTwo);

let labelOne = document.createElement('label');
labelOne.for = "star-5";
star.append(labelOne);
}