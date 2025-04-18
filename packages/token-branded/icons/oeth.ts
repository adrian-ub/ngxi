import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedOethIcon],svg[token-branded-oeth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0074F0" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path><svg:path fill="#3390F3" d="M17.611 17.611a7.94 7.94 0 0 0-5.689-13.527a7.94 7.94 0 0 0-5.603 2.357l11.297 11.17z"></svg:path><svg:path fill="#fff" d="M6.706 12a5.294 5.294 0 0 1 5.103-5.294l-1.127 1.832A3.71 3.71 0 0 0 8.294 12a3.653 3.653 0 0 0 4.114 3.674l-1.15 1.62A5.284 5.284 0 0 1 6.707 12"></svg:path><svg:path fill="#fff" d="M12.1 17.294A5.294 5.294 0 0 0 17.294 12a5.26 5.26 0 0 0-4.664-5.294l-.98 1.615c.138-.016.207-.027.35-.027a3.705 3.705 0 0 1 1.477 7.105z"></svg:path><svg:path fill="#CEE5FD" d="M12 13.589V10.94L9.354 12z"></svg:path><svg:path fill="#E5F1FE" d="M12.001 13.589V10.94L14.648 12zM12 10.941V7.765L9.355 12z"></svg:path><svg:path fill="#fff" d="M12.001 10.941V7.765L14.648 12z"></svg:path><svg:path fill="#E5F1FE" d="M12.001 16.235v-2.08l2.647-1.626z"></svg:path><svg:path fill="#fff" d="M12 16.235v-2.08l-2.646-1.626z"></svg:path></svg:g>`,
})
export class TokenBrandedOethIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
