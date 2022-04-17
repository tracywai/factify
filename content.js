console.log('Get rid of ads and learn something new!');

let pictureNames = [
  'fact1.jpg',
  'fact2.jpg',
  'fact3.jpg',
  'fact4.jpg',
  'fact5.jpg',
  'fact6.jpg',
  'fact7.jpg',
  'fact8.jpg',
];

let imgs = document.getElementsByTagName('img');

for (let imgElement of imgs) {
  let ran = Math.floor(Math.random() * filenames.length);
  let file = 'facts/' + pictureNames[ran];
  let url = chrome.extension.getURL(file);
  imgElement.src = url;
  console.log(url);
}

  // inspo from The Coding Train