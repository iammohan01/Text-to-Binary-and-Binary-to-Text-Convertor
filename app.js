//title
const title = document.getElementById("title");
//textbox1
const textBox1 = document.getElementById("ta1");
//textbox2
const textBox2 = document.getElementById("ta2");
//button
const button = document.getElementById("switchConvert");
button.onclick = ()=>{
    T2B = !T2B ;
    if (T2B){
        textBox1.setAttribute("placeholder","T2B")
        textBox1.value =""
        title.innerText = "Text to binary"
        button.innerText ="Binary to text"
    }
    else{
        textBox1.setAttribute("placeholder","B2T")
        textBox1.value =""
        title.innerText = "Binary to text"
        button.innerText =" Text to Binary"
    }
}
let T2B = true
textBox1.oninput =()=>{
    if (T2B){
        str = stringToBinary(textBox1.value);
        console.log(str);
        textBox2.value = str;
    }
    else {
        bin = binaryToText(textBox1.value);
        textBox2.value = bin;
      
    }
}

// textBox2.oninput= ()=>{
// }