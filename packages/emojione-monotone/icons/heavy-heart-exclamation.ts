import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneHeavyHeartExclamationIcon],svg[emojione-monotone-heavy-heart-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="52" r="10" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M57.411 11.809C52.925-2.703 34.297 1.155 32 8.862C29.705 1.155 11.077-2.703 6.59 11.809C4.638 18.123 7.723 24 13.038 27.715C20.152 32.687 28.542 32.707 32 42c3.458-9.293 11.849-9.313 18.963-14.285c5.316-3.715 8.399-9.592 6.448-15.906"></svg:path>`,
})
export class EmojioneMonotoneHeavyHeartExclamationIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
