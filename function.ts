/**
 * [buildMessage: This function concatenates string and number into a string message]
 * @param {string} str [This is the string that is used in the string message]
 * @param {number} num [This is the number that is used in the string message]
 * @return {string} [The concatenated string and number will be returned]
 */
let buildMessage = (str: string, num: number): string => { return ( 'string: ' + str + ', number: ' + num ) };

// Function call: the returned string is stored in variable 'message'
let message: string = buildMessage ( 'Welcome to the Website', 673 );

// Displaying the message in HTML file
document.getElementById("demo").innerHTML = message;
