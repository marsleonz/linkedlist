const node = (value = null, next = null) => {
  return { value, next };
};
const linkedlist = () => {
  let head = null;
  let length = 0;

  const append = (value) => {
    let newNode = node(value);
    if (head === null) {
      head = newNode;
    } else {
      let pointer = head;
      while (pointer.next !== null) {
        pointer = pointer.next;
      }
      pointer.next = newNode;
    }
    length++;
  };

  const prepend = (value) => {
    let newnode = node(value, head);
    // newnode.next = head;
    head = newnode;
    length++;
  };

  const tail = () => {
    let pointer = head;
    while (pointer.next !== null) {
      pointer = pointer.next;
    }
    return pointer;
  };

  const at = (index) => {
    let pointer = head;
    let i = 0;
    while (i < index) {
      pointer = pointer.next;
      i++;
    }
    return pointer;
  };

  const pop = () => {
    let pointer = head;
    let i = 0;
    while (pointer.next != null) {
      pointer = pointer.next;
      i++;
    }
    let pointerBefore = at(i - 1);
    pointerBefore.next = null;
    length--;
  };

  const contains = (value) => {
    let pointer = head;
    while (pointer !== null) {
      if (pointer.value == value) {
        return true;
      } else {
        pointer = pointer.next;
      }
    }
    return false;
  };

  const find = (value) => {
    let pointer = head;
    let index = 0;
    while (pointer !== null) {
      if (pointer.value == value) {
        return index;
      } else {
        pointer = pointer.next;
        index++;
      }
    }
    return null;
  };

  const toString = () => {
    let pointer = head;
    let mylist = "";
    while (pointer != null) {
      mylist += `${pointer.value} -> `;
      pointer = pointer.next;
    }
    return `${mylist}null`;
  };

  const insertAt = (value, index) => {
    const newnode = node(value);
    let pointer = head;
    let i = 0;
    if (index === 0) {
      prepend(value);
      return;
    }
    while (i < index - 1 && index <= length) {
      pointer = pointer.next;
      i++;
    }
    newnode.next = pointer.next;
    pointer.next = newnode;
    length++;
  };

  const removeAt = (index) => {
    if (index === 0) {
      head = head.next;
    }
    let nodebeforeIndex = at(index - 1);
    let nodeafterIndex = at(index + 1);
    nodebeforeIndex.next = nodeafterIndex;
    length--;
  };

  return {
    append,
    prepend,
    get size() {
      return length;
    },
    get head() {
      return head.value;
    },
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

let list = linkedlist();

list.append(1);
list.append(2);
list.prepend(3);
list.prepend(4);
list.append(5);
list.append(6);

console.log(list.size);
console.log(list.head);
console.log(list.tail());
console.log(list.at(3));
console.log(list.contains(7));
console.log(list.find(1));
console.log(list.toString());

list.insertAt(7, 1);
console.log(list.toString());
console.log(list.size);

list.pop();
console.log(list.toString());
console.log(list.size);
