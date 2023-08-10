var encEmail = "bWF0bGFkb3VjZUBnbWFpbC5jb20=";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
