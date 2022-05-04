const hogwartsHouses = [
  {
    id: 1,
    name: "Gryffindor",
    logo: "images/gryffindor_logo.jpeg"
  },
  {
    id: 2,
    name: "Slytherin",
    logo: "/images/slitherin_logo.jpeg"
  },
  {
    id: 3,
    name: "Hufflepuff",
    logo: "/images/hufflepuff_logo.jpeg"
  },
  {
    id: 4,
    name: "Ravenclaw",
    logo: "/images/ravenclaw_logo.jpg"
  },
];

const students = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor",
    logo: "images/gryffindor_logo.jpeg"
  },
  {
    id: 2,
    name: "Hermione Granger",
    house: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 3,
    name: "Ron Weasley",
    house: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 4,
    name: "Ginny Weasley",
    house: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 5,
    name: "Fred Weasley",
    house: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 6,
    name: "George Weasley",
    house: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 7,
    name: "Draco Malfoy",
    house: "Slytherin",
    logo: "/images/slitherin_logo.jpeg"
  },
  {
    id: 8,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    logo: "/images/ravenclaw_logo.jpg"
  },
  {
    id: 9,
    name: "Neville Longbottom",
    house: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 10,
    name: "Cho Chang",
    house: "Ravenclaw",
    logo: "/images/ravenclaw_logo.jpg"
  },
  {
    id: 11,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    logo: "/images/hufflepuff_logo.jpeg"
  },
  {
    id: 12,
    name: "Albus Dumbledore",
    house: "Gryffindor",
    logo: "/images/gryffindor_logo.jpeg"
  },
  {
    id: 13,
    name: "Tom Riddle",
    house: "Slytherin",
    logo: "/images/slitherin_logo.jpeg"
  }
];

const expelledStudents = [];

const app = document.querySelector("#app");
let domString = "";

//Utility function
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
};

//cards on dom
const cardsOnDom = (cards) => {
  let domString = "";
  for (const student of students) {
    domString += 
    `<div class="card">
      <div id="header-for-${student.house}" class="card-header">
      ${student.house}
      </div>
      <div class="card-body">
      <h5 id="name" class="card-title">${student.name}</h5>
      <a href="#" id="expel" class="btn btn-danger">Expel</a>
      </div>
    </div>`;
  }
    renderToDom('#cardContainer', domString);
}



const filterButtons = () => {
  let domString =
  `<div class="form-floating mb-3">
  <input type="text" class="sortBtn form-control" id="sort-button" placeholder="SORT">
  <label for="sort-button">Enter Students Name</label>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button id="magicBtn" class="btn btn-primary" type="button" data-bs-target="#sortingHat">Let's the Magic Begin!!! </button>
  </div>
  </div>
  <div id="filterButtons" class="d-flex justify-content-between mb-3 filterButtons">
  <button id="all-houses" class="btn btn-secondary w-100 m-1">All</button>
  <button id="gryffindor-house" class="btn btn-danger w-100 m-1">Gryffindor</button>
  <button id="hufflepuff-house" class="btn btn-warning w-100 m-1">Hufflepuff</button>
  <button id="ravenclaw-house" class="btn btn-info w-100 m-1">Ravenclaw</button>
  <button id="slytherin-house" class="btn btn-success w-100 m-1">Slytherin</button>
</div>
</div>`;
  renderToDom('#filterContainer', domString); 
}


//filter
const filter = (e) => {
  const result = filterText === "all" ? students : students.filter(student => student.house.toLowerCase() === filterText)
  const app = document.querySelector("#app");
  let domString = "";
    for (const student of students) {
      domString += 
      `<div class="card" style="width: 18rem;">
      <div id="name" class="card-header">${student.name}</div>
      <button class="btn btn-dange text-end" id="delete--${student.id}">x</button>
      <div class="card-body">
      <img src="${student.logo}" class="card-img-top" alt="house photo">
      <p class="card-text">${student.house}</p>
      </div>
    </div>`;
    }
      renderToDom('#cardContainer', domString);
  
}

const sortingHat = (e) => {
  
    e.preventDefault();
    const inputText = studentInput.value;
    if (inputText === ``) {
      blankFieldAlert();
    } else {
      const newStudent = {
        name: inputText,
        house: hogwartsHouses[Math.floor(Math.random()*hogwartsHouses.length)],
        id: `student${studentCounter}`,
      };
      if (newStudent.house === 'Gryffindor') {
        newStudent.crest = 'images/gryffindor_logo.jpeg';
      } else if (newStudent.house === 'Hufflepuff') {
        newStudent.crest = 'images/hufflepuff_logo.jpeg';
      } else if (newStudent.house === 'Slytherin') {
        newStudent.crest = 'images/slitherin_logo.jpeg';
      } else {
        newStudent.crest = 'images/gryffindor_logo.jpeg';
      };
      students.push(newStudent);
      studentCounter++;
      renderToDom('students', inputText);
      domStringBuilder(students, 'students');
      expelEvent();
      studentInput.value = ``;
    };
  
  
  // let domString = "";
  // domString = 
  // `
  
  // `;
  // renderToDom("#sortingHat", domString);
};
//filter

const eventListeners = () =>{
  const formModal = new bootstrap.Modal(document.querySelector('#filterContainer'));

  document.querySelector("#gryffindor-house").addEventListener("click", filter)
  document.querySelector("#hufflepuff-house").addEventListener("click", filter)
  document.querySelector("#ravenclaw-house").addEventListener("click", filter)
  document.querySelector("#slytherin-house").addEventListener("click", filter)
  document.querySelector("#all-houses").addEventListener("click", filter)

    // this goes in EVERY form submit to prevent page reload
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault(); 

      const newObj = {
        id: document.querySelector("#id").value,
        name: document.querySelector("#name").value,
        house: document.querySelector("#house").value,
        logo: document.querySelector("#logo").value,
      };
      // push that object to the data array    
      students.push(newObj);
      cardsOnDom(students);
  
      // Close modal and reset form
      formModal.hide() //closes the modal manually
      form.reset();
    });
   
};  


//delete function
// const expelEvent = () => {
document.querySelector("#cardContainer").addEventListener("click", (e) => {
  if (e.target.id.includes("expel")) {
    const [method, id] = e.target.id.split("--");
    const index = students.findIndex(student => student.id === parseInt(id)); 
    students.splice(index, 1);
    cardsOnDom(students);
  }
})
// }


function startApp () {
  filterButtons();
  cardsOnDom(students);

  eventListeners();//always last
};

//starts app to use funtions above^^
startApp();
