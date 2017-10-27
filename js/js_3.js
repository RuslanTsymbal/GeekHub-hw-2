//Task 3

function CreateCity() {   
	this.title = "Kiev";
   this.population = 2800000;
   this.quantity = function() {
     alert("In " + this.title + " lives " + this.population + " .");
   };
}

var city = new CreateCity();


city.quantity();

CreateCity.prototype.toString = function titleString() {
  return this.title;
}

CreateCity.prototype.valueOf = function populationNum() { 
	return this.population; 
};

CreateCity.prototype.toISOString = function() {
	return this.population + this.title; 
}

alert( String(city));  
alert( Number(city));
console.log(JSON.stringify(city));  
