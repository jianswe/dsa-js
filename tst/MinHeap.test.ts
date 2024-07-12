import MinHeap from '../src/MinHeap'

test('MinHeap', () => {
  let minHeap = new MinHeap()
  minHeap.add(3)
  minHeap.add(1)
  minHeap.add(2)
  expect(minHeap.pop()).toBe(1)
  expect(minHeap.size()).toBe(2)
});