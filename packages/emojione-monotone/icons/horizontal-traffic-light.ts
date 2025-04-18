import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneHorizontalTrafficLightIcon],svg[emojione-monotone-horizontal-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47 17H17C8.75 17 2 23.75 2 32s6.75 15 15 15h30c8.25 0 15-6.749 15-15c0-8.25-6.75-15-15-15M13.25 39.5a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15m18.75 0a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15m18.75 0a7.5 7.5 0 1 1 0-15a7.5 7.5 0 0 1 0 15"></svg:path>`,
})
export class EmojioneMonotoneHorizontalTrafficLightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
