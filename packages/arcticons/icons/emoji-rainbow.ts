import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiRainbowIcon],svg[arcticons-emoji-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.165 42.5c0-17.858 14.477-32.335 32.335-32.335"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.83 42.5c0-15.281 12.388-27.67 27.67-27.67"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.496 42.5c0-12.705 10.3-23.004 23.004-23.004"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.16 42.5c0-10.128 8.212-18.34 18.34-18.34"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.826 42.5c0-7.552 6.122-13.674 13.674-13.674V5.5c-20.434 0-37 16.566-37 37z"></svg:path>`,
})
export class ArcticonsEmojiRainbowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
