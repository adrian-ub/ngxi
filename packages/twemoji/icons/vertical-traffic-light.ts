import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiVerticalTrafficLightIcon],svg[twemoji-vertical-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M27 32a4 4 0 0 1-4 4H13a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></svg:path><svg:path fill="#77B255" d="M17.999 25a4 4 0 1 1 0 8a4 4 0 0 1 0-8"></svg:path><svg:path fill="#FFCC4D" d="M17.999 14a4 4 0 1 1 0 8a4 4 0 0 1 0-8"></svg:path><svg:path fill="#DD2E44" d="M17.999 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8"></svg:path>`,
})
export class TwemojiVerticalTrafficLightIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
