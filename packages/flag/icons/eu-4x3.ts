import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagEu4x3Icon],svg[flag-eu-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:g id="flagEu4x30"><svg:g id="flagEu4x31"><svg:path id="flagEu4x32" d="m0-1l-.3 1l.5.1z"></svg:path><svg:use href="#flagEu4x32" transform="scale(-1 1)"></svg:use></svg:g><svg:g id="flagEu4x33"><svg:use href="#flagEu4x31" transform="rotate(72)"></svg:use><svg:use href="#flagEu4x31" transform="rotate(144)"></svg:use></svg:g><svg:use href="#flagEu4x33" transform="scale(-1 1)"></svg:use></svg:g></svg:defs><svg:path fill="#039" d="M0 0h640v480H0z"></svg:path><svg:g fill="#fc0" transform="translate(320 242.3)scale(23.7037)"><svg:use width="100%" height="100%" y="-6" href="#flagEu4x30"></svg:use><svg:use width="100%" height="100%" y="6" href="#flagEu4x30"></svg:use><svg:g id="flagEu4x34"><svg:use width="100%" height="100%" x="-6" href="#flagEu4x30"></svg:use><svg:use width="100%" height="100%" href="#flagEu4x30" transform="rotate(-144 -2.3 -2.1)"></svg:use><svg:use width="100%" height="100%" href="#flagEu4x30" transform="rotate(144 -2.1 -2.3)"></svg:use><svg:use width="100%" height="100%" href="#flagEu4x30" transform="rotate(72 -4.7 -2)"></svg:use><svg:use width="100%" height="100%" href="#flagEu4x30" transform="rotate(72 -5 .5)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagEu4x34" transform="scale(-1 1)"></svg:use></svg:g>`,
})
export class FlagEu4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
