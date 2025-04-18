import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneHeavyPlusSignIcon],svg[emojione-heavy-plus-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4d5357" d="M38 26V2H26v24H2v12h24v24h12V38h24V26z"></svg:path>`,
})
export class EmojioneHeavyPlusSignIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
