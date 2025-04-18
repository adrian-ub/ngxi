import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusPrinterIcon],svg[nimbus-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 6.57h-.75v-.05a1.26 1.26 0 0 0-.37-.89L9.37 1.87a1.26 1.26 0 0 0-.89-.37H3.75A1.25 1.25 0 0 0 2.5 2.75v3.82h-.75A1.26 1.26 0 0 0 .5 7.85v3.84A1.26 1.26 0 0 0 1.75 13h.75v.28a1.25 1.25 0 0 0 1.25 1.22h8.5a1.25 1.25 0 0 0 1.25-1.25V13h.75a1.26 1.26 0 0 0 1.25-1.28V7.85a1.26 1.26 0 0 0-1.25-1.28M3.75 2.75h4.73l3.77 3.77v.69h-8.5zm8.5 10.5h-8.5v-.92h8.5zm2-1.56h-.75v-.64h-11v.64h-.74V7.85h.74v.64h11v-.67h.74z"></svg:path><svg:ellipse cx="12.88" cy="9.77" fill="currentColor" rx=".63" ry=".59"></svg:ellipse>`,
})
export class NimbusPrinterIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
