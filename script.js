// console.log ("is our script working?");

const myFunction = () => {
    document.getElementById("dap").style.display = 'block';
    document.getElementById("shirt").style.display = 'none';
    document.getElementById("head").style.display = 'none';
    document.getElementById("bye").style.display = 'none';

    document.getElementById("dapj").style.backgroundColor = '#DDFFA7';
    document.getElementById("shij").style.backgroundColor = 'transparent';
    document.getElementById("headj").style.backgroundColor = 'transparent';
}

const myFunction2 = () => {
    document.getElementById("dap").style.display = 'none';
    document.getElementById("shirt").style.display = 'block';
    document.getElementById("head").style.display = 'none';
    document.getElementById("bye").style.display = 'none';

    document.getElementById("shij").style.backgroundColor = '#DDFFA7';
    document.getElementById("dapj").style.backgroundColor = 'transparent';
    document.getElementById("headj").style.backgroundColor = 'transparent';
}

const myFunction3 = () => {
    document.getElementById("dap").style.display = 'none';
    document.getElementById("shirt").style.display = 'none';
    document.getElementById("head").style.display = 'block';
    document.getElementById("bye").style.display = 'none';

    document.getElementById("headj").style.backgroundColor = '#DDFFA7';
    document.getElementById("dapj").style.backgroundColor = 'transparent';
    document.getElementById("shij").style.backgroundColor = 'transparent';
}

function showInput() {
    document.getElementById('messages').innerHTML = 
    document.getElementById("userinput").value;
}

let bot = new RiveScript();

// Load a list of files all at once (the best alternative to loadDirectory
// for the web!)
bot.loadFile([
  "brain.rive",
]).then(loading_done).catch(loading_error);

// All file loading operations are asynchronous, so you need handlers
// to catch when they've finished. If you use loadDirectory (or loadFile
// with multiple file names), the success function is called only when ALL
// the files have finished loading.
function loading_done() {
  console.log("Bot has finished loading!");

  // Now the replies must be sorted!
  bot.sortReplies();

  // And now we're free to get a reply from the brain!

  // RiveScript remembers user data by their username and can tell
  // multiple users apart.
  let username = "local-user";

  // NOTE: the API has changed in v2.0.0 and returns a Promise now.
  bot.reply(username, "Hello, bot!").then(function(reply) {
    console.log("The bot says: " + reply);
  });
}

// It's good to catch errors too!
function loading_error(error) {
  console.log("Error when loading files: " + error);
}

const message_container = document.querySelector('.messages');
const form = document.querySelector('form');
const input_box = document.querySelector('input');

const brains = [
    'brain.rive'
];

bot.loadFile(brains).then(botReady).catch(botNotReady);

form.addEventListener('submit'), (e) => {
    e.preventDefault();
    selfReply(input_box.value);
    input_box.value = '';
});

function botReply(message) {
    message_container.innerHTML += `<div class="self>${message}</div>`;
    location.href = '#edge':

    bot.reply("local-user", message).then(function(reply) {
        botReply(reply);
    });
}
function botReady() {
    bot.sortReplies();
    botReply('Hello');
}

function botNotReady(err) {
    console.log("An error has occured", err);
}

