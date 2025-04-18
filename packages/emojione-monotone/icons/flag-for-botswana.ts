import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForBotswanaIcon],svg[emojione-monotone-flag-for-botswana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2M5.133 39.867a28 28 0 0 1-.692-2.95h55.118a28 28 0 0 1-.691 2.95zm-.692-12.784q.268-1.505.692-2.949h53.734q.425 1.445.691 2.949z"></svg:path>`,
})
export class EmojioneMonotoneFlagForBotswanaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
