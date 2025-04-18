import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmojisMelon1Icon],svg[streamline-emojis-melon-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#45413c" d="M12.6 42.19a13.24 1.81 0 1 0 26.48 0a13.24 1.81 0 1 0-26.48 0" opacity=".15"></svg:path><svg:path fill="#9ceb60" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="m43.41 8.94l-6.58 1.19a14.62 14.62 0 0 1-26.16 8.25l-8.8 3.85A22.16 22.16 0 1 0 43.41 8.94"></svg:path><svg:path fill="#ffaa54" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M43.3 18.12a19.6 19.6 0 0 0-2.08-8.78l-4.39.79a14.62 14.62 0 0 1-26.16 8.25l-6.61 2.89a19.75 19.75 0 0 0 39.24-3.15"></svg:path><svg:path fill="#ff8a14" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M33.51 26.4c7.3-5.19 3.32-16.27 3.32-16.27a14.62 14.62 0 0 1-26.16 8.25S20 36 33.51 26.4"></svg:path>`,
})
export class StreamlineEmojisMelon1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
