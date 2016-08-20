/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var descendants = new Array();
/*descendants.push("son");
descendants.push("grandson");
descendants.push("daughter");
descendants.push("granddaughter");*/
var siblings = new Array();
/*siblings.push("Full brother");
siblings.push("Full sister");
siblings.push("Maternal sister");
siblings.push("Son");*/



function isAnHeir(anHeir){
    if(siblings.indexOf(anHeir) > -1 || descendants.indexOf(anHeir) > -1){
        return true;
    }
    else{
        return false;
    }
}

function heirCount(anHeir){
  var count = 0;
  for(i = 0; i < siblings.length-1; i++){
    if(siblings[i]!=null){
      count ++;
    }
  }return count;
}

function isReduced(anHeir){
  switch(anHeir){
      
    case "Husband":
      if(isAnHeir("Son")==true || isAnHeir("Grandson")==true|| isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
        document.write("Share is 0.25");
      }
      else{
        document.write("Share is 0.5");
      }
      break;
      
    case "Wife":
      if(isAnHeir("Son")==true || isAnHeir("Grandson")==true|| isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
        document.write("Share is 0.125");
      }
      else{
        document.write("Share is 0.25");
      }
      break;
      
    case "Father":
      if(isAnHeir("Son")==true || isAnHeir("Grandson")==true|| isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
        document.write("Share is 0.16");
      }
      else{
        document.write("Universal heir: share is remaining property");
      }
      break;
      
    case "Mother":
      if((isAnHeir("Son")==true && siblings.length > 1) || (isAnHeir("Grandson")==true && siblings.length > 1) ||
         ( isAnHeir("Daughter")==true && siblings.length > 1) ||(isAnHeir("Granddaughter")==true && siblings.length > 1)){
        document.write("Share is 0.16");
      }
      else{
        document.write("Share is 0.33");
      }
      break;
      
    case "Daughter":
    if(siblings.length <= 1){
        document.write("Share is 0.5");
      }
      else if(siblings.length > 1 && isAnHeir("Son")==false){
        document.write("Share is 0.66");
      }
      else{
        document.write("Universal heir: share is remaining property");
      }
      break;
    //son is also not eliminated
    case "Son":
      document.write("Universal heir");
      break;
      
    default:
      document.write(anHeir + " does not receive a reduced share.");
  }
   
}
isReduced("Wife");



