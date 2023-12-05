const $form = document.querySelector("#form");
const $emailIcon = document.querySelector("#email-icon");
$emailIcon.onclick = async () => {
  try {
    await navigator.clipboard.writeText("santiagorodrigrec@gmail.com");
    window.alert("Correo copiado!");
  } catch (error) {
    console.log(error);
  }
};
const handleForm = (event) => {
  event.preventDefault();
  const form = new FormData($form);
  const name = form.get("name");
  const email = form.get("email");
  const message = form.get("message");

  if (!name) {
    return;
  }
  if (!email) {
    return;
  }
  if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email)) {
    return;
  }
  if (!message) {
    return;
  }
  fetch("https://formsubmit.co/ajax/d6099137673011c9e3548cc20169a4e0", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      message,
    }),
  });
  window.alert("Enviado con exito!");
};
$form.addEventListener("submit", handleForm);
