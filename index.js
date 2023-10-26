const Node= require('./node');
const Tree = require('./tree');

var node = new Node();
var tree = new Tree();


const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
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
prettyPrint(root)
