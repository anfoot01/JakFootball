 function style(i, name, club, del, elem, rating) {
    
   name.style.cssText = `color: azure;
    
    font-size:28px;
    text-decoration:underline solid red;
    text-align:left;
     `;

rating.style.cssText = `color: azure;
    
    font-size:26px;
    text-align:left;
     `;

club.style.cssText = `color: azure;
     
     font-size:24px;
     text-decoration:underline solid red;
     text-align:left;

     `;

del.style.cssText = `
     position: relative; 
     right:-224px;
     top:-90px;
     background:tomato;
     font-size:18px;
     border-radius: 50%;
     `;

elem.style.cssText =
  `
       background-image: url(` +
  players[i].img +
  `);
       background-color: aquamarine;
       width: 450px;
       height: 250px;
       border-radius: 25px;
       text-align: center;
       font-size:19px;
       border:20px solid white;
       background-size: cover;
       opacity: 0.75; 
       display: inline-block;
     `;
    }
