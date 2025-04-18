import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRegisteredIcon],svg[emojione-registered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#4d5357"><svg:path d="M32 2C18.2 2 7 13.2 7 27s11.2 25 25 25s25-11.2 25-25S45.8 2 32 2m0 45c-11 0-20-9-20-20S21 7 32 7s20 9 20 20s-9 20-20 20"></svg:path><svg:path d="M32.3 14H23v26h4.2v-7.7h7l4.4 7.7H43l-5-9c7.7-3.4 7.7-17-5.7-17m.5 15h-5.6V17.3h5.6c8.8 0 8.8 11.7 0 11.7"></svg:path></svg:g>`,
})
export class EmojioneRegisteredIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
