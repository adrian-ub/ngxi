import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagKe4x3Icon],svg[flag-ke-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="flagKe4x30" fill="#000" stroke-miterlimit="10" d="m-28.6 47.5l1.8 1l46.7-81c2.7-.6 4.2-3.2 5.7-5.8c1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"></svg:path></svg:defs><svg:path fill="#fff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#000001" d="M0 0h640v144H0z"></svg:path><svg:path fill="#060" d="M0 336h640v144H0z"></svg:path><svg:g id="flagKe4x31" transform="matrix(3 0 0 3 320 240)"><svg:use width="100%" height="100%" stroke="#000" href="#flagKe4x30"></svg:use><svg:use width="100%" height="100%" fill="#fff" href="#flagKe4x30"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagKe4x31" transform="matrix(-1 0 0 1 640 0)"></svg:use><svg:path fill="#b00" d="M640.5 168H377c-9-24-39-72-57-72s-48 48-57 72H-.2v144H263c9 24 39 72 57 72s48-48 57-72h263.5z"></svg:path><svg:path id="flagKe4x32" fill="#000" d="M377 312c9-24 15-48 15-72s-6-48-15-72c-9 24-15 48-15 72s6 48 15 72"></svg:path><svg:use width="100%" height="100%" href="#flagKe4x32" transform="matrix(-1 0 0 1 640 0)"></svg:use><svg:g fill="#fff" transform="matrix(3 0 0 3 320 240)"><svg:ellipse rx="4" ry="6"></svg:ellipse><svg:path id="flagKe4x33" d="M1 5.8s4 8 4 21s-4 21-4 21z"></svg:path><svg:use width="100%" height="100%" href="#flagKe4x33" transform="scale(-1)"></svg:use><svg:use width="100%" height="100%" href="#flagKe4x33" transform="scale(-1 1)"></svg:use><svg:use width="100%" height="100%" href="#flagKe4x33" transform="scale(1 -1)"></svg:use></svg:g>`,
})
export class FlagKe4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
