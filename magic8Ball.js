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

    // Try to ensure #result3 fits on small screens: shrink font-size if text is too wide.
    // A more robust per-device adjustment runs in adjustResult3Fit (defined below).
    if (typeof adjustResult3Fit === 'function') {
      adjustResult3Fit();
    }

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
// Use JS typer for r1 on very small viewports so its reveal matches the natural wrapped typing.
// Use JS typewriter for r1, r2, and r3 on all screen sizes for consistent animation and line breaking
(function runTypewriterSequence() {
  function parseAnimDurationToMs(str) {
    try {
      if (!str) return null;
      const parts = str.split(',').map(s => s.trim());
      const first = parts[0];
      if (first.endsWith('ms')) return parseFloat(first);
      if (first.endsWith('s')) return parseFloat(first) * 1000;
      return parseFloat(first);
    } catch (e) {
      return null;
    }
  }

  // r1
  let durationMsR1 = 3000;
  try {
    const cs1 = window.getComputedStyle(r1);
    const ad1 = cs1 && cs1.animationDuration;
    const parsed1 = parseAnimDurationToMs(ad1);
    if (parsed1 && !isNaN(parsed1)) durationMsR1 = parsed1;
  } catch (e) {}
  durationMsR1 = Math.max(200, Math.floor(durationMsR1 * 0.85));
  const text1 = r1.textContent || '';
  const chars1 = Math.max(1, text1.length);
  const interval1 = Math.max(10, Math.floor(durationMsR1 / chars1));

  // r2
  let durationMsR2 = 3000;
  try {
    const cs2 = window.getComputedStyle(r2);
    const ad2 = cs2 && cs2.animationDuration;
    const parsed2 = parseAnimDurationToMs(ad2);
    if (parsed2 && !isNaN(parsed2)) durationMsR2 = parsed2;
  } catch (e) {}
  durationMsR2 = Math.max(200, Math.floor(durationMsR2 * 0.85));
  const text2 = r2.textContent || '';
  const chars2 = Math.max(1, text2.length);
  const interval2 = Math.max(10, Math.floor(durationMsR2 / chars2));

  // r3
  let durationMsR3 = 4000;
  try {
    const cs3 = window.getComputedStyle(r2); // use r2's animation for r3 timing
    const ad3 = cs3 && cs3.animationDuration;
    const parsed3 = parseAnimDurationToMs(ad3);
    if (parsed3 && !isNaN(parsed3)) durationMsR3 = parsed3;
  } catch (e) {}
  durationMsR3 = Math.max(300, Math.floor(durationMsR3 * 0.85));
  const text3 = r3.textContent || '';
  const chars3 = Math.max(1, text3.length);
  const interval3 = Math.max(10, Math.floor(durationMsR3 / chars3));

  // Animate in sequence: r1 -> r2 -> r3
  typewriteJS(r1, text1, interval1, () => {
    typewriteJS(r2, text2, interval2, () => {
      if (typeof adjustResult3Fit === 'function') adjustResult3Fit();
      r3.classList.remove('anim-typewriter-main');
      typewriteJS(r3, text3, interval3, () => {});
    });
  });
})();


// Small, dependency-free JS typewriter used on narrow viewports so wrapped lines type naturally
function typewriteJS(el, text, charInterval = 30, onComplete) {
  if (!el) {
    if (typeof onComplete === 'function') onComplete();
    return;
  }

  // Ensure element is visible
  el.style.opacity = '1';

  // Add caret class to show blinking caret while JS types
  el.classList.add('js-caret');

  // Start empty and append chars
  el.textContent = '';
  let i = 0;

  const minInterval = 8;   // absolute min per-char delay
  const maxInterval = 140; // absolute max per-char delay
  const base = Math.max(minInterval, Math.min(maxInterval, Math.floor(charInterval)));

  function step() {
    if (i < text.length) {
      const ch = text.charAt(i);
      el.textContent += ch;
      i++;

      // Natural variance: small random jitter so typing doesn't feel robotic
      const jitterFactor = 0.85 + Math.random() * 0.3; // 0.85..1.15
      let delay = Math.round(base * jitterFactor);

      // Add a slightly longer pause after punctuation for realism
      if (/[.,!?;:]/.test(ch)) delay += 120;
      // Add a tiny extra pause on spaces to mimic human rhythm
      if (ch === ' ') delay += 20;

      // Clamp delay into reasonable bounds
      delay = Math.max(minInterval, Math.min(maxInterval, delay));

      setTimeout(step, delay);
    } else {
      // Remove caret class when done
      el.classList.remove('js-caret');
      if (typeof onComplete === 'function') onComplete();
    }
  }

  step();
}


// --- Helper: shrink #result3 font-size on very narrow viewports until it fits ---
function adjustResult3Fit() {
  try {
    const el = document.getElementById('result3');
    if (!el) return;

    // Only run this adaptive shrink on small viewports (phones)
    if (!window.matchMedia('(max-width: 575.98px)').matches) {
      // Clear any inline sizing applied previously
      el.style.fontSize = '';
      return;
    }

    // Allow wrapping so we can measure natural height/width
    el.style.whiteSpace = 'normal';

    const computed = window.getComputedStyle(el);
    // Start with the computed font-size (px)
    let fontSize = parseFloat(computed.fontSize) || 16;
    const minFontPx = 10; // don't go below this

    // Reset to the base CSS-clamped size first
    el.style.fontSize = '';

    // Measure and shrink in small steps until it fits or until minFontPx reached
    // Use clientWidth vs scrollWidth to determine overflow on a single-line measurement
    // Note: when wrapped, clientWidth will match container; scrollWidth > clientWidth indicates overflow.
    let iterations = 0;
    while (el.scrollWidth > el.clientWidth && fontSize > minFontPx && iterations < 40) {
      fontSize = Math.max(minFontPx, Math.floor(fontSize * 0.95));
      el.style.fontSize = fontSize + 'px';
      iterations++;
    }
  } catch (err) {
    // fail silently - fitting is best-effort
    console.warn('adjustResult3Fit error', err);
  }
}

// Debounced resize -> adjust fit
let __adjustResult3Timeout = null;
window.addEventListener('resize', () => {
  if (__adjustResult3Timeout) clearTimeout(__adjustResult3Timeout);
  __adjustResult3Timeout = setTimeout(() => {
    adjustResult3Fit();
  }, 150);
});

});
