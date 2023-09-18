// Progressbar - Version 2.0
// Author: Brian Gosselin of http://scriptasylum.com
// Featured on Dynamic Drive (http://www.dynamicdrive.com)
// PUT THE NAMES OF ALL YOUR IMAGES THAT NEED TO BE "CACHED" IN THE "imagenames" ARRAY.
// DONT FORGET THE COMMA BETWEEN EACH ENTRY, OR THE TICK MARKS AROUND EACH NAME.
// WHEN ALL THE IMAGES ARE DONE LOADING, THE "imagesdone" VARIABLE IS SET TO "TRUE"

var imagenames=new Array( 'maps/map01.gif' , 'maps/map01i.gif' , 'maps/map02.gif' , 'maps/map02i.gif' , 'maps/map03.gif' , 'maps/map03i.gif' , 'maps/map04.gif' , 'maps/map04i.gif' , 'maps/map05.gif' , 'maps/map05i.gif' , 'maps/map06.gif' , 'maps/map06i.gif' , 'maps/map07.gif' , 'maps/map07i.gif' , 'maps/map08.gif' , 'maps/map08i.gif' , 'maps/map09.gif' , 'maps/map09i.gif' , 'maps/map10.gif' , 'maps/map10i.gif' , 'maps/map11.gif' , 'maps/map11i.gif' , 'maps/map12.gif' , 'maps/map12i.gif' , 'maps/map13.gif' , 'maps/map13i.gif' , 'maps/map14.gif' , 'maps/map14i.gif' , 'maps/map15.gif' , 'maps/map15i.gif' , 'maps/map16.gif' , 'maps/map16i.gif' , 'maps/map17.gif' , 'maps/map17i.gif' , 'maps/map18.gif' , 'maps/map18i.gif' , 'maps/map19.gif' , 'maps/map19i.gif' , 'maps/map20.gif' , 'maps/map20i.gif' , 'maps/map21.gif' , 'maps/map21i.gif' , 'maps/map22.gif' , 'maps/map22i.gif' , 'maps/map23.gif' , 'maps/map23i.gif' , 'maps/map24.gif' , 'maps/map24i.gif' , 'maps/map25.gif' , 'maps/map25i.gif' , 'maps/map26.gif' , 'maps/map26i.gif' , 'maps/map27.gif' , 'maps/map27i.gif' , 'maps/map28.gif' , 'maps/map28i.gif' , 'maps/map29.gif' , 'maps/map29i.gif' , 'maps/map30.gif' , 'maps/map30i.gif' , 'maps/map31.gif' , 'maps/map31i.gif' , 'maps/map32.gif' , 'maps/map32i.gif' , 'maps/map33.gif' , 'maps/map33i.gif' , 'maps/map34.gif' , 'maps/map34i.gif' , 'maps/map35.gif' , 'maps/map35i.gif' , 'maps/map36.gif' , 'maps/map36i.gif' , 'maps/map37.gif' , 'maps/map37i.gif' , 'maps/map38.gif' , 'maps/map38i.gif' , 'maps/map39.gif' , 'maps/map39i.gif' , 'maps/map40.gif' , 'maps/map40i.gif' , 'maps/map41.gif' , 'maps/map41i.gif' , 'maps/map42.gif' , 'maps/map42i.gif' , 'maps/map43.gif' , 'maps/map43i.gif' , 'maps/map44.gif' , 'maps/map44i.gif' , 'maps/map44ii.gif' , 'maps/map44s.gif' , 'maps/map44ss.gif' , 'monsters/andariel.gif' , 'monsters/batdemon.gif' , 'monsters/blunderbore.gif' , 'monsters/bonefetish.gif' , 'monsters/clawviper.gif' , 'monsters/cow.gif' , 'monsters/diablo.gif' , 'monsters/diablodying.gif' , 'monsters/duriel.gif' , 'monsters/fallen.gif' , 'monsters/fallenshaman.gif' , 'monsters/fetish.gif' , 'monsters/fetishshaman.gif' , 'monsters/greatermummy.gif' , 'monsters/izual.gif' , 'monsters/maggot.gif' , 'monsters/mauler.gif' , 'monsters/megademon.gif' , 'monsters/mephisto.gif' , 'monsters/mosquitodemon.gif' , 'monsters/mummy.gif' , 'monsters/regurgitator.gif' , 'monsters/sandraider.gif' , 'monsters/skeleton.gif' , 'monsters/skeletonmage.gif' , 'monsters/thornedhulk.gif' , 'monsters/undeadfighter.gif' , 'monsters/vampire.gif' , 'monsters/vilechild.gif' , 'monsters/vilemother.gif' , 'monsters/wendigo.gif' , 'monsters/zakarumhighpriest.gif' , 'monsters/zakarumzealot.gif' , 'monsters/zombie.gif' , 'images/bg3.gif' , 'images/bg4.gif' , 'images/bg5.gif' , 'images/dead.gif' , 'images/drop.png' , 'images/equip.png' , 'images/gold.gif' , 'images/health1.gif' , 'images/health2.gif' , 'images/health3.gif' , 'images/inventory.png' , 'images/item.png' , 'images/mana1.gif' , 'images/mana2.gif' , 'images/mana3.gif' , 'images/open.gif' , 'images/portal.gif' , 'images/rejuv.gif' , 'images/scroll.gif' , 'items/armor.png' , 'items/belt.png' , 'items/boots.png' , 'items/gloves.png' , 'items/helm.png' , 'items/leg.png' , 'items/ring.png' , 'items/weapon.png' );

