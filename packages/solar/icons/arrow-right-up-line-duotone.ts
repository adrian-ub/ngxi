import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightUpLineDuotoneIcon],svg[solar-arrow-right-up-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M5.47 17.47a.75.75 0 1 0 1.06 1.06zm1.06 1.06l12-12l-1.06-1.06l-12 12z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 6h9v9"></svg:path></svg:g>`,
})
export class SolarArrowRightUpLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
