function message() {
  const form = document.getElementById("form");
  const values = {};

  const firstname = document.getElementById("fname");
  const lastname = document.getElementById("lname");
  const emailname = document.getElementById("email");
  const statusname = document.getElementById("status");
  const phonenumber = document.getElementById("number");
  const company = document.getElementById("cname");
  const countryname = document.getElementById("country");
  const message = document.getElementById("msg");

  const success = document.getElementById("success-submission");
  const fail = document.getElementById("fail-submission");

  firstname.addEventListener("change", (event) => {
    values.firstname = event.target.value;
  });

  lastname.addEventListener("change", (event) => {
    values.lastname = event.target.value;
  });

  emailname.addEventListener("change", (event) => {
    values.emailname = event.target.value;
  });

  statusname.addEventListener("change", (event) => {
    values.statusname = event.target.value;
  });

  phonenumber.addEventListener("change", (event) => {
    values.phonenumber = event.target.value;
  });

  company.addEventListener("change", (event) => {
    values.company = event.target.value;
  });

  countryname.addEventListener("change", (event) => {
    values.countryname = event.target.value;
  });

  message.addEventListener("change", (event) => {
    values.message = event.target.value;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(values);
    const noError = checkInputValues();
    if (noError) {
      success.classList.remove("hidden");
      success.classList.add("flex");
    } else {
      fail.classList.add("flex");
      fail.classList.remove("hidden");
    }
  });
}

function checkInputValues() {
  const input = document.querySelectorAll("input");
  let allValuesPresent = true;
  input.forEach((input) => {
    if (!input.value) {
      allValuesPresent = false;
    }
  });
  return allValuesPresent;
}
