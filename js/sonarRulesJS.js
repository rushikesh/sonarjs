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
    vm.openPopUp = function (event, data, index) {
        mevent = event;
        vm.selected = index;
        vm.title = data.name;
        vm.severity = data.severity;
        vm.desc = data.htmlDesc;
        $('#myModal').modal('show');
    };

});

$(document).ready(function () {
    $("#myModal").on('hidden.bs.modal', function () {
        window.scrollTo(mevent.pageX, mevent.pageY - 800);
    });
});