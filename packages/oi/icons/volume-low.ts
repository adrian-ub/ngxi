import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiVolumeLowIcon],svg[oi-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.34 0L3 2H1v4h2l1.34 2H5V0zM6 3v2c.09 0 .18-.01.25-.03c.43-.11.75-.51.75-.97a.997.997 0 0 0-1-1"></svg:path>`,
})
export class OiVolumeLowIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
