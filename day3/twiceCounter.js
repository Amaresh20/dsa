function twiceCounter(list) {
  let map = new Map();

  for (let i = 0; i < list.length; i++) {
    if (map.has(list[i])) {
      map.set(list[i], map.get(list[i]) + 1);
    } else {
      map.set(list[i], 1);
    }
  }
  let count = 0;
  for (const [key, value] of map) {
    if (value == 2) {
      count++;
    }
  }
  return count;
}

const list = ["aa", "bb", "aa", "bb", "bb", "cc", "cc"];
console.log(twiceCounter(list));
