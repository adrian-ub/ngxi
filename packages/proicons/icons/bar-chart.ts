import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBarChartIcon],svg[proicons-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 10.25a2 2 0 0 1 2-2h4.167v13H4.75a2 2 0 0 1-2-2zm12.333 2h4.167a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4.167zm-6.166-7.5a2 2 0 0 1 2-2h2.166a2 2 0 0 1 2 2v16.5H8.917z"></svg:path>`,
})
export class ProiconsBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
