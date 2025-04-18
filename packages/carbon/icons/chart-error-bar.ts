import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartErrorBarIcon],svg[carbon-chart-error-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 28V12h-4V8h2V6h-6v2h2v4h-4v16H4V2H2v26a2 2 0 0 0 2 2h26v-2Zm-8-14h2v4h-2Zm6 14h-6v-8h6Zm0-10h-2v-4h2Z"></svg:path>`,
})
export class CarbonChartErrorBarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
