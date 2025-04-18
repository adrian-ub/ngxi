import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiEuroIcon],svg[oi-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 0C3.14 0 1.6 1.28 1.16 3H-.75L-1 4h2.01c0 .35.07.68.16 1H-.8l-.19 1h2.56c.7 1.19 1.97 2 3.44 2c.73 0 1.41-.21 2-.56V6.22c-.53.48-1.22.78-2 .78c-.89 0-1.67-.39-2.22-1h2.22l.16-1H2.2a3 3 0 0 1-.19-1h3.34l.16-1H2.2a2.988 2.988 0 0 1 4.56-1.44L6.92.5C6.35.19 5.71 0 5.01 0z"></svg:path>`,
})
export class OiEuroIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
