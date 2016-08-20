/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var fruits = {
  orange: 1,
  banana: 1,
  apple: 1,
  pear: 1
}

localStorage.setItem('fruits', JSON.stringify(fruits));
var savedFruits = JSON.parse(localStorage.getItem('fruits'));
for (var key in savedFruits) {
  alert('Fruit: ' + key + '\nCount: ' + savedFruits[key]);
}

/*for(var i in localStorage){
  //window.alert(key);
  eligibleHeirs.push(i);
}
for(i = 0; i < eligibleHeirs.length; i++){
    window.alert(eligibleHeirs[i]);
}




for (var i=0, iC=localStorage.length; i<iC; ++i) { 
    var storageKey = localStorage.key(i);
    window.alert( storageKey + ': ' + localStorage.getItem(storageKey) );
}*/
