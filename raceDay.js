let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age = 17;

if (early && age > 18) {
  raceNumber += 1000;
}

if (early && age > 18) {
  console.log(`Race will start at 9:30, your number is: ${raceNumber}.`);
} else if (!early && age > 18) {
  console.log(`Race will start at 11:00, your number is: ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Race will start at 12:30, your number is: ${raceNumber}.`);
} else {
  console.log(
    `Runners who are 18 years old and registered early or did NOT register early should see the registration desk.`
  );
}
