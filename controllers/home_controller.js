// console.log("inside controllers/home_controller");

// A function named home is defined with two parameters, req and res. 
// These parameters represent the HTTP request and response objects.
// The home function uses the res.render method to render a view named 
// home. It also passes an object containing a title property set to 
// the string 'Home'. This object is passed as the second argument to 
// res.render.The module.exports statement exports the home function 
// so that it can be used in other modules by calling require and 
// specifying the path to this module.
// In summary, this code defines a function that renders a view named 
// home and exports that function for use in other modules.
const TASK = require("../models/task");

const home = function (req, res) {
    TASK.find({})
        .then(list => {
            return res.render('home', {
                title: "ToDo List",
                todo_list: list
            });
        })
        .catch(err => {
            console.log("error in fetching contact in db");
            return res.redirect("back");
        });
}
module.exports = { home };
