import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneZipperMouthFaceIcon],svg[emojione-zipper-mouth-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#696a6b"><svg:path d="m47.9 43.9l-4 4q-.3.3 0 .6l9.6 11.4c.1.1.4.2.5 0l5.9-5.9q.3-.3 0-.6l-11.4-9.6c-.2-.1-.4-.1-.6.1m9.8 9.7c.1.1.1.4 0 .5L54 57.7c-.1.1-.4.1-.5 0L50.3 54l3.6-3.6z"></svg:path><svg:path d="M47.6 42h-3.2c-.2 0-.4.2-.4.4v2c0-.2-.2-.4-.4-.4h-3.2c-.2 0-.4.2-.4.4v-2c0-.2-.2-.4-.4-.4h-3.2c-.2 0-.4.2-.4.4v2c0-.2-.2-.4-.4-.4h-3.2c-.2 0-.4.2-.4.4v-2c0-.2-.2-.4-.4-.4h-3.2c-.2 0-.4.2-.4.4v2c0-.2-.2-.4-.4-.4h-3.2c-.2 0-.4.2-.4.4v-2c0-.2-.2-.4-.4-.4h-3.2c-.2 0-.4.2-.4.4v2c0-.2-.2-.4-.4-.4h-3.2c-.2 0-.4.2-.4.4v5.3c0 .2.2.4.4.4h3.2c.2 0 .4-.2.4-.4v-2c0 .2.2.4.4.4h3.2c.2 0 .4-.2.4-.4v2c0 .2.2.4.4.4h3.2c.2 0 .4-.2.4-.4v-2c0 .2.2.4.4.4h3.2c.2 0 .4-.2.4-.4v2c0 .2.2.4.4.4h3.2c.2 0 .4-.2.4-.4v-2c0 .2.2.4.4.4h3.2c.2 0 .4-.2.4-.4v2c0 .2.2.4.4.4h3.2c.2 0 .4-.2.4-.4v-2c0 .2.2.4.4.4h3.2c.2 0 .4-.2.4-.4v-5.3c0-.2-.2-.4-.4-.4"></svg:path></svg:g><svg:g fill="#664e27"><svg:circle cx="20.5" cy="29" r="5"></svg:circle><svg:circle cx="43.5" cy="29" r="5"></svg:circle></svg:g>`,
})
export class EmojioneZipperMouthFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
