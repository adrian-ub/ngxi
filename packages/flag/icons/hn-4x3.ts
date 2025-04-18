import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagHn4x3Icon],svg[flag-hn-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#18c3df" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="M0 160h640v160H0z"></svg:path><svg:g id="flagHn4x30" fill="#18c3df" transform="translate(320 240)scale(26.66665)"><svg:g id="flagHn4x31"><svg:path id="flagHn4x32" d="m-.3 0l.5.1L0-1z"></svg:path><svg:use width="100%" height="100%" href="#flagHn4x32" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagHn4x31" transform="rotate(72)"></svg:use><svg:use width="100%" height="100%" href="#flagHn4x31" transform="rotate(-72)"></svg:use><svg:use width="100%" height="100%" href="#flagHn4x31" transform="rotate(144)"></svg:use><svg:use width="100%" height="100%" href="#flagHn4x31" transform="rotate(-144)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagHn4x30" transform="translate(133.3 -42.7)"></svg:use><svg:use width="100%" height="100%" href="#flagHn4x30" transform="translate(133.3 37.3)"></svg:use><svg:use width="100%" height="100%" href="#flagHn4x30" transform="translate(-133.3 -42.7)"></svg:use><svg:use width="100%" height="100%" href="#flagHn4x30" transform="translate(-133.3 37.3)"></svg:use>`,
})
export class FlagHn4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
