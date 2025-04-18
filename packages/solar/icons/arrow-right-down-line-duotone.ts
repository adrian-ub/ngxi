import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightDownLineDuotoneIcon],svg[solar-arrow-right-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M6.53 5.47a.75.75 0 0 0-1.06 1.06zM5.47 6.53l12 12l1.06-1.06l-12-12z" opacity=".5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 9v9H9"></svg:path></svg:g>`,
})
export class SolarArrowRightDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