var yposition=220;                                  //POSITION OF LOAD BAR FROM TOP OF WINDOW, IN PIXELS
var loadedcolor='#FCBB36' ;                // PROGRESS BAR COLOR
var unloadedcolor='#000000';                   // BGCOLOR OF UNLOADED AREA
var barheight=100;                                 // HEIGHT OF PROGRESS BAR IN PIXELS (MIN 25)
var barwidth=400;                                // WIDTH OF THE BAR IN PIXELS  
var bordercolor='#000000';                       // COLOR OF THE BORDER

//DO NOT EDIT BEYOND THIS POINT 
var NS4 = (navigator.appName.indexOf("Netscape")>=0 && parseFloat(navigator.appVersion) >= 4 && parseFloat(navigator.appVersion) < 5)? true : false;
var IE4 = (document.all)? true : false;
var NS6 = (parseFloat(navigator.appVersion) >= 5 && navigator.appName.indexOf("Netscape")>=0 )? true: false;
var imagesdone=false;
var blocksize=barwidth/(imagenames.length);
barheight=Math.max(barheight,25);
var loaded=0, perouter, perdone, images=new Array();
var txt=(NS4)?'<layer name="perouter" bgcolor="'+bordercolor+'" visibility="hide">' : '<div id="perouter" style="position:absolute; visibility:hidden; background-color:'+bordercolor+'">';
txt+='<table cellpadding="0" cellspacing="1" border="0"><tr><td width="'+barwidth+'" height="'+barheight+'" valign="center">';
if(NS4)txt+='<ilayer width="100%" height="100%"><layer width="100%" height="100%" bgcolor="'+unloadedcolor+'" top="0" left="0">';
txt+='<table cellpadding="0" cellspacing="0" border="0"><tr><td valign="center" width="'+barwidth+'" height="'+barheight+'" bgcolor="'+unloadedcolor+'"><center><font color="'+loadedcolor+'" size="1" face="sans-serif">Loading</font></center></td></tr></table>';
if(NS4) txt+='</layer>';
txt+=(NS4)? '<layer name="perdone" width="100%" height="'+barheight+'" bgcolor="'+loadedcolor+'" top="0" left="0">' : '<div id="perdone" style="position:absolute; top:1px; left:1px; width:'+barwidth+'px; height:'+barheight+'px; background-color:'+loadedcolor+'; z-index:100">';
txt+='<table cellpadding="0" cellspacing="0" border="0"><tr><td valign="center" width="'+barwidth+'" height="'+barheight+'" bgcolor="'+loadedcolor+'" background="images/loading.gif"><center><font color="'+unloadedcolor+'" size="1" face="sans-serif">Loading</font></center></td></tr></table>';
txt+=(NS4)? '</layer></ilayer>' : '</div>';
txt+='</td></tr></table>';
txt+=(NS4)?'</layer>' : '</div>';
document.write(txt);
function loadimages(){
if(NS4){
perouter=document.perouter;
perdone=document.perouter.document.layers[0].document.perdone;
}
if(NS6){
perouter=document.getElementById('perouter');
perdone=document.getElementById('perdone');
}
if(IE4){
perouter=document.all.perouter;
perdone=document.all.perdone;
}
cliplayer(perdone,0,0,barheight,0);
window.onresize=setouterpos;
setouterpos();
for(n=0;n<imagenames.length;n++){
images[n]=new Image();
images[n].src=imagenames[n];
setTimeout('checkload('+n+')' ,n*100);
}}
function setouterpos(){
var ww=(IE4)? document.body.clientWidth : window.innerWidth;
var x=(ww-barwidth)/2;
if(NS4){
perouter.moveTo(x,yposition);
perouter.visibility="show";
}
if(IE4||NS6){
perouter.style.left=x+'px';
perouter.style.top=yposition+'px';
perouter.style.visibility="visible";
}}
function dispbars(){
loaded++;
cliplayer(perdone, 0, blocksize*loaded, barheight, 0);
if(loaded>=imagenames.length)setTimeout('hideperouter()', 800);
}
function checkload(index){
(images[index].complete)? dispbars() : setTimeout('checkload('+index+')', 100);
}
function hideperouter(){
(NS4)? perouter.visibility="hide" : perouter.style.visibility="hidden";
imagesdone=true;
}
function cliplayer(layer, ct, cr, cb, cl){
if(NS4){
layer.clip.left=cl;
layer.clip.top=ct;
layer.clip.right=cr;
layer.clip.bottom=cb;
}
if(IE4||NS6)layer.style.clip='rect('+ct+' '+cr+' '+cb+' '+cl+')';
}
window.onload=loadimages;