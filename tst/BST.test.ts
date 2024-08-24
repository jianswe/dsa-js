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