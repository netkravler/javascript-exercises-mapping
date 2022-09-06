window.addEventListener("DOMContentLoaded", (event) => {
  //** wait until dom is fully loaded to run code inside */

  let cards = document.querySelectorAll(".card");
  /**get all elements by classname card */

  cards.forEach((e) => {
    e.addEventListener("click", () => {
      /**for each of the found elements, listen for an onclick */
      let id = e.getAttribute("id");
      //** get the id attribute for the found card */
      filterPerson(id);
      //** filter out all persons not equal to the id */
    });
  });
});

const data = [
  { id: 1, name: "John Doe", job: "Unknown", gender: "male" },
  { id: 2, name: "Maria Carey", job: "Singer", gender: "female" },
  { id: 3, name: "Michael Christensen", job: "Ruins pupils", gender: "male" },
  { id: 4, name: "Ole Olsen", job: "Speedway", gender: "male" },
  { id: 5, name: "Margaret Thatcher", job: "Politician", gender: "female" },
  { id: 6, name: "Marie Curie", job: "kernefysiker", gender: "male" },
];

const male = "https://www.w3schools.com/howto/img_avatar.png";

const female = "https://www.w3schools.com/howto/img_avatar2.png";

/*<figrue class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
</figure>*/

const filterPerson = (id) => {
  //document.getElementById("mother").innerHTML = "";
  //console.log(data.filter((x) => x.id === id)[0]);
  createElements(data.filter((x) => x.id == id)[0], "father");
};

const createElements = (data, father) => {
  document.getElementById("father").innerHTML = "";
  let fig = document.createElement("figure");
  fig.setAttribute("class", "card");
  fig.setAttribute("id", data.id);
  //fig.setAttribute("onclick", "filterPerson(" + data.id + ")");
  let img = document.createElement("img");

  img.setAttribute("src", data.gender === "male" ? male : female);
  img.setAttribute("alt", data.name + " er ansat som " + data.job);

  let art = document.createElement("article");
  art.setAttribute("class", "container");

  let h4 = document.createElement("h4");

  let b = document.createElement("b");
  let bTextNode = document.createTextNode(data.name);
  b.appendChild(bTextNode);

  let p = document.createElement("p");
  let pTextNode = document.createTextNode(data.job);
  p.appendChild(pTextNode);

  h4.appendChild(b);
  art.appendChild(h4);
  art.appendChild(p);

  fig.appendChild(img);
  fig.appendChild(art);

  document.getElementById(father ? "father" : "mother").appendChild(fig);
};

const createElement = (data) => {
  document.getElementById("mother").innerHTML += `
  <figure class="card" id=${data.id}>
  <img src=${data.gender === "male" ? male : female} alt=${data.name + " er ansat som " + data.job} >
  <article class="container">
    <h4><b>${data.name}</b></h4>
    <p>${data.job}</p>
  </article>
</figure>
  
  `;
};

data.map((person) => createElements(person));
