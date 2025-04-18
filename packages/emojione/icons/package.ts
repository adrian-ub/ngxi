import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojionePackageIcon],svg[emojione-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#89664c" d="M32 64L0 44.8V19.2l32 19.2z"></svg:path><svg:path fill="#fed0ac" d="M32 38.4V64l32-19.2V19.2z"></svg:path><svg:path fill="#d3976e" d="m0 19.2l32 19.2l32-19.2L32 0z"></svg:path><svg:path fill="#89664c" d="M50.9 27L19 7.8l-6 3.6l32 19.2z"></svg:path><svg:path fill="#d0d0d0" d="m39.3 6.8l-7.1-4.4L26.3 6l7.1 4.3z"></svg:path><svg:path fill="#d3976e" d="m50.8 27.1l-5.6 3.4v9.2l5.6-3.4z"></svg:path><svg:path fill="#fff" d="m62.5 22.1l-5.7 3.4v9.2l5.7-3.4zM41.6 43.5l-7.7 4.6v12.6l7.7-4.7z"></svg:path><svg:path fill="#d3976e" d="m45.2 56.1l5.6-3.4v-9.2l-5.6 3.4z"></svg:path>`,
})
export class EmojionePackageIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
