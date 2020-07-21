console.log("API");


async function fetchapi(){
    let response = (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
    const data =await response
    
    for(let i=0;i<data.length;i++)
    {
        if(data[i].completed)
            console.log(data[i])
    }
}
fetchapi();