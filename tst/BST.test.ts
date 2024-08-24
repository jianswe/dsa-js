import BST from "../src/BST"

test("insert and traverseInOrder: build a tree from scratch", () => {
    let bst = new BST()
    bst.insert(1)
    bst.insert(2)
    bst.insert(3)
    bst.insert(3)
    bst.insert(4)
    bst.insert(5)
    const nums = bst.traverseInOrder()
    
    expect(nums.length).toBe(5)
    for (let i=0; i<nums.length; i++) {
        expect(nums[i]).toBe(i+1)
    } 
})

test("Input: root = [10,5,15,3,7,18]", () => {
    const expected = [3,5,7,10,15,18]
    let bst = new BST()
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)
    bst.insert(7)
    bst.insert(18)
    const nums = bst.traverseInOrder()

    expect(nums.length).toBe(6)
    for (let i=0; i<nums.length; i++) {
        expect(nums[i]).toBe(expected[i])
    } 
})