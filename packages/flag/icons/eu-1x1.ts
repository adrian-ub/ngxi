import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagEu1x1Icon],svg[flag-eu-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:g id="flagEu1x10"><svg:g id="flagEu1x11"><svg:path id="flagEu1x12" d="m0-1l-.3 1l.5.1z"></svg:path><svg:use href="#flagEu1x12" transform="scale(-1 1)"></svg:use></svg:g><svg:g id="flagEu1x13"><svg:use href="#flagEu1x11" transform="rotate(72)"></svg:use><svg:use href="#flagEu1x11" transform="rotate(144)"></svg:use></svg:g><svg:use href="#flagEu1x13" transform="scale(-1 1)"></svg:use></svg:g></svg:defs><svg:path fill="#039" d="M0 0h512v512H0z"></svg:path><svg:g fill="#fc0" transform="translate(256 258.4)scale(25.28395)"><svg:use width="100%" height="100%" y="-6" href="#flagEu1x10"></svg:use><svg:use width="100%" height="100%" y="6" href="#flagEu1x10"></svg:use><svg:g id="flagEu1x14"><svg:use width="100%" height="100%" x="-6" href="#flagEu1x10"></svg:use><svg:use width="100%" height="100%" href="#flagEu1x10" transform="rotate(-144 -2.3 -2.1)"></svg:use><svg:use width="100%" height="100%" href="#flagEu1x10" transform="rotate(144 -2.1 -2.3)"></svg:use><svg:use width="100%" height="100%" href="#flagEu1x10" transform="rotate(72 -4.7 -2)"></svg:use><svg:use width="100%" height="100%" href="#flagEu1x10" transform="rotate(72 -5 .5)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagEu1x14" transform="scale(-1 1)"></svg:use></svg:g>`,
})
export class FlagEu1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
