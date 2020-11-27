$(document).ready(function(){
    //alert('Hellow, World')

    const $select = $("select")
    const $pre = $("pre")

    $select.change(function() {
        const $verse = $select.val() + ".txt" 
        //$pre.text($verse)
        $.ajax({
            url : $verse,
            dataType : "text",
            success : function(data){
                $($pre).html(data)
            }
        })
    })

})

/*
const verseChoose = document.querySelector('select');
const poemDisplay = document.querySelector('pre');

verseChoose.onchange = function() {
  const verse = verseChoose.value;
  updateDisplayViaFetch(verse);
};

function updateDisplay(verse) {
    let url = verse + '.txt';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';
    
    request.onload = function() {
        poemDisplay.textContent = request.response;
    };
    
    request.send();
}

function updateDisplayViaFetch(verse) {
    let url = verse + '.txt';
    fetch(url).then(function(response) {
        response.text().then(function(text) {
            poemDisplay.textContent = text;
        });
    });
    
    soma(2,5)
}
*/