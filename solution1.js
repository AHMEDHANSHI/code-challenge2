// this is a function that is used to switch cases in a string
function changecases(str) {
    let switchedcase = '';
  
    for (let i = 0; i < str.length; i++) {
        let changechar = str.charAt(i);
        if (changechar === changechar.toUpperCase()) {
                switchedcase += changechar.toLowerCase();
        }else (switchedcase += changechar.toUpperCase()); {
}
    }
    return switchedcase;
}
// test whether function is working properly
let str = 'The Quick Brown Fox'
console.log(changecases(str));
// output="The Quick Brown Fox"
