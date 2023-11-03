let result = {
    "tag": "",
    "free": true,
    "role": false,
    "user": "sabbu",
    "email": "sabbu@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
}

submitBtn.addEventListener('click', async(e) => {
    e.preventDefault()
    resultCont.innerHTML = '<img width="" src="loading.svg" alt="">'
    let key = 'ema_live_lI4ky7ic7qfbZtXbvpy36LJ1TuBgBf35SrHNahD0';
    let email = document.getElementById('username').value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res = await fetch(url);
    let result = await res.json()
    let str = ``;
    for (key of Object.keys(result)) {
        if (result[key] !== '' && result[key] != ' ') {
            str = str + `<div>${key}:${result[key]}</div>`
        }

    }
    console.log(str)
    resultCont.innerHTML = str;
})