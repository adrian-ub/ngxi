import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsMonoprixIcon],svg[simple-icons-monoprix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.072 8.042C21.072 3.612 16.981 0 12 0C6.991 0 2.928 3.612 2.928 8.042S6.99 16.085 12 16.085c.282 0 .564-.029.847-.043c.62.339.747.706.761.988c.142 1.608-2.44 5.08-4.303 6.49l.254.48c.113-.028 10.723-3.47 11.429-15.026c.056-.283.07-.565.084-.875v-.043z"></svg:path>`,
})
export class SimpleIconsMonoprixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
