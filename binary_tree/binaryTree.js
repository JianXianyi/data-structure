function BinaryTree() {
    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
    this.root = null;
    BinaryTree.prototype.insert = function (key) {
        let newNode = new Node(key);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }
}
BinaryTree.prototype = {
    constructor: BinaryTree,
    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            //向左查找
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    },
    //先序遍历
    preOrderTraversal(handler) {
        this.preOrderTraversalNode(this.root, handler)
    },
    preOrderTraversalNode(node, handler) {
        if (node != null) {
            //查找节点

            handler(node.key)

            //处理经过的左子节点
            this.preOrderTraversalNode(node.left, handler)

            //处理经过的右子节点
            this.preOrderTraversalNode(node.right, handler)
        }
    },
    //中序遍历
    inOrderTraversal(handler) {
        this.inOrderTraversalNode(this.root, handler)
    },
    inOrderTraversalNode(node, handler) {
        if (node != null) {
            //处理经过的左子节点
            this.inOrderTraversalNode(node.left, handler)
            //查找节点
            handler(node.key)
            //处理经过的右子节点
            this.inOrderTraversalNode(node.right, handler)
        }
    },
    //后序遍历
    postOrderTraversal(handler) {
        this.postOrderTraversalNode(this.root, handler)
    },
    postOrderTraversalNode(node, handler) {
        if (node != null) {
            //处理经过的左子节点
            this.postOrderTraversalNode(node.left, handler)
            //处理经过的右子节点
            this.postOrderTraversalNode(node.right, handler)
            //查找节点
            handler(node.key)
        }
    },
    min() {
        let current = this.root;
        while (current.left != null) {
            current = current.left;
        }
        return current.key;
    },
    max() {
        let current = this.root;
        while (current.right != null) {
            current = current.right;
        }
        return current.key;
    },
    search(key) {
        let node = this.root;
        while (node != null) {
            if (node.key > key) {
                node = node.left;
            } else if (node.key < key) {
                node = node.right;
            } else {
                return true
            }
        }
        return false;
    },
    remove(key) {
        let current = this.root;
        let parent = null;
        let isLeftChild = true;
        while (current.key !== key) {
            parent = current;
            if (key < current.key) {
                isLeftChild = true;
                current = current.left;
            } else {
                isLeftChild = false;
                current = current.right;
            }
            //没有找到
            if (current == null) {
                return false;
            }
        }
        //删除的节点是叶子节点
        if (current.left == null && current.right == null) {
            if (current == this.root) {
                this.root = null;
            } else {
                if (isLeftChild) {
                    parent.left = null;
                } else {
                    parent.right = null;
                }
            }
        }
        else if (current.right == null) {
            if (current == this.root) {
                this.root = current.left;
            }
            else if (isLeftChild) {
                parent.left = current.left;
            }
            else {
                parent.right = current.left;
            }
        } else if (current.left == null) {
            if (current == this.root) {
                this.root = current.right;
            }
            else if (isLeftChild) {
                parent.left = current.right;
            }
            else {
                parent.right = current.right;
            }
        } else {
            let successor = this.getSuccessor(current);
            if (current == this.root) { 
                this.root = successor;
            }else if(isLeftChild){
                parent.left=successor;
            }else{
                parent.right=successor;
            }
            successor.left = current.left;
        }
    },
    getSuccessor(delNode) {
        let successor = delNode;
        let current = delNode.right;
        let successorParent=delNode;

        while (current != null) {
            successorParent=successor;
            successor = current;
            current = current.left;
        }
        //判断寻找到的后继节点是否就是delNode的right节点
        if(successor!=delNode.right){
            successorParent.left=successor.right;
            successor.right=delNode.right;
        }
        return successor
    }
}
