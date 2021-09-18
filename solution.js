const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';


const countWords=(paragraph,word1,word2) => {
    let countWord1 = 0;
    let countWord2 = 0;
    let output = ""
    let array = paragraph.split(/[ .]+/);
    let size = array.length
    for(let i=0;i<size;i++){
        if(array[i]==word1){
            countWord1+=1
        }else if(array[i]==word2){
            countWord2+=1
        }
    }
    if(countWord1>countWord2){
        output = `The word ${word1} occurred more frequently than word ${word2}.`
    }else if(countWord1==countWord2){
        output = "Both Words occured equally"
    }else output= `The word ${word2} occurred more frequently than word ${word1}.`
    return output
}

console.log(countWords(paragraph,'love', 'you'));

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanText = (sentence)=>{
    return sentence.replace(/[*+%&;@#!^$|[\]\\]/g, '');
}

console.log(cleanText(sentence));


const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

const countWords=(sentence)=>{
    let count = 0;
    let array = sentence.split(" ")
    let size = array.length
    for(let i=0;i<size;i++){
        if(array[i].length>1){
        count+=1
        }
    }
    return count
}

console.log(countWords(sentence));

const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`

const varietyOfWords=(sentence)=>{
    let array = (sentence.replace(/[.?|[\]\\]/g, '')).split(' ')
    let uniqueChars = [...new Set(array)];
    return uniqueChars.length
}

console.log(varietyOfWords(sentence))

//Second
for(let line = "#";line.length<8;i+="#")
    console.log(line)

function getRandomNumbers(){
    let arr = [];
    while(arr.length < 7){
        let r = Math.floor(Math.random() * 9 + 1);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
return arr
}
console.log(getRandomNumbers());

const reverseArray=(array)=>{
    let reversed = array.reverse()
    return reversed
}

console.log(reverseArray(["A", "B", "C"]));

const checkUniqueness = arr => {
    let uniquenesFlag = true;
    for (const i of arr) {
      if (arr.indexOf(i) !== arr.lastIndexOf(i)) {
        uniquenesFlag = false;
      }
    }
    return uniquenesFlag;
  };
  const arrOne = [1, 4, 6, 2, 1];
  console.log(checkUniqueness(arrOne));
  
  const arrTwo = [1, 4, 6, 2, 3];
  console.log(checkUniqueness(arrTwo));