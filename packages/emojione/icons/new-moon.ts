import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneNewMoonIcon],svg[emojione-new-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#3e4347"></svg:circle><svg:g fill="#464d51"><svg:circle cx="50" cy="35.2" r="7"></svg:circle><svg:circle cx="18.1" cy="39" r="6"></svg:circle><svg:circle cx="24.2" cy="50" r="9"></svg:circle><svg:circle cx="24" cy="17.2" r="4"></svg:circle><svg:circle cx="37" cy="18.2" r="4"></svg:circle><svg:circle cx="12.1" cy="25.9" r="4"></svg:circle><svg:circle cx="39" cy="9.2" r="2"></svg:circle><svg:circle cx="8.1" cy="39" r="2"></svg:circle><svg:circle cx="52" cy="50" r="2"></svg:circle><svg:circle cx="25" cy="29.9" r="3"></svg:circle><svg:circle cx="15" cy="15.7" r="2"></svg:circle><svg:circle cx="46" cy="52.6" r="4"></svg:circle><svg:path d="M24.2 10.8c0 2.8 2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5c-2.8-.1-5 2.2-5 5"></svg:path></svg:g>`,
})
export class EmojioneNewMoonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
