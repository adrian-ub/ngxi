import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPailIcon],svg[mdi-pail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 7.63a.976.976 0 0 1 1.36.37c.28.47.11 1.09-.36 1.36l-8.23 4.75a.998.998 0 1 1-1-1.73zM7 21l-1.21-6.03l7.42-4.28c.79-.43 1.29-1.25 1.29-2.19a2.5 2.5 0 0 0-3.79-2.14L4.76 9.79L4 6H3V4h18v2h-1l-3 15z"></svg:path>`,
})
export class MdiPailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
