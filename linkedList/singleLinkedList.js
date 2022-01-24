function LinkedList() {
    this.head = null;
    this.length = 0;
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    LinkedList.prototype.append = function (elem) {
        var newNode = new Node(elem);
        if (this.length == 0) {//是第一个节点
            this.head = newNode;
        } else {
            var current = this.head;
            while (current.next) {//找到最后一个节点
                current = current.next;
            }
            current.next = newNode;
        }
        this.length += 1;
    }
    LinkedList.prototype.insert = function (pos, elem) {
        let newNode = new Node(elem);
        if (pos < 0 || pos > this.length) {
            return false;
        }
        if (pos == 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            var index = 0;
            var current = this.head;
            var previous = null;
            while (index++ < pos) {
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.length += 1;
    }

}
LinkedList.prototype = {
    get: function (pos) {
        if (pos < 0 || pos >= this.length) return null;
        let index = 0;
        let current = this.head;
        while (index++ < pos) {
            current = current.next;
        }
        return current.data;
    },
    indexOf: function (elem) {
        let index = 0;
        // let find;
        let current = this.head;
        while (current.next) {
            if (current.data == elem) {
                // find = true;
                // break;
                return index;
            }
            current = current.next;
            index += 1;
        }
        return -1;
        // return find ? index : -1;
    },
    update: function (pos, elem) {
        if (pos < 0 || pos >= this.length) return null;
        let index = 0;
        let current = this.head;
        while (index++ < pos) {
            current = current.next;
        }
        current.data = elem;
        return true;
    },
    removeAt: function (pos) {
        var current = this.head;
        if (pos < 0 || pos >= this.length) return null;
        if (pos == 0) {
            this.head = this.head.next;

        } else {
            var index = 0;
            var previous = null;
            while (index++ < pos) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }

        this.length -= 1;
        return current.data;
    },
    remove: function (elem) {
        return this.removeAt(this.indexOf(elem));
        // if (this.head.data == elem) {
        //     this.head = this.head.next;
        //     this.length -= 1;
        // } else {
        //     let current = this.head;
        //     let previous = this.head;
        //     while (current.next) {
        //         if (current.data == elem) {
        //             previous.next = current.next;
        //             this.length -= 1;
        //         }
        //         previous = current;
        //         current = current.next;
        //     }
        // }

        return false;
    },
    isEmpty: function () {
        return this.length == 0;
    },
    size: function () {
        return this.length;
    },
    toString: function () {
        let resultStr = '';
        let current = this.head;
        if (current) {
            resultStr += this.head.data + ' ';
            while (current.next) {
                resultStr += current.next.data + ' ';
                current = current.next;
            }
        }
        return resultStr;
    }
}
LinkedList.prototype.constructor = LinkedList;