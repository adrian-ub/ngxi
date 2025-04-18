import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForMadagascarIcon],svg[emojione-v1-flag-for-madagascar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#156d08" d="M4 43c0 6.075 1.373 11 8 11h42c6.627 0 10-4.925 10-11V32H2z"></svg:path><svg:path fill="#c32129" d="M54 10H12C5.373 10 1 14.925 1 21v12h63V21c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#e6e7e8" d="M10 10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h12V10z"></svg:path>`,
})
export class EmojioneV1FlagForMadagascarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
