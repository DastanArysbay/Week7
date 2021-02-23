
var h1 = document.getElementsByTagName("h1")[0]
h1.className= "shine"

const brideEducation = document.querySelector(".bride-education");
const familyNet = document.querySelector(".family-net");

const price = document.querySelector(".price");
price.style.marginLeft = '16em'

const submitQuote = document.getElementById("submit-quote");
submitQuote.style.marginLeft = '27em'

var age_prices = new Array();
age_prices["18"]=1.5;
age_prices["24"]=1.2;
age_prices["28"]=0.95;



submitQuote.addEventListener('click', function(){
  
  //family net worth
  if (familyNet.options[familyNet.selectedIndex].text == "More than 100,000$") {
    answer = 500 * 2;
  } else if (familyNet.options[familyNet.selectedIndex].text == "Between 50,000$ and 100,000$") {
    answer = 500 * 1.5;
  } else {
    answer = 500 * 1.2;
  }
  
  //education
  if (brideEducation.options[brideEducation.selectedIndex].text == "Undergraduate degree") {
    answer = answer * 1.5;
  } else if (brideEducation.options[brideEducation.selectedIndex].text == "College degree") {
    answer = answer * 1.2;
  } else if (brideEducation.options[brideEducation.selectedIndex].text == "High school degree") {
    answer = answer * 1.05;
  } else 
    answer = answer*0.9;
  
    var skills = document.getElementsByTagName("input");
    for (var i = 0; i < 4; i++)
    {
       if (skills[i].checked)//if the item is checked
       {
          answer += (skills[i].value * 1);//then item total is updated to the previous total + value of checked item. Mutplied by 1 so that JS knows that it is a num
       }

    }
 
    var one = document.getElementsByClassName("reputation");
    for (var k = 0; k < 3 ; k++){
    if (one[k].checked && k ==0){
        answer = answer * 0.85;
    }else if (one[k].checked && k ==1){
        answer = answer * 0.9;  
    }
    else if (one[k].checked && k ==2) {
        answer = answer - 200;  
    }
}
    


  price.innerHTML = "£" + answer;
  
});


















