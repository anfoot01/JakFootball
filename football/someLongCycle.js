for (let i = 0; i < players.length; i++) {
  let del = document.createElement("button");
  let elem = document.createElement("div");
  let name = document.createElement("div");
  let link = document.createElement("div");
  let club = document.createElement("div");
  let rating = document.createElement("div");
  let star = document.createElement("div");

  del.class = "del";
  star.classList.add("rating");
  elem.class = "div";
  name.class = "name";
  link.class = "link";
  club.class = "club";
  rating.class = "rating";
  del.onclick = "deletePlayers"
 

  del.innerHTML = "X";
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

   deletePlayers(elem);

   style(i, name, club, del, elem, rating);

}

