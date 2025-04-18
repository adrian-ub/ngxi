import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUnreadLineDuotoneIcon],svg[solar-unread-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 12.9l3.143 3.6L18 7.5"></svg:path>`,
})
export class SolarUnreadLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
