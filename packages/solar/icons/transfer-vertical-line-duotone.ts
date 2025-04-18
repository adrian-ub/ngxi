import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTransferVerticalLineDuotoneIcon],svg[solar-transfer-vertical-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 4v16l-6-5.5"></svg:path><svg:path d="M14 20V4l6 5.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTransferVerticalLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
