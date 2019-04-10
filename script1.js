const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);


function render(data) {
    var forum = "<div class='commentBox'><div class='leftPanelImg'><img src='https://placeholdit.imgix.net/~text?w=100&h=100'/><div/><div class='rightPanel'><span>" + data.name + "</span><div class='date'>" + data.date + "</div><p>" + data.body + "</p></div><div class='clear'></div></div>";
    $('#container').append(forum);
}

$(document).ready(function() {

    var comment = [
        {"name": "Rajveer Bola", "date": "9 Apr 2019", "body": "this is comment 1"},
        {"name": "Rajveer Bola", "date": "8 Apr 2019", "body": "this is comment 2"},
        {"name": "Rajveer Bola", "date": "7 Apr 2019", "body": "this is comment 3"},
    ]

    for (var i = 0; i < comment.length; i++) {
        render(comment[i]);
    }

    $('#addComment').click(function() {
        var addUser = {
            "name": $("#name").val(),
            "date": $("#date").val(),
            "body": $("#bodyText").val()
        };
        comment.push(addUser);
        render(addUser);
        $("#name").val('');
        $("#date").val("dd/mm/yyyy")
        $('#bodyText').val('')

    });

});



