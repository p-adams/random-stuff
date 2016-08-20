var family = new Array();
var siblings = new Array();
family.push('Son');
family.push('Father');
family.push('Paternal grandfather');
family.push('Mother');
family.push('Maternal grandmother');
family.push('Full brother');

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
var ashabOneEighth = new Array();
var universal = property;
var universalHeirs = new Array();

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
  } return count;
}

//testGetShares : anHeir -> share as decimal

function testGetShares(anHeir){
  
  if(family.length == 0 ){
    window.alert(anHeir + " is only heir. Share is: " + property*whole);
    return whole;
  }
  else{
  switch(anHeir){
      
    case "Husband":
      
      if(isAnHeir("Son")==true || isAnHeir("Grandson")==true|| isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
        window.alert("Share is 0.25");
        return quarter;
      }
      else{
        window.alert("Share is 0.5");
        return half;
      }
      break;
      
   case "Father":
      if(isAnHeir("Son")==true || isAnHeir("Grandson")==true|| isAnHeir("Daughter")==true||isAnHeir("Granddaughter")==true){
        window.alert("Share is 0.16");
        return oneSixth;
      }
      else{
        window.alert("Universal heir: share is remaining property");
        return universal;
      }
      break;
      
   case "Mother":
      if((isAnHeir("Son")==true && siblings.length > 1) || (isAnHeir("Grandson")==true && siblings.length > 1) ||
         ( isAnHeir("Daughter")==true && siblings.length > 1) ||(isAnHeir("Granddaughter")==true && siblings.length > 1)){
        window.alert("Share is 0.16");
        return oneSixth;
      }
      else{
        window.alert("Share is 0.33");
        return oneThird;
      }
      break;
      

    default:
      window.alert("Cannot determine share for: " + anHeir);
  
   }
  }
}
//This will go in submit function
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
  else{
    window.alert(heir + " is universal heir and gets: $ " + (universal) );
    universalHeirs.push(heir);
  }
}
/*
window.alert(ashabWhole.length);
window.alert(ashabHalf.length);
window.alert(ashabQuarter.length);
window.alert(ashabTwoThirds.length);
window.alert(ashabOneThird.length);
window.alert(ashabOneSixth.length);
window.alert(ashabOneEighth.length);
window.alert(universalHeirs.length);
*/

testIt("Son");


