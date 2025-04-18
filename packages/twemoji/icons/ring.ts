import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRingIcon],svg[twemoji-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9AAAB4" d="M18 12c-6.627 0-12 5.373-12 12s5.373 12 12 12s12-5.373 12-12s-5.373-12-12-12m0 20a8 8 0 1 1 0-16a8 8 0 0 1 0 16"></svg:path><svg:path fill="#5DADEC" d="m29 5l-4-5H11L7 5l11 9z"></svg:path><svg:path fill="#8CCAF7" d="m29 5l-4-5H11L7 5h11z"></svg:path><svg:path fill="#5DADEC" d="m29 5l-4-5h-7v5h1z"></svg:path><svg:path fill="#8CCAF7" d="M18 5h11l-11 9z"></svg:path><svg:path fill="#9AAAB4" d="M25 13a3 3 0 0 1-3 3h-8a3 3 0 1 1 0-6h8a3 3 0 0 1 3 3"></svg:path>`,
})
export class TwemojiRingIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
