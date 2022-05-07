const hogwartsHouses = [
  {
    id: 1,
    name: "Gryffindor",
    logo: src="images/gryffindor_logo.jpeg"
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
    logo: 'images/gryffindor_logo.jpeg'
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
    const gryffindor = student.house === "Gryffindor";
    const hufflepuff = student.house === "Hufflepuff";
    const ravenclaw = student.house === "Ravenclaw";
    const slytherin = student.house === "Slytherin";
    domString += 
    `<div class="card">
      <div id="header-for-${student.house}" class="card-header">
      ${student.house}
      </div>
      <div class="card-body">
      <h5 id="name" class="card-title">${student.name}</h5>
      <a href="#" id="expel--${student.id}" class="btn btn-danger">Expel</a>
      </div>
    </div>`;
  }
    renderToDom('#housedStudents', domString);
}


const filterButtons = () => {
  let domString = '';
  domString = 
  `<div class="form-floating mb-3">
  <input type="text" class="sortBtn form-control" id="sort-button" placeholder="SORT">
  <label id="enterName" for="sort-button">Enter Students Name</label>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
    <button type="submit" class="btn btn-primary" data-bs-target="#sortingHat">Let's the Magic Begin!!! </button>
  </div>
  </div>
  <div id="filterButtons" class="d-flex justify-content-between mb-3 filterButtons">
  <button id="all" class="btn btn-secondary w-100 m-1">All</button>
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
      renderToDom('#housedStudents', domString);
}


const expelledStudentsArmy = (arr, divId) => {
  let domString = "";
  for (const student of arr) {
    domString += 
    `<div class="card" style="width: 18rem;">
    <div id="expelledStudents" class="card-header">${student.name}</div>
    <div class="card-body">
    <img src="https://qph.cf2.quoracdn.net/main-qimg-3f4530c1aedbb9b0f5049c4bd90b08c5-lq" class="card-img-top" alt="house photo">
    <p class="card-text">Expelled</p>
    </div>
  </div>`
    
  }
  renderToDom(divId, domString);
};

const newStudent = () => {
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    const random = Math.floor(Math.random() * houses.length);
    const newStudentObj = {
      id: students.length + 1,
      name: document.querySelector("#enterName").value,
      house: houses[random],
      logo: logo[random],
    };
    students.push(newStudentObj);
    cardsOnDom(students);
    formInput.reset();
  });
};

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
        newStudent.crest = src='images/gryffindor_logo.jpeg';
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
};


//filter
// const eventListeners = () =>{
//   // document.querySelector("#filterContainer").addEventListener("click", (e) => {
//   //   console.log(e.target.id);
//   //   if (e.target.id === "all") {
//   //     cardsOnDom(students);
//   //   } else if (e.target.id === "gryffindor-house") {
//   //     cardsOnDom(students.filter((housedStudents) => housedStudents.house === "Gryffendor"));
//   //   } else if (e.target.id === "ravenclaw-house") {
//   //     cardsOnDom(students.filter((housedStudents) => housedStudents.house === "Ravenclaw"));
//   //   } else if (e.target.id === "hufflepuff-house") {
//   //     cardsOnDom(students.filter((housedStudents) => housedStudents.house === "Hufflepuff"));
//   //   } else if (e.target.id === "slytherin-house") {
//   //     cardsOnDom(students.filter((housedStudents) => housedStudents.house === "Slytherin"));
//   //   }
//   //   cardsOnDom()
//   // });

//   document.querySelector('#filterContainer').addEventListener('click', (e) => {
//     if (e.target.id === "all") {
//       cardsOnDom(students, "#housedStudents");
//     } else if (e.target.id) {
//       const house = students.filter((student) => student.house.toLowerCase() === e.target.id);
//       cardsOnDom(house, "#students");
//     }
//   });

//   const form = document.querySelector("form");
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     newStudent = {
//       name: document.querySelector("#enterName").value,
//       house: houses[Math.floor(Math.random() * 6)],
//     },
//       document.querySelector("#card-header").style.display = "none";
//       document.querySelector("#card-body").style.display = "none";
//       students.push(addedStudent);
//       newStudent.push(addedStudent);
//       cardsOnDom(students, "#students");
//       filterButtons();
// });



//   document.querySelector("#filterContainer").addEventListener("click", (e) => {
//       if (e.target.id === "all") {
//         cardsOnDom(students);
//         expelOnDom(expelledStudents);
//       } else if (e.target.id) {
//         const studentHouse = students.filter(
//           (hogwartsHouses) => hogwartsHouses.house.toLowerCase() === e.target.id
//         );
//         console.log(studentHouse);
//         cardsOnDom(studentHouse);
//       }
//     });


// }


// //delete function
// // const expelEvent = () => {
// document.querySelector("#housedStudents").addEventListener("click", (e) => {
//   if (e.target.id.includes("expel")) {
//     const [method, housedStudentsID] = e.target.id.split("--");
//     const index = students.findIndex(student => student.id === parseInt(housedStudentsID)); 
//     const badStudent = students.splice(index, 1);
//     expelledStudents.push(...badStudent);
//     expelledStudentsArmy(expelledStudents, "#expelledStudents");
//     cardsOnDom(students, "#students");
//   } 
// });
// }


const eventListeners = () =>{
  document.querySelector('#filterContainer').addEventListener('click', (e) => {
    if (e.target.id === "all") {
      cardsOnDom(students, "#housedStudents");
    } else if (e.target.id) {
      const house = students.filter((student) => student.house.toLowerCase() === e.target.id);
      cardsOnDom(house, "#students");
    }
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    newStudent = {
      name: document.querySelector("#enterName").value,
      house: houses[Math.floor(Math.random() * 6)],
    },
      document.querySelector("#card-header").style.display = "none";
      document.querySelector("#card-body").style.display = "none";
      students.push(addedStudent);
      newStudent.push(addedStudent);
      cardsOnDom(students, "#students");
      filterButtons();
});
  document.querySelector("#filterContainer").addEventListener("click", (e) => {
      if (e.target.id === "all") {
        cardsOnDom(students);
        expelOnDom(expelledStudents);
      } else if (e.target.id) {
        const studentHouse = students.filter(
          (hogwartsHouses) => hogwartsHouses.house.toLowerCase() === e.target.id
        );
        console.log(studentHouse);
        cardsOnDom(studentHouse);
      };
    });
    //delete function
  // const expelEvent = () => {

};
  document.querySelector("#housedStudents").addEventListener("click", (e) => {
  if (e.target.id.includes("expel")) {
    const [method, housedStudentsID] = e.target.id.split("--");
    const index = students.findIndex(student => student.id === parseInt(housedStudentsID)); 
    const badStudent = students.splice(index, 1);
    expelledStudents.push(...badStudent);
    expelledStudentsArmy(expelledStudents, "#expelledStudents");
    cardsOnDom(students, "#students");
  }; 
});

function startApp () {
  filterButtons();
  cardsOnDom(students);

  eventListeners();//always last
};

//starts app to use funtions above^^
startApp();
