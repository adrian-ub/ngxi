import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneJapaneseApplicationButtonIcon],svg[emojione-japanese-application-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#eda454" d="M62 52c0 5.5-4.5 10-10 10H12C6.5 62 2 57.5 2 52V12C2 6.5 6.5 2 12 2h40c5.5 0 10 4.5 10 10z"></svg:path><svg:path fill="#fff" d="M47 20.6v20.3h-4.6v-1.6h-8.3V48h-4.6v-8.8h-8.1V41H17V20.6h12.5V16h4.6v4.6zm-25.6 3.9V28h8.1v-3.5zm8.1 10.8v-3.6h-8.1v3.6zm4.6-10.8V28h8.3v-3.5zm8.3 10.8v-3.6h-8.3v3.6z"></svg:path>`,
})
export class EmojioneJapaneseApplicationButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
