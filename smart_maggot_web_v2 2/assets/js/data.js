
const sensorData = [
  { time: "08:00", temperature: 28, humidity: 70, status: "Normal", device: "SMF-001" },
  { time: "09:00", temperature: 29, humidity: 72, status: "Normal", device: "SMF-001" },
  { time: "10:00", temperature: 30, humidity: 74, status: "Normal", device: "SMF-001" },
  { time: "11:00", temperature: 31, humidity: 78, status: "Perlu cek", device: "SMF-001" },
  { time: "12:00", temperature: 30, humidity: 75, status: "Normal", device: "SMF-001" },
  { time: "13:00", temperature: 29, humidity: 74, status: "Normal", device: "SMF-001" },
  { time: "14:00", temperature: 28, humidity: 73, status: "Normal", device: "SMF-001" }
];
const productionData = {
  labels: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
  waste: [3, 4, 3.2, 3.6, 4.4, 3.5, 3.3],
  maggot: [2, 2.6, 2.1, 2.5, 3.1, 2.7, 3.0]
};
