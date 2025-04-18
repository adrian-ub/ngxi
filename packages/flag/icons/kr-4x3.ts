import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagKr4x3Icon],svg[flag-kr-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:clippath id="flagKr4x30"><svg:path fill-opacity=".7" d="M-95.8-.4h682.7v512H-95.8z"></svg:path></svg:clippath></svg:defs><svg:g fill-rule="evenodd" clip-path="url(#flagKr4x30)" transform="translate(89.8 .4)scale(.9375)"><svg:path fill="#fff" d="M-95.8-.4H587v512H-95.8Z"></svg:path><svg:g transform="rotate(-56.3 361.6 -101.3)scale(10.66667)"><svg:g id="flagKr4x31"><svg:path id="flagKr4x32" fill="#000001" d="M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z"></svg:path><svg:use width="100%" height="100%" y="44" href="#flagKr4x32"></svg:use></svg:g><svg:path stroke="#fff" d="M0 17v10"></svg:path><svg:path fill="#cd2e3a" d="M0-12a12 12 0 0 1 0 24Z"></svg:path><svg:path fill="#0047a0" d="M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z"></svg:path><svg:circle cy="-6" r="6" fill="#cd2e3a"></svg:circle></svg:g><svg:g transform="rotate(-123.7 191.2 62.2)scale(10.66667)"><svg:use width="100%" height="100%" href="#flagKr4x31"></svg:use><svg:path stroke="#fff" d="M0-23.5v3M0 17v3.5m0 3v3"></svg:path></svg:g></svg:g>`,
})
export class FlagKr4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
