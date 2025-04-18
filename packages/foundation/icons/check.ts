import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationCheckIcon],svg[foundation-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88.04 30.319L75.124 17.401a2.42 2.42 0 0 0-3.419 0L37.392 51.714l-9.094-9.093a2.42 2.42 0 0 0-3.419 0L11.96 55.539a2.42 2.42 0 0 0 0 3.419L35.607 82.6a2.42 2.42 0 0 0 1.709.708c.029 0 .055-.016.083-.016c.024 0 .05.014.075.014c.621 0 1.236-.236 1.709-.708l48.857-48.86a2.416 2.416 0 0 0 0-3.419"></svg:path>`,
})
export class FoundationCheckIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
