const email = document.getElementById('email');
const pass = document.getElementById('pass');
const btn = document.getElementById('btnn');

btn.addEventListener('click',postInput)


async function postInput(event)
{
    event.preventDefault();
    try
    {
        const url = "http://localhost:3000/api/loginCheck/login"
        const response = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:email.value,pass:pass.value})
        })
        if(!response.ok)
        {
            throw new Error('.....');
        }
        if(response.ok)
        {
            window.location.replace("http://127.0.0.1:5500/front/pu-page/index3.html");
        }
    }
    catch(error)
    {
        console.log(error)
    }
}