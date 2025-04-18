import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagUz4x3Icon],svg[flag-uz-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1eb53a" d="M0 320h640v160H0z"></svg:path><svg:path fill="#0099b5" d="M0 0h640v160H0z"></svg:path><svg:path fill="#ce1126" d="M0 153.6h640v172.8H0z"></svg:path><svg:path fill="#fff" d="M0 163.2h640v153.6H0z"></svg:path><svg:circle cx="134.4" cy="76.8" r="57.6" fill="#fff"></svg:circle><svg:circle cx="153.6" cy="76.8" r="57.6" fill="#0099b5"></svg:circle><svg:g fill="#fff" transform="translate(261.1 122.9)scale(1.92)"><svg:g id="flagUz4x30"><svg:g id="flagUz4x31"><svg:g id="flagUz4x32"><svg:g id="flagUz4x33"><svg:path id="flagUz4x34" d="M0-6L-1.9-.3L1 .7"></svg:path><svg:use width="100%" height="100%" href="#flagUz4x34" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagUz4x33" transform="rotate(72)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagUz4x33" transform="rotate(-72)"></svg:use><svg:use width="100%" height="100%" href="#flagUz4x32" transform="rotate(144)"></svg:use></svg:g><svg:use width="100%" height="100%" y="-24" href="#flagUz4x31"></svg:use><svg:use width="100%" height="100%" y="-48" href="#flagUz4x31"></svg:use></svg:g><svg:use width="100%" height="100%" x="24" href="#flagUz4x30"></svg:use><svg:use width="100%" height="100%" x="48" href="#flagUz4x30"></svg:use><svg:use width="100%" height="100%" x="-48" href="#flagUz4x31"></svg:use><svg:use width="100%" height="100%" x="-24" href="#flagUz4x31"></svg:use><svg:use width="100%" height="100%" x="-24" y="-24" href="#flagUz4x31"></svg:use></svg:g>`,
})
export class FlagUz4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
