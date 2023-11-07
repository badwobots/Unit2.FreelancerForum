// Freelancer name array for randomly generated freelancers
const names = ["John 117", "Linda 058", "Fred 104", "Kelly 087",];

//Freelancer occupation array for randomly generated freelancers
const occupations = [
  "programmer",
  "spartan",
  "engineer",
  "fullstack dev",
  "shortstack dev",
  "halfstack dev",
];

//Sample freelancer array with name, price, occupation
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },

];

//Reference constants to HTML elements
const average = document.getElementById("average");
const tableBody = document.querySelector("#table-freelancer");

//Interval to control randomly added freelancers into list
const addFreelancerIntervalId = setInterval (addRandomFreelancer, 3000);

//Render
render();

//Function to generate table elements and create new rows under column headings
function render() {
  const newRows = freelancers.map((freelancer) => {
    const newRow = document.createElement("tr");

    const name = document.createElement("td");
    name.innerText = freelancer.name;

    const occupation = document.createElement("td");
    occupation.innerText = freelancer.occupation;
    
    const price = document.createElement("td");
    price.innerText = `$${freelancer.price}`;

    newRow.append(name, occupation, price);
    return newRow;
  });

  tableBody.replaceChildren(...newRows);

  //Constant to update average starting price of freelancers in table to 2 decimals
  const newAverage = Math.floor(calculateAveragePrice());
  average.innerText = parseFloat(newAverage).toFixed(2);
}

//Function to add random generated freelancers using name and occupation arrays
function addRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation = occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 575);

  freelancers.push({name, occupation, price});

  render();

//Limit number of randomly generated freelancers to 20
  if (freelancers.length === 20) {
    clearInterval(addFreelancerIntervalId);
  }
}

//Function to calculate the average starting price
function calculateAveragePrice() {

  const total = freelancers.reduce((accum, current) => accum + current.price, 0);
  return total / freelancers.length;
}

