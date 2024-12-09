//  Author: Dalton Hilliker
//  Last Modified Date: 8DEC24
//  Last Modified By: Dalton Hilliker
//  File Name: final.js
//  All pictures and informations taken from Warhammer 40,000 official wikipedia pages, and the Official Games Workshop website.

function myDetails(e) {
  if (!e.target.open) {
    e.target.scrollIntoView();
  }
}
for (const detail of document.querySelectorAll("details")) {
  detail.addEventListener("click", myDetails);
}

const detailsList = document.querySelectorAll("details.sub");
function handleDetailToggle(event) {
  if (!event.target.open) return;
  for (let details of detailsList) {
      details.open = details === event.target;
  }
}

for (let details of detailsList) {
  details.addEventListener("toggle", handleDetailToggle);
}