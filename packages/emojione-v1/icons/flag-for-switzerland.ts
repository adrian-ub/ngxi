import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForSwitzerlandIcon],svg[emojione-v1-flag-for-switzerland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec1c24" d="M10 11C3.373 11 0 15.925 0 22v22c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11V22c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#fff" d="M19 38h8v8h9v-8h8v-9h-8v-8h-9v8h-8z"></svg:path>`,
})
export class EmojioneV1FlagForSwitzerlandIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
