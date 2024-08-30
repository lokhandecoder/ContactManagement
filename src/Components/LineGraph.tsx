import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchGraphData } from '../Services/Service';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GraphData {
  cases: Record<string, number>;
  recovered: Record<string, number>;
  deaths: Record<string, number>;
}

const LineGraph: React.FC = () => {
  const [data, setData] = useState<GraphData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchGraphData();
        setData(result);
      } catch (error) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  if (!data) return <div>No data available</div>;

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.cases),
        borderColor: 'orange',
        fill: false,
      },
      {
        label: 'Recovered',
        data: Object.values(data.recovered),
        borderColor: 'green',
        fill: false,
      },
      {
        label: 'Deaths',
        data: Object.values(data.deaths),
        borderColor: 'red',
        fill: false,
      },
    ],
  };

  return <div className="w-full h-80 lg:h-[600px]"><Line data={chartData} /></div>;
};

export default LineGraph;
