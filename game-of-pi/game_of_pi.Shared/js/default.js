// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    var pi = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9];

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.

                var digitPosition = 0;
                var mistakes = 0;

                document.getElementById('inputDigit').focus();

                document.getElementById('inputDigit').addEventListener('blur', function (evt) {
                    document.getElementById('inputDigit').focus();
                })

                document.getElementById('inputDigit').addEventListener('keyup', function (evt) {
                    var correctDigit = pi[digitPosition];
                    var inputedDigit = document.getElementById('inputDigit').value;
                    if (correctDigit == inputedDigit) {
                        document.getElementById('piDigits').innerHTML += correctDigit;
                        digitPosition++;
                    } else {
                        mistakes++;
                    }
                    if (mistakes >= 3) {
                        // TODO: game over
                        var msgBox = new Windows.UI.Popups.MessageDialog('Game Over');
                        msgBox.showAsync();
                    }
                    document.getElementById('inputDigit').value = '';
                    
                });
            } else {
                // TODO: This application was suspended and then terminated.
                // To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();