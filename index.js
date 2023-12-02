const handleForm = (event) => {
  event.preventDefault();
  const form = new FormData($form);
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");
  console.log(name, email, message);
  fetch("https://formsubmit.co/santiagorodrigec@gmail.com", {
    method: "POST",
    body: {
      name,
      email,
      message,
    },
  });
};
const $form = document.querySelector("#form");
$form.addEventListener("submit", handleForm);
const $submit = document.querySelector("#submit");
$form.addEventListener("click", handleSubmit);
