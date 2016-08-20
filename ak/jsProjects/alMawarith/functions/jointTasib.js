/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


var family = new Array();
//family.push("Son");
//family.push("Father");
//family.push("Daughter");
family.push("Full brother");
family.push("Full sister");
var sib = new Array();
//sib.push("Full brother");
//sib.push("Maternal sister");
family.push(sib);

//var property = prompt("Enter property amount");
//var property = prompt("Enter property amount");
var whole = 1.00;
var ashabWhole = new Array();
var half = 0.50;
var ashabHalf = new Array();
var twoThirds = 0.66;
var ashabTwoThirds = new Array();
var quarter = 0.25;
var ashabQuarter = new Array();
var oneThird = 0.33;
var ashabOneThird = new Array();
var oneSixth = 0.16;
var ashabOneSixth = new Array();
var oneEighth = 0.125;
var zero;
var ashabOneEighth = new Array();
var universal;
var universalHeirs = new Array();
var coUniversal;
var coUniversalHeirs = new Array();



function isAnHeir(anHeir){
    if(family.indexOf(anHeir) > -1){
        return true;
    }
    else{
        return false;
    }
}

function heirCount(anHeir){
  var count = 0;
  for(i = 0; i < family.length-1; i++){
    if(family[i]!=null){
      count ++;
    }
  }return count;
}

