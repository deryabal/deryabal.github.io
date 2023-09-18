/*
chat gem
*/

function changeIt(id) 
{
    var theImg = document.getElementById(id),
             x = theImg.src.split("/"),
             t = x.length-1,
             y = x[t];

    if(y == 'gem1.gif')
    {
        theImg.src='images/gem2.gif'
    }

    if(y == 'gem2.gif')
    {
        theImg.src='images/gem1.gif'
    }
}

/*
linklerde ki çevçeveyi kaldýr (maxthon)
*/

<!--
function RemoveDot()
{
for (a in document.links) document.links[a].onfocus = document.links[a].blur;
}
if (document.all)
{
document.onmousedown = RemoveDot;
}
//-->