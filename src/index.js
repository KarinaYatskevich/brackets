var solution ;

module.exports = function check(str, bracketsConfig) {
    solution = "";
    var openBr = [bracketsConfig.length];
    var closeBr = [bracketsConfig.length];

    for(let i=0; i<bracketsConfig.length; i++){
      openBr[i] = bracketsConfig[i][0];
      closeBr[i] = bracketsConfig[i][1];
    }

    for(let i=0; i<str.length; i++){
        let element = str.charAt(i);
        let lastElement = solution.charAt(solution.length-1);
        let openAnalog = openBr[closeBr.indexOf(element)];
        let closeAnalog = closeBr[openBr.indexOf(element)];

        if(openBr.indexOf(element)!=-1 ) {
            if (openAnalog == closeAnalog) {
                if (element == lastElement) {
                    solution = solution.slice(0, solution.length - 1);
                } else {
                    solution += element;
                }
            } else {
                solution += element;
            }
        }
        else{
            if(openAnalog == lastElement){
                solution = solution.slice(0,solution.length-1);
            }
            else {
                return false;
            }
        }
    }


    if(solution == ""){
        return true;
    }
    else{
        return false;
    }
}