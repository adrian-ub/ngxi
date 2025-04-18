import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsDivisionIcon],svg[pepicons-division-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H5Z"></svg:path><svg:circle cx="10" cy="5.5" r="1.5"></svg:circle><svg:circle cx="10" cy="14.5" r="1.5"></svg:circle></svg:g>`,
})
export class PepiconsDivisionIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
