function stringToBinary(str){ // Hello 
    let binary = ""; 
    for (let i = 0 ; i<str.length;i++){
        binary += charUniCodeToBinary(str[i].charCodeAt(0))+" "
    }
    // for (i of str){ //h
    //     binary += charUniCodeToBinary(i.charCodeAt(0)) + " "
    // }
    return binary ;
}
function charUniCodeToBinary(char){ // 65
    let binary = "";
    while (char >= 1){ 
        binary = (char%2) + binary ; 
        if (Number.isInteger(char/2)){
            char =char/2
        }
        else{
            char = (char-1)/2 
        }
    }
    return binary ;
}
