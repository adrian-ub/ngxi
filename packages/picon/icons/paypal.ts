import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPaypalIcon],svg[picon-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2q0 4-4 4v2H3V5q5 0 4-4M0 7V0h5q3 4-3 4v3"></svg:path>`,
})
export class PiconPaypalIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
