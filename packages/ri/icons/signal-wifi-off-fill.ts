import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiOffFillIcon],svg[ri-signal-wifi-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.808 1.393l17.678 17.678l-1.414 1.414l-3.683-3.683L12 21L.69 6.997a18 18 0 0 1 2.951-1.942L1.394 2.808zM12.001 3c4.284 0 8.219 1.497 11.31 3.996l-5.407 6.693L7.725 3.511A18 18 0 0 1 12.001 3"></svg:path>`,
})
export class RiSignalWifiOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
