import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AmChart, AmChartsService} from '@amcharts/amcharts3-angular';
import {DonutGraphConfig} from './DonutGraphConfig';

@Component({
  selector: 'app-graph-donut',
  templateUrl: './graph-donut.component.html',
  styleUrls: ['./graph-donut.component.css']
})
export class GraphDonutComponent implements AfterViewInit {

  private chart: AmChart;
  constructor(private AmCharts: AmChartsService) {
    this.ngAfterViewInit();
  }
  ngAfterViewInit() {
    this.chart = this.AmCharts.makeChart('donut-chart', DonutGraphConfig.graphConfig);
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
