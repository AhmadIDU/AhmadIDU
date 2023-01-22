$(document).ready(function(){
    let token = "5927919425:AAEXV9LjV1_qelM34Suev0uPcfWShBdwekI" 
    let userId = 1279418150

    surName = $('#surName');
    nameInput = $('#name');
    phone = $('#phone');
    email = $('#email');
    message= $('#message');
  
    $('form').submit(function(e){
        e.preventDefault(); 
        $.ajax({
            url:'https://api.telegram.org/bot'+token+'/sendMessage',
            method:'POST',
            data: { chat_id : userId, text: "\n Name: " + nameInput.val() + "\n SurNmae: "+ surName.val()+
             "\n Phone: " + phone.val() + "\n Email: " + email.val()+  "\n Message: " + message.val()},

            success:function(success){
            
                $('[type="submit"]').slideDown();
                $('form').trigger("reset");
               
                console.log('your message has been sent!');
                
            },
        });
    });   
});