javascript:(function() {window.bookmarkver = '1.1'; if (document.location.hostname.split('.').slice(-2).join('.') == 'reddit.com' && typeof $ !== 'undefined') {$.ajax({url: 'https://raw.githubusercontent.com/j0be/PowerDeleteSuite/master/powerdeletesuite.js?'+(new Date().getDate())}).then(function(data) {var str = '<script id="pd-script">' + data + '</script>'; if ($('#pd-script').length === 0) {$('head').append(str); } else {$('#pd-script').replaceWith(str); } }, function() {alert('Error retreiving PowerDeleteSuite from github'); }); } else {if(confirm('This script is designed to be run from your user profile on reddit. Would you like to go there now?')) {document.location = 'http://reddit.com/u/me/overview'; } } })();
