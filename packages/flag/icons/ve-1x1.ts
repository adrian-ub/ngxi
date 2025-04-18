import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagVe1x1Icon],svg[flag-ve-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:g id="flagVe1x10" transform="translate(0 -36)"><svg:g id="flagVe1x11"><svg:g id="flagVe1x12"><svg:path id="flagVe1x13" fill="#fff" d="M0-5L-1.5-.2l2.8.9z"></svg:path><svg:use width="180" height="120" href="#flagVe1x13" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="180" height="120" href="#flagVe1x12" transform="rotate(72)"></svg:use></svg:g><svg:use width="180" height="120" href="#flagVe1x12" transform="rotate(-72)"></svg:use><svg:use width="180" height="120" href="#flagVe1x11" transform="rotate(144)"></svg:use></svg:g></svg:defs><svg:path fill="#cf142b" d="M0 0h512v512H0z"></svg:path><svg:path fill="#00247d" d="M0 0h512v341.3H0z"></svg:path><svg:path fill="#fc0" d="M0 0h512v170.7H0z"></svg:path><svg:g id="flagVe1x14" transform="translate(256.3 358.4)scale(4.265)"><svg:g id="flagVe1x15"><svg:use width="180" height="120" href="#flagVe1x10" transform="rotate(10)"></svg:use><svg:use width="180" height="120" href="#flagVe1x10" transform="rotate(30)"></svg:use></svg:g><svg:use width="180" height="120" href="#flagVe1x15" transform="rotate(40)"></svg:use></svg:g><svg:use width="180" height="120" href="#flagVe1x14" transform="rotate(-80 256.3 358.4)"></svg:use>`,
})
export class FlagVe1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
