function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

$(document).ready(function() {
    $('#main').load("components/start.html");
    $('#main').addClass('openingAnimation');
});

async function pageChange(page) {
    $('#main').addClass('closingAnimation');
    $('#main').removeClass("openingAnimation");
    await sleep(1500);

    switch(page) {
        case 0: $('#main').load("components/start.html");
            break; 
        case 1: $('#main').load("components/home.html");
            break;
        case 2: $('#main').load("components/readPage/read.html");
            break;
        case 3: $('#main').load("components/musicPages/music.html");
            break;
        case 4: $('#main').load("components/videoPages/video.html");
            break;  
        case 5: $('#main').load("components/gamePage/game.html");
            break;  
        case 6: $('#main').load("components/musicPages/musicStrain.html");
            break; 
        case 7: $('#main').load("components/musicPages/musicGenre.html");
            break; 
    }
    
    $('#main').addClass("openingAnimation");
    $('#main').removeClass("closingAnimation");    
}

function editText(e) {
    var text = document.getElementById("song");
    if(e == 0) {
        text.innerHTML = '<b>Polo G - Rapstar (Now Playing)</b>';
    }
    else {
        text.innerHTML = '<b>Polo G - Rapstar</b>';
    }
}