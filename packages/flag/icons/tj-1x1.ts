import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagTj1x1Icon],svg[flag-tj-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#060" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M0 0h512v365.7H0z"></svg:path><svg:path fill="#c00" d="M0 0h512v146.3H0z"></svg:path><svg:g fill="#f8c300" transform="translate(-256)scale(.73143)"><svg:path d="M672 340.7a12.5 12.5 0 0 1 23.3 5.9v50h9.4v-50a12.5 12.5 0 0 1 23.3-5.9a29.5 29.5 0 1 0-56 0"></svg:path><svg:path fill="#fff" d="M678.7 327.6a20 20 0 0 1 21.3 9.6a20 20 0 0 1 21.3-9.6a21.5 21.5 0 0 0-42.6 0"></svg:path><svg:path id="flagTj1x10" d="M695.3 376.6a38 38 0 0 1-63.8 24.3a39.5 39.5 0 0 1-59.8 17.5c3.7 36.4 58.3 29 62.3-6.4c17.2 30.1 55 21.5 66-15.4z"></svg:path><svg:use width="100%" height="100%" href="#flagTj1x10" transform="matrix(-1 0 0 1 1400 0)"></svg:use><svg:path id="flagTj1x11" d="M658.8 441.3c-7.6 16.5-22.8 19.3-36.1 6c0 0 5.3-3.8 11-4.8a18 18 0 0 1 4.3-14.3a22 22 0 0 1 9 11.8c8-1 11.8 1.3 11.8 1.3"></svg:path><svg:use width="100%" height="100%" href="#flagTj1x11" transform="rotate(9.4 700 804)"></svg:use><svg:use width="100%" height="100%" href="#flagTj1x11" transform="rotate(18.7 700 804)"></svg:use><svg:path fill="none" stroke="#f8c300" stroke-width="16" d="M603 478a340 340 0 0 1 194 0"></svg:path><svg:g transform="translate(700 380)"><svg:g transform="translate(0 -140)"><svg:path id="flagTj1x12" d="m488533-158734l-790463 574305L0-513674l301930 929245l-790463-574305z" transform="scale(.00005)"></svg:path></svg:g><svg:g id="flagTj1x13"><svg:use width="100%" height="100%" href="#flagTj1x12" transform="translate(-70 -121.2)"></svg:use><svg:use width="100%" height="100%" href="#flagTj1x12" transform="translate(-121.2 -70)"></svg:use><svg:use width="100%" height="100%" href="#flagTj1x12" transform="translate(-140)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagTj1x13" transform="scale(-1 1)"></svg:use></svg:g></svg:g>`,
})
export class FlagTj1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
