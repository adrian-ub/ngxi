import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1CancellationXIcon],svg[emojione-v1-cancellation-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#405866" d="M50.23 3.872L31.995 22.107q-9.12-9.115-18.235-18.235C.586 1.601 1.595.592 3.866 13.768C9.943 19.842 16.025 25.923 22.099 32L3.866 50.233C1.595 63.407.586 62.398 13.76 60.128q9.116-9.12 18.235-18.236c6.08 6.079 12.154 12.157 18.235 18.236c13.173 2.27 12.164 3.279 9.895-9.892Q51.005 41.116 41.886 32q9.12-9.12 18.239-18.235C62.394.592 63.403 1.601 50.23 3.872"></svg:path>`,
})
export class EmojioneV1CancellationXIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
