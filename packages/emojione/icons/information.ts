import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneInformationIcon],svg[emojione-information-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:g fill="#fff"><svg:path d="M27 27.8h10v24H27z"></svg:path><svg:circle cx="32" cy="17.2" r="5"></svg:circle></svg:g>`,
})
export class EmojioneInformationIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
