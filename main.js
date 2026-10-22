function gotosentinel() {
    window.location.hash="sentinel";
}
function gotoduelist()  {
    window.location.hash="duelists";
}
function gotoinitiators()  {
    window.location.hash="initiators";
}
function gotocontrollers() {
    window.location.hash="controllers";
}
function goback () {
    window.location.hash="home";
}

function showpage() {
    document.getElementById("home-page").hidden=true;
    document.getElementById("sentinel-page").hidden=true;
    document.getElementById("duelists-page").hidden=true;
    document.getElementById("initiators-page").hidden=true;
    document.getElementById("controllers-page").hidden=true;
    document.body.className="";

    if (window.location.hash=="#sentinel") {
        document.getElementById("sentinel-page").hidden=false;
        document.title="Sentinel";
    }
    else if (window.location.hash=="#duelists") {
        document.getElementById("duelists-page").hidden=false;
        document.title="Duelists";
    }
    else if (window.location.hash=="#initiators") {
        document.getElementById("initiators-page").hidden=false;
        document.title="Initiators";
    }
    else if (window.location.hash=="#controllers") {
        document.getElementById("controllers-page").hidden=false;
        document.title="Controllers";
    }
    else {
        document.getElementById("home-page").hidden=false;
        document.body.className="mainpage";
        document.title="Valorant";
    }
    window.scrollTo(0, 0);
}

window.onhashchange=showpage;
showpage();
