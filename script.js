const openingMatch=new Date('2026-06-11T16:00:00');
const brazilMatches=[
{id:'br1',date:new Date('2026-06-13T18:00:00')},
{id:'br2',date:new Date('2026-06-18T18:00:00')},
{id:'br3',date:new Date('2026-06-23T18:00:00')}
];
function fmt(t){const d=t-new Date();if(d<=0)return'Começou!';
return `${Math.floor(d/86400000)}d ${Math.floor(d/3600000%24)}h ${Math.floor(d/60000%60)}m ${Math.floor(d/1000%60)}s`;}
function update(){
const diff=openingMatch-new Date();
days.textContent=Math.floor(diff/86400000);
hours.textContent=Math.floor(diff/3600000%24);
minutes.textContent=Math.floor(diff/60000%60);
seconds.textContent=Math.floor(diff/1000%60);
brazilMatches.forEach(m=>document.getElementById(m.id).textContent=fmt(m.date));
}
update();setInterval(update,1000);
