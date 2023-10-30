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
            if(arr[mid_ind] ==undefined) return
            return new Node(arr[mid_ind])
        }
        var left = arr.slice(0,mid_ind);
        var right = arr.slice(mid_ind+1);
        var nd = new Node(arr[mid_ind], this.placeNodes(left), this.placeNodes(right));
        return nd;
    }

    insert = (value) =>{
        this.#insertRec(this.root,value);
    }

    #insertRec = (node_val, value) =>{

        if(value<node_val.data) {
            if(node_val.left == null){
                var nd = new Node(value)
                node_val.left = nd;
                return
            }
            else{
               this.#insertRec(node_val.left, value)
            }
        }
        else if(value>node_val.data){
            if(node_val.right ==null){
                var nd = new Node(value)
                node_val.right = nd;
                return
            }
            else{
                this.#insertRec(node_val.right, value)
            }
        }

    }

    delete = (value) =>{
        this.#deleteRec(this.root, value)
        
    }

    #deleteRec = (node, value) =>{
        if(node.data ===null) return null;
        if(node.data < value) node.right = this.#deleteRec(node.right, value);
        else if( node.data > value) node.left = this.#deleteRec(node.left, value)  
        else if(node.data ===value){
            if(node.left ===null) return node.right;
            else if(node.right === null) return node.left;    
            else{
                let curr_node = node;           //make a copy of current node
                node = node.right;              //go to the right node
                while(node.left != null){       //find the lowest value in the right subtree
                    node = node.left;           //keep on going left until you are on the last node (which will be the min.)
                }
                curr_node.data = node.data;     //paste the min value in the current node data 
                this.#deleteRec(curr_node.right, curr_node.data)    //delete the min node.
                return curr_node                //return the current node to be put as the appropriate child 
            }        
        }
        return node;
    }

    find = (value) =>{
        const val = this.#findRec(this.root, value);
        return val? val: 'NO SUCH VALUE FOUND';
    }


    #findRec = (node, value) =>{
        if(node === null) return null;
        if(node.data < value) var val = this.#findRec(node.right, value);
        else if (node.data > value) var val = this.#findRec(node.left, value);
        else if( node.data === value) {
            return node;
        }
        return val;
    }

    levelOrder = (somefunc = (val) => console.log(`-${val}-`) ) =>{
        var q = [];                 //push to enque shift to dequeue
        q.push(this.root);
        while(q.length > 0){
            if(q[0].left!==null) q.push(q[0].left);
            if(q[0].right!==null) q.push(q[0].right);
            somefunc(q[0].data)
            q.shift();
        }

    }

}

module.exports  = Tree;