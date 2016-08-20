/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var prop = prompt("Property amount: ");
var heirs = new Array();
share1 = 0.5;
share2 = 0.25;
share3 = 0.16;
heirs.push("Son");
heirs.push("Father");
heirs.push("Mother");
heirs.push("Daughter");
for(i=0;i<heirs.length;i++){
  //prop-=prop * 0.25;
}
alert(prop);
function aShare(share){
  return prop - (prop * share);
}
alert(aShare(share1));
