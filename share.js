(function(){
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
function lines(c,t,w){var ws=t.split(" "),l="",o=[];ws.forEach(function(a){var m=l?l+" "+a:a;if(c.measureText(m).width>w&&l){o.push(l);l=a}else l=m});o.push(l);return o}
window.card=function(t){
 var W=1080,H=1920,cv=document.createElement("canvas");cv.width=W;cv.height=H;var c=cv.getContext("2d");
 var SANS="-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif",SERIF="'Iowan Old Style','Palatino Linotype',Palatino,Georgia,serif";
 var g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,"#4D92FF");g.addColorStop(.45,"#1A6BFF");g.addColorStop(1,"#0B3BB5");c.fillStyle=g;c.fillRect(0,0,W,H);
 c.fillStyle="rgba(255,255,255,.15)";for(var a=30;a<W;a+=46)for(var b=30;b<H;b+=46){c.beginPath();c.arc(a,b,2.3,0,7);c.fill()}
 c.textAlign="center";
 /* logo */
 c.font="900 78px "+SANS;var w1=c.measureText("English").width,w2=c.measureText("House").width,pw=w2+56,tot=w1+22+pw,x0=W/2-tot/2;
 c.fillStyle="#fff";c.textAlign="left";c.fillText("English",x0,352);
 c.save();c.translate(x0+w1+22+pw/2,330);c.rotate(-.05);c.fillStyle="#FF2A2A";rr(c,-pw/2,-52,pw,92,26);c.fill();c.fillStyle="#fff";c.textAlign="center";c.fillText("House",0,26);c.restore();
 /* note */
 c.save();c.translate(W/2,790);c.rotate(-.022);
 c.fillStyle="rgba(4,20,70,.38)";rr(c,-436,-296,900,700,18);c.fill();
 c.fillStyle="#FFFDF8";rr(c,-450,-310,900,700,18);c.fill();
 c.save();c.translate(0,-310);c.rotate(-.07);c.fillStyle="#FF2A2A";c.fillRect(-110,-30,220,62);c.restore();
 c.textAlign="center";c.fillStyle="#FF2A2A";c.font="900 200px "+SERIF;c.fillText("“",0,-130);
 c.fillStyle="#0F1F3D";var fs=74,L;
 for(;;){c.font="600 "+fs+"px "+SERIF;L=lines(c,t,740);if(L.length*fs*1.34<=470||fs<38)break;fs-=3}
 var th=L.length*fs*1.34,y0=40-th/2+fs*.8;L.forEach(function(r,k){c.fillText(r,0,y0+k*fs*1.34)});
 c.fillStyle="#E3E9F5";c.fillRect(-50,335,100,5);
 c.restore();
 /* offer */
 c.save();c.translate(W/2,1350);c.rotate(.02);c.font="900 66px "+SANS;
 var p1="3 ta dars — ",p2="BEPUL",a1=c.measureText(p1).width,a2=c.measureText(p2).width,ow=a1+a2+80;
 c.fillStyle="rgba(4,20,70,.3)";rr(c,-ow/2+4,-52,ow,124,36);c.fill();
 c.fillStyle="#fff";rr(c,-ow/2,-60,ow,124,36);c.fill();
 c.textAlign="left";c.fillStyle="#1A6BFF";c.fillText(p1,-ow/2+40,24);c.fillStyle="#FF2A2A";c.fillText(p2,-ow/2+40+a1,24);c.restore();
 /* phone */
 c.textAlign="center";c.fillStyle="#fff";c.font="900 112px "+SANS;c.fillText("93 069 66 99",W/2,1545);
 c.font="700 38px "+SANS;c.fillStyle="rgba(255,255,255,.92)";c.fillText("Qo‘rg‘ontepa. Milliy bank yonida,",W/2,1607);
 c.font="700 38px "+SANS;c.fillText("3 qavatli binoning 2-qavati",W/2,1659);
 return cv};
function fallback(bl){var u=URL.createObjectURL(bl),a=document.createElement("a");a.href=u;a.download="english-house-storiy.png";document.body.appendChild(a);a.click();a.remove();
 setTimeout(function(){location.href="instagram://story-camera"},700)}
window.share=function(){
 var t=document.getElementById("q").textContent;
 card(t).toBlob(function(bl){var f=null;try{f=new File([bl],"english-house-storiy.png",{type:"image/png"})}catch(e){}
  if(f&&navigator.canShare&&navigator.canShare({files:[f]})){navigator.share({files:[f]}).catch(function(){})}
  else fallback(bl)},"image/png")};
document.getElementById("share").onclick=share;
document.getElementById("share").textContent="Instagram storiyga";
})();
