window.addEventListener('DOMContentLoaded', function(){
    const searchBtn = document.querySelector("#searchBtn");
    console.log(searchBtn)

    let result = document.getElementById("result");
    console.log(result);

    searchBtn.addEventListener('click', function(e) {
        e.preventDefault();

        let input = document.getElementById("searchField").value;
        console.log(input);

        let url = `superheroes.php?name=${input}`
        console.log(url)

        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.text()
                } else {
                    return Promise.reject('something went wrong!')
                }
            })
            .then(data => {
                console.log(data)
                result.innerHTML= data;
                console.log(result.innerHTML);
            })
            .catch(error => console.log('There was an error: ' + error));
    });
});