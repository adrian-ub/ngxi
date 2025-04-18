import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFullMoonFaceIcon],svg[emojione-full-moon-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffe8a6"></svg:circle><svg:g fill="#f4dc9f"><svg:circle cx="50" cy="35.2" r="7"></svg:circle><svg:circle cx="18.1" cy="39" r="6"></svg:circle><svg:circle cx="24.2" cy="50" r="9"></svg:circle><svg:circle cx="24" cy="17.2" r="4"></svg:circle><svg:circle cx="37" cy="18.2" r="4"></svg:circle><svg:circle cx="12.1" cy="25.9" r="4"></svg:circle><svg:circle cx="39" cy="9.2" r="2"></svg:circle><svg:circle cx="8.1" cy="39" r="2"></svg:circle><svg:circle cx="52" cy="50" r="2"></svg:circle><svg:circle cx="25" cy="29.9" r="3"></svg:circle><svg:circle cx="15" cy="15.7" r="2"></svg:circle><svg:circle cx="46" cy="52.6" r="4"></svg:circle><svg:path d="M24.2 10.8c0 2.8 2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5c-2.8-.1-5 2.2-5 5"></svg:path></svg:g><svg:g fill="#827717"><svg:path d="M37 39c-3.5 4.9-11.3 4.8-9.8-3.7c.6-3.3 2.2-13 2.2-13v10.6c0 7.6 2.1 7.3 7.6 6.1"></svg:path><svg:path d="M42.8 43.9c-7 4.8-14.7 4.8-21.6 0c-.8-.6-1.6.4-1 1.4c2.1 3.5 6.4 6.6 11.8 6.6s9.7-3.1 11.8-6.6c.6-1-.2-2-1-1.4m-4.4-19.2c3.7 7 11.2 7 14.9 0c.2-.4-.3-.5-.9-.9c-3.7 2.9-9.8 2.7-13.1 0c-.6.4-1.1.6-.9.9m-27.7 0c3.7 7 11.2 7 14.9 0c.2-.4-.3-.5-.9-.9c-3.7 2.9-9.8 2.7-13.1 0c-.6.4-1.1.6-.9.9"></svg:path></svg:g>`,
})
export class EmojioneFullMoonFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
