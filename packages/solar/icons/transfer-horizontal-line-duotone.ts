import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTransferHorizontalLineDuotoneIcon],svg[solar-transfer-horizontal-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 10H4l5.5-6"></svg:path><svg:path d="M4 14h16l-5.5 6" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTransferHorizontalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
