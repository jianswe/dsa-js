/**
 * MinHeap
 */

class MinHeap {
    data: number[]
    constructor() {
        this.data = [0]
    }
    add(num: number) {
        const count = this.data.push(num)
        this._heapifyUp(count-1)
        this.data[0] += 1
    }
    pop(): number {
        const min = this.data[1]
        if (this.data.length > 1) {
            this.data[1] = this.data.pop()!
            this._heapifyDown(1) 
            this.data[0] -= 1
        }
        return min
    }
    size(): number {
        return this.data[0]
    }
    _heapifyUp(idx: number) {
        if (idx===0) return 
        const parentIdx = Math.floor(idx/2)
        if (this.data[parentIdx] > this.data[idx]) {
            const temp = this.data[idx]
            this.data[idx] = this.data[parentIdx]
            this.data[parentIdx] = temp 
            this._heapifyUp(parentIdx)
        }
    }
    _heapifyDown(idx: number) {
        const leftChildIdx = 2*idx
        const rightChildIdx = 2*idx+1
        if (leftChildIdx>=this.data.length) return 
        let minChildIdx = leftChildIdx
        if (rightChildIdx < this.data.length) {
            minChildIdx = this.data[leftChildIdx] < this.data[rightChildIdx] ? leftChildIdx : rightChildIdx
        }
        const temp = this.data[idx]
        this.data[idx] = this.data[minChildIdx]
        this.data[minChildIdx] = temp
    }
}

export default MinHeap