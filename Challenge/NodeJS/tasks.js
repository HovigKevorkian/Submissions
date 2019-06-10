/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log('--------------------');
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  var textArray = text.trim().split(' ');
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  } else if (textArray[0] === 'hello' || textArray[0] === 'Hello') {
    hello(textArray);
  } else if (textArray[0] === 'help' || textArray[0] === 'Help') {
    help();
  } else {
    unknownCommand(text);
  }
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(textArray) {
  if(textArray[1] === undefined) {
    console.log(textArray[0] + '!')
  } else {
    console.log(textArray[0] + ' ' + textArray.slice(1).join(' ') + '!');
  }
}
/**
 * This is a Help Menu for the application
 *
 */
function help() {
  console.log('1 help\n2 hello\n3 exit\n4 quit\n');
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log('Quitting now, goodbye!');
  process.exit();
}

// The following line starts the application
startApp('Charbel Youssef');
