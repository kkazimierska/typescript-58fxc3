// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

export interface PointData {
  time: string;
  value: number;
  device: string;
  interface: string;
  traffic_direction: string;
}

export interface LineData {
  data: PointData[];
}

const sample: PointData[] = [
  {
    device: 'HOW01-DE-ONS-R1',
    interface: 'Gi0/0/0/18',
    value: 125,
    time: '2023-05-22T02:00:00+02:00',
    traffic_direction: 'in',
  },
  {
    device: 'HOW01-DE-ONS-R1',
    interface: 'Gi0/0/0/18',
    value: 110,
    time: '2023-05-22T02:30:00+02:00',
    traffic_direction: 'in',
  },
  {
    device: 'HOW01-DE-ONS-R1',
    interface: 'Gi0/0/0/18',
    value: 85,
    time: '2023-05-22T02:00:00+02:00',
    traffic_direction: 'out',
  },
  {
    device: 'HOW01-DE-ONS-R1',
    interface: 'Gi0/0/0/18',
    value: 70,
    time: '2023-05-22T02:30:00+02:00',
    traffic_direction: 'out',
  },
  {
    device: 'HOW01-DE-ONS-R2',
    interface: 'Gi0/0/0/18',
    value: 0,
    time: '2023-05-22T02:00:00+02:00',
    traffic_direction: 'in',
  },
  {
    device: 'HOW01-DE-ONS-R2',
    interface: 'Gi0/0/0/18',
    value: 0,
    time: '2023-05-22T02:30:00+02:00',
    traffic_direction: 'in',
  },
  {
    device: 'HOW01-DE-ONS-R2',
    interface: 'Gi0/0/0/18',
    value: 0,
    time: '2023-05-22T02:00:00+02:00',
    traffic_direction: 'out',
  },
];

export interface LineData {
  data: PointData[];
  id: string;
}
const lineData: LineData = {
  data: sample,
  id: 'wanMonitor',
};

console.log(lineData['data'][0].device);

const data = [];
lineData['data'].forEach((pointData: PointData): void => {
  data.push(pointData.value);
});
console.log(data[0]);

// Data list should create a datasets by key device-inteface-traffic direction

// get unique keys
sample.forEach((pointData: PointData): void => {});

const result = sample.reduce(function (r, a) {
  const key = a.device + a.interface + a.traffic_direction;
  r[key] = r[key] || [];
  r[key].push(a);
  return r;
}, Object.create(null));

console.log(result);
