class Graph{
    constructor(){
        this.adjacentList = {};
    }

    addVertex(vertex){
        if(this.adjacentList[vertex]){
            return;
        }    
        this.adjacentList[vertex] = new Set();
    }

    addEdge(vertex1, vertex2){
        if(!this.adjacentList[vertex1]){
            this.addVertex(vertex1);
        }
        if(!this.adjacentList[vertex2]){
            this.addVertex(vertex2);
        }

        this.adjacentList[vertex1].add(vertex2);
        this.adjacentList[vertex2].add(vertex1);
    }

    display(){
        for(let vertex in this.adjacentList){
            console.log(vertex + " -> " + [...this.adjacentList[vertex]])
        }
    }

    removeEdge(vertex1, vertex2){
        if(!this.adjacentList[vertex1])return
        if(!this.adjacentList[vertex2])return

        !this.adjacentList[vertex1].delete(vertex2)
        !this.adjacentList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacentList[vertex])return;

        for(let v of this.adjacentList[vertex]){
            this.removeEdge(vertex, v)
        }

        delete this.adjacentList[vertex]
    }

    dfs(start, visited = new Set()){
        visited.add(start);
        console.log(start)
        for(let neighbour of this.adjacentList[start]){
            if(!visited.has(neighbour))
            this.dfs(neighbour, visited)
        }
    }

    bfs(start){
        const queue = [];
        const visted = new Set();
        visted.add(start)
        queue.push(start);

        while(queue.length){

            const vertex = queue.shift();
            console.log(vertex);

            for(let neighbor of this.adjacentList[vertex]){
                if(!visted.has(neighbor)){
                    queue.push(neighbor);
                    visted.add(neighbor)
                }
            }
        }
    }

    shortestDistance(source, target){
        const queue = [];
        const visted = new Set();
        
        queue.push([source, 0]);
        visted.add(source);

        while(queue.length){
            const [vertex, distance] = queue.shift();
            if(vertex === target){
                return distance;
            }

            for(let neighbor of this.adjacentList[vertex]){
                queue.push([neighbor, distance + 1])
            }
        }
    }
}

const g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")

g.addEdge("A", "B")
g.addEdge("C", "B")
g.addEdge("C", "E")
g.addEdge("E", "F");
g.addEdge("F", "G");
g.addEdge("A", "D")

// g.removeEdge("A", "D")
// g.removeVertex("B")
g.display()

console.log(g.shortestDistance("A", "G"))