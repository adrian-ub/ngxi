import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1DownwardsButtonIcon],svg[emojione-v1-downwards-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1b75bb" d="M64 57.1a6.9 6.9 0 0 1-6.897 6.903H6.893A6.9 6.9 0 0 1-.003 57.1V6.9c0-3.81 3.088-6.9 6.896-6.9h50.21C60.913 0 64 3.09 64 6.9z"></svg:path><svg:path fill="#fff" d="M53.36 21.348c-.197-2.854-1.442-5.237-3.149-6.281h-34.07c-1.711 1.049-2.962 3.438-3.149 6.297l20.11 27.619l20.255-27.635"></svg:path>`,
})
export class EmojioneV1DownwardsButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
