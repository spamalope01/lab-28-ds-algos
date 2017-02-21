let expect = require('chai').expect;
let BST = require('../lib/insertRemove.js');

describe('Binary Search Tree', function(){
  let bst;

  beforeEach(() => {
    bst = new BST();
  })

describe('#insert()', function(){
    it('should add a new node to a binary search tree at the root', function(done){
      expect(bst.root).to.equal(null);
      expect(bst.insert(15)).to.equal(15);
      expect(bst.root.val).to.equal(15);
      done();
    });

    it('should add 20 to the right of 15, the root', function(done){
      bst.insert(15);
      expect(bst.insert(20)).to.equal(20);
      expect(bst.root.right.val).to.equal(20);
      done();
    });

    it('should add 4 to the left of 15, the root', function(done){
      bst.insert(15);
      expect(bst.insert(4)).to.equal(4);
      expect(bst.root.left.val).to.equal(4);
      done();
    });
});

//remove
describe('#remove()', function(){
  it('should remove 20 to the right of 15, the root', function(done){
    bst.insert(15);
    bst.insert(17);
    bst.insert(20);
    bst.delete(17);
    expect(bst.root.right.right.val).to.equal(20);
    done();
  })
})



//end of file
});
