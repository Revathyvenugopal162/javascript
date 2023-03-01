# javascript

For buisness applications and wep app. 
# unify for all
- nodejs - sudo apt install nodejs, sudo apt install npm
- typescript

# Fixing error
- in console
- freely use white space
- commenting 
1. // ___ single comment
2. /* */ 
- 
# variable and constants

declaring variables
- let
 * int, float, boolean, string
 * camalcase - __accountNumber__
 * private - _accountNumber
 * automatically generated - $accountNumber
 * `` __proto__`` - non standard features
- const
 * fixed
- var
 * variable
naming variables
common error variables

# Types and operators
# pgm flow
* if ... else - conditional
* comparinf === ==
* Truthy Falsy
* The ternary Operator
* Blockscope
* for, while...

Ternarty operators
==================
(condition)? true statement: false statement;

Functions
==========

``` 
function showMessage(){

}
```
```
showMessage();
```
```
let showMessage = function(message, firstName){
    console.log(message, firstName);
}

showMessage(message, firstName);
```

Objects and the DOM
===================
properties
----------
```
let person = {
    name : "Revathy",
    hour : 40,
    Time : True
};
```
object methods
--------------

```
let person = {
    name : "Revathy",
    hour : 40,
    Time : True,
    showInfo: function(){
        showmessage(this.name) // property name
    }
};

person.showInfo();
showMessage( typeof person.showInfo) // function
```

The objects are at *_https://developer.mozilla.org/en-US/docs/Web/JavaScript_*.

DOM (Document Object Model)
----------------------------

HTML element - style
