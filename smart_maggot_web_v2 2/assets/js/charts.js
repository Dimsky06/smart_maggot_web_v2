
function prepCanvas(canvas){
  const ctx = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * ratio;
  canvas.height = canvas.height * ratio;
  ctx.scale(ratio, ratio);
  return {ctx,width:rect.width,height:canvas.height/ratio};
}
function drawLineChart(canvasId, labels, series) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const {ctx,width,height} = prepCanvas(canvas);
  const pad = 30;
  const values = series.flatMap(s => s.data);
  const min = Math.min(...values) - 2;
  const max = Math.max(...values) + 2;
  const range = Math.max(max - min, 1);

  ctx.clearRect(0,0,width,height);
  ctx.strokeStyle = "#e5ece2";
  for (let i=0;i<5;i++){
    const y = pad + ((height-pad*2)/4)*i;
    ctx.beginPath(); ctx.moveTo(pad,y); ctx.lineTo(width-pad,y); ctx.stroke();
  }

  labels.forEach((label,i)=>{
    const x = pad + (i / Math.max(labels.length-1,1)) * (width-pad*2);
    ctx.fillStyle = "#7a877f";
    ctx.font = "12px Inter, sans-serif";
    ctx.fillText(label, x-10, height-8);
  });

  series.forEach(item=>{
    ctx.strokeStyle = item.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    item.data.forEach((v,i)=>{
      const x = pad + (i / Math.max(item.data.length-1,1)) * (width-pad*2);
      const y = height-pad-((v-min)/range)*(height-pad*2);
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.stroke();

    item.data.forEach((v,i)=>{
      const x = pad + (i / Math.max(item.data.length-1,1)) * (width-pad*2);
      const y = height-pad-((v-min)/range)*(height-pad*2);
      ctx.fillStyle = item.color;
      ctx.beginPath();
      ctx.arc(x,y,3.5,0,Math.PI*2);
      ctx.fill();
    });
  });
}
function drawBarChart(canvasId, labels, series){
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const {ctx,width,height} = prepCanvas(canvas);
  const pad = 30;
  const max = Math.max(...series.flatMap(s => s.data)) + 1;
  const groupW = (width - pad*2) / labels.length;
  const barW = groupW / (series.length + .8);

  ctx.clearRect(0,0,width,height);
  ctx.strokeStyle = "#e5ece2";
  for (let i=0;i<5;i++){
    const y = pad + ((height-pad*2)/4)*i;
    ctx.beginPath(); ctx.moveTo(pad,y); ctx.lineTo(width-pad,y); ctx.stroke();
  }

  series.forEach((item,sIdx)=>{
    ctx.fillStyle = item.color;
    item.data.forEach((v,i)=>{
      const h = ((height-pad*2)*v)/max;
      const x = pad + i*groupW + sIdx*barW + 8;
      const y = height-pad-h;
      ctx.fillRect(x,y,barW*.7,h);
    });
  });

  labels.forEach((label,i)=>{
    const x = pad + i*groupW + groupW/2 - 8;
    ctx.fillStyle = "#7a877f";
    ctx.font = "12px Inter, sans-serif";
    ctx.fillText(label, x, height-8);
  });
}
