import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPailOutlineIcon],svg[mdi-pail-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 7.63a.976.976 0 0 1 1.36.37c.28.47.11 1.09-.36 1.36l-8.23 4.75a.998.998 0 1 1-1-1.73zM3 4v2h1l.65 3.27L6.5 8.22L6.04 6h11.92l-2.6 13H8.64l-.91-4.57L5.9 15.5L7 21h10l3-15h1V4z"></svg:path>`,
})
export class MdiPailOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
