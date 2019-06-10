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
var taskListArray = ['Go', 'Go again', 'Go again and again', 'Enough']
function onDataReceived(text) {
  var textArray = text.trim().split(' ');
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  } else if (textArray[0] === 'hello' || textArray[0] === 'Hello') {
    hello(textArray);
  } else if (textArray[0] === 'help' || textArray[0] === 'Help') {
    help();
  } else if (textArray[0] === 'list' || textArray[0] === 'List') {
    list();
  } else if (textArray[0] === 'add' || textArray[0] === 'Add') {
    add(textArray);
  } else if (textArray[0] === 'remove' || textArray[0] === 'Remove') {
    remove(textArray);
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
 * Show Task List
 *
 * @returns {void}
 */
function list() {
  for(var i = 0; i < taskListArray.length; i++) {
    var count = i + 1;
    console.log(count + '. ' + taskListArray[i]);
  }
}

/**
 * Add Task to the List
 *
 * @returns {void}
 */
function add(textArray) {
  if(textArray[1] === undefined) {
    console.log('Please include a Task after \'Add\' or \'add\' - Example: Add \'Task Name\'');
  } else {
    taskListArray.push(textArray.slice(1).join(' ').trim())
    
  }
}

/**
 * Remove Task from the List
 *
 * @returns {void}
 */
function remove(textArray) {
  taskNbr = textArray[1];
  if(taskNbr === undefined) {
    taskListArray.pop();    
  } else if(taskNbr <= taskListArray.length) {
    taskListArray.splice((taskNbr-1), 1);
  } else {
    console.log('No such task number');
  }
}

/**
 * This is a Help Menu for the application
 *
 */
function help() {
  console.log('1 Help\n2 Hello\n3 List\n4 Add\n5 Remove\n6 Exit or Quit\n');
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
