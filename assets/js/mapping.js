const data = [
  { id: 1, name: "John Doe", job: "Unknown", gender: "male" },
  { id: 2, name: "Maria Carey", job: "Singer", gender: "female" },
  { id: 3, name: "Michael Christensen", job: "Ruins pupils", gender: "male" },
  { id: 4, name: "Ole Olsen", job: "Speedway", gender: "male" },
  { id: 5, name: "Margaret Thatcher", job: "Politician", gender: "female" },
  { id: 6, name: "Marie Curie", job: "kernefysiker", gender: "male" },
];
//** array of objects containing people */

const male = "https://www.w3schools.com/howto/img_avatar.png";

const female = "https://www.w3schools.com/howto/img_avatar2.png";

const filterPerson = (id) => {
  //document.getElementById("mother").innerHTML = "";
  //console.log(data.filter((x) => x.id === id)[0]);
  createElement(data.filter((x) => x.id == id)[0], "father");
};




const createElement = (data, father) => {

  document.getElementById("father").innerHTML = "";
  
  document.getElementById(father ? "father" : "mother").innerHTML += `
  <figure class="card" id=${data.id}>
  <img src=${data.gender === "male" ? male : female} alt=${data.name + " er ansat som " + data.job} >
  <article class="container">
    <h4><b>${data.name}</b></h4>
    <p>${data.job}</p>
  </article>
</figure>
  
  `;
};

data.map((person) => createElement(person));
//** map over every object in the data array */
//** init the "app" with the first person in data array */

filterPerson(data[0].id);

let cards = document.querySelectorAll(".card");

/*get all elements by classname card */

cards.forEach((e) => {
  e.addEventListener("click", () => {
    /**for each of the found elements, listen for an onclick */
    let id = e.getAttribute("id");
    //** get the id attribute for the found card */
    filterPerson(id);
    //** filter out all persons not equal to the id */
  });
});
