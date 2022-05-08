// ---------------------------------------------------------- custom filter
Array.prototype.customFilter = function (cb) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        arr.push(this[i]);
      }
    }
    return arr;
  };

// ---------------------------------------------------------- Custom map
Array.prototype.customMap=function(cb){
    const arr = {}
    for(let i=0; i<this.length; i++){
arr.push(cb(this[i],i,this));
    }
    return arr;
};


//---------------------------------------------------------- customEvery
Array.prototype.customEvery = function (cb) {
    for (let i = 0; i < this.length; i++) {
      if (!cb(this[i], i, this)) {
        return false;
      }
    }
    return true;
  };


//---------------------------------------------------------- custom foreach
Array.prototype.customForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }};


//----------------------------------------------------------  customSome
Array.prototype.customeSome = function (cb) {
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        return true;
      }
    }
    return false;
  };    