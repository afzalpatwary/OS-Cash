
/**
 * @chart-init js for (Template/OS CASH)
 *
 * @project     - OS CASH
 * @author      - 
 * @created_by  - Md Afzal Hossain Patwary
 * @created_at  - afzalhp22@gmail.com
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */



$(document).ready(function () {

  // $("#chartMonthly")
  $(function () {

    if ($("#chartMonthly").length) {
      let colors = [
        '#C5D31E',
        '#248F37',
      ]
      let options = {
        series: [
          {
            name: '( A ) Estimated Average Monthly Net License Income',
            group: 'budget',
            data: [40000, 35000, 60000, 25000, 75000, 38000, 55000, 70000]
          },
          {
            name: '( B )  Estimated Total Net License Income',
            group: 'actual',
            data: [40000, 35000, 60000, 25000, 75000, 38000, 55000, 70000]
          },
        ],
        chart: {
          type: "bar",
          height: 450,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        colors: colors,
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'left'
        },
        dataLabels: {
          formatter: (val) => {
            return val / 1000 + "k"
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            distributed: true,
            columnWidth: '65%',
            endingShape: "rounded",
            borderRadius: $(window).outerWidth() < 1600 ? 2 : 8,
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          borderColor: "#F0F6F9",
          strokeDashArray: 0,
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [["1ST MONTH"], ["2ND MONTH"], ["3RD MONTH"], ["4TH MONTH"],],
          labels: {
            style: {
              colors: "#0D1117",
              fontSize: "12px",
              fontFamily: "Droid Sans",
              fontWeight: 400,
            },
            formatter: (value) => { return value },
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value / 1000 + 'K'
            },
            style: {
              colors: ["#656D76"],
              fontSize: "14px",
              fontFamily: "Droid Sans",
              fontWeight: 400,
            },
            align: 'left',
          },
          axisBorder: {
            show: false,
          },
        },
        fill: {
          type: ["solid"],
          opacity: 1,
        },
        states: {
          hover: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "darken",
              value: 0,
            },
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
      };

      var chart = new ApexCharts(document.querySelector("#chartMonthly"), options);
      chart.render();
    }
  });


  // $("#chartYearly")
  $(function () {

    if ($("#chartYearly").length) {
      let colors = [
        '#C5D31E',
        '#248F37',
      ]
      let options = {
        series: [
          {
            name: '( A ) Estimated Average yearly Net License Income',
            group: 'budget',
            data: [40000, 35000, 60000, 25000, 75000, 38000, 55000, 70000]
          },
          {
            name: '( B ) Estimated Total Net License Income',
            group: 'actual',
            data: [40000, 35000, 60000, 25000, 75000, 38000, 55000, 70000]
          },
        ],
        chart: {
          type: "bar",
          height: 450,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        colors: colors,
        legend: {
          show: true,
          position: 'top',
          horizontalAlign: 'left'
        },
        dataLabels: {
          formatter: (val) => {
            return val / 1000 + "k"
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            distributed: true,
            columnWidth: '65%',
            endingShape: "rounded",
            borderRadius: $(window).outerWidth() < 1600 ? 2 : 8,
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          borderColor: "#F0F6F9",
          strokeDashArray: 0,
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [["1ST YEAR"], ["2ND YEAR"], ["3RD YEAR"], ["4TH YEAR"],],
          labels: {
            style: {
              colors: "#0D1117",
              fontSize: "12px",
              fontFamily: "Droid Sans",
              fontWeight: 400,
            },
            formatter: (value) => { return value },
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value / 1000 + 'K'
            },
            style: {
              colors: ["#656D76"],
              fontSize: "14px",
              fontFamily: "Droid Sans",
              fontWeight: 400,
            },
            align: 'left',
          },
          axisBorder: {
            show: false,
          },
        },
        fill: {
          type: ["solid"],
          opacity: 1,
        },
        states: {
          hover: {
            filter: {
              type: "none",
              value: 0,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "darken",
              value: 0,
            },
          },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
      };

      var chart = new ApexCharts(document.querySelector("#chartYearly"), options);
      chart.render();
    }
  });




});