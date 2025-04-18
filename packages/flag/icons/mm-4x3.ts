import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMm4x3Icon],svg[flag-mm-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fecb00" d="M0 0h640v480H0z"></svg:path><svg:path fill="#34b233" d="M0 160h640v320H0z"></svg:path><svg:path fill="#ea2839" d="M0 320h640v160H0z"></svg:path><svg:g transform="translate(320 256.9)scale(176.87999)"><svg:path id="flagMm4x30" fill="#fff" d="m0-1l.3 1h-.6z"></svg:path><svg:use width="100%" height="100%" href="#flagMm4x30" transform="rotate(-144)"></svg:use><svg:use width="100%" height="100%" href="#flagMm4x30" transform="rotate(-72)"></svg:use><svg:use width="100%" height="100%" href="#flagMm4x30" transform="rotate(72)"></svg:use><svg:use width="100%" height="100%" href="#flagMm4x30" transform="rotate(144)"></svg:use></svg:g>`,
})
export class FlagMm4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
