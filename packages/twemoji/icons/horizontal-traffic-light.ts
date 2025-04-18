import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiHorizontalTrafficLightIcon],svg[twemoji-horizontal-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M36 23a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V13a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"></svg:path><svg:circle cx="7" cy="18" r="4" fill="#77B255"></svg:circle><svg:circle cx="18" cy="18" r="4" fill="#FFCC4D"></svg:circle><svg:circle cx="29" cy="18" r="4" fill="#DD2E44"></svg:circle>`,
})
export class TwemojiHorizontalTrafficLightIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
