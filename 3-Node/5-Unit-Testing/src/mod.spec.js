

/*


 Unit-testing   

    => AAA

    Arrange
    Act
    Assert

*/

let mod = require('./mod')

describe('mod tests', () => {

    it('should retuen biryani', () => {
        let result = mod.getItem();
        expect(result).toBe('biryani');
    })
    it('should retuen beer async', (done) => {
        let promise = mod.getItemAsync()
        promise
            .then(drink => {
                if (drink !== 'beer')
                    done("i hate this weekend")
            })
    })

})