/*
progress bar
*/

<!--
function Load(s,KacPx){
	var tt = document.getElementById(s);
	var MevcutGenislik = tt.offsetWidth;
	/* mevcut geni�li�i al�yoruz */
	
	tt.style.width=MevcutGenislik + KacPx ;
	/* geni�lik ayarlayan sat�r */
	
	tt.innerHTML = '% ' + (MevcutGenislik + KacPx);
	/* geni�li�i yazd�ran sat�r */
	
	/* %100 den yukar� ��kmamas� i�in */
	if ((MevcutGenislik + KacPx)> 100){
		document.location = "lvl23i_a311.html"
	}//end if
}//end function
//-->

/*
linklerde ki �ev�eveyi kald�r (maxthon)
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