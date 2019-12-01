// $('form').on('submit', (event) =>{
    // event.preventDefault();
    // const userInput = $('input[type = "text"]').val();
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/api.brewerydb.com/v2/?key=273b1e92f0edf3093909961ea7aefc77'
    }).then(
        (data) => {
            console.log(data);
        }
    );
// });    