import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feStepForwardIcon],svg[fe-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9v10h7a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h7V9H8.76C8.34 9 8 8.68 8 8.285a.7.7 0 0 1 .128-.396l3.24-4.57a.79.79 0 0 1 1.054-.199a.7.7 0 0 1 .21.198l3.24 4.57a.69.69 0 0 1-.21.992a.8.8 0 0 1-.422.12zm7 4a1 1 0 0 1 0 2h-5v-2zM8 13h1v2H4a1 1 0 0 1 0-2z"></svg:path>`,
})
export class FeStepForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
