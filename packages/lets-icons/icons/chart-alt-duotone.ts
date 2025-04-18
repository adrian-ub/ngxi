import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChartAltDuotoneIcon],svg[lets-icons-chart-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18" height="18" x="3" y="3" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" d="m18 8l-3.895 4.87a.15.15 0 0 1-.223.012l-2.766-2.766a.15.15 0 0 0-.221.01L6 16"></svg:path></svg:g>`,
})
export class LetsIconsChartAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
