import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagIn1x1Icon],svg[flag-in-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f93" d="M0 0h512v170.7H0z"></svg:path><svg:path fill="#fff" d="M0 170.7h512v170.6H0z"></svg:path><svg:path fill="#128807" d="M0 341.3h512V512H0z"></svg:path><svg:g transform="translate(256 256)scale(3.41333)"><svg:circle r="20" fill="#008"></svg:circle><svg:circle r="17.5" fill="#fff"></svg:circle><svg:circle r="3.5" fill="#008"></svg:circle><svg:g id="flagIn1x10"><svg:g id="flagIn1x11"><svg:g id="flagIn1x12"><svg:g id="flagIn1x13" fill="#008"><svg:circle r=".9" transform="rotate(7.5 -8.8 133.5)"></svg:circle><svg:path d="M0 17.5L.6 7L0 2l-.6 5z"></svg:path></svg:g><svg:use width="100%" height="100%" href="#flagIn1x13" transform="rotate(15)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagIn1x12" transform="rotate(30)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagIn1x11" transform="rotate(60)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagIn1x10" transform="rotate(120)"></svg:use><svg:use width="100%" height="100%" href="#flagIn1x10" transform="rotate(-120)"></svg:use></svg:g>`,
})
export class FlagIn1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
