$(document).ready(function() {
    $('#click').on('click', function() {
        $('#hidden-text').show();
        document.getElementById('click').setAttribute("class", "style1");
        document.getElementById('tap').setAttribute("class", "button");
        document.getElementById('punch').setAttribute("class", "button");
        $('#hidden-two').hide();
        $('#hidden-three').hide();
        $('#hide').hide();
    })
});
$(document).ready(function() {
    $('#tap').on('click', function() {
        $('#hidden-two').show();
        document.getElementById('tap').setAttribute("class", "style1");
        document.getElementById('click').setAttribute("class", "button");
        document.getElementById('punch').setAttribute("class", "button");
        $('#hidden-text').hide();
        $('#hidden-three').hide();
        $('#hide').hide();
    })
});
$(document).ready(function() {
    $('#punch').on('click', function() {
        $('#hidden-three').show();
        $('#hide').show();
        document.getElementById('punch').setAttribute("class", "style1");
        document.getElementById('click').setAttribute("class", "button");
        document.getElementById('tap').setAttribute("class", "button");
        $('#hidden-text').hide();
        $('#hidden-two').hide();
    })
});