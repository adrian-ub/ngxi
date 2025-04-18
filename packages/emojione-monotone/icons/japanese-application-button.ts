import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneJapaneseApplicationButtonIcon],svg[emojione-monotone-japanese-application-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.425 24.492h8.065v3.462h-8.065zm0 7.199h8.065v3.635h-8.065zm12.712 0h8.254v3.635h-8.254zm0-7.199h8.254v3.462h-8.254z"></svg:path><svg:path fill="currentColor" d="M52 2H12C6.477 2 2 6.478 2 12v40c0 5.523 4.477 10 10 10h40c5.523 0 10-4.477 10-10V12c0-5.522-4.477-10-10-10m-5 38.879h-4.609v-1.645h-8.254v8.775h-4.646v-8.775h-8.065v1.816H17V20.584h12.49V15.99h4.646v4.594H47z"></svg:path>`,
})
export class EmojioneMonotoneJapaneseApplicationButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
