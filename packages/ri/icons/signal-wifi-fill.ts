import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSignalWifiFillIcon],svg[ri-signal-wifi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21L.69 6.997A17.93 17.93 0 0 1 12 3"></svg:path>`,
})
export class RiSignalWifiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
