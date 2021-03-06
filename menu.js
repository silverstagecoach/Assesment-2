///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/
const logger = funct => console.log(funct)

//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
let pizza = {
    name: `Classic Italian`,
    price: 15,
    category: `Entree`,
    popularity: 18,
    rating: 7,
    tags: [`pizza`, `meat`, `pepperoni`, `cheese`, `entree`, `main course`]
}


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
logger(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
logger(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let {price} = pizza;
logger(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let {category} = pizza;
logger(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
let foodArr = [
    {
        name:`fries`,
        price:3.5,
        category:`side`,
        popularity: 6,
        rating: 6,
        tags:[`side`, `potatoes`, `fries`]
    }, {
        name:`soda`,
        price:2,
        category:`drink`,
        popularity: 2,
        rating: 8,
        tags:[`drink`, `soda`]
    }, {
        name:`side salad`,
        price:4,
        category:`side`,
        popularity: 14,
        rating: 8.5,
        tags:[`side`, `vegetables`, `salad`, `green`]
    }, {
        name:`poison`,
        price:200,
        category:`drink`,
        popularity: 150,
        rating: 1,
        tags:[`poison`, `drink`, `DO_NOT_ORDER`]
    }, {
        name:`chicken bacon ranch`,
        price:16,
        category:`entree`,
        popularity:10,
        rating:8.5,
        tags:[`entree`, `pizza`, `chicken`, `bacon`, `ranch`, `delicious`]
    }]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter(function(array){
    if (array[`tags`].includes(`fries`)) {
        return array[`name`]
    }
})

logger(filteredFood)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
function filterByProperty (property, number, type) {

    let filteredArr = [];

    filteredArr = foodArr.filter(function(){
        foodArr.forEach(element => {
            if (type === `above`) {
                if (foodArr.element[property] > number) {
                    filteredArr += foodArr.element
                }
            } else if (type === `below`) {
                if (foodArr.element[property] < number) {
                    filteredArr += foodArr.element
                }
            }           
        });
})
    return filteredArr;
}


/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
logger(filterByProperty(`rating`, 7, `above`))