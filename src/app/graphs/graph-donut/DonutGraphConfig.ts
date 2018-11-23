export class DonutGraphConfig {
  public static graphConfig = {
    'type': 'pie',
    'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
    'innerRadius': '40%',
    'alpha': 0.65,
    'colors': [
      '#ea0039',
      '#00a568'
      ],
    'titleField': 'category',
    'valueField': 'column-1',
    'touchClickDuration': 1,
    'allLabels': [],
    'balloon': {},
    'legend': {
      'enabled': false,
      'align': 'center',
      'markerType': 'circle'
    },
    'titles': [],
    'dataProvider': [
      {
        'category': 'category 1',
        'column-1': 8
      },
      {
        'category': 'category 2',
        'column-1': 6
      }
      ]
  };
}
