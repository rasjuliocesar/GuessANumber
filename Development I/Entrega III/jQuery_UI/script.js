$(document).ready(function() {
    $( "#dialog" ).dialog()

    $("#btnDialog").click(function() {
        $( "#dialog" ).dialog("close")
    })
    
    $( "#accordion" ).accordion()
    
    /*function atualizar() {
        let $red = $( "#red").slider("value")
        let $green = $( "$green").slider("value")
        let $blue = $( "#blue").slider("value")
        let $rgb = `rgb(${$red}, ${$green}, ${$blue})`
        $("#sec-slider").css('background-color', $rgb)
    }

    $( "$red, $green, $blue" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 255,
        value: 127,
        slide: atualizar,
        change: atualizar
    })
    
    $( "#red").slider("value", 255)
    $( "$green").slider("value", 140)
    $( "#blue").slider("value", 60)*/
})