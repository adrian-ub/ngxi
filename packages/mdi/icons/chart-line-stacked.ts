import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiChartLineStackedIcon],svg[mdi-chart-line-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.45 15.18L22 6.81V21H2V3h2v16h2.57l4.39-7.56zM22 3l-.03.45L17 11l-7-5l-4 6V3z"></svg:path>`,
})
export class MdiChartLineStackedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
