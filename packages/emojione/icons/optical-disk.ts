import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneOpticalDiskIcon],svg[emojione-optical-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#d0d0d0"></svg:circle><svg:g fill="#fff"><svg:circle cx="32" cy="32" r="6.6"></svg:circle><svg:path d="m32.2 42.6l9.2 13.6c6.8-2.6 12.2-8 14.8-14.8l-13.6-9.2c-.1 5.7-4.7 10.3-10.4 10.4m-.4-21.2L22.6 7.8c-6.8 2.6-12.2 8-14.8 14.8l13.6 9.2c.1-5.7 4.7-10.3 10.4-10.4"></svg:path></svg:g><svg:path fill="#94989b" d="M32 45c-7.1 0-13-5.8-13-13c0-7.1 5.8-13 13-13c7.1 0 13 5.8 13 13c0 7.1-5.9 13-13 13m0-23.3c-5.7 0-10.3 4.6-10.3 10.3S26.3 42.3 32 42.3S42.3 37.7 42.3 32S37.7 21.7 32 21.7"></svg:path>`,
})
export class EmojioneOpticalDiskIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
