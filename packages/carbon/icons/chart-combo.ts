import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartComboIcon],svg[carbon-chart-combo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28V16h-8v12h-4V12H7v16H4V2H2v26a2 2 0 0 0 2 2h26v-2Zm-14 0H9V14h4Zm12 0h-4V18h4Z"></svg:path><svg:path fill="currentColor" d="M22.786 14a2 2 0 0 1-1.18-.386L11.205 5.987L8.242 10L6.637 8.806l2.982-4a2 2 0 0 1 2.749-.446L22.789 12l3.605-4.86L28 8.33l-3.604 4.862a2 2 0 0 1-1.61.808"></svg:path>`,
})
export class CarbonChartComboIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
