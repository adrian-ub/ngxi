import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siInsightsDuotoneIcon],svg[si-insights-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H3.8a.8.8 0 0 1-.8-.8V3m3 11l4-4l4 4l7-7"></svg:path>`,
})
export class SiInsightsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
