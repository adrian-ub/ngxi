import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagKr1x1Icon],svg[flag-kr-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" fill-rule="evenodd" d="M0 0h512v512H0Z"></svg:path><svg:g fill-rule="evenodd" transform="rotate(-56.3 367.2 -111.2)scale(9.375)"><svg:g id="flagKr1x10"><svg:path id="flagKr1x11" fill="#000001" d="M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z"></svg:path><svg:use width="100%" height="100%" y="44" href="#flagKr1x11"></svg:use></svg:g><svg:path stroke="#fff" d="M0 17v10"></svg:path><svg:path fill="#cd2e3a" d="M0-12a12 12 0 0 1 0 24Z"></svg:path><svg:path fill="#0047a0" d="M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z"></svg:path><svg:circle cy="-6" r="6" fill="#cd2e3a"></svg:circle></svg:g><svg:g fill-rule="evenodd" transform="rotate(-123.7 196.5 59.5)scale(9.375)"><svg:use width="100%" height="100%" href="#flagKr1x10"></svg:use><svg:path stroke="#fff" d="M0-23.5v3M0 17v3.5m0 3v3"></svg:path></svg:g>`,
})
export class FlagKr1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
