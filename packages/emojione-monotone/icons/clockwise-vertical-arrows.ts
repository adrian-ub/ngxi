import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneClockwiseVerticalArrowsIcon],svg[emojione-monotone-clockwise-vertical-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m39.5 61.077l-6.383-8.703q-.385.02-.776.021c-5.604 0-10.163-3.589-10.163-8.002V24.958h7.984L16.081 5.75L2 24.958h7.981v19.435c0 4.704 2.327 9.122 6.55 12.449C20.756 60.169 26.369 62 32.341 62c2.472 0 4.882-.313 7.159-.923m-7.809-49.48c5.597 0 10.152 3.583 10.152 7.99v19.478h-7.975L47.935 58.25L62 39.064h-7.975V19.587c0-4.698-2.323-9.112-6.541-12.435C43.264 3.831 37.656 2 31.691 2c-2.483 0-4.904.32-7.191.932l6.371 8.687q.408-.022.82-.022"></svg:path>`,
})
export class EmojioneMonotoneClockwiseVerticalArrowsIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
