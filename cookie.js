// document.cookie = "user=Shivang"
// The interesting thing is if you remove the text user=Shivang and replace it with course=FrontendExpert. The user key will still remain and the course will get added to the cookie key via it's setter function.

document.cookie = "course=FrontendExpert";
// It doesn't delete the previous cookies. They will not be deleted until they expire.


// Default => Expires when session ends, i.e browser tab is closed.

// You can override a cookie too

document.cookie = "user=Shivang";

console.log("Cookie: ", document.cookie);
// There is no delete function so to say but we can set the cookie to be expired immediately and that will cause the cookie to be deleted immediately.


// expiration can be set by adding a semicolon at the end of the value and after this semicolon, we can add different property value pairs that are like parameters to the setter function of document.cookie

document.cookie = `user=Shivang; expires=${new Date().toUTCString()}`;

console.log("Deleted cookie: ", document.cookie);

// You can also set max-age instead of cookie expiration
//document.cookie = "user=Shivang;max-age=0";

// You can also define path => which means using cookie only on that URL path. 
// Path will determine where cookies will be actually used. So, not all cookies need to be stored at the top level. You can do  

document.cookie=`course=AlgoExpert; secure; samesite=strict`;
console.log("Cookie updated?", document.cookie);

// Getting values from cookie:

const cookie = document
               .cookie
               .split('; ')
               .find(cookie => cookie.startsWith('course=')) // we included = here so that we accidentaly do not get a cookie which started with course but had other characters after it
               .split('=')[1] // split walill return an array with two element, first one being the key and second one being the value. 

console.log("Cookie value: ", cookie);        

// That is it for cookies. As you can see, it is a bit complicated to work with cookies but there are some libraries out there which can do the work for you!

// They have functions such as set cookie, get cookie etc. 

// Let's look at Web Storage API: 1) Local Storage and 2) Session storage

// Both are same and have key-value pair. THe difference is, they are much easy to work with and have their own functions that can be used instead of having to use getter and setter of document.cookie property.

// We get more space with local and session storage. 
// If you need more space than a cookie can allocate to you, local and session storage are good. 

// Local storage does not expire whereas session storage expires at the end of the session. 

// So, if you NEED something that expires at some point in time. Cookies are the solution because there is no expiration time for local storage. You have to manually delete the local storage


// Cookies are mostly set by server whereas local and session storage are more specific to the browser and  JavaScript. 

/// BUT that doesn't mean you couldn't send something from the server then have JS added to local storage.

localStorage.setItem('user', 'Shivang');
localStorage.setItem('course', 'FrontendExpert');

console.log("Value from local storage", localStorage.getItem('user'));

// You can remove items from local storage too. 

localStorage.removeItem('user');
console.log(localStorage.getItem('user')); // will return null
// localStorage.clear(); will completely clear localStorage out. 

 // Check localStorage and sessionStorage under applications
localStorage.clear();


// sessionStorage is similar to localStorage.

// The last thing to look into is indexedDB

// indexedDB is more complex storage system (When we need more complex data than just key-value pair)

// It is object store database. So, we will esentially store JS objects.  (We can store entire file too)

// It is not relational database. So, we will not use SQL or RDB language. 

// Let's create a database

const request = indexedDB.open('myDatabase',1); // 1 is version number
// Everything with indexedDB is asynchronous. It works using event listeners. 

//  We can use the event 'upgradeneeded' to begin with that fires whenever request is creating a new database or we have a new version number (So, it needs to update the database). 



request.addEventListener('upgradeneeded', event =>{
    // Let's get the database
    const database = event.target.result;
    // Create a database object store:
    const store = database.createObjectStore('users', {keyPath:'id'});
    // So, keyPath is going to set the primary key for the user's store. 
    // Every user will have an id and that will be the primary key for the users. 

    // Simply saying, every user will have a unique identifier and this is how we reference individual entry into the user's object store.

    // We can create indexes. 
    store.createIndex('name', 'name'); // Index is going to be a way to quickly search the store for a specific record based on some specific property. 

    // First parameter is the name of index and second parameter determines what object key is used when we search for a specific record. 

    // Let's add some data:

    store.add({
        id: 0,
        name: "Shivang", 
        course: "FrontendExpert"
    });

    store.add({
        id:1, 
        name: "Clement",
        course: "AlgoExpert"
    });
// upgradeneeded is fired the first time database is created or when the database is upgraded. 



});


/* 
    What happens if we need to connect to an existing database instead of creating a new one

    The database will listen to success event instead of upgradeneeded. 

    const request = indexedDB.open('myDatabase', 2);
    
    request.addEventListener('success', event =>{ Success event runs whenever we connect to a database. 
        So, esentially whenever the open function was successful. 
        
        const database = event.target.result;
        We can use transactions now to update the database. 

        database
            .transaction(['users'], typeOfTransaction(readwrite))   // array of names of whatever stores we are transacting on. 
            .objectStore('users)
            .add({
                id:2, 
                name: "Ryan",
                course: "MLExpert"
            });

          Doing this doesn't remove anything from the existing database. 
          You can also delete something here instead of add by

          objectStore('users').delete(1); delete takes in primary key value to be deleted
          
        // Get values from the DB

        .get(0) // This is asynchronous. So, wrapping the request in event listener

        const request = database
                           .transaction(['users'], readWrite)
                           .objectStore('users')
                           .get(0);

        request.addEventListener('success', event =>{
            console.log(event.target.result.name); It will log the name of the user with id 0 which is what we got from the database. 
        })


     // We can also use the index we created to get records out of the database store. 

    const request = database
                      .transaction(['users'], readWrite)
                      .objectStore('users')
                      .index('name')
                      .get('Shivang')
    

    });

    request.addEventListener ('success', event =>{
        console.log(event.target.result.course); // It will log the course of the user whose name is Shivang

        ......REMEMBER..... => name is not the unique id in the particular database store you created. So, if there are two users with the name Shivang, it will simply return the first one. 

    })

*/

