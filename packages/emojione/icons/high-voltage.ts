import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneHighVoltageIcon],svg[emojione-high-voltage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffce31" d="m44.5 2l-9 2.5L29.4 2l-9.9 34.4h10.4L20.8 62l22.4-34.4H29.7z"></svg:path>`,
})
export class EmojioneHighVoltageIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
