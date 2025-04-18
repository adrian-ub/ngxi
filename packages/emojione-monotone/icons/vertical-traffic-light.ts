import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneVerticalTrafficLightIcon],svg[emojione-monotone-vertical-traffic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2c-8.25 0-15 6.751-15 15v30c0 8.25 6.75 15 15 15s15-6.75 15-15V17c0-8.249-6.75-15-15-15m0 56.25a7.5 7.5 0 0 1-7.5-7.5a7.5 7.5 0 1 1 7.5 7.5m0-18.75a7.5 7.5 0 0 1-7.5-7.5a7.5 7.5 0 1 1 7.5 7.5m0-18.75a7.5 7.5 0 0 1-7.5-7.5a7.5 7.5 0 1 1 7.5 7.5"></svg:path>`,
})
export class EmojioneMonotoneVerticalTrafficLightIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
