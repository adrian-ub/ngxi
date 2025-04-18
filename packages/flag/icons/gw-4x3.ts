import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGw4x3Icon],svg[flag-gw-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ce1126" d="M0 0h220v480H0z"></svg:path><svg:path fill="#fcd116" d="M220 0h420v240H220z"></svg:path><svg:path fill="#009e49" d="M220 240h420v240H220z"></svg:path><svg:g id="flagGw4x30" transform="matrix(80 0 0 80 110 240)"><svg:path id="flagGw4x31" fill="#000001" d="M0-1v1h.5" transform="rotate(18 0 -1)"></svg:path><svg:use width="100%" height="100%" href="#flagGw4x31" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagGw4x30" transform="rotate(72 110 240)"></svg:use><svg:use width="100%" height="100%" href="#flagGw4x30" transform="rotate(144 110 240)"></svg:use><svg:use width="100%" height="100%" href="#flagGw4x30" transform="rotate(-144 110 240)"></svg:use><svg:use width="100%" height="100%" href="#flagGw4x30" transform="rotate(-72 110 240)"></svg:use>`,
})
export class FlagGw4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
