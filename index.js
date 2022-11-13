// scuberGreetingForFeet()
function scuberGreetingForFeet (feet) {
  if (feet <= 400) {  
    return 'This one is on me!';  
  } else if (feet > 400 && feet < 2000) {
    return 'That will be twenty bucks.';  
  } else if (feet > 2000 && feet < 2449) {
    return 'I will gladly take your thirty bucks.'
  } else if (feet > 2500) {
    return 'No can do.'
  }
}

// ternaryCheckCity()
function ternaryCheckCity (city) {
  console.log(city);
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

// switchOnCharmFromTip()
// switch switchOnCharmFromTip (response) {
//   case 0:
//     response = 'Thank you so much.';
//     break;
//   case 1:
//     response = 'Thank you.';
//     break;
//   default:
//     response = 'Bye';
//     break;
// }

function switchOnCharmFromTip (tip) {
  console.log(tip);
  switch(tip) {
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
      break;
  }
}