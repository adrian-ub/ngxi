import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForJordanIcon],svg[emojione-flag-for-jordan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3e4347" d="M8 22h52.3C56.2 10.4 45.1 2 32 2C22.2 2 13.5 6.7 8 14z"></svg:path><svg:path fill="#f9f9f9" d="M60.3 22H8v20h52.3c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10"></svg:path><svg:path fill="#75a843" d="M8 42v8c5.5 7.3 14.2 12 24 12c13.1 0 24.2-8.3 28.3-20z"></svg:path><svg:path fill="#c94747" d="M8 14c-3.8 5-6 11.2-6 18s2.2 13 6 18l24-18z"></svg:path><svg:path fill="#fff" d="m11 29.7l1-2.7l1 2.7l2.5-1.2l-1.2 2.5l2.7 1l-2.7 1l1.2 2.5l-2.5-1.2l-1 2.7l-1-2.7l-2.5 1.2L9.7 33L7 32l2.7-1l-1.2-2.5z"></svg:path>`,
})
export class EmojioneFlagForJordanIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
