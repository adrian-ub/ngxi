import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCm4x3Icon],svg[flag-cm-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#007a5e" d="M0 0h213.3v480H0z"></svg:path><svg:path fill="#ce1126" d="M213.3 0h213.4v480H213.3z"></svg:path><svg:path fill="#fcd116" d="M426.7 0H640v480H426.7z"></svg:path><svg:g fill="#fcd116" transform="translate(320 240)scale(7.1111)"><svg:g id="flagCm4x30"><svg:path id="flagCm4x31" d="M0-8L-2.5-.4L1.3.9z"></svg:path><svg:use width="100%" height="100%" href="#flagCm4x31" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagCm4x30" transform="rotate(72)"></svg:use><svg:use width="100%" height="100%" href="#flagCm4x30" transform="rotate(144)"></svg:use><svg:use width="100%" height="100%" href="#flagCm4x30" transform="rotate(-144)"></svg:use><svg:use width="100%" height="100%" href="#flagCm4x30" transform="rotate(-72)"></svg:use></svg:g>`,
})
export class FlagCm4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
