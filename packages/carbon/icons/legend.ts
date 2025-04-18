import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLegendIcon],svg[carbon-legend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22h14v2H16z"></svg:path><svg:rect width="6" height="6" x="4" y="20" fill="currentColor" rx="1"></svg:rect><svg:path fill="currentColor" d="M16 8h14v2H16zm-6.5 4h-5a.5.5 0 0 1-.447-.724l2.5-5.022a.52.52 0 0 1 .894 0l2.5 5.023A.5.5 0 0 1 9.5 12"></svg:path>`,
})
export class CarbonLegendIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
