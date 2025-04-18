import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTvUsb28RegularIcon],svg[fluent-tv-usb-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 4A3.25 3.25 0 0 0 2 7.25v10.5A3.25 3.25 0 0 0 5.25 21h12.264a3 3 0 0 1-.014-.262V19.5H5.25a1.75 1.75 0 0 1-1.75-1.75V7.25c0-.966.784-1.75 1.75-1.75h17.497c.966 0 1.75.784 1.75 1.75v3.25H25c.354 0 .691.074.997.207V7.25A3.25 3.25 0 0 0 22.747 4zm1.496 19h11.658L19 24.06v.44H6.746a.75.75 0 0 1 0-1.5m13.754.667V26a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.333l1.372-2.439a1 1 0 0 0 .128-.49v-4.167a1 1 0 0 0-1-1V13l-.003-.083A1 1 0 0 0 25 12h-4a1 1 0 0 0-1 1v2.571a1 1 0 0 0-1 1v4.167a1 1 0 0 0 .128.49zm1-10.167h3v2.071h-3z"></svg:path>`,
})
export class FluentTvUsb28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
