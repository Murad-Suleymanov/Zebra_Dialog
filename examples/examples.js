$(document).ready(function() {

    $('#example1_1').on('click', function() {
        new $.Zebra_Dialog('Use confirmation messages to let the user know that an action has completed successfully.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Confirmation',
            type: 'confirmation'
        });
    });

    $('#example1_2').on('click', function() {
        new $.Zebra_Dialog('Use error messages to let the user know that an action has not completed successfully and show the reason why that happened.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Error',
            type: 'error'
        });
    });

    $('#example1_3').on('click', function() {
        new $.Zebra_Dialog('Use these types of dialog boxes to convey information to the user.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Information',
            type: 'information'
        });
    });

    $('#example1_4').on('click', function() {
        new $.Zebra_Dialog('Use prompt dialogs to ask for user input.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            default_value: 'A default value can be set',
            title: 'Prompt',
            type: 'prompt',
            onClose: function(caption, prompt) {
                //  this is the correct way of checking input:
                //  "prompt" will be undefined if the user closes the dialog box by clicking on the overlay, clicking on
                //  the "x" button, or pressing the ESC key
                //  additionally, for all the cases above, "caption" will be FALSE.
                // "prompt" will contain the input's value if the user presses ENTER - case in which, because there's no
                //  button clicked, the value of "caption" will be boolean TRUE
                //  "prompt" will also contain the input's value when clicking ANY of the buttons - case in which, we need
                //  to check if the appropriate button was clicked
                if (undefined !== prompt && (caption === true || caption === 'Ok'))
                    new $.Zebra_Dialog('Input value was:<br><br>"' + prompt + '"', {type: 'confirmation'});
                else
                    new $.Zebra_Dialog('Input was cancelled', {type: 'error'});
            }
        });
    });

    $('#example1_5').on('click', function() {
        new $.Zebra_Dialog('Show confirmation dialogs like this when you want the user\'s accept for non-critical actions.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Question',
            type: 'question'
        });
    });

    $('#example1_6').on('click', function() {
        new $.Zebra_Dialog('Show warning messages like this when you are about to perform a sensitive operation and you want to make sure that the user understands the implications.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Warning',
            type: 'warning'
        });
    });

    $('#example2_1').on('click', function() {
        new $.Zebra_Dialog('Type something in the input box and then try closing this dialog box by clicking on the overlay, ' +
            'by clicking on the "x" button, by pressing the ESC key, or by clicking on the <em>Cancel</em> button.<br><br>' +
            'The input\'s value will be returned <strong>only</strong> when pressing ENTER while inside the input box, or ' +
            'when clicking the <em>Ok</em> button.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            default_value: 'A default value can be set',
            title: 'Prompt',
            type: 'prompt',
            onClose: function(caption, prompt) {

                //  "prompt" will be undefined if the user closes the dialog box by clicking on the overlay, by clicking
                //  on the "x" button, or pressing the ESC key
                //
                //  additionally, for all the cases above, "caption" will be FALSE.
                //
                // "prompt" will contain the input's value if the user presses ENTER while inside the input box - case in
                //  which, because there's no button clicked, the value of "caption" will be boolean TRUE
                //
                //  "prompt" will also contain the input's value when clicking ANY of the buttons - case in which we need
                //  to check if the appropriate button was clicked
                //
                //  note that if you have custom buttons you'll have to replace "Ok" with the caption of whatever button
                //  you are using as the confirmation button

                if (undefined !== prompt && (caption === true || caption === 'Ok'))
                    new $.Zebra_Dialog('Input value was:<br><br>"' + prompt + '"', {type: 'confirmation'});
                else
                    new $.Zebra_Dialog('Input was cancelled', {type: 'error'});
            }
        });
    });

    $('#example2_2').on('click', function() {
        new $.Zebra_Dialog('Type something in the input box and then try closing this dialog box by clicking on the overlay, ' +
            'by clicking on the "x" button, by pressing the ESC key, or by clicking on the <em>Cancel</em> button.<br><br>' +
            'The input\'s value will be returned <strong>only</strong> when pressing ENTER while inside the input box, or ' +
            'when clicking the <em>Ok</em> button.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Prompt',
            type: 'prompt',
            buttons: [
                {
                    caption: 'Ok',

                    //
                    //  SETTING THIS IS VERY IMPORTANT!
                    //
                    //  this tells the library which button's callback to trigger when the users presses ENTER while
                    //  inside the input box.
                    //
                    //  if you do not set this, you will not be able to handle user input for this case; you will have
                    //  to use the "onClose" event - see previous example
                    default_confirmation: true,

                    callback: function($dialog, prompt) {
                        new $.Zebra_Dialog('Input value was:<br><br>"' + prompt + '"', {type: 'confirmation'});
                    }
                },
                'Cancel'
            ]
        });
    });

    $('#example3').on('click', function() {
        new $.Zebra_Dialog('We can set as many buttons as we want and we handle the user\'s choice though the callback function attached to the <strong>onClose</strong> event.<br><br>See the next example to handle user\'s choice in a different way.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom buttons',
            type: 'question',
            buttons: ['Yes', 'No', 'Help'],
            onClose: function(caption) {
                new $.Zebra_Dialog((caption != '' ? '"' + caption + '"' : 'nothing') + ' was clicked', {
                    auto_close: 2000,
                    buttons: false,
                    modal: false,
                    position: ['center', 'center']
                });
            }
        });
    });

    $('#example4').on('click', function() {
        var options = {
            auto_close: 2000,
            buttons: false,
            modal: false,
            position: ['center', 'center']
        }
        new $.Zebra_Dialog('We can set as many buttons as we want and we can handle the user\'s choice though the callback functions attached to the buttons.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom buttons',
            type: 'question',
            buttons: [
                {caption: 'Yes', callback: function() { new $.Zebra_Dialog('"Yes" was clicked', options); }},
                {caption: 'No', callback: function() { new $.Zebra_Dialog('"No" was clicked', options);}},
                {caption: 'Cancel', callback: function() { new $.Zebra_Dialog('"Cancel" was clicked', options); }}
            ]
        });
    });

    $('#example5_1').on('click', function() {
        new $.Zebra_Dialog('I am positioned in the <strong>top-left</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'left + 20\', \'top + 20\']</code><br><br><em><span class="label label-info">Tip:</span> You can click anywhere on the backdrop to quickly dismiss me</em>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['left + 20', 'top + 20']
        });
    });

    $('#example5_2').on('click', function() {
        new $.Zebra_Dialog('I am positioned in the <strong>top-right</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'right - 20\', \'top + 20\']</code><br><br><em><span class="label label-info">Tip:</span> You can click anywhere on the backdrop to quickly dismiss me</em>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['right + 100', 'top + 20']
        });
    });

    $('#example5_3').on('click', function() {
        new $.Zebra_Dialog('I am positioned in the <strong>bottom-right</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'right - 20\', \'bottom - 20\']</code><br><br><em><span class="label label-info">Tip:</span> You can click anywhere on the backdrop to quickly dismiss me</em>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['right - 20', 'bottom - 20']
        });
    });

    $('#example5_4').on('click', function() {
        new $.Zebra_Dialog('I am positioned in the <strong>bottom-left</strong> corner, 20&nbsp;pixels from the edges. Here\'s how it\'s done:<br><code>position: [\'left + 20\', \'bottom - 20\']</code><br><br><em><span class="label label-info">Tip:</span> You can click anywhere on the backdrop to quickly dismiss me</em>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['left + 20', 'bottom - 20']
        });
    });

    $('#example5_5').on('click', function() {
        new $.Zebra_Dialog('I am positioned in the <strong>center</strong> of the screen. Here\'s how it\'s done:<br><code>position: [\'center\', \'middle\']</code><br><br><em><span class="label label-info">Tip:</span> You can click anywhere on the backdrop to quickly dismiss me</em>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['center', 'middle']
        });
    });

    $('#example5_6').on('click', function() {
        new $.Zebra_Dialog('I am centered horizontally and 50&nbsp;pixels from the top edge. Here\'s how it\'s done:<br><code>position: [\'center\', \'top + 50\']</code><br><br><em><span class="label label-info">Tip:</span> You can click anywhere on the backdrop to quickly dismiss me</em>', {
            auto_focus_button: $('body.materialize').length ? false : true,
            title: 'Custom positioning',
            width: 460,
            position: ['center', 'top + 50']
        });
    });

    $('#example6').on('click', function() {
        new $.Zebra_Dialog('<strong>Zebra_Dialog</strong>, a small, compact and highly configurable dialog box plugin for jQuery', {
            auto_focus_button: $('body.materialize').length ? false : true
        });
    });

    $('#example7').on('click', function() {
        new $.Zebra_Dialog('I am a notification widget. No buttons, no overlay, I am positioned in the top-right corner and I stay on screen for 2 seconds.', {
            auto_focus_button: $('body.materialize').length ? false : true,
            buttons: false,
            modal: false,
            position: ['right - 20', 'top + 20'],
            auto_close: 2500
        });
    });

    $('#example8').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.materialize').length ? false : true,
            source: {
                inline: $('#boxcontent').html()
            },
            width: 600,
            title: 'Content loaded from an element on the page'
        });
    });

    $('#example9').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.materialize').length ? false : true,
            source: {
                ajax: 'ajax.html'
            },
            width: 600,
            title: 'Content loaded via AJAX'
        });
    });

    $('#example10').on('click', function() {
        new $.Zebra_Dialog({
            auto_focus_button: $('body.materialize').length ? false : true,
            source: {
                iframe: {
                    src: 'https://en.m.wikipedia.org/wiki/Dialog_box'
                }
            },
            width: 800,
            height: 800,
            title:  'External content loaded in an iFrame'
        });
    });

    $('#example11').on('click', function() {
        new $.Zebra_Dialog('I love coffee!', {
            auto_focus_button: $('body.materialize').length ? false : true,
            custom_class: 'myclass',
            title: 'Customizing the appearance',
            width: 600
        });
    });

    setTimeout(function() {
        $.Zebra_Pin($('blockquote.bg-warning'));
    }, 500);

});
