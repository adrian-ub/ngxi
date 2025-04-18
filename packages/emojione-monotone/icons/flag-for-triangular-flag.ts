import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForTriangularFlagIcon],svg[emojione-monotone-flag-for-triangular-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M54.896 18.592L19.103 2h-3.752v55.405C11.155 57.624 8 58.558 8 59.679C8 60.961 12.132 62 17.229 62c5.091 0 9.223-1.039 9.223-2.321c0-1.121-3.155-2.055-7.349-2.273V39.018c4.322-2.002 33.981-15.751 35.794-16.593c1.471-.682 1.471-3.15-.001-3.833"></svg:path>`,
})
export class EmojioneMonotoneFlagForTriangularFlagIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
