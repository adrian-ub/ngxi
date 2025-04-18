import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGd4x3Icon],svg[flag-gd-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:g id="flagGd4x30"><svg:g id="flagGd4x31"><svg:path id="flagGd4x32" fill="#fcd116" d="M0-1v1h.5" transform="rotate(18 0 -1)"></svg:path><svg:use href="#flagGd4x32" transform="scale(-1 1)"></svg:use></svg:g><svg:use href="#flagGd4x31" transform="rotate(72)"></svg:use><svg:use href="#flagGd4x31" transform="rotate(144)"></svg:use><svg:use href="#flagGd4x31" transform="rotate(216)"></svg:use><svg:use href="#flagGd4x31" transform="rotate(288)"></svg:use></svg:g></svg:defs><svg:path fill="#ce1126" d="M0 0h640v480H0z"></svg:path><svg:path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z"></svg:path><svg:path fill="#fcd116" d="M67.2 67.3h505.6L67.2 412.9h505.6z"></svg:path><svg:circle cx="319.9" cy="240.1" r="57.6" fill="#ce1126"></svg:circle><svg:use width="100%" height="100%" href="#flagGd4x30" transform="translate(320 240)scale(52.8)"></svg:use><svg:use width="100%" height="100%" x="-100" href="#flagGd4x33" transform="translate(-30.3)"></svg:use><svg:use id="flagGd4x33" width="100%" height="100%" href="#flagGd4x30" transform="translate(320 33.6)scale(31.2)"></svg:use><svg:use width="100%" height="100%" x="100" href="#flagGd4x33" transform="translate(30.3)"></svg:use><svg:path fill="#ce1126" d="M102.3 240.7a80 80 0 0 0 33.5 33.2a111 111 0 0 0-11.3-45z"></svg:path><svg:path fill="#fcd116" d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63 63 0 0 1-10.9-41.9a70 70 0 0 1 32.5 30.8c16.4-59.5-42-55.8-57.1-74.8"></svg:path><svg:use width="100%" height="100%" x="-100" href="#flagGd4x33" transform="translate(-30.3 414.6)"></svg:use><svg:use width="100%" height="100%" href="#flagGd4x30" transform="translate(320 448.2)scale(31.2)"></svg:use><svg:use width="100%" height="100%" x="100" href="#flagGd4x33" transform="translate(30.3 414.6)"></svg:use>`,
})
export class FlagGd4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
