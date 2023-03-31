import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('iframe');
console.log(video);
const player = new Player(video);
console.log(player);

const onPlay = function (time) {
  localStorage.setItem('videoplayer-current-time', time.seconds);
  console.log(localStorage.getItem('videoplayer-current-time'));
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0
);

// ==========================

// player.on('play', function () {
//   console.log('played the video!');
// });

// const onPlay = function (data) {
//   // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);

// // player.on('timeupdate', function (data) {

// //   // data is an object containing properties specific to that event
// // });

// player
//   .setCurrentTime(30.456)
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
