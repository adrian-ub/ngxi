import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCheeseIcon],svg[bx-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.16 2a1 1 0 0 0-.66.13l-12 7a.6.6 0 0 0-.13.1l-.1.08a1.2 1.2 0 0 0-.17.26a.84.84 0 0 0-.1.43v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a8.08 8.08 0 0 0-6.84-8m0 2.05A6.07 6.07 0 0 1 19.93 9H6.7zM20 19H4v-8h16z"></svg:path><svg:circle cx="6.5" cy="16.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="11.5" cy="13.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="17" cy="16" r="2" fill="currentColor"></svg:circle>`,
})
export class BxCheeseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
