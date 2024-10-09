const getSleepHours = (day) => {
  switch (day) {
    case "monday":
      return 7;
      break;
    case "tuesday":
      return 6;
      break;
    case "wednesday":
      return 5;
      break;
    case "thursday":
      return 5;
      break;
    case "friday":
      return 7;
      break;
    case "saturday":
      return 8;
      break;
    case "sunday":
      return 9;
      break;
  }
};

//getActualSleepHours() could be implemented without calling getSleepHours(). Use literal numbers and the + operator to rewrite getActualSleepHours(). It should still return the total actual hours slept in the week.


const getActualSleepHours = () => 7 + 6 + 5 + 5 + 7 + 8 + 9;
/*getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");*/

// const getIdealSleepHours = () => {
// const idealHours = 7.5;
//  return idealHours * 7;
//};

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();

 const idealSleepHours = getIdealSleepHours(8);

 // const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You have perfect amount of sleep");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) more sleep than needed this week. You coudl feel overslept."
    );
  } else {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than needed this week. You shoudl get some rest."
    );
  }
};

calculateSleepDebt();
