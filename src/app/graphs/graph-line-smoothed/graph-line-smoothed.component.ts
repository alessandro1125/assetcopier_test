import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AmChart, AmChartsService} from '@amcharts/amcharts3-angular';
import {LineGraphConfig} from './LineGraphConfig';

@Component({
  selector: 'app-graph-line-smoothed',
  templateUrl: './graph-line-smoothed.component.html',
  styleUrls: ['./graph-line-smoothed.component.css']
})
export class GraphLineSmoothedComponent implements AfterViewInit {

  private chart: AmChart;
  constructor(private AmCharts: AmChartsService) {
    this.ngAfterViewInit();
  }
  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('line-chart', LineGraphConfig.graphConfig);
  }
  /*ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }*/

  editChart() {
    // This must be called when making any changes to the chart
    this.AmCharts.updateChart(this.chart, () => {
      // Change whatever properties you want
      this.chart.dataProvider = [];
    });
  }
}
