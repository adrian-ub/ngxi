import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneHighVoltageIcon],svg[emojione-monotone-high-voltage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m45 2l-9.396 2.48L29.298 2L19 36.354h10.865L20.352 62L43.65 27.648H29.626z"></svg:path>`,
})
export class EmojioneMonotoneHighVoltageIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
