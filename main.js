
array_1=["pen ","paper","book","bottle"];


random_number = Math.floor((Math.random()*array_1.length)+1);

Element_of_array = array_1[random_number];

document.getElementById("tobedrawn").innerHTML = "sketch to be drawn:"+Element_of_array ;
