function getProperty(){
    property = prompt("Please enter property amount");
}

var heirs = new Array();
var sib = new Array();
var desc = new Array();

var eligibleHeirs = new Array();
var ineligibleHeirs = new Array();
var whole = 1.00;
var half = 0.50;
var twoThirds = 0.66;
var quarter = 0.25;
var oneThird = 0.33;
var oneSixth = 0.16;
var oneEighth = 0.125;
var universal = "u";
var coUniversal = "c";
//female co-heir x/n;
//male co-heir 2*x;
var zero = 0.0;

var ashabWhole = new Array();
var ashabHalf = new Array();
var ashabQuarter = new Array();
var ashabTwoThirds = new Array();
var ashabOneThird = new Array();
var ashabOneSixth = new Array();
var ashabOneEighth = new Array();
var universalHeirs = new Array();
var coUniversalHeirs = new Array();






function isAnHeir(anHeir){
    if (heirs.indexOf(anHeir) > -1) {
        return true;
    }
    else{
        return false;
    }
}

function heirCount(anHeir){
  var count = 0;
  for(i = 0; i < heirs.length-1; i++){
    if(heirs[i]!=null){
      count ++;
    }
  }return count;
}

function getShare(anHeir){
 
  if(heirs.length == 1){
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
        else if(desc.length > 1 && isAnHeir("Son")==false){
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
function detShare(heir){
  if(getShare(heir) == whole){
    //window.alert(heir + " gets: $ " + (property * whole) );
     ashabWhole.push(heir);
   }
  else if(getShare(heir) == half){
     //window.alert(heir + " gets: $ " + (property * half) );
    ashabHalf.push(heir);
  }
  else if(getShare(heir) == quarter){
     //window.alert(heir + " gets: $ " + (property * quarter) );
    ashabQuarter.push(heir);
  }
  else if(getShare(heir) == twoThirds){
     //window.alert(heir + " gets: $ " + (property * twoThirds) );
    ashabTwoThirds.push(heir);
  }
  else if(getShare(heir) == oneThird){
     //window.alert(heir + " gets: $ " + (property * oneThird) );
    ashabOneThird.push(heir);
  }
  else if(getShare(heir) == oneSixth){
     //window.alert(heir + " gets: $ " + (property * oneSixth) );
    ashabOneSixth.push(heir);
  }
  else if(getShare(heir) == oneEighth){
     //window.alert(heir + " gets: $ " + (property * oneEighth) );
    ashabOneEighth.push(heir);
  }
  else if(getShare(heir) == universal){
    //window.alert(heir + " is universal heir and gets: $ remainder.");
    universalHeirs.push(heir);
  }
  else if(getShare(heir) == coUniversal){
    coUniversalHeirs.push(heir);   
    }

}



function addHeir() {
	aFemaleHeir = document.getElementById("femaleHeirs").value;
    quantity = document.getElementById("addHeirBox").value;
    localStorage.setItem(aFemaleHeir, quantity);
    motherCount = localStorage.getItem("Mother");
    if (motherCount==2){
        window.alert("You cant have more than one mother");
    }
    //fill sib array w/sib
    if(aFemaleHeir == "Full sister" || aFemaleHeir == "Paternal sister" ||
       aFemaleHeir == "Maternal sister"){
        sib.push(aFemaleHeir);
    }
    daughterCount = localStorage.getItem("Daughter");
    if(aFemaleHeir == "Daughter"){
        desc.push(aFemaleHeir);
    }
    
    display();
}

function RemoveHeir() {
	var heir = document.getElementById("femaleHeirs").value;
	document.getElementById("addHeirBox").value = localStorage.removeItem(heir);
	display();
}

function addHeir2(){
    var maleHeir = document.getElementById("maleHeirs").value;
    var quantity = document.getElementById("addHeirBox2").value;
    localStorage.setItem(maleHeir, quantity);
    var fatherCount = localStorage.getItem("Father");
    if(fatherCount==2){
        window.alert("You cant have more than one father");
    }
    //fill sib array w/sib
    if(maleHeir == "Full brother" || maleHeir == "Paternal brother" ||
       maleHeir == "Maternal brother"){
        sib.push(maleHeir);
    }
    if(maleHeir == "Son"){
        desc.push(maleHeir);
    }
    display();
    
}

function RemoveHeir2() {
	var heir = document.getElementById("maleHeirs").value;
	document.getElementById("addHeirBox2").value = localStorage.removeItem(heir);
	display();
}

function ClearAll() {
	localStorage.clear();
	display();
}

function display() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Heirs</th><th>#</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>Name</th><th>Value</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store heir list as your browser do not support local storage');
	}
}

function Submit(){
    propertyAmount = document.getElementById("total").value;
//get keys out of local storage and store them in array
    for(i = 0; i < localStorage.length;i++){
        aKey = localStorage.key(i);
        heirs.push(aKey);
    }
    //window.alert(heirs.length);
    
    for(var i=0, iC=localStorage.length; i<iC; ++i){ 
        var storageKey = localStorage.key(i);
        //window.alert( storageKey + ': ' + localStorage.getItem(storageKey) );
        if(getShare(storageKey)!= zero){
            eligibleHeirs.push(storageKey);
            detShare(storageKey);
           
        }     
        else{
            ineligibleHeirs.push(storageKey);
        }
        
        
    }
    
    showHeirs();
    
 
}//end of submit

function showHeirs(){
    //location.href='results.html';
    document.getElementById("amt").innerHTML = "$" + propertyAmount;
    
    for(var heir in ashabWhole){
        //alert("Recepient of a entire inheritance: "  + ashabWhole[heir]);
        document.getElementById("ent").innerHTML = ashabWhole;
    }
    for(var heir in ashabHalf){
        //alert("Recepients of a 1/2: "  + ashabHalf[heir]);
        document.getElementById("half").innerHTML = ashabHalf;
    }
    for(var heir in ashabQuarter){
        //alert("Recepients of a 1/4: "  + ashabQuarter[heir]);
        document.getElementById("four").innerHTML = ashabQuarter;
    }
    for(var heir in ashabTwoThirds){
        //alert("Recepients of a 2/3: "  + ashabTwoThirds[heir]);
        document.getElementById("two").innerHTML = ashabTwoThirds;
    }
    for(var heir in ashabOneThird){
        //alert("Recepients of a 1/3: "  + ashabOneThird[heir]);
        document.getElementById("third").innerHTML = ashabOneThird;
    }
    for(var heir in ashabOneSixth){
        //alert("Recepients of a 1/6: "  + ashabOneSixth[heir]);
        document.getElementById("sixth").innerHTML = ashabOneSixth;
    }
    for(var heir in ashabOneEighth){
        //alert("Recepients of a 1/8: "  + ashabOneEighth[heir]);
        document.getElementById("eig").innerHTML = ashabOneEighth;
    }
    for(var heir in universalHeirs){
        document.getElementById("uni").innerHTML = universalHeirs;
        //alert("Universal (or co-universal) heirs: "  + universalHeirs);
    }
    for(var heir in coUniversalHeirs){
        //alert("Co-universal heirs: " + coUniversalHeirs[heir]);
        document.getElementById("co").innerHTML = coUniversalHeirs;
    }
    for (var i = 0; i < eligibleHeirs.length;i++){
        //window.alert("Number of eligible heirs: " + eligibleHeirs);
        document.getElementById("el").innerHTML = eligibleHeirs;
    }
    
    for(var j = 0; j < ineligibleHeirs.length;j++){
        //window.alert("Number of ineligible heirs: " + ineligibleHeirs[j]);
        document.getElementById("in").innerHTML = ineligibleHeirs;
    }
    
    
}

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		
		return true;
	} else {
			return false;
	}
}
  