//Task 1

//Example - 1

var names = {};

Object.defineProperty(names, "name_1", { 
	value: "Иван",
	//свойство можно удалять 
	configurable: true, 
	//свойство можно менять
	writable: true,
	//просматривается в цикле for..in 
	enumerable: true 
});

Object.defineProperty(names, "name_2", { 
	value: "Николай",
	//свойство не удаляется 
	configurable: false,
	//свойство не меняется 
	writable: false,
	//просматривается в цикле for..in  
	enumerable: true 
})

Object.defineProperty(names, "name_3", { 
	value: "Дмитрий",
	//свойство можно удалять  
	configurable: true,
	//свойство можно менять 
	writable: true,
	//не просматривается в цикле for..in  
	enumerable: false 
})


var arr = [];

for (var key in names) {
   arr.push(names[key]);
}

//Получим массив имен, но без "Дмитрий".У которого поле - enumerable: false 


delete names.name_3;
//У объекта удалили свойство - "name_3"

delete names.name_2;
//У объекта свойство "name_2" не удалилось, это поле содержит поле - configurable: false,



//Example - 2

var number = {};

//создали у объекта с поле "result" 
number.result = 0;



//Создаем свойство sum у нашего объекта - "number" 
//Свойства sum - функция.

Object.defineProperty(number, "sum", {

   get: function() {
     //возвращяем свойсво result
     return this.result;
   },

   set: function(value) {
  	   //используем локальный массив
      var arr = value.split(' ');
      
      for (var i = 0; i < arr.length; i++) {
      	//свойсво result получет результат вычислений
   	   this.result = this.result + +arr[i];
      }
   }
});

number.sum = "1 2 3 4 5 6 7";


//Example - 3

function Life (type, food) {
	//класс животных
   this.typeAnimal = type;
   //основная пища
   this.foodAnimal = food;
   //разделение по виду питания
   this.typeFood;

   //Добавляем в объект свойство get
   //свойство, благодаря которому можно узнать хищное животное или нет
   Object.defineProperty(this, "nutrition", {
     get: function() {
    
      if(food == "мясо" || food == "рыба") {
       	return this.typeFood = "хищник";
      } else {
       	return this.typeFood = "не хищник";
      }
    }
  });
}


var animal = new Life("млекопитающий", "мясо");

//Создаем 2-й объект (не хищник)

var animal_2 = new Life("рыба", "планктон");



  