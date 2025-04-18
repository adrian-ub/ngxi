import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForPanamaIcon],svg[emojione-monotone-flag-for-panama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.418 17.004l-1.168-3.687l-1.135 3.687h-3.782l3.025 2.395l-1.146 3.751l3.038-2.307l3.038 2.307l-1.146-3.751l3.025-2.395zm25.294 31.713l3.038-2.307l3.038 2.307l-1.146-3.751l3.025-2.396h-3.749l-1.168-3.687l-1.135 3.687h-3.782l3.025 2.396z"></svg:path><svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m0 58V32H4C4 16.561 16.561 4 32 4v28h28c0 15.439-12.561 28-28 28"></svg:path>`,
})
export class EmojioneMonotoneFlagForPanamaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
