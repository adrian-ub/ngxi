import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowUpLineDuotoneIcon],svg[solar-arrow-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M11.25 20a.75.75 0 0 0 1.5 0zm1.5 0V4h-1.5v16z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18 10l-6-6l-6 6"></svg:path></svg:g>`,
})
export class SolarArrowUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
