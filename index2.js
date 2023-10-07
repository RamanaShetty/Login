const first = document.getElementById('first')
const last = document.getElementById('last')
const email = document.getElementById('email')
const pass = document.getElementById('pass')
const re_pass = document.getElementById('re-pass')
const submit = document.getElementById('btnn')

submit.addEventListener('click',saveData)

async function saveData(event)
{
    event.preventDefault();
    try
    {
        if(pass.value!==re_pass.value)
        {
            alert("Passwords doesn't match...");
            location.reload();
        }
        let data = {
            first: first.value,
            last: last.value,
            email: email.value,
            pass: pass.value
        }
        const url = "http://localhost:3000/api/regiInsert/regi";
        const response = await fetch(url,{
            method: "POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                first: first.value,
                last: last.value,
                email: email.value,
                pass: pass.value})
        });
        if(!response.ok)
        {
            throw new Error("Some error occured...");
        }
        else
        {
            alert("Successful updation...click ok for redirect to login page");
            window.location.replace("https://pagee-login.netlify.app/");
        }
    }
    catch(error)
    {
        console.log(error)
    }
}