import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesLocationOutlineIcon],svg[bubbles-location-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width=".813"><svg:path d="M10.081 5.283c0 2.495-1.733 3.93-3.033 5.32c-.778.833-1.4 3.547-1.4 3.547s-.62-2.712-1.397-3.542c-1.3-1.39-3.037-2.827-3.037-5.325a4.434 4.434 0 0 1 8.867 0"></svg:path><svg:path d="M3.874 5.283a1.773 1.773 0 1 0 3.547 0a1.773 1.773 0 0 0-3.547 0"></svg:path></svg:g>`,
})
export class BubblesLocationOutlineIcon {
  readonly viewBox = input("0 0 11 15")
  readonly width = input("0.74em")
  readonly height = input("1em")
}
