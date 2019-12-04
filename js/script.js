$('form').on('submit', (event) =>{
    event.preventDefault();
    const nameInput = $('input[type = "text"]').val();
    if(nameInput === ''){
        $('#warning-message').html('ERROR! PLEASE ENTER STATE NAME!!')
        console.log($('#warning-message'));
        return
    }
    $.ajax({
        url: 'https://api.openbrewerydb.org/breweries' + '?by_state=' + nameInput 
    }).then(
        (data) => {
            for(let i = 0; i < 20; i++){
            console.log(data[i]);
            $('.brewery-list').append(`<dd> ${data[i].name} </dd>`);
            console.log($('.brewery-list'));
            $('.location-information').append(`<dd> ${data[i].street} </dd>`);
            $('.city').append(`<dd> ${data[i].city} </dd>`);
            $('.website').append(`<dd> ${data[i].website_url} </dd>`);
            }

        }
        
    );
});    