let myPromise = new Promise(function(resolve, reject) {
    let success = true;

    if (success) {
        resolve("the task has been completed");
    } else {
        reject("the task has failed");
    }
});

myPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });
