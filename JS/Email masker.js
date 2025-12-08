
function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const name = email.slice(0, atIndex);
  const domain = email.slice(atIndex);
  const masked =
    name[0] +
    "*".repeat(Math.max(name.length - 2, 0)) +
    name[name.length - 1];
  return masked + domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));
