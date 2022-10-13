function binarySearch(data: number[], k: number): number {
  /* your code here */
  let lo = 0;
  let hi = data.length - 1;
  let ptr: number;

  while (lo <= hi) {
    ptr = Math.floor((lo + hi) / 2);
    if (data[ptr] === k) {
      return ptr;
    } else if (data[ptr] < k) {
      lo = ptr + 1;
      continue;
    } else {
      hi = ptr - 1;
      continue;
    }
  }

  return -1;
}

let data: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(data, 8));
