function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;

    function Node(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    DoublyLinkedList.prototype.append = function (elem) {
        var newNode = new Node(elem);
        if (this.length == 0) {
            //头和尾都指向新节点
            this.head = newNode;
            this.tail = newNode;
        } else {
            var current = this.head;
            //找到最后链表最后一个节点
            while (current.next) {
                current = current.next;
            }
            //将新节点的前一个节点指向当前最后一个节点
            newNode.prev = current;
            //将当前最后一个节点的next指向新节点
            current.next = newNode;
            //将尾巴指针指向新节点==即可完成追加操作
            this.tail = newNode;
        }
        this.length += 1;
    }
    DoublyLinkedList.prototype.insert = function (pos, elem) {
        if (pos < 0 || pos > this.length) {
            //越界判定
            return false;
        }
        else {
            var newNode = new Node(elem);
            if (this.length == 0) {
                //在第一个位置插入新节点
                this.head = newNode;
                this.tail = newNode;
            } else {
                if (pos == 0) {
                    //改变在第一个节点前插入新节点，this.head即为第一个节点，将第一个节点的prev指向新节点
                    this.head.prev = newNode;
                    //将新节点的next指向旧第一个节点
                    newNode.next = this.head;
                    //将头指针指向新节点
                    this.head = newNode;
                } else if (pos == this.length) {
                    //在最后的位置插入新节点，将新节点的prev指向尾巴指针
                    newNode.prev = this.tail;
                    //将尾巴指针的next指向新节点
                    this.tail.next = newNode;
                    //将尾巴指针指向新节点
                    this.tail = newNode;
                } else {
                    var current = this.head;
                    var index = 0;
                    // 取得当index=pos时所对应的节点current
                    while (index++ < pos) {
                        current = current.next;
                    }
                    //将新节点的前一个指向对应节点的前一个节点
                    newNode.prev = current.prev;
                    //将新节点的后一个指向对应节点
                    newNode.next = current;
                    //将对应节点前一个的后一个指向新节点
                    current.prev.next = newNode;
                    //将对应节点的前一个指向新节点即可完成在对应节点前插入新节点的操作
                    current.prev = newNode;
                }
            }
            this.length += 1;
        }
    }
}
DoublyLinkedList.prototype = {
    get(pos) {
        if (pos < 0 || pos >= this.length) return false;

        if (this.length / 2 > pos) {
            var index = 0;
            var current = this.head;
            while (index++ < pos) {
                current = current.next;
            }
            return current.data;
        }
        if (this.length / 2 < pos) {
            var index = this.length - 1;
            var current = this.tail;
            while (index-- > pos) {
                current = current.prev;
            }
            return current.data;
        }



    },
    indexOf(elem) {
        var index = 0;
        var current = this.head;
        while (current.next) {
            if (current.data == elem) return index;
            current = current.next;
            index += 1;
        }
        return -1;
    },
    update(pos, elem) {
        if (pos < 0 || pos >= this.length) return false;

        if (this.length / 2 > pos) {
            var index = 0;
            var current = this.head;
            while (index++ < pos) {
                current = current.next;
            }
            current.data = elem;
            return true;
        }
        if (this.length / 2 < pos) {
            var index = this.length - 1;
            var current = this.tail;
            while (index-- > pos) {
                current = current.prev;
            }
            current.data = elem;
        }
    },
    removeAt(pos) {
        if (pos < 0 || pos >= this.length) return false;

        var current = this.head;

        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            if (pos == 0) {
                this.head.next.prev = null;
                this.head = this.head.next;
            }
            else if (pos == this.length - 1) {
                current = this.tail;
                this.tail = this.tail.prev;
                this.tail.next = null;
            } else {
                if (this.length / 2 > pos) {
                    var index = 0;

                    while (index++ < pos) {
                        current = current.next;
                    }
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                if (this.length / 2 < pos) {
                    var index = this.length - 1;
                    // var current = this.tail;
                    while (index-- > pos) {
                        current = current.prev;
                    }
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
            }

        }
        this.length -= 1;

        return current.data;


    },
    remove(elem) {
        // var index=this.indexOf(elem)
        // this.removeAt(index);
        var current = this.head;
        while (current) {
            if (current.data == elem) {
                if (current == this.head) {
                    this.head.next.prev = null;
                    this.head = this.head.next;
                    this.length -= 1;
                    return true;
                } else if (current == this.tail) {
                    this.tail.prev.next = null;
                    this.tail = this.tail.prev;
                    this.length -= 1;
                    return true;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    this.length -= 1;
                    return true;
                }
            }
            current = current.next;
        }
        return false;
    },
    isEmpty() {
        return this.length == 0;
    },
    size() {
        return this.length;
    },
    toString() {
        return this.backwordString();
    },
    forwardString() {
        var current = this.tail;
        var result = '';
        while (current) {
            result += current.data + ' ';
            current = current.prev;
        }
        return result;
    },
    backwordString() {
        var result = '';
        var current = this.head;
        while (current) {
            result += current.data + ' ';
            current = current.next;
        }
        return result;
    }
}
DoublyLinkedList.prototype.constructor = DoublyLinkedList;