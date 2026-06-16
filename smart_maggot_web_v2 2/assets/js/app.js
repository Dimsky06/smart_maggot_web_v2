
document.addEventListener("DOMContentLoaded", () => {
  const update = document.getElementById("lastUpdate");
  if (update) update.textContent = new Date().toLocaleTimeString("id-ID", {hour:"2-digit", minute:"2-digit"});

  if (document.getElementById("mainChart")) {
    drawLineChart("mainChart", sensorData.map(d => d.time), [
      {data: sensorData.map(d => d.temperature), color:"#2f6d41"},
      {data: sensorData.map(d => d.humidity / 2.5), color:"#d38d44"}
    ]);
  }
  if (document.getElementById("productionChart")) {
    drawLineChart("productionChart", productionData.labels, [
      {data: productionData.maggot, color:"#4a8c59"}
    ]);
  }
  if (document.getElementById("tempChart")) {
    drawLineChart("tempChart", sensorData.map(d => d.time), [
      {data: sensorData.map(d => d.temperature), color:"#2f6d41"}
    ]);
  }
  if (document.getElementById("humidityChart")) {
    drawLineChart("humidityChart", sensorData.map(d => d.time), [
      {data: sensorData.map(d => d.humidity), color:"#d38d44"}
    ]);
  }
  if (document.getElementById("reportChart")) {
    drawBarChart("reportChart", productionData.labels, [
      {data: productionData.waste, color:"#d38d44"},
      {data: productionData.maggot, color:"#4a8c59"}
    ]);
  }

  renderSensorTable();

  document.querySelectorAll("input[name='quiz']").forEach(item => {
    item.addEventListener("change", e => {
      const target = document.getElementById("quizResult");
      if (!target) return;
      if (e.target.value === "correct") {
        target.textContent = "Jawaban benar";
        target.style.color = "#295f3a";
      } else {
        target.textContent = "Coba lagi";
        target.style.color = "#b17329";
      }
    });
  });
});

function renderSensorTable(){
  const table = document.getElementById("sensorTable");
  if (!table || typeof sensorData === "undefined") return;
  table.innerHTML = sensorData.map(row => `
    <tr>
      <td>${row.time}</td>
      <td>${row.temperature}°C</td>
      <td>${row.humidity}%</td>
      <td><span class="${row.status === "Normal" ? "status-ok" : "status-warn"}">${row.status}</span></td>
      <td>${row.device}</td>
    </tr>
  `).join("");
}

function simulateNewData(){
  const next = sensorData.length + 8;
  sensorData.push({
    time: String(next).padStart(2,"0") + ":00",
    temperature: 28 + Math.floor(Math.random()*5),
    humidity: 70 + Math.floor(Math.random()*10),
    status: Math.random() > .7 ? "Perlu cek" : "Normal",
    device: "SMF-001"
  });
  renderSensorTable();
  drawLineChart("tempChart", sensorData.map(d => d.time), [
    {data: sensorData.map(d => d.temperature), color:"#2f6d41"}
  ]);
  drawLineChart("humidityChart", sensorData.map(d => d.time), [
    {data: sensorData.map(d => d.humidity), color:"#d38d44"}
  ]);
}

function downloadCSV(){
  const rows = [
    ["Hari", "Sampah Masuk (kg)", "Produksi Maggot (kg)"],
    ...productionData.labels.map((label, i) => [label, productionData.waste[i], productionData.maggot[i]])
  ];
  const csv = rows.map(r => r.join(",")).join("\n");
  const blob = new Blob([csv], {type:"text/csv"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "laporan-smart-maggot.csv";
  a.click();
  URL.revokeObjectURL(url);
}
