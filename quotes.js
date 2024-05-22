const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
  "Life is what happens when you're busy making other plans. - John Lennon",
];

const quoteElement = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");
const toggleAnimationButton = document.getElementById("toggle-animation");

newQuoteButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});

let isAnimationPaused = false;

toggleAnimationButton.addEventListener("click", () => {
  if (isAnimationPaused) {
    document.body.style.animationPlayState = "running";
    toggleAnimationButton.textContent = "Pause Animation";
  } else {
    document.body.style.animationPlayState = "paused";
    toggleAnimationButton.textContent = "Resume Animation";
  }
  isAnimationPaused = !isAnimationPaused;
});
