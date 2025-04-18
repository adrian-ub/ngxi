import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRainbowFlagIcon],svg[twemoji-rainbow-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#880082" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-.5H0z"></svg:path><svg:path fill="#3558A0" d="M0 22.07h36v4.6H0z"></svg:path><svg:path fill="#138F3E" d="M0 17.83h36v4.5H0z"></svg:path><svg:path fill="#FAD220" d="M0 13.5h36V18H0z"></svg:path><svg:path fill="#FF7300" d="M0 9.17h36v4.5H0z"></svg:path><svg:path fill="#FF000E" d="M32 5H4a4 4 0 0 0-4 4v.33h36V9a4 4 0 0 0-4-4"></svg:path>`,
})
export class TwemojiRainbowFlagIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
