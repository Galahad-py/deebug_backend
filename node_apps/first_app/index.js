/*
A call back function is a function that is passed into another function
=> fat arrow notation
()=>{} 
ignore the node_modules file created
to do this create a file called gitignore in the same folder as the node_modules folder and then in the gitignore file, type in node_modules
this means git would ignore that file*/

const http = require(`http`);

const server = http.createServer((request, response)=>{
    const daysOfTheWeek = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
    const monthsOfTheYear = [`January`, `Februaury`, `March`,`April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

    /*gets the day of the week from the date object*/
    const dayIndex = new Date().getDay();
    let day;
    for (let i = 0; i < daysOfTheWeek.length; i++) {
        if (i === dayIndex) {
            day = daysOfTheWeek[i];
            break;
        }  
    }
    /*gets the month of the year from the date object*/
    const monthIndex = new Date().getMonth();
    let month;
    for (let i = 0; i < monthsOfTheYear.length; i++) {
        if (i === monthIndex) {
            month = monthsOfTheYear[i];
            break;
        }
    }
    let date = new Date().getDate();
    let year = new Date().getFullYear();

    response.statusCode = 200;
    response.setHeader(`Content-Type`, `text/plain`);
    //this is what would appear on the browser window, if its edited the server would need to be stopped using ctrl C and the restarted.
    response.end(`Today's date is ${day}, ${date}th ${month} ${year}`);
});
/*this is the port to access the window ie 127.0.0.1:5000
this is where the domain name would also go
*/
server.listen(5000, `127.0.0.1`, () => {
    console.log(`Server running....`);
});
/*create a server and print to the console; today's date is wednesday 26 july 2023*/
