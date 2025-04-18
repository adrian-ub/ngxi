import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPailMinusIcon],svg[mdi-pail-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.5 9.36l-8.23 4.75a.998.998 0 1 1-1-1.73l8.23-4.75a.976.976 0 0 1 1.36.37c.28.47.11 1.09-.36 1.36M13 19c0-3.18 2.47-5.77 5.6-6L20 6h1V4H3v2h1l.76 3.79l5.95-3.43A2.5 2.5 0 0 1 14.5 8.5c0 .94-.5 1.76-1.29 2.19l-7.42 4.28L7 21h6.35c-.22-.63-.35-1.3-.35-2m2-1v2h8v-2z"></svg:path>`,
})
export class MdiPailMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
