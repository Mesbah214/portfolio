function submitForm() {
  const form = document.getElementById("custom-form");

  const formData = new FormData(form);
  const url = "https://formsubmit.co/087f50430227d91717ae16a42b37c9f4";
  fetch(url, {
    method: "POST",
    body: formData,
  });
  return false;
}
