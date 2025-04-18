import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneRedHeartIcon],svg[emojione-monotone-red-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61.072 17.583C54.678-.04 33.918 7.867 31.998 16.668c-2.641-9.379-22.89-16.376-29.07.928c-6.881 19.273 26.67 36.57 29.07 39.404c2.398-2.252 35.953-20.457 29.074-39.417"></svg:path>`,
})
export class EmojioneMonotoneRedHeartIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
