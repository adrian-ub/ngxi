import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagHn1x1Icon],svg[flag-hn-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#18c3df" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M0 170.7h512v170.6H0z"></svg:path><svg:g id="flagHn1x10" fill="#18c3df" transform="translate(256 256)scale(28.44446)"><svg:g id="flagHn1x11"><svg:path id="flagHn1x12" d="m0-1l-.3 1l.5.1z"></svg:path><svg:use width="100%" height="100%" href="#flagHn1x12" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagHn1x11" transform="rotate(72)"></svg:use><svg:use width="100%" height="100%" href="#flagHn1x11" transform="rotate(-72)"></svg:use><svg:use width="100%" height="100%" href="#flagHn1x11" transform="rotate(144)"></svg:use><svg:use width="100%" height="100%" href="#flagHn1x11" transform="rotate(-144)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagHn1x10" transform="translate(142.2 -45.5)"></svg:use><svg:use width="100%" height="100%" href="#flagHn1x10" transform="translate(142.2 39.8)"></svg:use><svg:use width="100%" height="100%" href="#flagHn1x10" transform="translate(-142.2 -45.5)"></svg:use><svg:use width="100%" height="100%" href="#flagHn1x10" transform="translate(-142.2 39.8)"></svg:use>`,
})
export class FlagHn1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
