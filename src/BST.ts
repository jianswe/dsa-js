class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
/**
 * Binary Serach Tree without duplicated values
 * TODO: 
 * 1. handle duplicated values
 * 2. balance the tree  
 */
class BST {
    root: TreeNode 

    insert(val: number) {
        if (!this.root) { // we cannot pass undefined reference from root to cur, so we have to init root first.
            this.root = new TreeNode(val)
            return 
        }
        let cur: TreeNode | null = this.root 
        while (cur && cur.val) { // root node doesn't have val initially 
            if (val < cur.val) {
                if (cur.left) cur = cur.left
                else  cur.left = new TreeNode(val) // we can't assign cur after loop, since undefined reference cannot be passed 
            } else if (val > cur.val) { 
                if (cur.right) cur = cur.right
                else cur.right = new TreeNode(val)
            } else { // val === cur.val
                return 
            }
        }
    }

    traverseInOrder(): number[] {
        
        function dfs(node): number[] {
            if (!node) return []
            let nums: number[] = []
            nums.push(...dfs(node.left)) // prefer push than concat, since concat will create a new array
            nums.push(node.val)
            nums.push(...dfs(node.right)) 
            return nums
        }

        return dfs(this.root)
    }

    
}

export default BST 