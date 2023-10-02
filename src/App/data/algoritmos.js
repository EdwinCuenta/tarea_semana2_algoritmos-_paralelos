// Algoritmo de Búsqueda Secuencial
function sequentialSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

// Algoritmo de Búsqueda Binaria
function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (array[mid] === target) {
        return mid;
      } else if (array[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Algoritmo de Ordenamiento de la Burbuja
  function bubbleSort(array) {
    const n = array.length;
    let swapped;
  
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
          const temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  
    return array;
  }
  
  // Algoritmo de Quick Sort
  function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const pivot = array[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Algoritmo de Método de Inserción
  function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      let j = i - 1;
  
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
  
      array[j + 1] = current;
    }
  
    return array;
  }
  ///**8*************************************************************** */
let resultados; //variable para exportarla en la parte de la interfaz de usuario
let arryDesordenado =[]; // variable para exportarla en la parte de interfa de usuario
export const concurrencia = (tamanio, busqueda)=>{
  arryDesordenado =[]
  // Crear un arreglo vacío
  let array = [];

  // Llenar el arreglo con valores aleatorios entre 1 y lo que se desee
  for (let i = 0; i < tamanio; i++) {
    let valorAleatorio = Math.floor(Math.random() * 10000) + 1;
    array.push(valorAleatorio);
    arryDesordenado.push(valorAleatorio);
  }
  // creando el arregtlo ordenado para  el metodo de busqueda binaria que no necesita
  let arrayOrdenado = quickSort(array)


  //*******Ejecutando la funciones en paralelo **************************************/


   const sequentialSearchPromise = new Promise((resolve) => {
    const start = performance.now();
    const result = sequentialSearch(arrayOrdenado, busqueda);
    const end = performance.now();
    resolve({ algorithm: "Búsqueda Secuencial", result, duration: (end - start) / 1000 });
  });

  const startTotal = performance.now();

  const searchPromise = new Promise((resolve) => {
    const start = performance.now();
    const result = binarySearch(arrayOrdenado, busqueda);
    const end = performance.now();
    resolve({ algorithm: "Búsqueda Binaria", result, duration: (end - start) / 1000 }); // Convertir a segundos
  });

  const bubbleSortPromise = new Promise((resolve) => {
    const start = performance.now();
    const sortedArray = bubbleSort([...array]);
    const end = performance.now();
    resolve({ algorithm: "Ordenamiento de la Burbuja", result: sortedArray, duration: (end - start) / 1000 }); // Convertir a segundos
  });

  const quickSortPromise = new Promise((resolve) => {
    const start = performance.now();
    const sortedArray = quickSort([...array]);
    const end = performance.now();
    resolve({ algorithm: "Quick Sort", result: sortedArray, duration: (end - start) / 1000 }); // Convertir a segundos
  });

  const insertionSortPromise = new Promise((resolve) => {
    const start = performance.now();
    const sortedArray = insertionSort([...array]);
    const end = performance.now();
    resolve({ algorithm: "Método de Inserción", result: sortedArray, duration: (end - start) / 1000 }); // Convertir a segundos
  });

      Promise.all([sequentialSearchPromise ,searchPromise, bubbleSortPromise, quickSortPromise, insertionSortPromise])
      .then((results) => {
        const endTotal = performance.now();
        const elapsedTime = (endTotal - startTotal) / 1000; // Convertir a segundos
        
        resultados = results

        
      })
      .catch((error) => {
        console.error("Error:", error);
      });

} 
    export {resultados};
    export {arryDesordenado};