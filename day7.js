// Given a string, return true if the letters can be 
// re-arranged to make a palindrome using every letter. 
// Otherwise, return false.
function isPalindromeAnagram(word) {
  /* your code here */
  let word = word.toLowerCase();
  let charArray=new Array(26).fill(0)
  let aCode="a".charCodeAt(0);
  let oddCount=0;
  for(let i=0;i<word.length;i++){
    charArray[word[i]-aCode]++;
  }
  for(let i=0;i<charArray;i++){
    if(charArray[i]%2!==0){
        oddCount++
    }
    if(oddCount>1){
        return false;
    }
  }
  return true;
}