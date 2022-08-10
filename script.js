/* .js files add interaction to your website */

/* SCRIPT */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if(scriptBtn){
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript(){
  var name = document.getElementById("name").value;
  var complaint = document.getElementById("complaint").value;
  
  displayScript.innerHTML = "My name is " + name + " and I have a complaint regarding your community/company. " + complaint;
  
  displayScript.style.display = "block";
}

/* FUN FACT */

var factList = [
  "Five out of six adults (83%) ages 18-45 experienced harassment in online multiplayer games-representing over 80 million young gamers.",
  "Three out of five young people (60%) ages 13-17 experienced harassment in online multiplayer games—representing nearly 14 million young gamers." ,
  "8% of adults ages 18-45 and 10% of young people ages 13-17 reported being exposed to discussions in online multiplayer games around white supremacist ideology, the belief that “white people are superior to people of other races and that white people should be in charge.",
  "7% of adult online multiplayer gamers were exposed to Holocaust denial while playing.",
  "71% of adult online multiplayer gamers experienced severe abuse, including physical threats, stalking, and sustained harassment, representing no significant change from our 2020 survey (68%) and six points higher than in 2019 (65%).",
  "The largest increases in identity-based harassment occurred among adult respondents who identified as women (49% in 2021, compared to 41% in 2020), Black or African American (42% in 2021, compared to 31% in 2020), and Asian American (38% in 2021, compared to 26% in 2020). It is worth noting that although there was no statistically significant change in identity-based harassment of adult LGBTQ+ players (38% in 2021 versus 37% in 2020), the number is still of concern.",
  "59% of adult gamers believe that laws need to be created to increase transparency around how game companies address hate, harassment, and extremism."
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("tellMeButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
     count = 0;
  }
  var tellMeSep = document.getElementById("tellMeSep");
  tellMeSep.style.display = "block";
}
