const Node= require('./node');
const Tree = require('./tree');

var node = new Node();
var tree = new Tree();


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null ) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) { 
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  };


var ARRAY = [1,7,4,23,8,9,4,3,5,7,9,67,6345,324];
// var ARRAY = [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]


var root = tree.buildTree(ARRAY);
prettyPrint(root);
tree.insert(69);
tree.insert(32);
tree.insert(432);
tree.insert(653);
tree.insert(478932);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
prettyPrint(root);

// tree.delete(3);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
prettyPrint(root);

// var t = tree.find(3)
// console.log('The node found was: ', t); 

// function some(val) {
//   console.log(` -> ${val} `);
// }

// tree.levelOrder(some);
// inord = tree.inOrder();
// preord = tree.preOrder();
// postord = tree.postOrder();
// console.log('Inorder Traversal value: ', inord);
// console.log('Preorder Traversal value: ', preord);
// console.log('PostOrder Traversal value: ', postord);
console.log(tree.height(478932));
// console.log(tree.depth(1));
console.log(tree.isBalanced());

