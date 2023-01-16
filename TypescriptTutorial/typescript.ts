let test = 123;
console.log(test);
// If we want variable to assign more than one type, you can use union type

// let test: number | string
//test = '456';
console.log(test);

/* 
    type State = "on" | "off";

    let state: State = "on" => this will run, but any value other than on or off will throw an error

*/

/* 
    enum type

    enum State {
        On : "on",
        Off: "off"
    }

    let state: State = State.On


    OR:

    enum State{
        On, 
        Off
    }

    let state: State = State.On -> will assign value 0 and 1 respectively for On and Off
    */

