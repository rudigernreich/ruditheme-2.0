$(document).ready(function () {
    ajaxMailChimpForm($("#subscribe-form"), $("#subscribe-result"), $("#change-border"));
    function ajaxMailChimpForm($form, $resultElement, $changeBorder) {
        $form.submit(function (e) {
            e.preventDefault();
            if (!isValidEmail($form)) {
                var error = "invalid e-mail";
                $resultElement.html(error);
                $resultElement.css("color", "#d9360a");
                $changeBorder.css("border-color", "#d9360a");
            } else {
                $resultElement.css("color", "#000");
                $resultElement.html("Subscribing...");
                submitSubscribeForm($form, $resultElement, $changeBorder);
            }
        });
    }
    function isValidEmail($form) {
        var email = $form.find("input[type='email']").val();
        if (!email || !email.length) {
            return false;
        } else if (email.indexOf("@") == -1) {
            return false;
        }
        return true;
    }
    function submitSubscribeForm($form, $resultElement, $changeBorder) {
        $.ajax({
            type: "GET",
            url: $form.attr("action"),
            data: $form.serialize(),
            cache: false,
            dataType: "jsonp",
            jsonp: "c",
            contentType: "application/json; charset=utf-8",
            error: function (error) {
            },
            success: function (data) {
                if (data.result != "success") {
                    var message = data.msg || "something went wrong";
                    $resultElement.css("color", "#d9360a");
                    if (data.msg && data.msg.indexOf("already subscribed") >= 0) {
                        message = "already subscribed";
                        $resultElement.css("color", "#d9360a");
                        $changeBorder.css("border-color", "#d9360a");
                    }
                    $resultElement.html(message);
                } else {
                    $resultElement.css("color", "#65bc46");
                    $resultElement.html("done");
                    $changeBorder.css("border-color", "#65bc46");
                }
            }
        });
    }
});
