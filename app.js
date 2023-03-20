let visited = [];
let queue = [];

let possibleKnightsMoves = [[1,2], [2,1], [2,-1], [1,-2], [-1,-2], [-2,-1], [-2,1], [-1, 2]];

class knightNode {
    constructor(xpos, ypos){
        this.xpos = xpos;
        this.ypos = ypos;
        this.adjacents = [];
        this.route = [];
    }
}

function knightMoves(startPosition, endPosition){
    let knight = new knightNode(startPosition[0], startPosition[1]);
    knight.route.push([knight.xpos, knight.ypos]);
    visited.push([knight.xpos, knight.ypos]);
    queue.push(knight);
    let boolean = isValid(knight.xpos, knight.ypos);
    while (queue.length > 0){
        let current = queue.shift();
        for (let i = 0; i < possibleKnightsMoves.length; i++){
            let next = new knightNode(current.xpos + possibleKnightsMoves[i][0], current.ypos + possibleKnightsMoves[i][1]);
            for (let k = 0; k < current.route.length; k++){
                next.route.push(current.route[k]);
            }
            if (isValid(next.xpos, next.ypos)){
                if (!isVisited(next.xpos, next.ypos)){
                    next.route.push([next.xpos, next.ypos])
                    queue.push(next);
                    visited.push([next.xpos, next.ypos]);
                    if (endPosition[0] == next.xpos && endPosition[1] == next.ypos){
                        console.log(`It takes a minimum of ${next.route.length - 1} moves`)
                        console.log(next.route);
                        return;        
                    }
                    
                }
                
            }
        }
    }
    
}

function isValid(xpos, ypos){
    if (xpos > 0 && xpos <= 8){
        if (ypos > 0 && ypos <= 8){
            return true;
        }
    }
    return false;
}

function isVisited(xpos, ypos){
    for (let i = 0; i < visited.length; i++){
        if (visited[i][0] == xpos && visited[i][1] == ypos){
            return true;
        }
    }
    return false;
}


knightMoves([1,1], [8,8])