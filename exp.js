const ticket = new Promise(function (resolve, reject) {
  const isBoarded = true;

  if (isBoarded) {
    setTimeout(() => {
      resolve("You are successfully on the flight!");
    }, 3000);
  } else {
    setTimeout(() => {
      reject("Your flight has been cancelled.");
    }, 3000);
  }
});

ticket
  .then((data) => {
    console.log("Wohoo!", data);
  })
  .catch((data) => {
    console.log("Oh no!", data);
  });