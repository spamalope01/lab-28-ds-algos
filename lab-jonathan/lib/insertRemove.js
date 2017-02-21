let Node = require('./node.js')


let Tree = module.exports = function(){
  this.root = null;
}


Tree.prototype.insert = function(val) {
  let curr = new Node(val);

  if(!this.root) {
    this.root = curr;
    return curr.val;
  }

  return _insert(this.root, val);

  function _insert(node, val){
    if(val < node.val){
      if (!node.left) {
        node.left = curr;
        return node.left.val;
    }
    return _insert(node.left, val);
  }

  if(node.val <= val){
    if(!node.right) {
      node.right = curr;
      return node.right.val;
    }
    return _insert(node.right, val);
    }
  }
};




// Tree.prototype.delete = function(node, curr) {
//   if(!node) return;
//   if(curr.val < node.val) {
//     delete(node.left, curr);
//   }
//   else if(curr.val > node.val) {
//     delete(node.right, curr);
//   }
//   let leftTemp = node.left;
//   node = node.right;
//   insert(node, leftTemp);
// }
