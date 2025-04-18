import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagKe1x1Icon],svg[flag-ke-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="flagKe1x10" fill="#000" stroke-miterlimit="10" d="m-28.6 47.5l1.8 1l46.7-81c2.7-.6 4.2-3.2 5.7-5.8c1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"></svg:path></svg:defs><svg:path fill="#fff" d="M0 0h512v512H0z"></svg:path><svg:path fill="#000001" d="M0 0h512v153.6H0z"></svg:path><svg:path fill="#060" d="M0 358.4h512V512H0z"></svg:path><svg:g id="flagKe1x11" transform="matrix(3.2 0 0 3.2 255.8 256)"><svg:use width="100%" height="100%" stroke="#000" href="#flagKe1x10"></svg:use><svg:use width="100%" height="100%" fill="#fff" href="#flagKe1x10"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagKe1x11" transform="matrix(-1 0 0 1 511.7 0)"></svg:use><svg:path fill="#b00" d="M255.8 102.4c-19.2 0-51.2 51.2-60.8 76.8H0v153.6h195c9.7 25.6 41.7 76.8 60.9 76.8s51.2-51.2 60.8-76.8H512V179.2H316.6c-9.6-25.6-41.6-76.8-60.8-76.8"></svg:path><svg:path id="flagKe1x12" fill="#000" d="M316.6 332.8a220 220 0 0 0 16-76.8a220 220 0 0 0-16-76.8a220 220 0 0 0-16 76.8a220 220 0 0 0 16 76.8"></svg:path><svg:use width="100%" height="100%" href="#flagKe1x12" transform="matrix(-1 0 0 1 511.7 0)"></svg:use><svg:g fill="#fff" transform="matrix(3.2 0 0 3.2 255.8 256)"><svg:ellipse rx="4" ry="6"></svg:ellipse><svg:path id="flagKe1x13" d="M1 5.8s4 8 4 21s-4 21-4 21z"></svg:path><svg:use width="100%" height="100%" href="#flagKe1x13" transform="scale(-1)"></svg:use><svg:use width="100%" height="100%" href="#flagKe1x13" transform="scale(-1 1)"></svg:use><svg:use width="100%" height="100%" href="#flagKe1x13" transform="scale(1 -1)"></svg:use></svg:g>`,
})
export class FlagKe1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
