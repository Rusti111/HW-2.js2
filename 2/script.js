const jsonData = '{"key": "value"}'; 

const promise = new Promise((resolve, ) => {
  setTimeout(() => {
    resolve(jsonData); 
  }, 2000);
});

promise
  .then((data) => {
    const parsedData = JSON.parse(data); 
    console.log(parsedData); 
  })
  .catch((error) => {
    console.error(error);
  });