function countVowels(str)
{
    let count = 0;

    for(let x = 0; x <= str.length - 1; x++)
    {
        if(str[x] == 'a' || str[x] == 'e' || str[x] == 'i' || str[x] == 'o' || str[x] == 'u')
        {
            count++;
        }
    }

    return count;
}

let result = countVowels("hello") 
console.log(result);