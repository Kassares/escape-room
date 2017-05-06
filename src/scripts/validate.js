$("#contact-form input, #contact-form textarea").focus( function(){
    $("#send-mail").text("Отправить");
});

$("#send-mail").click(function () {

        var name = $('input#name').val();
        var error = false;
        if (name == "" || name == " ") {
            $('input#name').addClass('shake').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                 function(e){
                    $(this).removeClass('shake');
                 });
            
            error = true;
        }
        
        var phoneCompare = /^[0-9()\-+ ]+$/;
        var phone = $('input#phone').val().toLowerCase();
        if (phone == "" || phone == " " || !phoneCompare.test(phone)) {
            $('input#phone').addClass('shake').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                 function(e){
                    $(this).removeClass('shake');
                 });

            error = true;
        }
        
        var emailCompare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
        var email = $('input#email').val().toLowerCase();
        if (email == "" || email == " ") {
            
        }
        else if (!emailCompare.test(email)) {
            $('input#email').addClass('shake').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                 function(e){
                    $(this).removeClass('shake');
                 });

            error = true;
        }


        var comment = $('textarea#comment').val();
        if (comment == "" || comment == " ") {
            $('textarea#comment').addClass('shake').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
                 function(e){
                    $(this).removeClass('shake');
                 });

            error = true;
        }

        if (error == false) {
            var dataString = $('#contact-form').serialize();
            $.ajax({
                type: "POST",
                url: $('#contact-form').attr('action'),
                data: dataString,
                timeout: 6000,
                error: function (request, error) {
                    $("#send-mail").text(" ⛔ Ошибка!");
                },
                success: function (response) {
                    response = $.parseJSON(response);
                    if (response.success) {
                        $("#send-mail").text(" ✔ Отправлено");
                        $("#name").val('');
                        $("#phone").val('');
                        $("#email").val('');
                        $("#comment").val('');
                    } else {
                        $("#send-mail").text(" ✘ Не отправлено");
                    }
                }
            });
            return false;
        }
        return false;
    });