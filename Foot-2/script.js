for (let i = 0; i < 10; i++) {
    
    let card = document.createElement('div');
let position = document.createElement('p');
let enterName = document.createElement('textarea');


enterName.rows = 1;
enterName.cols = 14;
enterName.class = "enterName";
card.class = "card";
card.id = "card - i"
position.class = "position";


document.body.append(card);
card.append(position);

card.append(enterName);

position.innerHTML = "GK";

enterName.innerHTML = "name of player";

console.log(card.class);

}
