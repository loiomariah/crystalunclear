let isNormalCursor = true;

const normalCursor = 'url("cursor.cur"), auto';
const clickedCursor = 'url("cursorclick.cur"), auto';

const toggleCursor = () => {
    if (isNormalCursor) {
        document.body.style.cursor = clickedCursor;
    } else {
        document.body.style.cursor = normalCursor;
    }
    isNormalCursor = !isNormalCursor;

    // Revert cursor back to normal after 1 second
    setTimeout(() => {
        document.body.style.cursor = normalCursor;
        isNormalCursor = true;
    }, 500);
};

document.addEventListener('click', toggleCursor);

//

document.getElementById('userQuestion').addEventListener('input', function(event) {
    const userQuestion = event.target.value;
    if (userQuestion.trim() === '') {
        event.target.setCustomValidity('The crystal ball suspects this may be a joke. It is not amused. Ask your question.');
        return;
    } else if (!/\?$/.test(userQuestion.trim())) {
        event.target.setCustomValidity('The crystal ball cannot act upon declarations. Ask properly');
        return;
    } else {
        event.target.setCustomValidity('');
    }
});

document.getElementById('crystalnotclear').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let userName = document.getElementById('userName').value;
    const userQuestion = document.getElementById('userQuestion').value;

    // Check if the userQuestion is empty and set a custom validation message
    if (userQuestion.trim() === '') {
        document.getElementById('userQuestion').setCustomValidity('The crystal ball suspects this may be a joke. It is not amused. Ask your question.');
        return;
    } else if (!/\?$/.test(userQuestion.trim())) { // Check if the userQuestion ends with a question mark
        document.getElementById('userQuestion').setCustomValidity('The crystal ball cannot act upon declarations. Ask properly');
        return;
    } else {
        document.getElementById('userQuestion').setCustomValidity('');
    }

    // Determine greeting for result1 and console output
// Greeting + title pools
const greetings = [
  "Greetings ",
  "Hello ",
  "Ah",
  "Welcome ",
  "You were expected",
  "What an unsurprise",
  "Fancy seeing you here"
];

const titles = [
  "Mysterious Wanderer",
  "Whispering Stranger",
  "Prophecy’s Problem Child",
  "Fate’s Favorite Mistake",
  "Bearer of Slight Misfortune",
  "Keeper of Bad Decisions",
  "Seeker of Awkward Fates"
  
];

let greetingForR1 = '';

if (userName && userName.trim() !== '') {
  //  Username always priority
  greetingForR1 = `Hello, ${userName}.`;
} else {
  //  Random anonymous name combo
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const title = titles[Math.floor(Math.random() * titles.length)];

  greetingForR1 = `${greeting}, ${title}`;
}

console.log(greetingForR1);

    
    let randomNumber = Math.floor(Math.random() * 49); // Generate a random number between 0 and 48
    console.log(randomNumber);
    
    let eightBall = '';

