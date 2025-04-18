import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiChopsticksIcon],svg[arcticons-emoji-chopsticks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.83 42.501L10.63 12.42a1.556 1.556 0 1 0-2.202 2.2zm2.199-1.191L19.727 6.21a1.558 1.558 0 0 0-2.615 1.69z"></svg:path>`,
})
export class ArcticonsEmojiChopsticksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
