function addStyleInFocus(id) {
  const wrapperInput = id.parentNode;
  for (let element of wrapperInput.children) {
    element.classList.add("svg");
  }
  wrapperInput.classList.add("-inFocus");
}

function removeStyleInFocus(id) {
  const wrapperInput = id.parentNode;
  for (let element of wrapperInput.children) {
    element.classList.remove("svg");
  }
  wrapperInput.classList.remove("-inFocus");
}

email.addEventListener("focus", () => {
  addStyleInFocus(email);
});

email.addEventListener("focusout", () => {
  removeStyleInFocus(email);
});

password.addEventListener("focus", () => {
  addStyleInFocus(password);
});

password.addEventListener("focusout", () => {
  removeStyleInFocus(password);
});
