

document.addEventListener("DOMContentLoaded", function () {

    var options_pie = {
        series: [44, 55, 13, 43, 22],
        chart: {
        width: 500,
        type: 'pie',
      },
      colors:['#57a757','#c6983c','#6271c4','#75bb33','#a257c5'],
      labels: ['Miel', 'Huiles alimentaire', 'Produits d\’origine animale',['Dattes et autres produits','d\’origine végétale']  ,['Produits à base','de céréales'] ],
      legend: {
        show:true,
        position: 'bottom',
        verticalAlign: 'bottom',
        align:'center',
      }};

      var options_receptioner ={
        series: [{
        data: [210, 220, 100, 280, 160]
      }],
        chart: {
        height: 500,
        type: 'bar',
        events: {
          click: function(chart, w, e) {
            // console.log(chart, w, e)
          }
        }
      },
      
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      colors:['#c28f29','#a0844c','#c28f29','#a0844c','#c28f29'],
      tooltip: {
        y: {
          formatter: function(val) {
            return val
          },
          title: {
            formatter: function (seriesName) {
              return 'Total'
            }
          }
        }
      },
      xaxis: {
       
        categories: [
          ['Miel'],
          ['Huiles alimentaire'],
          ['Produits d\’origine animale'],
          ['Dattes et autres produits','d\’origine végétale'],
          ['Produits à base','de céréales']
          
        ],
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      }
      };

    window.ApexCharts && (new ApexCharts(document.getElementById('chart-mentions'), {
        chart: {
            type: "bar",
            fontFamily: 'inherit',
            height: 240,
            parentHeightOffset: 0,
            toolbar: {
                show: false,
            },
            animations: {
                enabled: false
            },
            stacked: true,
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            opacity: 1,
        },
        series: [{
            name: "homologué",
            data: [10, 20, 30, 40, 44]
        }, {
            name: "non homologué",
            data: [3, 3, 3, 4, 6]
        }, {
            name: "réceptionné",
            data: [13, 23, 33, 44, 50]
        }],
        tooltip: {
            theme: 'dark'
        },
        grid: {
            padding: {
                top: -20,
                right: 0,
                left: -4,
                bottom: -4
            },
            strokeDashArray: 4,
            xaxis: {
                lines: {
                    show: true
                }
            },
        },
        xaxis: {
            labels: {
                padding: 0,
            },
            tooltip: {
                enabled: false
            },
            axisBorder: {
                show: false,
            },
            type: 'string',
        },
        yaxis: {
            labels: {
                padding: 4,
            },
        },
        labels: [
            'Miel', 'Huiles alimentaire', 'Produits d\’origine animale',['Dattes et autres produits','d\’origine végétale']  ,['Produits à base','de céréales']  
        ],

        colors: ['#ab8740', '#fcf3e1', '#003700'],
        legend: {
            show: false,
        },
    })).render();

    window.ApexCharts && (new ApexCharts(document.getElementById("chart-mentions_2"),options_pie)).render();
    window.ApexCharts && (new ApexCharts(document.getElementById("chart-mentions_3"),options_receptioner)).render();
});



