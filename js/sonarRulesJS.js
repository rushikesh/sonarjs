var app = angular.module("sonarJavaApp", []);
app.config(function ($sceProvider) {
    // Completely disable SCE.
    $sceProvider.enabled(false);
});
app.controller("myCtrl", function ($scope) {
    var vm = this;
    vm.java = "";
    vm.severityArr = ["All", "Info", "Minor", "Major", "Critical", "Blocker", ]
    vm.js = js;
    $scope.$watch('ctrl.severityDD',function () {
        vm.js = js.filter(function (obj) {
            if (vm.severityDD == "All") {
                return true;
            } else {
                return obj.rule.severity.toLowerCase() == vm.severityDD.toLowerCase();
            }
        });
    });
    vm.openPopUp = function (event, data) {
        highlight(event.target);
        mevent = event;
        vm.title = data.name;
        vm.severity = data.severity;
        vm.desc = data.htmlDesc;
        $('#myModal').modal('show');
    };
    //HATE THIS,need to find a better way to do in angular
    function highlight(o){
        $('li a').removeClass('highLightColor');
        $(o).addClass('highLightColor');
    }
});

$(document).ready(function () {
    $("#myModal").on('hidden.bs.modal', function () {
        window.scrollTo(mevent.pageX, mevent.pageY - 800);
    });
});