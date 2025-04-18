import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartLineStackedNegativeIcon],svg[healthicons-chart-line-stacked-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsChartLineStackedNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM8 29.387v6.851l8.232-9.878a1 1 0 0 1 1.084-.309l11.353 3.785l9.563-11.476l1.536 1.28l-10 12a1 1 0 0 1-1.084.309L17.33 28.164L8 39.363V40h33v2H7a1 1 0 0 1-1-1V7h2v19.413l8.26-9.086a1 1 0 0 1 1.082-.267l10.34 3.76l9.55-11.46l1.536 1.28l-10 12a1 1 0 0 1-1.11.3l-10.37-3.771z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsChartLineStackedNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsChartLineStackedNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
