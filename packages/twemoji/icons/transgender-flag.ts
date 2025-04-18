import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiTransgenderFlagIcon],svg[twemoji-transgender-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#5BCEFA" d="M0 27a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4v-1.3H0z"></svg:path><svg:path fill="#F5A9B8" d="M.026 20.5L0 25.8h36v-5.3z"></svg:path><svg:path fill="#EEE" d="M0 15.3h36v5.3H0z"></svg:path><svg:path fill="#F5A9B8" d="M0 9.902h36V15.4H0z"></svg:path><svg:path fill="#5BCEFA" d="M36 9a4 4 0 0 0-4-4H4a4 4 0 0 0-4 4v1.2h36z"></svg:path>`,
})
export class TwemojiTransgenderFlagIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
