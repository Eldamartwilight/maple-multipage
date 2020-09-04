import React, { useEffect, useRef } from "react";
import { PieChart } from "react-minimal-pie-chart";

export default () => {
    let timeoutRef = useRef();
    useEffect(() => {
        var dataPoints1 = [],
            dataPoints2 = [];
        var stockChart = new CanvasJS.StockChart("chartContainer", {
            exportEnabled: true,
            // title: {
            //     text: "StockChart with Annotation",
            // },
            // subtitles: [
            //     {
            //         text: "Litecoin Price",
            //     },
            // ],
            charts: [
                {
                    axisX: {
                        crosshair: {
                            enabled: true,
                            snapToDataPoint: true,
                        },
                    },
                    axisY: {
                        prefix: "$",
                        lineThickness: 0,
                    },
                    data: [
                        {
                            name: "Price (in USD)",
                            yValueFormatString: "$#,###.##",
                            type: "candlestick",
                            dataPoints: dataPoints1,
                        },
                    ],
                },
            ],
            navigator: {
                data: [
                    {
                        dataPoints: dataPoints2,
                    },
                ],
                slider: {
                    minimum: new Date(2018, 10, 1),
                    maximum: new Date(2018, 11, 20),
                },
            },
        });
        window.$.getJSON(
            "https://canvasjs.com/data/docs/ltceur2018.json",
            function (data) {
                var lowestCloseDate = data[0].date,
                    lowestClosingPrice = data[0].close;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].close < lowestClosingPrice) {
                        lowestClosingPrice = data[i].close;
                        lowestCloseDate = data[i].date;
                    }
                }
                for (var i = 0; i < data.length; i++) {
                    dataPoints1.push({
                        x: new Date(data[i].date),
                        y: [
                            Number(data[i].open),
                            Number(data[i].high),
                            Number(data[i].low),
                            Number(data[i].close),
                        ],
                    });
                    dataPoints2.push({
                        x: new Date(data[i].date),
                        y: Number(data[i].close),
                    });
                    if (data[i].date === lowestCloseDate) {
                        dataPoints1[i].indexLabel = "Lowest Closing";
                        dataPoints1[i].indexLabelFontColor = "red";
                        dataPoints1[i].indexLabelOrientation = "vertical";
                    }
                }
                stockChart.render();
            },
        );
    }, []);

    useEffect(() => {
        var dataPoints = [],
            currentDate = new Date();
        var stockChart = new CanvasJS.StockChart("chartContainer2", {
            theme: "dark1", //"light2", "dark1", "dark2"
            // title: {
            //     text: "Dynamic StockChart",
            // },
            charts: [
                {
                    axisX: {
                        crosshair: {
                            enabled: true,
                            valueFormatString: "MMM DD, YYYY HH:mm:ss",
                        },
                    },
                    axisY: {
                        title: "Pageviews Per Second",
                    },
                    toolTip: {
                        shared: true,
                    },
                    data: [
                        {
                            type: "line",
                            name: "Pageviews",
                            xValueFormatString: "MMM DD, YYYY HH:mm:ss",
                            xValueType: "dateTime",
                            dataPoints: dataPoints,
                        },
                    ],
                },
            ],
            navigator: {
                slider: {
                    minimum: new Date(currentDate.getTime() - 90 * 1000),
                },
                axisX: {
                    labelFontColor: "white",
                },
            },
            rangeSelector: {
                enabled: false,
            },
        });
        var dataCount = 700,
            ystart = 50,
            interval = 1000,
            xstart = currentDate.getTime() - 700 * 1000;
        updateChart(xstart, ystart, dataCount, interval);
        function updateChart(xstart, ystart, length, interval) {
            var xVal = xstart,
                yVal = ystart;
            for (var i = 0; i < length; i++) {
                yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
                yVal = Math.min(Math.max(yVal, 5), 90);
                dataPoints.push({ x: xVal, y: yVal });
                xVal += interval;
            }
            stockChart.options.navigator.slider.minimum = new Date(
                xVal - 90 * 1000,
            );
            xstart = xVal;
            dataCount = 1;
            ystart = yVal;
            stockChart.render();
            timeoutRef = setTimeout(function () {
                updateChart(xstart, ystart, dataCount, interval);
            }, 1000);
        }
        return () => {
            clearTimeout(timeoutRef);
        };
    }, []);
    return (
        <>
            <br />
            <br />
            <h2>Canvas dynamic example</h2>
            <br />
            <br />

            <div id="chartContainer2" style={{ height: 450, width: "100%" }} />

            <br />
            <br />
            <h2>Canvas simple example</h2>
            <br />
            <br />

            <div id="chartContainer" style={{ height: 450, width: "100%" }} />

            <br />
            <br />
            <h2>Pie Chart simplies example</h2>
            <br />
            <br />

            <div style={{ width: 200, margin: "0 auto" }}>
                <PieChart
                    data={[
                        {
                            title: "One",
                            value: 10,
                            color: "#E38627",
                        },
                        {
                            title: "Two",
                            value: 15,
                            color: "#C13C37",
                        },
                        {
                            title: "Three",
                            value: 20,
                            color: "#6A2135",
                        },
                    ]}
                />
            </div>

            <br />
            <br />
        </>
    );
};