// @formatter maps:on
document.addEventListener("DOMContentLoaded", function () {
    const map = new jsVectorMap({
        selector: '#map-world',
        map: 'world',
        backgroundColor: 'transparent',
        regionStyle: {
            initial: {
                fill: tabler.getColor('body-bg'),
                stroke: tabler.getColor('border-color'),
                strokeWidth: 2,
            }
        },
        zoomOnScroll: false,
        zoomButtons: false,
        // -------- Series --------
        visualizeData: {
            scale: [tabler.getColor('bg-surface'), tabler.getColor('primary')],
            values: {
                "AF": 16,
                "AL": 11,
                "DZ": 158,
                "AO": 85,
                "AG": 1,
                "AR": 351,
                "AM": 8,
                "AU": 1219,
                "AT": 366,
                "AZ": 52,
                "BS": 7,
                "BH": 21,
                "BD": 105,
                "BB": 3,
                "BY": 52,
                "BE": 461,
                "BZ": 1,
                "BJ": 6,
                "BT": 1,
                "BO": 19,
                "BA": 16,
                "BW": 12,
                "BR": 2023,
                "BN": 11,
                "BG": 44,
                "BF": 8,
                "BI": 1,
                "KH": 11,
                "CM": 21,
                "CA": 1563,
                "CV": 1,
                "CF": 2,
                "TD": 7,
                "CL": 199,
                "CN": 5745,
                "CO": 283,
                "KM": 0,
                "CD": 12,
                "CG": 11,
                "CR": 35,
                "CI": 22,
                "HR": 59,
                "CY": 22,
                "CZ": 195,
                "DK": 304,
                "DJ": 1,
                "DM": 0,
                "DO": 50,
                "EC": 61,
                "EG": 216,
                "SV": 21,
                "GQ": 14,
                "ER": 2,
                "EE": 19,
                "ET": 30,
                "FJ": 3,
                "FI": 231,
                "FR": 2555,
                "GA": 12,
                "GM": 1,
                "GE": 11,
                "DE": 3305,
                "GH": 18,
                "GR": 305,
                "GD": 0,
                "GT": 40,
                "GN": 4,
                "GW": 0,
                "GY": 2,
                "HT": 6,
                "HN": 15,
                "HK": 226,
                "HU": 132,
                "IS": 12,
                "IN": 1430,
                "ID": 695,
                "IR": 337,
                "IQ": 84,
                "IE": 204,
                "IL": 201,
                "IT": 2036,
                "JM": 13,
                "JP": 5390,
                "JO": 27,
                "KZ": 129,
                "KE": 32,
                "KI": 0,
                "KR": 986,
                "KW": 117,
                "KG": 4,
                "LA": 6,
                "LV": 23,
                "LB": 39,
                "LS": 1,
                "LR": 0,
                "LY": 77,
                "LT": 35,
                "LU": 52,
                "MK": 9,
                "MG": 8,
                "MW": 5,
                "MY": 218,
                "MV": 1,
                "ML": 9,
                "MT": 7,
                "MR": 3,
                "MU": 9,
                "MX": 1004,
                "MD": 5,
                "MN": 5,
                "ME": 3,
                "MA": 91,
                "MZ": 10,
                "MM": 35,
                "NA": 11,
                "NP": 15,
                "NL": 770,
                "NZ": 138,
                "NI": 6,
                "NE": 5,
                "NG": 206,
                "NO": 413,
                "OM": 53,
                "PK": 174,
                "PA": 27,
                "PG": 8,
                "PY": 17,
                "PE": 153,
                "PH": 189,
                "PL": 438,
                "PT": 223,
                "QA": 126,
                "RO": 158,
                "RU": 1476,
                "RW": 5,
                "WS": 0,
                "ST": 0,
                "SA": 434,
                "SN": 12,
                "RS": 38,
                "SC": 0,
                "SL": 1,
                "SG": 217,
                "SK": 86,
                "SI": 46,
                "SB": 0,
                "ZA": 354,
                "ES": 1374,
                "LK": 48,
                "KN": 0,
                "LC": 1,
                "VC": 0,
                "SD": 65,
                "SR": 3,
                "SZ": 3,
                "SE": 444,
                "CH": 522,
                "SY": 59,
                "TW": 426,
                "TJ": 5,
                "TZ": 22,
                "TH": 312,
                "TL": 0,
                "TG": 3,
                "TO": 0,
                "TT": 21,
                "TN": 43,
                "TR": 729,
                "TM": 0,
                "UG": 17,
                "UA": 136,
                "AE": 239,
                "GB": 2258,
                "US": 4624,
                "UY": 40,
                "UZ": 37,
                "VU": 0,
                "VE": 285,
                "VN": 101,
                "YE": 30,
                "ZM": 15,
                "ZW": 5
            },
        },
    });
    window.addEventListener("resize", () => {
        map.updateSize();
    });
});
// @formatter maps:off