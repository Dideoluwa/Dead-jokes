let btn1 = document.querySelector('#gen')
let btn2 = document.querySelector('#clr')
let div = document.querySelector('div')


btn1.addEventListener('click',async function(){
    try{
        let para = document.createElement('p')
    para.innerText =await getDeadJokes();
    para.classList.add('list')
    // div.innerHTML = ''
    div.appendChild(para)
    }
    catch(e){
        alert('No internet connection :( You will get your jokes when internet connection is back')
    }
})
let getDeadJokes = async()=>{
    let config = {headers: {Accept:'application/json'}}
    let jokes = await axios.get('https://icanhazdadjoke.com/',config)
      return jokes.data.joke
    // let para = document.createElement('p')
    // para.classList.add('list')
    // para.append(jokes.data.joke)
    // div.append(para)

}