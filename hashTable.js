class hashTable {
    constructor(size) {
        this.size = size;               // Total size of the hash table
        this.table = new Array(size);   // Initialize table with given size
    }

    // Hash function to convert a key (string) to an index
    hash(key) {
        let index = 0;
        for (let i = 0; i < key.length; i++) {
            index += key.charCodeAt(i); 
        }
        return index % this.size;       
    }

    // Set key-value pair in hash table
    set(key, value) {
        let index = this.hash(key);         
        let bucket = this.table[index];     

        if (!bucket) {
            // If bucket is empty, create a new one with the key-value pair
            this.table[index] = [[key, value]];
        } else {
            // Check if key already exists in the bucket
            let val = bucket.find((item) => item[0] == key);
            if (val) {
                val[1] = value;
            } else {
                bucket.push([key, value]); // If not, add the new key-value pair
            }
        }
    }

    // Search for a key and return its value
    search(key) {
        let index = this.hash(key);        
        let bucket = this.table[index];     

        if (bucket) {
            let val = bucket.find((item) => item[0] == key); 
            return val[1]; 
        }
    }

    // Delete a key from the hash table
    delete(key) {
        let index = this.hash(key);        
        let bucket = this.table[index];     

        if (!bucket) return false;          

        // Filter out the item to delete
        this.table[index] = bucket.filter((item) => item[0] !== key);
        return true;                        
    }

    // Print the contents of the hash table
    print() {
        for (let i = 0; i < this.size; i++) {
            console.log(i, this.table[i]); 
        }
    }
}

// Example usage
let tab = new hashTable(10);
tab.set("name", "dhyan");           
tab.set("anme", "dhyan");          
tab.set("name", "anu");             
tab.set("nasme", "appukuttan");     
console.log(tab.search("name"));  
console.log(tab.delete("nasme"));
tab.print();                        
