


let mod = {
    getItem: function () {
        return "biryani";
    },
    getItemAsync: function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('water')
            }, 2000)
        })
    }
}

module.exports = mod;