$(document).ready ->
    $('.jumbotron').find('form').submit (e) ->
        e.preventDefault()
        
        roomName = $('#txtRoomName').val()
        username = $('#txtUsername').val()
        password = $('#txtPassword').val()
        
        #socket.post '/register?roomname='+roomName+'&username='+username+'&password='+password, (data) ->
        socket.post '/register', { roomname: roomName, username: username, password: password }, (data) ->
            console.log(data)
       
