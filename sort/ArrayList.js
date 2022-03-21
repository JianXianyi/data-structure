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
        console.time()
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
        console.timeEnd();
    },
    //希尔排序
    shellSort() {
        //1.获取数组长度
        console.time();
        let length = this.array.length;
        //2.初始化增量
        let gap = Math.floor(length / 2)
        //3.while循环
        while (gap >= 1) {
            //以gap为间隔 进行分组 对分组进行插入排序
            for (let i = gap; i < length; i++) {
                let temp = this.array[i];
                let j = i;
                while (this.array[j - gap] > temp && j > gap - 1) {
                    this.array[j] = this.array[j - gap]
                    j -= gap;
                }
                //5.将j赋值给temp
                this.array[j] = temp;
            }
            gap = Math.floor(gap / 2)
        }
        console.timeEnd()
    },
    //快排枢纽选择
    median(left, right) {
        //1.取出中间位置
        let center = Math.floor((left + right) / 2)
        //2.判断大小进行交换
        if (this.array[left] > this.array[center]) {
            swap(this.array, left, center);
        }
        if (this.array[center] > this.array[right]) {
            swap(this.array, right, center);

        }
        if (this.array[left] > this.array[right]) {
            swap(this.array, left, center);
        }
        //3.将center放到right-1
        swap(this.array, center, right - 1)
        //返回枢纽
        return this.array[right - 1]
    },
    quickSort() {
        console.time()
        this.quick(0, this.array.length - 1)
        console.timeEnd();
    },
    quick(left, right) {
        //结束条件
        if (left >= right) {
            return
        }
        //获取枢纽
        let pivot = this.median(left, right);
        //定义变量 标记当前找到的位置
        let i = left, j = right - 1;

        //开始依次找
        while (true) {
            while (this.array[++i] < pivot) {

            }
            while (this.array[--j] > pivot) {

            }
            if (i < j) {
                swap(this.array, i, j)
            } else {
                break
            }
        }
        //将枢纽放置正确的位置
        swap(this.array, i, right - 1)

        //7，分而治之
        this.quick(left, i - 1);
        this.quick(i + 1, right);
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
// arr1.insertionSort();
// arr1.shellSort()
arr1.quickSort()
console.log(arr1.toString())
