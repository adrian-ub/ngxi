import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesExclamationSolidIcon],svg[bubbles-exclamation-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="11.5" r="2" fill="currentColor"></svg:circle>`,
})
export class BubblesExclamationSolidIcon {
  readonly viewBox = input("0 0 16 15")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
