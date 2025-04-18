import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiKeyMinusIcon],svg[mdi-key-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 3c2 0 3.6 1.2 4.2 3H21v3h-3v3h-3V9h-3.3c-.6 1.8-2.3 3-4.2 3C5 12 3 10 3 7.5S5 3 7.5 3m0 3C6.7 6 6 6.7 6 7.5S6.7 9 7.5 9S9 8.3 9 7.5S8.3 6 7.5 6M8 17h8v2H8z"></svg:path>`,
})
export class MdiKeyMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
