// validation script
const inputs = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{11}$/,
};

//validation function
function validate(field, regex) {
  //console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    //console.log(e.target.name);
    validate(e.target, patterns[e.target.name]);
  });
});
