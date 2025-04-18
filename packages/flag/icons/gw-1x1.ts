import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGw1x1Icon],svg[flag-gw-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ce1126" d="M0 0h160v512H0z"></svg:path><svg:path fill="#fcd116" d="M160 0h352v256H160z"></svg:path><svg:path fill="#009e49" d="M160 256h352v256H160z"></svg:path><svg:g transform="translate(-46.2 72.8)scale(.7886)"><svg:g id="flagGw1x10" transform="matrix(80 0 0 80 160 240)"><svg:path id="flagGw1x11" fill="#000001" d="M0-1v1h.5" transform="rotate(18 0 -1)"></svg:path><svg:use width="100%" height="100%" href="#flagGw1x11" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagGw1x10" transform="rotate(72 160 240)"></svg:use><svg:use width="100%" height="100%" href="#flagGw1x10" transform="rotate(144 160 240)"></svg:use><svg:use width="100%" height="100%" href="#flagGw1x10" transform="rotate(-144 160 240)"></svg:use><svg:use width="100%" height="100%" href="#flagGw1x10" transform="rotate(-72 160 240)"></svg:use></svg:g>`,
})
export class FlagGw1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
