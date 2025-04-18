import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagRw4x3Icon],svg[flag-rw-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#20603d" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fad201" d="M0 0h640v360H0z"></svg:path><svg:path fill="#00a1de" d="M0 0h640v240H0z"></svg:path><svg:g transform="translate(511 125.4)scale(.66667)"><svg:g id="flagRw4x30"><svg:path id="flagRw4x31" fill="#e5be01" d="M116.1 0L35.7 4.7l76.4 25.4l-78.8-16.3L100.6 58l-72-36.2L82 82.1L21.9 28.6l36.2 72l-44.3-67.3L30 112L4.7 35.7L0 116.1L-1-1z"></svg:path><svg:use width="100%" height="100%" href="#flagRw4x31" transform="scale(1 -1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagRw4x30" transform="scale(-1 1)"></svg:use><svg:circle r="34.3" fill="#e5be01" stroke="#00a1de" stroke-width="3.4"></svg:circle></svg:g>`,
})
export class FlagRw4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
