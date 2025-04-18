import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPrinterOneIcon],svg[icon-park-printer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 33H42C43.1046 33 44 32.1046 44 31V15C44 13.8954 43.1046 13 42 13H32"></svg:path><svg:path d="M16 33H6C4.89543 33 4 32.1046 4 31V15C4 13.8954 4.89543 13 6 13H16"></svg:path><svg:path d="M12 13V19H36V13"></svg:path><svg:path d="M16 13V5H32V13"></svg:path><svg:path d="M16 29V43H32V29"></svg:path><svg:path d="M22 35H26"></svg:path><svg:line x1="13" x2="35" y1="27" y2="27"></svg:line></svg:g>`,
})
export class IconParkPrinterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
