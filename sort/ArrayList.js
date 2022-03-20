function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
function ArrayList() {
    this.array = [];
}
ArrayList.prototype = {
    constructor: ArrayList,
    insert(item) {
        this.array.push(item);
    },
    toString() {
        return this.array.join()
    },
    //冒泡排序
    bubbleSort() {
        let length = this.array.length;
        //1.
        // for (let i = 0; i < length-1; i++) {
        //     for (let j = 0; j < length - i-1; j++) {
        //         if(this.array[j]>this.array[j+1]){
        //             swap(this.array,j,j+1);
        //         }
        //     }
        // }
        //2. 
        for (let i = length - 1; i >= 0; i--) {
            for (let j = 0; j < i; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    swap(this.array, j, j + 1);
                }
            }
        }
    },
    //选择排序
    selectionSort() {
        let length = this.array.length;
        for (let i = 0; i < length - 1; i++) {
            let minIndex = i;
            for (j = i + 1; j < length; j++) {
                if (this.array[j] < this.array[minIndex]) {
                    minIndex = j;
                }
            }
            if (i != minIndex) {
                swap(this.array, i, minIndex);
            }
        }
    },
    //插入排序
    insertionSort() {
        let length = this.array.length;
        //2.
        for (let i = 1; i < length; i++) {
            let temp = this.array[i];
            let j = i;
            while (this.array[j - 1] > temp && j > 0) {
                this.array[j] = this.array[j - 1]
                j--
            }
            this.array[j] = temp;
        }
    }
}
let arr1 = new ArrayList();
arr1.insert(1)
arr1.insert(4)
arr1.insert(5)
arr1.insert(3)
arr1.insert(2)
arr1.insert(6)
arr1.insert(5)
arr1.insert(2)
arr1.insert(9)
console.log(arr1.toString())
// arr1.bubbleSort();
// arr1.selectionSort();
arr1.insertionSort();
console.log(arr1.toString())
