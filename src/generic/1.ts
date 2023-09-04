/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise <T extends Array<string|number>>(array:T) {
  return new Promise<T>((resolve) => {
    resolve(array as T); 
   
  });
}

getPromise(["Text", 50]).then((data) => {
  console.log(data);
});

export {};