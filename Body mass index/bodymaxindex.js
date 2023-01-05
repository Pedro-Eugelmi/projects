// BMI = kiles/ meters
const weight = document.getElementById("weight");
const height = document.getElementById("height");

const newDiv = document.createElement("div")
const newDivweight = document.createElement("div")
newDiv.classList = "divheight" ;
newDivweight.classList = "divheight";


function BMICalculator()

{    let BMI = weight.value  / ((height.value / 100) * (height.value / 100))
     const divtexto = document.createTextNode(height.value)
     const divtextoweight = document.createTextNode(weight.value)
      newDiv.append(divtexto)
      newDivweight.append(divtextoweight)


if ( BMI > 0 &&  BMI <  18.5 ) 
{   
    document.querySelector("span").innerHTML =  BMI.toFixed(2)
    document.querySelector(".Underweight").style.display = "block"
    document.querySelector(".inputarea").replaceChild(newDiv , height)
     document.querySelector(".inputweight").replaceChild(newDivweight , weight)
  


    
}

if ( BMI >= 18.5 && BMI < 25 ) 
{

    document.querySelector("span").innerHTML =  BMI.toFixed(2)
    document.querySelector(".HealthyWeight").style.display = "block"
    document.querySelector(".inputarea").replaceChild(newDiv , height)
     document.querySelector(".inputweight").replaceChild(newDivweight , weight)
 
}

if ( BMI >= 25 && BMI < 30 ) 
{
  
    document.querySelector("span").innerHTML =  BMI.toFixed(2)
    document.querySelector(".Overweight").style.display = "block"
    document.querySelector(".inputarea").replaceChild(newDiv , height)
     document.querySelector(".inputweight").replaceChild(newDivweight , weight)
   
}

if ( BMI >= 30 && BMI  < 40 ) 
{
    document.querySelector("span").innerHTML =  BMI.toFixed(2)
    document.querySelector(".Obesity").style.display = "block"
    document.querySelector(".inputarea").replaceChild(newDiv , height)
     document.querySelector(".inputweight").replaceChild(newDivweight , weight)
   
}
if ( BMI >= 40) 
{
    
    document.querySelector("span").innerHTML =  BMI.toFixed(2)
    document.querySelector(".morbidobesity").style.display = "block"
    document.querySelector(".inputarea").replaceChild(newDiv , height)
     document.querySelector(".inputweight").replaceChild(newDivweight , weight)
   
} 


}


 function restartCalculator()
 {
    document.querySelector(".inputarea").replaceChild( height, newDiv)
     document.querySelector(".inputweight").replaceChild(weight , newDivweight)
     document.querySelector("span").innerHTML = " "
     height.value = " "
     weight.value = " "
     newDivweight.innerHTML = " ";
     newDiv.innerHTML = " ";
     if (document.querySelector('.Overweight').style.display = 'block')
     { document.querySelector('.Overweight').style.display = "none"}
     if (document.querySelector('.Obesity').style.display = 'block')
     { document.querySelector('.Obesity').style.display = "none"}
     if (document.querySelector('.morbidobesity').style.display = 'block')
     { document.querySelector('.morbidobesity').style.display = "none"}     
     if (document.querySelector('.Underweight').style.display = 'block')
     { document.querySelector('.Underweight').style.display = "none"}
     if (document.querySelector('.HealthyWeight').style.display = 'block')
     { document.querySelector('.HealthyWeight').style.display = "none"}
 }

/*let Modifydate = document.querySelector (".thedate")
let nowdate = Date()
Modifydate.innerHTML = nowdate
*/

function openMenu ()
{ 
    let menu = document.querySelector('.menu')
    
    if (menu.style.width == '0px')
    { 
        menu.style.width = '250px'
        menu.style.borderLeft = 'goldenrod 4px solid'
    } else 
    {
        menu.style.width = '0px'
        menu.style.borderLeft = 'none'
    }
}


function scrollCalculator()
{
    window.scrollTo({
       top: 722
        
    })
}


