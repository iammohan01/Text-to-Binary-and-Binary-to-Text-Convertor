function binaryToText(bin){
    if (bin[bin.length] != " "){
        bin = bin + " "
    }
    let binaryString = "";
    let binaryTOString = "";
    for (let x = 0;x<bin.length;x++){
        if (bin[x] !=" "){
            binaryString+=bin[x]
        }
        else {
            binaryTOString += binaryToNumber(binaryString);
            binaryString=""
        }
        
    }
    return binaryTOString ;
}
function binaryToNumber(binary){ 
    let count = 0;
    let sum =0;
    for (let i= binary.length-1;i>=0;i--){
        sum += Math.pow(2,count++)*Number(binary[i]);
    }
    return(String.fromCodePoint(sum))
}
