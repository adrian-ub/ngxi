import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagVe4x3Icon],svg[flag-ve-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:g id="flagVe4x30" transform="translate(0 -36)"><svg:g id="flagVe4x31"><svg:g id="flagVe4x32"><svg:path id="flagVe4x33" fill="#fff" d="M0-5L-1.5-.2l2.8.9z"></svg:path><svg:use width="180" height="120" href="#flagVe4x33" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="180" height="120" href="#flagVe4x32" transform="rotate(72)"></svg:use></svg:g><svg:use width="180" height="120" href="#flagVe4x32" transform="rotate(-72)"></svg:use><svg:use width="180" height="120" href="#flagVe4x31" transform="rotate(144)"></svg:use></svg:g></svg:defs><svg:path fill="#cf142b" d="M0 0h640v480H0z"></svg:path><svg:path fill="#00247d" d="M0 0h640v320H0z"></svg:path><svg:path fill="#fc0" d="M0 0h640v160H0z"></svg:path><svg:g id="flagVe4x34" transform="matrix(4 0 0 4 320 336)"><svg:g id="flagVe4x35"><svg:use width="180" height="120" href="#flagVe4x30" transform="rotate(10)"></svg:use><svg:use width="180" height="120" href="#flagVe4x30" transform="rotate(30)"></svg:use></svg:g><svg:use width="180" height="120" href="#flagVe4x35" transform="rotate(40)"></svg:use></svg:g><svg:use width="180" height="120" href="#flagVe4x34" transform="rotate(-80 320 336)"></svg:use>`,
})
export class FlagVe4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
