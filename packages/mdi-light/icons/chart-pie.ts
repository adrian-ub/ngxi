import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightChartPieIcon],svg[mdi-light-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3h1a8 8 0 0 1 8 8v1h-9zm1 8h7a7 7 0 0 0-7-7zm-3 3h8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8zm-1 1V7.07c-3.39.49-6 3.4-6 6.93a7 7 0 0 0 7 7c3.53 0 6.44-2.61 6.93-6z"></svg:path>`,
})
export class MdiLightChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
