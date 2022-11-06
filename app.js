window.addEventListener('DOMContentLoaded', function(){
    const searchBtn = document.querySelector("#searchBtn");
    console.log(searchBtn)

    const okBtn= document.querySelector("#confirmBtn");

    const customAlert=  document.getElementById("customAlert")
    console.log(customAlert);

    var message = document.getElementsByClassName('message')[0];
    console.log(message);

    function hidealert(){
        customAlert.style.display = 'none';
    }


    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();

        customAlert.style.display = 'block';
        fetch("superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                console.log(data)
                message.innerText= data;
                console.log(message.innerText.);
            })
            .catch(error => console.log('There was an error: ' + error));
    });

    okBtn.addEventListener('click', function(e){
        e.preventDefault();

        customAlert.style.display = 'none';
    })
});