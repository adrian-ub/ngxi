import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartColumnTargetIcon],svg[carbon-chart-column-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28V6h-8v22h-4V14H7v14H4V2H2v26a2 2 0 0 0 2 2h26v-2zm-14 0H9V16h4zm12 0h-4V8h4zM19 2h8v2h-8z"></svg:path><svg:path fill="currentColor" d="M7 10h8v2H7z"></svg:path>`,
})
export class CarbonChartColumnTargetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
