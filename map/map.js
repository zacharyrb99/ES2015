//hasDuplicate()
const hasDuplicate = (array) => new Set(array).size !== array.length;

//vowelCount()
const vowels = 'aeiou';

function vowelCount(string){
    const vowelMap = new Map();
    for(let letter of string){
        let lowerCaseLetter = letter.toLowerCase()
        if(vowels.indexOf(lowerCaseLetter) !== -1){
            if(vowelMap.has(lowerCaseLetter)){
                vowelMap.set(lowerCaseLetter, vowelMap.get(lowerCaseLetter) + 1);            
            }else{
                vowelMap.set(lowerCaseLetter, 1);
            }
        }
    };
    return vowelMap;
}