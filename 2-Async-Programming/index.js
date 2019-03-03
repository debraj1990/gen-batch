
const { Subject } = require('rxjs')

// Provider
//---------------------------------------

let provider = {
    getSingleItem() {
        //..
        return "SINGLE-ITEM";
    },
    getMultipleItems() {
        //..
        let iterable = {
            [Symbol.iterator]: function () {
                let i = 0;
                return {
                    next: function () {
                        i++;
                        return { value: i <= 5 ? "ITEM-" + i : undefined, done: i <= 5 ? false : true }
                    }
                }
            }
        }
        return iterable;
    },

    getSingleItemAsync() {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                let item = "SINGLE-ASYNC-ITEM";
                resolve(item);  // push result
                //reject('oops')  // push  error
            }, 5000);
        });
        return promise;
    },
    getMultipleItemsAsync() {
        let stream = new Subject(); //  observable stream
        let i = 0;
        let interval = setInterval(() => {
            i++;
            if (i <= 3)
                stream.next("ITEM-" + i)
            else {
                stream.complete();
                clearInterval(interval)
            }

        }, 2000)
        return stream;
    },
}


//---------------------------------------



// Consumer
//---------------------------------------
let consumer = {
    doSomething() {

        console.log("-----------------------------------");

        let item = provider.getSingleItem(); // pull , sync
        console.log(item);

        console.log("-----------------------------------");

        let iterable = provider.getMultipleItems(); // pull , sync
        for (let item of iterable) {
            console.log(item);
        }

        console.log("-----------------------------------");

        let promise = provider.getSingleItemAsync();
        promise
            .then(
                result => console.log(result),
                error => console.error(error)
            )
        console.log("-----------------------------------");

        let stream = provider.getMultipleItemsAsync();
        stream
            .subscribe(
                result => console.log(result),
                error => console.log(error),
                () => console.log("completed")
            )

    }
}

consumer.doSomething();
//---------------------------------------