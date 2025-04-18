import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneStopSignIcon],svg[emojione-monotone-stop-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M44.426 2H19.574L2 19.574v24.852L19.574 62h24.852L62 44.426V19.574zM60 43.598L43.598 60H20.402L4 43.598V20.402L20.402 4h23.195L60 20.402z"></svg:path><svg:path fill="currentColor" d="M22.473 9L9 22.474v19.051L22.473 55h19.052L55 41.525V22.474L41.525 9z"></svg:path>`,
})
export class EmojioneMonotoneStopSignIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
