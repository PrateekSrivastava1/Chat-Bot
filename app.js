

const voice = document.querySelector(".voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();


// here text is basically transcript which is forwarded byrecorder function bellow
function addHumanText(text){
  // first we are creating a div then adding a class "chat-container"
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  // then we are creating a paragraph element and the adding a class named as voice2text
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  // now we aree going to text element for what text we are going to get in our function
  const chatText = document.createTextNode(text);
  // now we are appending the text to the paragraph element
  chatBox.appendChild(chatText);

  //  now we are going to append our paragraph element to div element
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function botVoice(message){
  const speech = new SpeechSynthesisUtterance();
  speech.text = "I Apologize, I din not understand this, can you please try again ?";
  if(message.includes('hai')) {
    speech.text = "hello! lovely day isn't it";
  }
  if(message.includes('hey')) {
    speech.text = "hello! lovely day isn't it";
  }
  if(message.includes('hello')) {
    speech.text = "hi! lovely day isn't it";
  }
  if(message.includes('hi')) {
    speech.text = "hello! lovely day isn't it";
  }
  if(message.includes('bye bye')) {
    speech.text = "tata bye bye ❣ have a good day sir";
  }
  if(message.includes('how are you')) {
    speech.text = "I am fine, thanks. how are you?";
  }
  if(message.includes('I am fine too')) {
    speech.text = "that's great, tell me how can I assist you?";
  }
  if(message.includes('yes')) {
    speech.text = "that's great, tell me how can I assist you?";
  }
  if(message.includes('who are you')) {
    speech.text = "🤦‍♂️ This is Prateek Srivastava, the bot 😎🤣, how can I assist you?";
  }
  if(message.includes('who is Prateek Srivastava')) {
    speech.text = "A programmer";
  }
  if(message.includes('what is your name')) {
    speech.text = "My name is Prateek Srivastava";
  }
  if(message.includes('do you have an email')) {
    speech.text = "I don't have an Email, but you can mail my creator for further assistance: It's prateeksdr4@gmail.com";
  }
  if(message.includes('how can I contact to Prateek Srivastava')) {
    speech.text = "😋 🤭what you need, his contact number, Telegram, email id, Instagram handle, facebook handle, twitter handle, LinkedIn handle, GitHub handle, Codeforces handle, Codechef handle, Hackerrank handle, Hackerearth handle?";
  }
  if(message.includes('email ID')) {
    speech.text = "prateeksdr4@gmail.com";
  }
  if(message.includes('contact number')) {
    speech.text = "7275769259";
  }
  if(message.includes('Telegram handle')) {
    speech.text = "@prateek_sris";
  }
  if(message.includes('Instagram handle')) {
    speech.text = "@prateek_pixels";
  }
  if(message.includes(' phone number')) {
    speech.text = "7275769259";
  }
  if(message.includes('LinkedIn handle')) {
    speech.text = "Prateek Srivastava";
  }
  if(message.includes('GitHub handle')) {
    speech.text = "@prateek-pixels";
  }
  if(message.includes('codeforces handle')) {
    speech.text = "@prateek_sri";
  }
  if(message.includes('codechef handle')) {
    speech.text = "@prateek_sri";
  }
  if(message.includes('hackerrank handle')) {
    speech.text = "@prateek_sri";
  }
  if(message.includes('hackerearth handle')) {
    speech.text = "@prateek_sri";
  }
  if(message.includes('Facebook handle')) {
    speech.text = "Prateek Srivastava";
  }
  if(message.includes('what are you doing')) {
    speech.text = "well we are doing same thing, just chatting 🤣";
  }
  if(message.includes('what is up')) {
    speech.text = "nothing😜";
  }
   if(message.includes('thank you')) {
    speech.text = "Welcome 😋";
  }
  if(message.includes('good morning')) {
    speech.text = "good morning sir 😋";
  }
  if(message.includes('good evening')) {
    speech.text = "good evening sir 😋";
  }
  if(message.includes('good afternoon')) {
    speech.text = "good afternoon sir 😋";
  }
  if(message.includes('good night')) {
    speech.text = "good night sir 😋";
  }
  if(message.includes('what you can do for me')) {
    speech.text = "I can answer your questions 😋, and I can hack NASA by using HTML 😂😂😜";
  }
  if(message.includes('who is Prateek Srivastava girlfriend')) {
    speech.text = "Do you really think that programmers have girlfriend ?? -_- ";
  }
  if(message.includes('who is Prateek Srivastava best friend')) {
    speech.text = "Pranjal Mishra 🤭, I know he is tatti but...";
  }
  if(message.includes('who is Pranjal Mishra')) {
    speech.text = "Bhai hai mera";
  }
  if(message.includes('who is Shivam Tripathi')) {
    speech.text = "Bhai hai mera";
  }
  if(message.includes('who is Nitin Sachan')) {
    speech.text = "Bhai hai mera";
  }
  if(message.includes('who is Smita Mishra')) {
    speech.text = "My duushman 😋";
  }
  if(message.includes('my name is Smita Mishra')) {
    speech.text = "hiiii Smita! how are you?";
  }
  if(message.includes("what's the time")) {
    speech.text = "I know you have good mobile phone 😎, go and check by yourself ";
  }
  if(message.includes('are you looking for a job')) {
    speech.text = "No, for now I want to get internship";
  }
   if(message.includes('skills')) {
    speech.text = "shit man! what is this? you have to ask what skills do you have";
  }
  if(message.includes('what skills do you have')) {
    speech.text = "Well I am Competitive Programmer on codeforces, codechef, and many other platforms, I know webdevelopment, I have done lil hacking(I can hack NASA by using HTML😜), I know C language, Cplusplus language, Data Structure, Cascading Style Sheet, SQL, Bootstrap, javascript, Jquery, Node.js, Express.js, Web Service API, GitHub, HTML---> I know that this is not a programming language -_-, And much more things 😜";
  }
  if(message.includes('what is your programming experience')) {
    speech.text = "less than a year 😥";
  }
  if(message.includes('do you have girlfriend')) {
    speech.text = "Do you really think that programmers have girlfriend ??";
  }
  if(message.includes('can you work 10 hours straight without taking any break')) {
    speech.text = "well I am still doing it";
  }
  if(message.includes('what do you like more frontend or backend')) {
    speech.text = "30% frontend and rest backend 🤭";
  }
  if(message.includes('how old are you')) {
    speech.text = "I am 21 years old 🤭";
  }
  if(message.includes('how many projects you have made so far')) {
    speech.text = "I have completed my 4th project on 28 july 2020";
  }
  if(message.includes('your collage name')) {
    speech.text = "Babu Banarasi Das University";
  }

  if(message.includes('C programming book')) {
    speech.text = "If you're a beginner, you should read Let Us C by Yashwant Kanetkar, and for advanced programmers, The C Programming Language by Dennis Ritchie will suffice.";
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
  var element = document.getElementById("container");
  element.appendChild(addBotText(speech.text));
}

function addBotText(text){
  // first we are creating a div then adding a class "chat-container"
  const chatContainer2 = document.createElement("div");
  chatContainer2.classList.add("chat-container");
// adding a darker class just to make it different from human text
  chatContainer2.classList.add("darker");
  // then we are creating a paragraph element and the adding a class named as voice2text
  const chatBox2 = document.createElement("p");
  chatBox2.classList.add("voice2text");
  // now we aree going to text element for what text we are going to get in our function
  const chatText2 = document.createTextNode(text);
  // now we are appending the text to the paragraph element
  chatBox2.appendChild(chatText2);

  //  now we are going to append our paragraph element to div element
  chatContainer2.appendChild(chatBox2);
  return chatContainer2;
}

recorder.onstart = () => {
  console.log('voice activated');
};

recorder.onresult = (event) => {
//  console.log(event);
const resultIndex = event.resultIndex;
const transcript = event.results[resultIndex][0].transcript;
//voice2text.textContent = transcript;
var element = document.getElementById("container");
element.appendChild(addHumanText(transcript));
botVoice(transcript);
};

voice.addEventListener('click', () =>{
  recorder.start();
});












    //
    //
    // <style>
    //   .bd-placeholder-img {
    //     font-size: 1.125rem;
    //     text-anchor: middle;
    //     -webkit-user-select: none;
    //     -moz-user-select: none;
    //     user-select: none;
    //   }
    //
    //   @media (min-width: 768px) {
    //     .bd-placeholder-img-lg {
    //       font-size: 3.5rem;
    //     }
    //   }
    // </style>
