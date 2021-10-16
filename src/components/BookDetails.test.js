const rewire = require("rewire")
const BookDetails = rewire("./BookDetails")
const mapStateToProps = BookDetails.__get__("mapStateToProps")
// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ selectedBook: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ selectedBook: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