//getShare : anHeir -> share as decimal
function testGetShares(anHeir){
 
  if(family.length == 1){
    //window.alert(anHeir + " is only heir. Share is: " + property*whole);
    return whole;
  }
  else{ 
  switch(anHeir){
      
    case "Husband":
      
      if(isAnHeir("Son")==true || isAnHeir("Grandson")==true|| isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
        //document.write("Share is 0.25");
        return quarter;
      }
      else{
        //document.write("Share is 0.5");
        return half;
      }
      break;
      
    case "Wife":
      
      if(isAnHeir("Son")==true || isAnHeir("Grandson")==true|| isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
        //document.write("Share is 0.125");
        return oneEighth;
      }
      else{
        //document.write("Share is 0.25");
        return quarter;
      }
      break;
      
    case "Father":
      if(isAnHeir("Son")==true || isAnHeir("Grandson")==true|| isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
        //document.write("Share is 0.16");
        return oneSixth;
      }
      else{
        //document.write("Universal heir: share is remaining property");
        return universal;
      }
      break;
      
    case "Mother":
      if((isAnHeir("Son")==true && sib.length > 1) || (isAnHeir("Grandson")==true && sib.length > 1) ||
         ( isAnHeir("Daughter")==true && sib.length > 1) ||(isAnHeir("Granddaughter")==true && sib.length > 1)){
        //document.write("Share is 0.16");
        return oneSixth;
      }
      else{
        //document.write("Share is 0.33");
        return oneThird;
      }
      break;
      
    case "Daughter":
      
        if(isAnHeir("Daughter")==false && isAnHeir("Son")==false){
        //document.write("Share is 0.5");
            return half;
      }
        else if(sib.length > 1 && isAnHeir("Son")==false){
        //document.write("Share is 0.66");
            return twoThirds;
      }
        else if(isAnHeir("Son") == true){
        //document.write("Universal heir: share is remaining property");
        return coUniversal;
      }
    
      break;
      
    
    case "Son"://need to fix this for increased share in presence of daughter
        if(isAnHeir("Daughter")==true){
            return coUniversal;
        } 
        else{
      //document.write("Universal heir");//son gets twice that of female heirs
            return universal;
        }
      break;
      
    case "Paternal grandfather":
      
      if(isAnHeir("Father")==true || isAnHeir("Maternal grandmother")==true||
         isAnHeir("Paternal grandmother")==true){
        //document.write("Blocked from inheritance by deceased's father, maternal grandmother, or paternal grandmother");
        return zero;
        
      }//descendent might be array of children and grandchildren? Don't know yet
      
      else if(isAnHeir("Father")==false && isAnHeir("Son")==true){
        return oneSixth;
        //document.write("Share is 0.16");
      }
      
      else{
        //document.write("Universal heir");
        return universal;
      }
      break;
      
    case "Grandson"://probably have to adjust this as well to receive 2* the share of female heir
      
      if(isAnHeir("Son")==true){
        //document.write("Blocked from inheritance by deceased's son.");
        return zero;
      }
      else if(isAnHeir("Granddaughter")==true){
        return coUniversal;
      }
      
      else{
        //document.write("Universal heir");
        return universal;
      }
      break;
      
    case "Granddaughter": 
      
      //isAnHeir("Granddaughter")==false check for that OR granddaughter.length <=1    
      if(heirCount("Granddaughter") <= 1 && isAnHeir("Son")==false && isAnHeir("Daughter")==false && isAnHeir("Grandson")==false){
        //document.write("Share is 0.5");
        return half;
      }
      
      else if(heirCount("Granddaughter") > 1 && isAnHeir("Son")==false && isAnHeir("Daughter")==false && isAnHeir("Grandson")==false){
        //document.write("Share is 0.66");
        return twoThirds;
        
      }//daughterCount = 1;
      else if(heirCount("Daughter")==1 && isAnHeir("Son")==false && isAnHeir("Grandson")==false){
        //document.write("Share is 0.16");
        return oneSixth;
        
      }
      else if(isAnHeir("Grandson")==true && isAnHier("Daughter")==false){
        //document.write("Universal heir with grandson");
        return coUniversal;
        
      }
      //else if(isAnHeir("Son")==true || daughter.count >= 2)
      else{
        //document.write("Blocked by son or two or more daughters");
        return zero;
      }
      break;
      
    case "Maternal grandmother":
      
      if(isAnHeir("Mother")==true){
        //document.write("Maternal grandmother is blocked by mother");
        return zero;
      }
      
      else{
        //document.write("Share is 0.16");
        return oneSixth;
      }
      
      break;
      
    case "Paternal grandmother":
      
      if(isAnHeir("Mother")==true || isAnHeir("Father")==true){
        //document.write("Paternal grandmother is blocked by mother or father");
        return zero;
      }
      
      else{
        //document.write("Share is 0.16");
        return oneSixth;
      }
      break;
      
    case "Full sister"://adjust this one too for 2* rule
     
      if(isAnHeir("Full brother")==false && isAnHeir("Son")== false ||
         isAnHeir("Full brother")== false && isAnHeir("Father")==false ||
         isAnHeir("Full sister")==false && isAnHeir("Son")== false ||
         isAnHeir("Full sister")==false && isAnHeir("Father")== false){
        //document.write("Share is 0.5");
        return half;
      }
      else if(heirCount("Full sister") > 1 && isAnHeir("Son")==false ||
              heirCount("Full sister") > 1 && isAnHeir("Father")==false){
        //document.write("Share is 0.66");
        return twoThirds;
      }
      else if(isAnHeir("Full brother")==true && isAnHeir("Son")== false || 
              isAnHeir("Full brother")==true && isAnHeir("Father")== false){
        return coUniversal;
        }
      else if(isAnHeir("Daughter")==true && isAnHeir("Son")==false ||
                isAnHeir("Daughter")==true && isAnHeir("Father")==false){            
        //document.write("Universal heir");
        return universal;
      }
      else{
        return zero;
      }
      break;
      
     //this will be a case where you'd want to use sib array
      
    case "Paternal sister"://adjust this one too for 2* rule
      
      if(isAnHeir("Father")==true||isAnHeir("Son")==true||
         isAnHeir("Full brother")||heirCount("Full sister") > 1){
        //document.write("Blocked");
        return zero;
      }   
      else if(heirCount("Paternal sister") < 1 && sib.length < 1){
        //document.write("Share is 0.5");
        return half;
      }
      else if(heirCount("Paternal sister") > 1 && isAnHeir("Full brother")==false||
              heirCount("Paternal sister") > 1 && isAnHeir("Full sister")==false||
              heirCount("Paternal sister") > 1 && isAnHeir("Paternal brother")==false){
        //document.write("Share is 0.66");
        return twoThirds;
      }
      else if(heirCount("Full sister")==1 && isAnHeir("Full brother")==false||
             heirCount("Full sister")==1 && isAnHeir("Paternal brother")==false){
        //document.write("Share is 0.16");
        return oneSixth;
      }
      else if(isAnHeir("Daughter")==true && sib.length < 1|| isAnHeir("Granddaughter")==true && sib.length < 1){
        //document.write("Universal heir");
        return universal;
      }
      else if(heirCount("Paternal brother")==1){
        //document.write("Univeral heir");
        return coUniversal;
      }
     break;
      
    case "Maternal sister":
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true|| 
         isAnHeir("Grandfather")==true|| 
         isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
       //document.write("Share eliminated by son, grandson, father, grandfather, daughter, or granddaughter");
        return zero;
      }
      
      else if(heirCount("Maternal brother") > 1||heirCount("Maternal sister") > 1){
        //document.write("Share is 0.33");
        return oneThird;
      }
      
      else{//deceased has one maternal sibling
        //document.write("Share is 0.16");
        return oneThird;
      }
     break;
        
    case "Full brother"://adjust this one too for 2* rule
      
      if(isAnHeir("Son")==true||isAnHeir("Father")==true||isAnHeir("Grandson")==true){
        //document.write("Full brother is blocked by son, father, or grandson");
        return zero;
      }
      
      else if(isAnHeir("Full sister")==true){
        //document.write("Universal heir");
        return coUniversal;
      }
      else{
        return universal;
        }
      break;
      
    case "Paternal brother"://adjust this one too for 2* rule
      
      if(isAnHeir("Son")==true||isAnHeir("grandson")==true||
         isAnHeir("Father")==true||isAnHeir("Full brother")==true){
        //document.write("Share eliminated by son, grandson, father, or full brother");
        return zero;
      }
      else if(isAnHeir("Paternal sister")==true){
          return coUniversal;
      }
      else{
        //document.write("Universal heir");
        return universal;
      }
      break;
    
    case "Maternal brother"://Tested & works
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true|| 
         isAnHeir("Grandfather")==true|| 
         isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
       //document.write("Share eliminated by son, grandson, father, grandfather, daughter, or granddaughter");
        return zero;
      }
      
      else if(heirCount("Maternal brother") > 1||heirCount("Maternal sister") > 1){
        //document.write("Share is 0.33");
        return oneThird;
      }
      
      else{//deceased has one maternal sibling
        //document.write("Share is 0.16");
        return oneSixth;
      }
     break;
      
    case "Full nephew":
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||
         isAnHeir("Paternal brother")==true){
        //document.write("Full nephew is blocked by son, grandson, father, grandfather, full brother, or paternal brother");
        return zero;
      }
      
      else{
        //document.write("Universal heir");
        return universal;
      }
      break;
      
    case "Paternal nephew":
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||
         isAnHeir("Paternal brother")==true||isAnHeir("Full nephew")==true){
        //document.write("Paternal nephew is blocked by son, grandson, father, grandfather, full brother, paternal brother, or full nephew");
        return zero;
      }
      
      else{
        //document.write("Universal heir");
        return universal;
      }
      break;
      
    case "Full paternal uncle":
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||
         isAnHeir("Paternal brother")==true||
         isAnHeir("Full nephew")==true||isAnHeir("Paternal nephew")==true){
        //document.write("Full paternal uncle is blocked by son, grandson, father, grandfather, full brother, paternal brother, full nephew, or paternal nephew");
        return universal;
      }
      
      else{
        //document.write("Universal heir");
        return universal;
      }
      break;
      
    case "Paternal uncle":
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||
         isAnHeir("Paternal brother")==true||isAnHeir("Full nephew")==true||
         isAnHeir("Paternal nephew")==true||isAnHeir("Full paternal uncle")==true){
        //document.write("Paternal uncle is blocked by son, grandson, father, grandfather, full brother, paternal brother, full nephew, paternal nephew, or full paternal uncle");
        return zero;
      }
      
      else{
        //document.write("Universal heir");
        return universal;
      }
      break;
      
   case "Full cousin":
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||
         isAnHeir("Paternal brother")==true||isAnHeir("Full nephew")==true||
         isAnHeir("Paternal nephew")==true||
         isAnHeir("Full paternal uncle")==true||isAnHeir("Paternal uncle")==true){
        //document.write("Full cousin is blocked by son, grandson, father, grandfather, full brother, paternal brother, full nephew, paternal nephew, full paternal uncle, or paternal uncle");
        return zero;
      }
      
      else{
        //document.write("Universal heir");
        return universal;
      }
      break;
      
   case "Paternal cousin":
      
      if(isAnHeir("Son")==true||isAnHeir("Grandson")==true||isAnHeir("Father")==true||
         isAnHeir("Grandfather")==true||isAnHeir("Full brother")==true||
         isAnHeir("Paternal brother")==true||isAnHeir("Full nephew")==true||
         isAnHeir("Paternal nephew")==true||isAnHeir("Full paternal uncle")==true||
         isAnHeir("Paternal uncle")==true||isAnHeir("Full cousin")==true){
        //document.write("Paternal cousin is blocked by son, grandson, father, grandfather, full brother, paternal brother, full nephew, paternal nephew, full paternal uncle, paternal uncle, or full cousin");
        return zero;
      }
      
      else{
        //document.write("Universal heir");
        return universal;
      }
      break;
      
    default:
      document.write(anHeir + " ineligible for share");
    }
  }   
}






