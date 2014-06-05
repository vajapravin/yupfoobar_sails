$(document).ready ->
    $('.jumbotron').find('form').submit (e) ->
        e.preventDefault()
        
        roomName = $('#frmRoomName').val()
        username = $('#frmUsername').val()
        password = $('#frmPassword').val()
        
        socket.post '/register?roomname='+roomName+'&username='+username+'&password='+password, (err, data) ->
            alert(data)
       
