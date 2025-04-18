import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneRegisteredIcon],svg[emojione-monotone-registered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C18.215 2 7 13.216 7 27s11.215 25 25 25s25-11.216 25-25S45.786 2 32 2m0 45.001c-11.028 0-20-8.972-20-20.001c0-11.027 8.972-19.999 20-19.999c11.027 0 20 8.972 20 19.999c0 11.029-8.973 20.001-20 20.001"></svg:path><svg:path fill="currentColor" d="M32.262 14H23v26h4.162v-7.676h7.043L38.602 40H43l-5.02-8.985C45.671 27.565 45.671 14 32.262 14m.504 14.999h-5.563V17.325h5.563c8.857 0 8.857 11.674 0 11.674"></svg:path>`,
})
export class EmojioneMonotoneRegisteredIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
