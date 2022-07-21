import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export const LineChart = ({data}) => {
  return <Line data={data} />;
}

export const BarChart = ({data}) => {
    return <Bar data={data} />;
}

export const PieChart = ({data}) => {
    return <Pie data={data} />;
}