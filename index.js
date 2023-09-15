// Функція для симуляції асинхронного запиту до сервера
// A function for simulating an asynchronous request to the server
function fetchData(callback) {
  setTimeout(() => {
    const responseData = { user: 'John', age: 30 };
    callback(responseData);
  }, 2000);
}

// Функція для обробки отриманих даних
// Function for processing received data
function processUserData(data, callback) {
  setTimeout(() => {
    data.location = 'New York';
    callback(data);
  }, 2000);
}

// Перший асинхронний запит // first async req
fetchData((userData) => {
  console.log('User data received:', userData);

  // Другий асинхронний запит на основі даних з першого запиту
  // Second asynchronous request based on the data from the first request
  processUserData(userData, (userDataWithLocation) => {
    console.log('User data with location:', userDataWithLocation);

    // Тут можна продовжити ланцюг обробки даних
    // Here you can continue the data processing chain
  });
});
