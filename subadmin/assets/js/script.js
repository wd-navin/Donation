$(document).ready(function()
{
    $("#sidebarcollapse").on('click',function()
    {
        $("#sidenav").toggleClass('active')

    });

    $(".navbar-toggler").on('click',function(){
        $("#mysidenav").toggleClass('active')
    })

});