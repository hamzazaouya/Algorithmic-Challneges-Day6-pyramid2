/*global document*/

let print1 = document.getElementById('pyramid1');
let print2 = document.getElementById('pyramid2');
let print3 = document.getElementById('pyramid3');
let print4 = document.getElementById('pyramid4');
let output1 = '';
let output2 = '';
let output3 = '';
let output4 = '';
let size = 8;

for(let row = size; row > 0; row--) {
    
    for(let col = 0; col < row; col++) {
        
        output1 += (row % 2 === 0) ? '<span style="color:red">*</span>': '<span style="color:green">*</span>';
        output2 += (row % 2 !== 0) ? '<span style="color:red">*</span>': '<span style="color:green">*</span>';
        output3 += (((row + col) % 2) === 0) ? '<span style="color:red">*</span>': '<span style="color:green">*</span>';
        output4 += (((row + col )% 2) !== 0) ? '<span style="color:red">*</span>': '<span style="color:green">*</span>';
    }
    
    output1 += '<br />';
    output2 += '<br />';
    output3 += '<br />';
    output4 += '<br />';
}

print1.innerHTML = output1 + "1";
print2.innerHTML = output2 + "2";
print3.innerHTML = output3 + "3";
print4.innerHTML = output4 + "4";