function testIt(heir){
  if(testGetShares(heir) == whole){
    window.alert(heir + " gets: $ " + (property * whole) );
    
     ashabWhole.push(heir);
   }
  else if(testGetShares(heir) == half){
     window.alert(heir + " gets: $ " + (property * half) );
    
    ashabHalf.push(heir);
  }
  else if(testGetShares(heir) == quarter){
     window.alert(heir + " gets: $ " + (property * quarter) );
    
    ashabQuarter.push(heir);
  }
  else if(testGetShares(heir) == twoThirds){
     window.alert(heir + " gets: $ " + (property * twoThirds) );
    
    ashabTwoThirds.push(heir);
  }
  else if(testGetShares(heir) == oneThird){
     window.alert(heir + " gets: $ " + (property * oneThird) );
    
    ashabOneThird.push(heir);
  }
  else if(testGetShares(heir) == oneSixth){
     window.alert(heir + " gets: $ " + (property * oneSixth) );
   
    ashabOneSixth.push(heir);
  }
  else if(testGetShares(heir) == oneEighth){
     window.alert(heir + " gets: $ " + (property * oneEighth) );
    
    ashabOneEighth.push(heir);
  }
  else if(testGetShares(heir) == universal){
    window.alert(heir + " is universal heir and gets: R ");
    universalHeirs.push(heir);
  }
  else if(testGetShares(heir) == coUniversal){
    window.alert(heir + " is co-universal heir");
  }
}
function showHeirs(){
    for(var heir in ashabWhole){
        alert("Recepient of a entire inheritance: "  + ashabWhole[heir]);
    }
    for(var heir in ashabHalf){
        alert("Recepients of a 1/2: "  + ashabHalf[heir]);
    }
    for(var heir in ashabQuarter){
        alert("Recepients of a 1/4: "  + ashabQuarter[heir]);
    }
    for(var heir in ashabTwoThirds){
        alert("Recepients of a 2/3: "  + ashabTwoThirds[heir]);
    }
    for(var heir in ashabOneThird){
        alert("Recepients of a 1/3: "  + ashabOneThird[heir]);
    }
    for(var heir in ashabOneSixth){
        alert("Recepients of a 1/6: "  + ashabOneSixth[heir]);
    }
    for(var heir in ashabOneEighth){
        alert("Recepients of a 1/8: "  + ashabOneEighth[heir]);
    }
    for(var heir in universalHeirs){
        //document.getElementById("resultList").innerHTML = "Universal heirs: "  + universalHeirs[heir];
        alert("Universal heirs: "  + universalHeirs[heir]);
    }
    for(var heir in coUniversalHeirs){
        alert("Co-universal heirs: " + coUniversalHeirs[heir]);
    }
    
}

testIt("Full brother");
showHeirs();




/*
Exception: ReferenceError: zero is not defined
testGetShares@Scratchpad/3:327:9
testIt@Scratchpad/3:482:6
@Scratchpad/3:557:1
*/