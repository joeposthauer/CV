

$(document).ready(function() {
    $('#bt1').click(function() {
        var email = 'posthauerjoe@gmail.com';
        var subject = 'Accessible Programming Languages';
        $('#fr1').attr('action',
                       'mailto:' + email + '?subject=' + subject + '&body=');
        $('#fr1').submit();
    });
});
