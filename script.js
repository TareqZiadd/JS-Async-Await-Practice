/*
"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise
*/

/*
Async Syntax
The keyword async before a function makes the function return a promise:

Example
async function myFunction() {
  return "Hello";
}
Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}
*/

/*
async function executePromise() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      console.log(json);
    });
}

executePromise();

// Output:
/*
object
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
*/

/*
The following function does the same thing but uses async/await to simplify the syntax:

async function executePromise() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let json = await response.json();
  return json;
}

This code is the same as the previous code, but with fewer lines:
let response: Creates a variable named response to store the fetch response.
await fetch('https://jsonplaceholder.typicode.com/todos/1'): fetch is a built-in JavaScript function used to make network requests (HTTP). await is used to make JavaScript wait until the fetch function returns a value. It is used only inside async functions. 'https://jsonplaceholder.typicode.com/todos/1' is the URL of the resource we want to fetch. In this example, it is a part of a fake API that provides JSON data.
*/

/*
We cannot execute the second line:
let json = await response.json();
before executing the first line:
let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
This is because the API call must succeed and the response variable must have a defined value.
*/

/*
What will be the output in order in this case:

async function executePromise() {
  let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  let json = await response.json();
  return json;
}

console.log("before calling the function");
executePromise();
console.log("after calling the function");

/* Output:
before calling the function
after calling the function

If we had a line "done" at the end of the function call, it would appear in the output as follows:

before calling the function
after calling the function
done

This is because the function is asynchronous. If it were a regular (synchronous) function, the output would be:

before calling the function
done
after calling the function
*/
