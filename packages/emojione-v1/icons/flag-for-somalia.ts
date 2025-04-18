import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForSomaliaIcon],svg[emojione-v1-flag-for-somalia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4189dd" d="M64 43c0 6.075-3.373 11-10 11H10C3.373 54 0 49.075 0 43V21c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11z"></svg:path><svg:path fill="#e6e7e8" d="M44.939 27.04L35 27.06L31.916 17l-3.062 10.06l-9.946-.02l8.06 6.12l-3.122 9.99l8.09-6.204l8.09 6.204l-3.127-9.99z"></svg:path>`,
})
export class EmojioneV1FlagForSomaliaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