// Use switch statement to determine the response based on the random number
switch(randomNumber) {
  case 0: 
    eightBall = 'Leave me alone';
    break;
  case 1: 
    eightBall = 'It is certain';
    break;
  case 2: 
    eightBall = 'It is decidedly so';
    break;
  case 3: 
    eightBall = 'Reply hazy try again';
    break;
  case 4: 
    eightBall = 'Cannot predict now';
    break;
  case 5: 
    eightBall = 'Do not count on it';
    break;
  case 6: 
    eightBall = 'My sources say no';
    break;
  case 7: 
    eightBall = 'Outlook not so good';
    break;
  case 8: 
    eightBall = 'Signs point to yes';
    break;
  case 9:
    eightBall = 'Yes, obviously.';
    break;
  case 10:
    eightBall = 'No, like, never.';
    break;
  case 11:
    eightBall = "Maybe, if you're lucky.";
    break;
  case 12:
    eightBall = "Try again later. Or don't.";
    break;
  case 13:
    eightBall = 'Definitely yes. Happy now?';
    break;
  case 14:
    eightBall = 'Nope. Not happening.';
    break;
  case 15:
    eightBall = 'Could be. Or not.';
    break;
  case 16:
    eightBall = 'Sure, why not.';
    break;
  case 17:
    eightBall = 'No way, princess.';
    break;
  case 18:
    eightBall = 'Ask someone who cares.';
    break;
  case 19:
    eightBall = 'Yes, but who really knows?';
    break;
  case 20:
    eightBall = 'Not in a million years.';
    break;
  case 21:
    eightBall = 'Possibly. Or possibly not.';
    break;
  case 22:
    eightBall = "Don't count on it. Ever.";
    break;
  case 23:
    eightBall = 'Yeah, I guess.';
    break;
  case 24:
    eightBall = 'No, just no.';
    break;
  case 25:
    eightBall = 'Maybe. But probably not.';
    break;
  case 26:
    eightBall = "Try again. Or don't bother.";
    break;
  case 27:
    eightBall = 'Absolutely. Whatever.';
    break;
  case 28:
    eightBall = 'Not even close.';
    break;
  case 29:
    eightBall = "There's a chance. Slim, though.";
    break;
  case 30:
    eightBall = 'Nope. Nice try.';
    break;
  case 31:
    eightBall = "Ask me later. Or don't.";
    break;
  case 32:
    eightBall = 'Yes, if you insist.';
    break;
  case 33:
    eightBall = 'No. Just no.';
    break;
  case 34:
    eightBall = 'Could be. Who cares?';
    break;
  case 35:
    eightBall = 'Maybe. If it matters.';
    break;
  case 36:
    eightBall = 'Try again. Or just give up.';
    break;
  case 37:
    eightBall = 'Definitely. Or not.';
    break;
  case 38:
    eightBall = 'No. Why would you think that?';
    break;
  case 39:
    eightBall = 'Yes. Sure. Whatever.';
    break;
  case 40:
    eightBall = 'Not likely. Like, at all.';
    break;
  case 41:
    eightBall = 'Maybe. If you want.';
    break;
  case 42:
    eightBall = 'Try again. Or move on.';
    break;
  case 43:
    eightBall = 'Yes, but why ask me?';
    break;
  case 44:
    eightBall = 'No. What did you expect?';
    break;
  case 45:
    eightBall = "Could happen. Don't hold your breath.";
    break;
  case 46:
    eightBall = 'Maybe. If the stars align.';
    break;
  case 47:
    eightBall = 'Try again. Or not. Up to you.';
    break;
  case 48:
    eightBall = 'Yes. If it makes you happy.';
    break;
}

// Compose a varied prediction prefix and log/display it (no suffixes)
const predictionPrefixes = [
  'I foresee… ',
  'The crystal shows...',
  'Gaze reveals...',
  'The omens whisper...',
  'Behold:',
  'The oracle murmurs:',
  'The sighted vision says...'
];

const chosenPrefix = predictionPrefixes[Math.floor(Math.random() * predictionPrefixes.length)];
const predictionMessage = `${chosenPrefix} ${eightBall}.`;

console.log(predictionMessage);
// Prepare result elements and text
const r1 = document.getElementById('result1');
const r2 = document.getElementById('result2');
const r3 = document.getElementById('result3');

// use the greeting chosen earlier (includes random fallback when needed)
r1.textContent = greetingForR1;
// Display the randomized prediction prefix and append any chosen suffix to the visible answer
r2.textContent = chosenPrefix;
r3.textContent = `${eightBall}.`;

// Ensure previous animation classes are removed and elements are hidden
[r1, r2, r3].forEach(el => {
  el.classList.remove('anim-typewriter-line', 'anim-typewriter-main');
  // reset inline opacity so CSS starting state (opacity:0) is respected
  el.style.opacity = '0';
  // force reflow so adding the class restarts animation reliably
  void el.offsetWidth;
});

// helper to start an animation class and wait until the typewriter animation ends
function startAnim(el, className, onComplete) {
  function handler(e) {
    if (e.animationName === 'typewriter') {
      el.removeEventListener('animationend', handler);
      if (typeof onComplete === 'function') onComplete();
    }
  }
  el.addEventListener('animationend', handler);
  el.classList.add(className);
}

// sequence: r1 -> r2 -> r3
startAnim(r1, 'anim-typewriter-line', () => {
  startAnim(r2, 'anim-typewriter-line', () => {
    startAnim(r3, 'anim-typewriter-main');
  });
});

});
