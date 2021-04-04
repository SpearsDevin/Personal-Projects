

    //Get the chart defined
    var ctx = document.getElementById("RegionChart");
    var myRegionChart = Chart(ctx, {
        type: 'line',
        options: {
            title: {
                display: true,
                text: 'Region Temperatures',
                fontSize: 16,
                fontColor: "rgba(255,255,255,1.0)"
            },
            scales: {
                xAxes: [{
                    ticks: {
                        display : true,
                        fontColor: "rgba(255,255,255,1.0)",
                        autoSkipPadding: 10
                    }
                    }],
                yAxes: [{
                    ticks: {
                        display : true,
                        fontColor: "rgba(255,255,255,1.0)",
                        autoSkipPadding: 10
                    }
                    }],
                }
            },
        data: {
            labels: [],
            datasets: []
        }
    });



    (function(scope) {
        //Clear the chart initially
        myRegionChart.clear();
        
        //Called when topic arrives
        scope.$watch('msg.topic', function(data) {
            //console.log('Topic');
            //console.dir(data);
            //console.dir(myChart);
        });

        //Called when payload arrives
        scope.$watch('msg.payload', function(data) {
            if (data == null) {
                console.log('data is null');
            } else {
                //Data[0] = label for data
                //Data[1] = array of createdAt timestamps
                //Data[2] = array of dataMaxValue temperatures
                //Data[3] = clear datasets flag
                //Data[4] = chart name
                
                //Establish X axis as createdAt timestamps
                myRegionChart.data.labels = data[1];

                //Clear previous datasets?
                if (data[3] === true) {
                    myRegionChart.data.datasets = [];
                }
                
                //Establish plot information
                for (index=0; index<data[0].length; index++) {
                    switch(index) {
                        default:
                        case 0:
                            var r = 255; var g = 0; var b = 0; var a = 1.0;
                            break;
                        case 1:
                            var r = 0; var g = 255; var b = 0; var a = 1.0;
                            break;
                        case 2:
                            var r = 255; var g = 255; var b = 0; var a = 1.0;
                            break;
                        case 3:
                            var r = 0; var g = 0; var b = 255; var a = 1.0;
                            break;
                        case 4:
                            var r = 255; var g = 0; var b = 255; var a = 1.0;
                            break;
                        case 5:
                            var r = 0; var g = 255; var b = 255; var a = 1.0;
                            break;
                        case 6:
                            var r = 255; var g = 255; var b = 255; var a = 1.0;
                            break;
                        case 7:
                            var r = 128; var g = 0; var b = 128; var a = 1.0;
                            break;
                    }

                    //Generate color value
                    var rgba = "rgba(" + r.toString() + "," + g.toString() + "," + b.toString() + "," + a.toString() + ")"
                    
                    var plot = {
                        label:data[0][index],
                        data:[],
                        fill:false,
                        type:'line',
                        backgroundColor: rgba,
                        borderColor: rgba,
                        radius: 2
                    }
                    
                    //Add the plot to the chart
                    myRegionChart.data.datasets.push(plot);
                }

                //Establish Y axis as DataMaxValues
                for (index=0; index<data[0].length; index++) {
                    myRegionChart.data.datasets[index].data = data[2][index];
                }

                //Set the chart name
                myRegionChart.options.title.text = data[4];

                //Update the chart
                myRegionChart.update();
                
                //Deref
                data = null;
            }
        });
    })(scope);