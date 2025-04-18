import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneEndArrowIcon],svg[emojione-end-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4d5357" d="M3 18L19 2v10h42v12H19v10zm22 25.4V40H13v22h12v-3.4h-9v-5.9h9v-3.4h-9v-5.9zM51 40h-6v22h6c3.3 0 6-2.8 6-6.3v-9.3c0-3.6-2.7-6.4-6-6.4m3 15.7c0 1.6-1.3 3-3 3h-3V43.4h3c1.7 0 3 1.3 3 3zm-22-8L37.8 62H41V40h-3v14.3L32.2 40H29v22h3z"></svg:path>`,
})
export class EmojioneEndArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
