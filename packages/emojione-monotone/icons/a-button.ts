import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneAButtonIcon],svg[emojione-monotone-a-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.271 30h7.459l-3.729-9.938z"></svg:path><svg:path fill="currentColor" d="M52 2H12C6.477 2 2 6.476 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.524-4.477-10-10-10M41.733 46l-4.202-11.199h-11.06L22.267 46H17l12.01-32h5.982L47 46z"></svg:path>`,
})
export class EmojioneMonotoneAButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
