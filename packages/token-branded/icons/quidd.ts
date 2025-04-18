import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedQuiddIcon],svg[token-branded-quidd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#6B10D7" d="M17.294 19.279a9 9 0 1 0-2.647 1.323v-4.018a5.294 5.294 0 1 1 2.647-4.585zm-5.295-4.633a2.648 2.648 0 1 0 0-5.295a2.648 2.648 0 0 0 0 5.295"></svg:path>`,
})
export class TokenBrandedQuiddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
