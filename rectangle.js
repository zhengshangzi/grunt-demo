$(function() {
    var $width   = $('#width');
    var $height  = $('#height');
    var $calc    = $('#calc');
    var $perimeter=$('#perimeter');
    var $area    =$('#area');
    $calc.click(function() {
        var width  = Number($width.val());
        var height = Number($height.val());
        var p      = roundFractional(width * 2 + height * 2, 10);
        var a      = roundFractional(width * height, 10);
        $perimeter.val(p);
        $area .val(a);
    });
    function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
    }
});
  