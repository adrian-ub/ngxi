import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRightArrowCurvingLeftIcon],svg[emojione-right-arrow-curving-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="m17 46.3l9.1-9.7v6.1h7.3c5.3 0 9.7-5.1 9.7-11.2c0-6.2-4.8-11.3-10.8-11.3h-9.2V12h9.2C42.7 12 51 20.7 51 31.4c0 10.5-8 19.4-17.5 19.4h-7.3V56z"></svg:path>`,
})
export class EmojioneRightArrowCurvingLeftIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
