import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGd1x1Icon],svg[flag-gd-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:g id="flagGd1x10"><svg:g id="flagGd1x11"><svg:path id="flagGd1x12" fill="#fcd116" d="M0-1v1h.5" transform="rotate(18 0 -1)"></svg:path><svg:use width="100%" height="100%" href="#flagGd1x12" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagGd1x11" transform="rotate(72)"></svg:use><svg:use width="100%" height="100%" href="#flagGd1x11" transform="rotate(144)"></svg:use><svg:use width="100%" height="100%" href="#flagGd1x11" transform="rotate(-144)"></svg:use><svg:use width="100%" height="100%" href="#flagGd1x11" transform="rotate(-72)"></svg:use></svg:g></svg:defs><svg:path fill="#ce1126" d="M0 0h512v512H0z"></svg:path><svg:path fill="#007a5e" d="M71.7 71.7h368.6v368.6H71.7z"></svg:path><svg:path fill="#fcd116" d="M71.7 71.7h368.6L71.7 440.4h368.6z"></svg:path><svg:circle cx="255.9" cy="256.1" r="61.4" fill="#ce1126"></svg:circle><svg:use width="100%" height="100%" href="#flagGd1x10" transform="translate(256 256)scale(56.32)"></svg:use><svg:use width="100%" height="100%" x="-100" href="#flagGd1x13" transform="translate(-16.4 -.1)"></svg:use><svg:use id="flagGd1x13" width="100%" height="100%" href="#flagGd1x10" transform="translate(256 35.9)scale(33.28)"></svg:use><svg:use width="100%" height="100%" x="100" href="#flagGd1x13" transform="translate(16.4)"></svg:use><svg:path fill="#ce1126" d="M99.8 256.8c7.7 14.3 22.6 29.8 35.7 35.3c.2-14.5-5-33.2-12-48z"></svg:path><svg:path fill="#fcd116" d="M86.8 207.6c11.1 23.3-29 78.7 37.8 91.7a68 68 0 0 1-11.5-44.7a76 76 0 0 1 34.6 32.8c17.5-63.4-44.8-59.5-61-79.8z"></svg:path><svg:use width="100%" height="100%" x="-100" href="#flagGd1x13" transform="translate(-16.4 442)"></svg:use><svg:use width="100%" height="100%" href="#flagGd1x10" transform="translate(256 478)scale(33.28)"></svg:use><svg:use width="100%" height="100%" x="100" href="#flagGd1x13" transform="translate(16.4 442.2)"></svg:use>`,
})
export class FlagGd1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
