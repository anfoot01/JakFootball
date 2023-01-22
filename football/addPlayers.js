
function add() {
  let nameById = document.getElementById("Name");
  let clubById = document.getElementById("Club");
  let linkById = document.getElementById("Link");
  let ratingById = document.getElementById("Default-rating");
  modal.style.visibility = "unvisible";
  modal.style.opacity = "0";
  modal.style.transition = "0.2s";

  let arr = {
    name: nameById.value,
    club: clubById.value,
    img: linkById.value,
    rating: ratingById.value,
  };

  players.push(arr);

  for (let i = players.length - 1; i < players.length; i++) {
    let del = document.createElement("button");
    let elem = document.createElement("div");
    let name = document.createElement("div");
    let link = document.createElement("div");
    let club = document.createElement("div");
    let rating = document.createElement("div");
    let star = document.createElement("div");

    del.class = "del";
    star.classList.add("rating");
    elem.id = "div";
    name.id = "name";
    link.id = "link";
    club.id = "club";
    rating.id = "rating";
    del.onclick = deleteplayer;

    del.innerHTML = "x";
    name.innerHTML = players[i].name;
    club.innerHTML = players[i].club;
    rating.innerHTML = players[i].rating;

    document.body.append(elem);
    elem.append(name);
    elem.append(club);
    elem.append(star);
    elem.append(rating);
    elem.append(del);

    starCreate(star);

    style(i, name, club, del, elem, rating);


    deletePlayers(elem);
  }
}
