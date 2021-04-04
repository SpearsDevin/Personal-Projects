$(document).ready(function() {
    $('#first').on('click', function() {
        $('#hidden-one').show();
        document.getElementById('first').setAttribute("class", "style1");
        document.getElementById('second').setAttribute("class", "button");
        document.getElementById('third').setAttribute("class", "button");
        $('#hidden-two').hide();
        $('#hidden-third').hide();
    })
});
$(document).ready(function() {
    $('#second').on('click', function() {
        $('#hidden-two').show();
        document.getElementById('second').setAttribute("class", "style1");
        document.getElementById('third').setAttribute("class", "button");
        document.getElementById('first').setAttribute("class", "button");
        $('#hidden-one').hide();
        $('#hidden-third').hide();
    })
});
$(document).ready(function() {
    $('#third').on('click', function() {
        $('#hidden-third').show();
        document.getElementById('third').setAttribute("class", "style1");
        document.getElementById('second').setAttribute("class", "button");
        document.getElementById('first').setAttribute("class", "button");
        $('#hidden-two').hide();
        $('#hidden-one').hide();
    })
});