import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feCoffeeIcon],svg[fe-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 17h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2M17 7h1a2 2 0 1 1 0 4h-1l-.1-.002A5 5 0 0 1 12 15h-2a5 5 0 0 1-5-5V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2M7 7v3a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V7z"></svg:path>`,
})
export class FeCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
