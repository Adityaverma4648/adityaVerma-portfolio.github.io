
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var CollegeMessage = document.getElementById('CollegeMessage');
CollegeMessage.style.display = "none";

function tooltipCollege(){
  CollegeMessage.style.display = "block";
}

function tooltipCollegeMouseOut(){
  CollegeMessage.style.display = "none";
}