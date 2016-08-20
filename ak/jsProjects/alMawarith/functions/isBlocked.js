/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */
var family = new Array();
var siblings = new Array();
family.push("Son");
family.push("Father");
family.push("Full brother");
family.push("Mother");

//usAnHeir : anHeir -> true or false if heir is in array
function isAnHeir(anHeir){
    if(family.indexOf(anHeir) > -1){
        return true;
    }
    else{
        return false;
    }
}

//heirCount : anHeir -> returns count of heir searched
function heirCount(anHeir){
  var count = 0;
  for(i = 0; i < family.length-1; i++){
    if(family[i]!=null){
      count ++;
    }
  }return count;
}
window.alert(family.length);
//window.alert(heirCount("Son"));

//isBlocked : anHeir -> true if blocked; false if not
//might not need getShare() as isBlocked can return true or false, and give share!
function isBlocked(anHeir){
  
  switch(anHeir){
      
    case "Paternal grandfather"://Tested & works
      
      if(isAnHeir("Father")==true || isAnHeir("Maternal grandmother")==true|| isAnHeir("Paternal grandmother")==true){
        //document.write("Blocked from inheritance by deceased's father, maternal grandmother, or paternal grandmother");
        return true;
        
      }//descendent might be array of children and grandchildren? Don't know yet
      
      else if(isAnHeir("Father")==false && isAnHeir("Son")==true){
        return false;
        //document.write("Share is 0.16");
      }
      
      else{
        //document.write("Universal heir");
        return false;
      }
      break;
      
    case "Grandson"://Tested & works
      
      if(isAnHeir("Son")==true){
        //document.write("Blocked from inheritance by deceased's son.");
        return true;
      }
      
      else{
        //document.write("Universal heir");
        return false;
      }
      break;
      
    case "Granddaughter": //Tested & works
      
      //isAnHeir("Granddaughter")==false check for that OR granddaughter.length <=1    
      if(heirCount("Granddaughter") <= 1 && isAnHeir("Son")==false && isAnHeir("Daughter")==false && isAnHeir("Grandson")==false){
        //document.write("Share is 0.5");
        return false;
      }
      
      else if(heirCount("Granddaughter") > 1 && isAnHeir("Son")==false && isAnHeir("Daughter")==false && isAnHeir("Grandson")==false){
        //document.write("Share is 0.66");
        return false;
        
      }//daughterCount = 1;
      else if(heirCount("Daughter")==1 && isAnHeir("Son")==false && isAnHeir("Grandson")==false){
        //document.write("Share is 0.16");
        return false;
        
      }
      else if(isAnHeir("Grandson")==true && isAnHier("Daughter")==false){
        //document.write("Universal heir with grandson");
        return false;
        
      }
      //else if(isAnHeir("Son")==true || daughter.count >= 2)
      else{
        //document.write("Blocked by son or two or more daughters");
        return true;
      }
      break;
      
    case "Maternal grandmother"://Tested & works
      
      if(isAnHeir("Mother")==true){
        //document.write("Maternal grandmother is blocked by mother");
        return true;
      }
      
      else{
        //document.write("Share is 0.16");
        return false;
      }
      
      break;
      
    case "Paternal grandmother"://Tested & works
      
      if(isAnHeir("Mother")==true || isAnHeir("Father")==true){
        //document.write("Paternal grandmother is blocked by mother or father");
        return true;
      }
      
      else{
        //document.write("Share is 0.16");
        return false;
      }
      break;
      
    case "Full sister"://Tested & works
     
      if(isAnHeir("Full brother")==false && isAnHeir("Son")== false ||isAnHeir("Full brother")== false && isAnHeir("Father")==false ||
         isAnHeir("Full sister")==false && isAnHeir("Son")== false ||  isAnHeir("Full sister")==false && isAnHeir("Father")== false){
        //document.write("Share is 0.5");
        return false;
      }
      else if(heirCount("Full sister") > 1 && isAnHeir("Son")==false ||
              heirCount("Full sister") > 1 && isAnHeir("Father")==false){
        //document.write("Share is 0.66");
        return false;
      }
      else if(isAnHeir("Full brother")==true && isAnHeir("Son")== false || isAnHeir("Full brother")==true && isAnHeir("Father")== false||
              isAnHeir("Daughter")==true && isAnHeir("Son")==false || isAnHeir("Daughter")==true && isAnHeir("Father")==false){            
        //document.write("Universal heir");
        return false;
      }
      else{
        return true;
      }
      break;
      
     //this will be a case where you'd want to use siblings array
      
    case "Paternal sister"://Tested & works
      
      if(isAnHeir("Father")==true||isAnHeir("Son")==true||
         isAnHeir("Full brother")||heirCount("Full sister") > 1){
        //document.write("Blocked");
        return true;
      }   
      else if(heirCount("Paternal sister") < 1 && siblings.length < 1){
        //document.write("Share is 0.5");
        return false;
      }
      else if(heirCount("Paternal sister") > 1 && isAnHeir("Full brother")==false||
              heirCount("Paternal sister") > 1 && isAnHeir("Full sister")==false||
              heirCount("Paternal sister") > 1 && isAnHeir("Paternal brother")==false){
        //document.write("Share is 0.66");
        return false;
      }
      else if(heirCount("Full sister")==1 && isAnHeir("Full brother")==false||
             heirCount("Full sister")==1 && isAnHeir("Paternal brother")==false){
        //document.write("Share is 0.16");
        return false;
      }
      else if(isAnHeir("Daughter")==true && siblings.length < 1|| isAnHeir("Granddaughter")==true && siblings.length < 1){
        //document.write("Universal heir");
        return false;
      }
      else if(heirCount("Paternal brother")==1){
        //document.write("Univeral heir");
        return false;
      }
     break;
      
    case "Maternal sister"://Tested & works
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true|| 
         isAnHeir("Grandfather")==true|| isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
       //document.write("Share eliminated by son, grandson, father, grandfather, daughter, or granddaughter");
        return true;
      }
      
      else if(heirCount("Maternal brother") > 1||heirCount("Maternal sister") > 1){
        //document.write("Share is 0.33");
        return false;
      }
      
      else{//deceased has one maternal sibling
        //document.write("Share is 0.16");
        return false;
      }
     break;
        
    case "Full brother"://Tested & works
      
      if(isAnHeir("Son")==true||isAnHeir("Father")==true||isAnHeir("Grandson")==true){
        //document.write("Full brother is blocked by son, father, or grandson");
        return true;
      }
      
      else{
        //document.write("Universal heir");
        return false;
      }
      break;
      
    case "Paternal brother"://Tested & works
      
      if(isAnHeir("Son")==true||isAnHeir("grandson")==true||isAnHeir("Father")==true||isAnHeir("Full brother")==true){
        //document.write("Share eliminated by son, grandson, father, or full brother");
        return true;
      }
      
      else{
        //document.write("Universal heir");
        return true;
      }
      break;
    
    case "Maternal brother"://Tested & works
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true|| 
         isAnHeir("Grandfather")==true|| isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
       //document.write("Share eliminated by son, grandson, father, grandfather, daughter, or granddaughter");
        return true;
      }
      
      else if(heirCount("Maternal brother") > 1||heirCount("Maternal sister") > 1){
        //document.write("Share is 0.33");
        return false;
      }
      
      else{//deceased has one maternal sibling
        //document.write("Share is 0.16");
        return false;
      }
     break;
      
    case "Full nephew":
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||isAnHeir("Paternal brother")==true){
        //document.write("Full nephew is blocked by son, grandson, father, grandfather, full brother, or paternal brother");
        return true;
      }
      
      else{
        //document.write("Universal heir");
        return false;
      }
      break;
      
    case "Paternal nephew":
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||
         isAnHeir("Paternal brother")==true||isAnHeir("Full nephew")==true){
        //document.write("Paternal nephew is blocked by son, grandson, father, grandfather, full brother, paternal brother, or full nephew");
        return true;
      }
      
      else{
        //document.write("Universal heir");
        return false;
      }
      break;
      
    case "Full paternal uncle":
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||
         isAnHeir("Paternal brother")==true||isAnHeir("Full nephew")==true||isAnHeir("Paternal nephew")==true){
        //document.write("Full paternal uncle is blocked by son, grandson, father, grandfather, full brother, paternal brother, full nephew, or paternal nephew");
        return true;
      }
      
      else{
        //document.write("Universal heir");
        return false;
      }
      break;
      
    case "Paternal uncle":
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||
         isAnHeir("Paternal brother")==true||isAnHeir("Full nephew")==true||isAnHeir("Paternal nephew")==true||isAnHeir("Full paternal uncle")==true){
        //document.write("Paternal uncle is blocked by son, grandson, father, grandfather, full brother, paternal brother, full nephew, paternal nephew, or full paternal uncle");
        return true;
      }
      
      else{
        //document.write("Universal heir");
        return false;
      }
      break;
      
   case "Full cousin":
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||
         isAnHeir("Paternal brother")==true||isAnHeir("Full nephew")==true||
         isAnHeir("Paternal nephew")==true||isAnHeir("Full paternal uncle")==true||isAnHeir("Paternal uncle")==true){
        //document.write("Full cousin is blocked by son, grandson, father, grandfather, full brother, paternal brother, full nephew, paternal nephew, full paternal uncle, or paternal uncle");
        return true;
      }
      
      else{
        //document.write("Universal heir");
        return false;
      }
      break;
      
   case "Paternal cousin":
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||
         isAnHeir("Paternal brother")==true||isAnHeir("Full nephew")==true||
         isAnHeir("Paternal nephew")==true||isAnHeir("Full paternal uncle")==true||isAnHeir("Paternal uncle")==true||isAnHeir("Full cousin")==true){
        //document.write("Paternal cousin is blocked by son, grandson, father, grandfather, full brother, paternal brother, full nephew, paternal nephew, full paternal uncle, paternal uncle, or full cousin");
        return true;
      }
      
      else{
        //document.write("Universal heir");
        return false;
      }
      break;
    default:
      document.write(anHeir + " is invalid input");
  }
}//end of isBlocked()function

//Test Cases: 
function testIsBlocked(anHeir){
  if(isBlocked(anHeir)==true){
    window.alert(anHeir + " does not inherit");
  }
  else{
    window.alert(anHeir + " inherits");
  }
}
testIsBlocked("Full nephew");




