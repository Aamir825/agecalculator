let currDate = new Date();
let year = currDate.getFullYear();
let day = currDate.getDate();
let month = currDate.getMonth() + 1;
// input ids
let inputDays = document.getElementById("days");
let inputMonth = document.getElementById("months");
let inputYear = document.getElementById("years");
let button = document.getElementById("result");
let inputs = document.querySelectorAll("input");
// display ids
let dDate = document.getElementById("d-data");
let dMonth= document.getElementById("m-data");
let dYear = document.getElementById("y-data");
console.log(year);
console.log(day);
console.log(month);

button.addEventListener('click', ()=>{
  let IDay = inputDays.value;
  let IMonth = inputMonth.value;
  let IYear = inputYear.value;
//   console.log(IDay);
//   console.log(IMonth);a
//   console.log(IYear);
  let finalDay = (day - IDay);
  let finalMonth = (month  - IMonth);
  let finalYear = (year - IYear);
//   console.log(finalDay)
  console.log(finalMonth,"finalMonth")
//   console.log(finalYear)

  if(finalDay < 0){
    finalMonth--;
    let previousMonth = new Date(year, month - 1, 0).getDate(); // Days in the previous month
    finalDay += previousMonth;
  }
  if(finalMonth < 0){
    finalYear--;
    finalMonth += 12;
  }
  dYear.innerHTML = finalYear;
  dMonth.innerHTML = finalMonth;
  dDate.innerHTML = finalDay;


})

