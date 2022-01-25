function Set() {
    this.items = {};
}
Set.prototype = {
    add(val) {
        if (this.has(val)) return false;
        this.items[val] = val;
        return true;
    },
    has(val) {
        if (this.items.hasOwnProperty(val)) return true;
        return false;
    },
    union(otherSet) {
        var unionSet = new Set();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        values = otherSet.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        return unionSet;
    },
    intersection(otherSet) {
        var newSet = new Set();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            var item = values[i];
            if (otherSet.has(item)) {
                newSet.add(item);
            }
        }
        // for(var i=0;i<this.values().length;i++){
        //     for(var j =0;j<otherSet.values().length;j++){
        //         if(this.values()[i]==otherSet.values()[j]){
        //             newSet.add(this.values()[i])
        //         }
        //     }
        // }
        return newSet;
    },
    subsection(otherSet) {
        var newSet = new Set();
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            var item = values[i];
            if (!otherSet.has(item)) newSet.add(item);
        }
        return newSet;
    },
    subset(otherSet){
        var values=this.values();
        for(var i=0;i<values.length;i++){
            if(!otherSet.has(values[i])) return false;
        }
        return true;
    },
    remove(val) {
        if (!this.has(val)) return false;
        delete this.items[val];
        return true;
    },
    clear() {
        this.items = {};
    },
    size() {
        return Object.keys(this.items).length;
    },
    values() {
        return Object.keys(this.items);
    }
}
Set.prototype.constructor = Set;