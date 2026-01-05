 new Promise((resolve, reject) => {
  console.log("first")
  setTimeout(() => {
    reject("success");
    console.log('second')
  }, 1000);
}).then((res)=>console.log('third'))
.catch((err)=>console.log('forth'))

  console.log("last")

  const dateTime = new Date()

  console.log(dateTime.getDate())