import React, { Component } from "react";
import Chart from "react-apexcharts";

class SummaryChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "donut",
        },
        colors: ["#27ABF1", "#353A46", "#407BFF"], // Specify the custom colors
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  formatter: () => {
                    return 180;
                  },
                  label: "Attendance", // Attendance label
                  fontSize: "16px", // Font size for Attendance label
                  fontWeight: 500,
                  color: "#6c757d",
                },
              },
              expandOnClick: false, // Disable slice expansion on click
            },
            customScale: 1, // Optional: Scale the chart
            borderRadius: 10, // Add rounded corners to slices
          },
        },
        stroke: {
          show: true,
          width: 0, // Remove the white border
        },
        dataLabels: {
          enabled: false,
        },
        labels: ["Present", "Absent", "On leave"],
        legend: {
          position: "bottom",
          horizontalAlign: "center",
        },
      },
      series: [75, 40, 51],
    };
  }

  render() {
    return (
      <div
        className="donut"
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="300"
        />
      </div>
    );
  }
}

export default SummaryChart;
