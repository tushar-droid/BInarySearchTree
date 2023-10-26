const Node= require('./node');

class Tree {
    root = null;

    buildTree = (arr) =>{
        let uniqueArr = [...new Set(arr)];
        
        const clean_array = uniqueArr.sort(function(a, b) {
            return a - b;
          });       
        
        this.root = this.placeNodes(clean_array);
        return this.root
    }
    placeNodes = (arr) =>{
        var mid_ind = Math.floor(arr.length/2);
        if(mid_ind==0){
            return new Node(arr[mid_ind])
        }
        var left = arr.slice(0,mid_ind);
        var right = arr.slice(mid_ind+1);
        var nd = new Node(arr[mid_ind], this.placeNodes(left), this.placeNodes(right));
        return nd;
    }



}

module.exports  = Tree;