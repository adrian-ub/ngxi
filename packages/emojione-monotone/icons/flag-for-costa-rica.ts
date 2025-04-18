import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneFlagForCostaRicaIcon],svg[emojione-monotone-flag-for-costa-rica-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m-17.755 8.366h35.511a28.16 28.16 0 0 1 7.628 9.834H6.616a28.2 28.2 0 0 1 7.629-9.834m35.511 43.267H14.244A28.16 28.16 0 0 1 6.617 43.8h50.768a28.2 28.2 0 0 1-7.629 9.833"></svg:path>`,
})
export class EmojioneMonotoneFlagForCostaRicaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
