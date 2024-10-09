// Project done by myself

const toEmoticon = funny => {
 switch(funny) {
  case 'shrug':
  return '|_{"}_|'
  break;
  case 'smiley face':
  return ':)'
  break;
  case 'frowny face':
  return ':('
  break;
  case 'winky face':
  return ';)'
  break;
  case 'heart':
  return '<3'
  break;
  default:
  return '|_(* ~ *)_|'
 }
};

 console.log(toEmoticon("whatever")) 
// Should print  '|_(* ~ *)_|'