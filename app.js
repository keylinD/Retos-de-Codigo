const tasks =[
{
  name:'Pasear al perro',
  duration: 40
},
{
  name:'Estudiar JS y UX',
  duration: 120
},
{
  name:'Ver un capítulo de Aggretsuko',
  duration: 15
},
{
  name:'Ir a clases',
  duration: 300
},
{
  name:'Cepillar al gato',
  duration: 40
},
{
  name:'Ver Fail compilation en Youtube',
  duration: 120
}
];
 //Arreglo de Tareas 

 //crear el arreglo vacio con for

 let taskNames = [];

 for (let i =0; i < tasks.length; i++){
   taskNames.push(tasks[i].name);
   console.log(taskNames);
 } ;

//forEach

let taskNames = [];

tasks.forEach( (tasks) => {
  taskNames.push(tasks.name);
});
console.log(taskNames);

//Refactorización de forEach

let taskNames = [];
tasks.forEach(tasks => taskNames.push(tasks.name));

//MAP

const taskNames = tasks.map(() => {
  //retorna parametro.proiedad
  return tasks.name;
});

//Refactorizar map 
const taskNames = tasks.map(tasks => tasks.name);

//FILTER

//forEach

let difficultTasks = [];

//nombre de mi arreglo de objetos 
tasks.forEach((element) => {
  if (element.duration >= 120) {
    difficultTasks.push(element);
  }
});

//filter
const difficultTasks = tasks.filter( (index) =>{
  return index.duration >=120 ;
});

//Refactorización filter
const difficultTasks = tasks.filter (index => index.duration >= 120);

//Reduce acepta hasta 4 parametros 

//Primero hacemos el map para sacar la duracion de las tareas
//[40, 120, 15, 300, 40, 120] 
//635
// 40 + 120 = 160
// 

const taskDuration =tasks.map((element) => {
  //parametro.propiedad
  return element.duration;
}).reduce((previousValue, currentValue) =>{
  return previousValue + currentValue ;
});


//Bonus Spread operator (operador de propagación)
const arr =[1, 2, 3]
const addition = (num1, num2, num3) =>{
  console.log(num1 + num2 + num3)
};

addition(...arr);


let arr1 = [1, 2, 3];
let arr2 = [0, ...arr1, 4, 5, 6];

//console arr2 --> [0, 1, 2, 3, 4, 5, 6]