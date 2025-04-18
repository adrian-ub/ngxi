import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiCardIndexDividersIcon],svg[twemoji-card-index-dividers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FDCB58" d="M31 15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#FDD888" d="M33 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#FEE7B8" d="M35 33a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V15a2 2 0 0 1 2-2h30a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#78B159" d="M23 3h-5a2 2 0 0 0-2 2v1h2a2 2 0 0 1 2 2h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path><svg:path fill="#F18F26" d="M17 7h-5a2 2 0 0 0-2 2v1h2a2 2 0 0 1 2 2h3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"></svg:path><svg:path fill="#9268CA" d="M13 14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2z"></svg:path>`,
})
export class TwemojiCardIndexDividersIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
