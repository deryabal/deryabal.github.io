/*
progress bar
*/

<!--
function Load(s,KacPx){
	var tt = document.getElementById(s);
	var MevcutGenislik = tt.offsetWidth;
	/* mevcut geniþliði alýyoruz */
	
	tt.style.width=MevcutGenislik + KacPx ;
	/* geniþlik ayarlayan satýr */
	
	tt.innerHTML = '% ' + (MevcutGenislik + KacPx);
	/* geniþliði yazdýran satýr */
	
	/* %100 den yukarý çýkmamasý için */
	if ((MevcutGenislik + KacPx)> 100){
		document.location = "lvl23i_a311.html"
	}//end if
}//end function
//-->

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