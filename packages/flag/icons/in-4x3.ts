import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagIn4x3Icon],svg[flag-in-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f93" d="M0 0h640v160H0z"></svg:path><svg:path fill="#fff" d="M0 160h640v160H0z"></svg:path><svg:path fill="#128807" d="M0 320h640v160H0z"></svg:path><svg:g transform="matrix(3.2 0 0 3.2 320 240)"><svg:circle r="20" fill="#008"></svg:circle><svg:circle r="17.5" fill="#fff"></svg:circle><svg:circle r="3.5" fill="#008"></svg:circle><svg:g id="flagIn4x30"><svg:g id="flagIn4x31"><svg:g id="flagIn4x32"><svg:g id="flagIn4x33" fill="#008"><svg:circle r=".9" transform="rotate(7.5 -8.8 133.5)"></svg:circle><svg:path d="M0 17.5L.6 7L0 2l-.6 5z"></svg:path></svg:g><svg:use width="100%" height="100%" href="#flagIn4x33" transform="rotate(15)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagIn4x32" transform="rotate(30)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagIn4x31" transform="rotate(60)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagIn4x30" transform="rotate(120)"></svg:use><svg:use width="100%" height="100%" href="#flagIn4x30" transform="rotate(-120)"></svg:use></svg:g>`,
})
export class FlagIn4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
